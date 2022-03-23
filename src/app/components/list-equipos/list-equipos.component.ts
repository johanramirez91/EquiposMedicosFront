import { EquipomedicoService } from './../../services/equipomedico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-equipos',
  templateUrl: './list-equipos.component.html',
  styleUrls: ['./list-equipos.component.scss']
})
export class ListEquiposComponent implements OnInit {

  equipos: any[] = []
  constructor(
    private _equiposService: EquipomedicoService
  ) { }

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos(){
    this._equiposService.getAll().subscribe((data) => {
      console.log(data)
      data.forEach((element:object) => {
        this.equipos.push({
          id: data.id,
          ...element
        })
      });
      console.log(this.equipos)
    })
  }

}
