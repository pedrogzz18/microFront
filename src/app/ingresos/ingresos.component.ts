import { Component } from '@angular/core';
import { IngresosService } from './ingresos.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {
  ingresos: any[] = [];

  constructor(private ingresosService: IngresosService){}

  ngOnInit(): void {
    this.ingresosService.getIngresos().subscribe(
      data => {
        this.ingresos = data;
      },
      error => {
        console.error('Error al obtener los registros:', error);
      }
    );
  }
}
