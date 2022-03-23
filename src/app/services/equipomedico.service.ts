import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipomedicoService {
  stockURL: string = 'http://localhost:8080/stock/';

  constructor(private httpClient: HttpClient) {}


}
