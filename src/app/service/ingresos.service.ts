import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  private apiUrl = 'http://ec2-18-116-81-192.us-east-2.compute.amazonaws.com:8080'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getIngresos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/dashboardIngresos');
  }
}
