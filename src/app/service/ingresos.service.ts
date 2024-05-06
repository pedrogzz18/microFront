import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  private apiUrl = 'http://ec2-18-116-81-192.us-east-2.compute.amazonaws.com:8080'; // Reemplaza con la URL de tu API
  private ingresos : any;

  constructor(private http: HttpClient) { 
    this.http.get<any[]>(this.apiUrl + '/dashboardIngresos').subscribe(
      data => {
        this.ingresos = data;
      },
      error => {
        console.error('Error al obtener los ingresos:', error);
      }
    );
  }

  getIngresos(): any {
    return this.ingresos
  }
}
