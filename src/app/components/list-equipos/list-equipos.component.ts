import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-equipos',
  templateUrl: './list-equipos.component.html',
  styleUrls: ['./list-equipos.component.scss']
})
export class ListEquiposComponent implements OnInit {

  equipos: object[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
