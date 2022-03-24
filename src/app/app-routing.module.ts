import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipoComponent } from './components/add-equipo/add-equipo.component';
import { ListEquiposComponent } from './components/list-equipos/list-equipos.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-equipos',
    pathMatch: 'full'
  },
  {
    path: 'list-equipos',
    component: ListEquiposComponent
  },
  {
    path: 'add-equipo',
    component: AddEquipoComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
