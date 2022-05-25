import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';



const routes: Routes = [

  {
    path: 'heroe',
    loadChildren: () =>
      import('./heroe/heroe.module').then((m) => m.HeroeModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },

  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: ErrorPageComponent,
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
