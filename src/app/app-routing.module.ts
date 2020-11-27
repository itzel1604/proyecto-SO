import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PeliDetailComponent } from './peli-detail/peli-detail.component';
import { AddPeliComponent } from './add-peli/add-peli.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'inicio', 
    pathMatch: 'full' 
  },
  { 
    path: 'inicio', 
    component: InicioComponent 
  },
  { 
    path: 'peli-detail/:id', 
    component: PeliDetailComponent 
  },
  { 
    path: 'add-peli', 
    component: AddPeliComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
