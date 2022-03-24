import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
