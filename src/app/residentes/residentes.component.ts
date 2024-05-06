import { Component , OnInit } from '@angular/core';
import { ResidentesService } from '../service/residentes.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-residentes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './residentes.component.html',
  styleUrl: './residentes.component.css'
})
export class ResidentesComponent implements OnInit {
  residentes : any;

  constructor(private residenteService : ResidentesService){}

  
  ngOnInit(): void {
    this.residenteService.getResidentes().subscribe(
      data => {
        this.residentes = data;
      },
      error => {
        console.error('Error al obtener los registros:', error);
      }
    );
  }
}
