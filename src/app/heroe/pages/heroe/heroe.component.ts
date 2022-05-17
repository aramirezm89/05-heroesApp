import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.params.subscribe({
        next: ({id}) => console.log(id)
      })
  }
}
