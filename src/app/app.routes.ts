import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [

  { path: 'menu', component: AppComponent }, // Ruta para el componente Home
  { path: 'tarjetas', component: CardComponent }, // Ruta para el componente About
  { path: 'tablas', component: TableComponent }, // Ruta para el componente tablas

];
