import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillsComponent } from './components/hys/edit-skills.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectosComponent } from './components/proyecto/edit-proyectos.component';
import {NewProyectosComponent}from './components/proyecto/new-proyectos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaeduc', component: NewEducacionComponent},
  {path: 'editeduc/:id', component: EditEducacionComponent},
  { path:'nuevoproy', component: NewProyectosComponent},
  { path:'editproy/:id', component: EditProyectosComponent},
  { path:'nuevaskill', component: NewSkillComponent},
  { path:'editskill/:id', component: EditSkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
