import { Component } from '@angular/core';
import { IngresosService } from '../service/ingresos.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {
  ingresos: any;

  constructor(private ingresosService: IngresosService){}

  ngOnInit(): void {
    this.ingresos = this.ingresosService.getIngresos();
    this.ingresos.sort((a, b) => {
      return (- new Date(`${a.fecha}T${a.hora}`).getTime() + new Date(`${b.fecha}T${b.hora}`).getTime());
    });
  }
}
