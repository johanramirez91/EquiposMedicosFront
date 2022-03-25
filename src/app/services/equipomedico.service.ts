import { Equipo } from './../components/list-equipos/list-equipos.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipoForm } from '../components/add-equipo/add-equipo.component';

@Injectable({
  providedIn: 'root',
})
export class EquipomedicoService {
  stockURL: string = 'http://localhost:8080/stock/';

  constructor(private http: HttpClient) {}

  public getId(id: string){
    return this.http.get(`${this.stockURL}` + 'getById/' + id)

  }

  public getAll(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(`${this.stockURL}` + 'listaEM');
  }

  public delete(id: string){
    return this.http.delete(`${this.stockURL}` + 'eliminar/' + id)
  }

  public create(equipo: EquipoForm) {
    return this.http.post(`${this.stockURL}` + 'addEM/', equipo);
  }

  public update(id: string, equipo: Equipo){
    console.log(equipo)
    return this.http.put(`${this.stockURL}` + 'updateEM/' + id, equipo);
  }
}
