import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipomedicoService } from 'src/app/services/equipomedico.service';
import { __values } from 'tslib';
import { formatDate } from '@angular/common';
import { Equipo } from '../list-equipos/list-equipos.component';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'add-equipo',
  templateUrl: './add-equipo.component.html',
  styleUrls: ['./add-equipo.component.scss'],
})
export class AddEquipoComponent implements OnInit {
  createEquipo: FormGroup;
  loading: boolean = false;
  submited: boolean = false;
  id: string | null;
  titulo: string = 'Agregar Nuevo Equipo';

  constructor(
    private form: FormBuilder,
    private _equipoService: EquipomedicoService,
    private router: Router,
    private toast: ToastrService,
    private aRoute: ActivatedRoute
  ) {
    this.createEquipo = this.form.group({
      nombre: ['', Validators.required],
      ubicacion: ['', Validators.required],
      marca: ['', Validators.required],
      serie: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaMantenimiento: [[], Validators.required],
      fechaAdquisicion: [[], Validators.required],
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editar();
  }

  agregaroEditarEquipo() {
    this.submited = true;

    if (this.createEquipo.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarEquipo();
    } else {
      this.editarEquipo(this.id);
    }
  }

  agregarEquipo() {
    const equipo: EquipoForm = {
      nombre: this.createEquipo.value.nombre,
      ubicacion: this.createEquipo.value.ubicacion,
      marca: this.createEquipo.value.marca,
      serie: this.createEquipo.value.serie,
      descripcion: this.createEquipo.value.descripcion,
      fechaMantenimiento: this.createEquipo.value.fechaMantenimiento,
      fechaAdquisicion: this.createEquipo.value.fechaAdquisicion,
    };

    this.loading = true;
    this._equipoService.create(equipo).subscribe(() => {
      this.loading = false;
      this.toast.success('Se creó un nuevo registro', '¡Equipo agregado!', {
        positionClass: 'toast-bottom-center',
        progressBar: true,
      });
      this.router.navigate(['/list-equipos']);
    });
  }

  editarEquipo(id: string) {
    const equipo: Equipo = {
      id: id,
      nombre: this.createEquipo.value.nombre,
      ubicacion: this.createEquipo.value.ubicacion,
      marca: this.createEquipo.value.marca,
      serie: this.createEquipo.value.serie,
      descripcion: this.createEquipo.value.descripcion,
      fechaMantenimiento: this.createEquipo.value.fechaMantenimiento,
      fechaAdquisicion: this.createEquipo.value.fechaAdquisicion,
    };
    this.loading = true;
    this._equipoService.update(id, equipo).subscribe(() => {
      this.loading = false;
      this.toast.warning('Se actualizó registro', '¡Información actualizada!', {
        positionClass: 'toast-bottom-center',
        progressBar: true,
      });
      this.router.navigate(['/list-equipos']);
    });
  }

  editar() {
    if (this.id !== null) {
      this.titulo = 'Editar Equipo';
      this.loading = true;
      this._equipoService.getId(this.id).subscribe((data) => {
        this.loading = false;
        let equipo = Object.values(data);
        console.log(equipo);
        this.createEquipo.setValue({
          nombre: equipo[1],
          ubicacion: equipo[2],
          marca: equipo[3],
          serie: equipo[4],
          descripcion: equipo[5],
          fechaMantenimiento: formatDate(equipo[6], 'yyyy-MM-dd', 'en'),
          fechaAdquisicion: formatDate(equipo[7], 'yyyy-MM-dd', 'en'),
        });
      });
    }
  }
}

export interface EquipoForm {
  nombre: string;
  ubicacion: string;
  marca: string;
  serie: string;
  descripcion: string;
  fechaMantenimiento: number;
  fechaAdquisicion: number;
}
