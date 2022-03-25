import { EquipomedicoService } from './../../services/equipomedico.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'list-equipos',
  templateUrl: './list-equipos.component.html',
  styleUrls: ['./list-equipos.component.scss'],
})
export class ListEquiposComponent implements OnInit {
  equipos: Equipo[] = [];
  constructor(private _equiposService: EquipomedicoService, private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos() {
    this._equiposService.getAll().subscribe((data) => {
      this.equipos = [...data]
    });
  }

  deleteEquipo(id: string) {
    this._equiposService.delete(id).subscribe(() => {
      this.getEquipos()
      this.toast.error('Se eliminó un registro', '¡Equipo eliminado!', {
        positionClass: 'toast-bottom-center',
        progressBar: true,
      });
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
