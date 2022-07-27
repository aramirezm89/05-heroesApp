import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Heroe, Publisher } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel Comics',
    },
  ];

  idHeroe: string = '';
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.default,
    imageId: '',
  };

  miFormulario: FormGroup = this.fb.group({
    id: [''],
    superhero: ['', [Validators.required]],
    alter_ego: ['', [Validators.required]],
    characters: ['', [Validators.required]],
    first_appearance: ['', [Validators.required]],
    publisher: ['', [Validators.required]],
    imageId: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private heroeSerive: HeroesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: ({ id }) => {
        if (id) {
          this.heroeSerive.getHeroePorId(id).subscribe({
            next: (response) => {
              this.idHeroe = response.id!;
              this.heroe = response;
              this.miFormulario.setValue({
                id: this.heroe.id,
                superhero: this.heroe.superhero,
                alter_ego: this.heroe.alter_ego,
                characters: this.heroe.characters,
                first_appearance: this.heroe.first_appearance,
                publisher: this.heroe.publisher,
                imageId: this.heroe.imageId,
              })
              console.log(this.miFormulario);
            },
          });
        }
      },
    });
  }

  guardar() {
    if (this.miFormulario.valid) {
      if (!this.heroe.id) {
        this.heroeSerive.insertHeroe(this.miFormulario.value).subscribe({
          next: ({ id }) => {
            if (id) {
              this.mostrarSnackBar('Heroe Guardado', 'mat-primary');
              this.router.navigate([`/heroe/ver-heroe/${id}`]);
            } else {
              console.log(
                'error de servidor, o el heroe ya se encuentra en la BD'
              );
            }
          },
          error: (err) => console.log(err),
        });

        this.heroe = {
          superhero: '',
          alter_ego: '',
          characters: '',
          first_appearance: '',
          publisher: Publisher.DCComics,
          imageId: '',
        };
      } else {



        this.heroeSerive
          .updateHeroe(this.miFormulario.value, this.idHeroe)
          .subscribe({
            next: () => {
              this.router.navigate([`/heroe/ver-heroe/${this.heroe.id}`]);
              this.mostrarSnackBar('Heroe actualizado', 'mat-accent');
            },
            error: (err) => console.log(err),
          });
      }
    }
  }

  eliminar() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '450px',
      data: { ...this.heroe },
    });

    //este codigo evalua el booleano enviado al cerrar el dialogo si el valor es true borra el registro.
    dialog.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.heroeSerive.deleteHeroe(this.heroe.id!).subscribe({
            next: () => {
              this.router.navigate(['/heroe']);
              this.mostrarSnackBar('Heroe Eliminado', 'mat-warn');
            },
            error: (err) => console.log(err),
          });
        }
      },
    });
  }

  mostrarSnackBar(message: string, clase: string) {
    this.snackBar.open(message, '', {
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['mat-toolbar', clase],
    });
  }
}
