import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipomedicoService {
  stockURL: string = 'http://localhost:8080/stock/';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(`${this.stockURL}` + 'listaEM');
  }
}
