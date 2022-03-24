import { EquipomedicoService } from './../../services/equipomedico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-equipos',
  templateUrl: './list-equipos.component.html',
  styleUrls: ['./list-equipos.component.scss'],
})
export class ListEquiposComponent implements OnInit {
  equipos: Equipo[] = [];
  constructor(private _equiposService: EquipomedicoService) {}

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos() {
    this._equiposService.getAll().subscribe((data) => {
      console.log(data)
      this.equipos = [...data]
    });
  }

  deleteEquipo(id: string) {
    this._equiposService.delete(id).subscribe(() => {
      this.getEquipos()
    });
  }
}

export interface Equipo {
  id: string;
  nombre: string;
  ubicacion: string;
  marca: string;
  serie: string;
  descripcion: string;
  fechaMantenimiento: number;
  fechaAdquisicion: number;

}
