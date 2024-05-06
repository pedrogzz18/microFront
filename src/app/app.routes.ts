import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IngresosComponent } from './ingresos/ingresos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResidentesComponent } from './residentes/residentes.component';

export const routes: Routes = [
    { path: '', component: IngresosComponent },
    { path: 'ingresos', component: IngresosComponent },
    { path: 'residentes', component: ResidentesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NavbarComponent],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
