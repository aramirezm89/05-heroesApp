import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';



const routes: Routes = [
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: 'heroe',
    loadChildren:() => import('./heroe/heroe.module').then((m) => m.HeroeModule),
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];

@NgModule({

  imports: [

    RouterModule.forRoot(routes)

  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
