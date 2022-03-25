import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipomedicoService } from 'src/app/services/equipomedico.service';

@Component({
  selector: 'add-equipo',
  templateUrl: './add-equipo.component.html',
  styleUrls: ['./add-equipo.component.scss'],
})
export class AddEquipoComponent implements OnInit {
  createEquipo: FormGroup;
  loading: boolean = false;
  submited: boolean = false;

  constructor(
    private form: FormBuilder,
    private _equipoService: EquipomedicoService,
    private router: Router,
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
  }

  ngOnInit(): void {}

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
      this.router.navigate(['/list-equipos'])
    })
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
