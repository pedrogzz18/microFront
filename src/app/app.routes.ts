import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IngresosComponent } from './ingresos/ingresos.component';

export const routes: Routes = [
    { path: '', component: IngresosComponent } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
