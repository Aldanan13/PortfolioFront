import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ServProyectosService } from 'src/app/service/serv-proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {

  proy : Proyectos = null;

  constructor(private servProyectos: ServProyectosService, private activatedRouter: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.servProyectos.detail(id).subscribe(
        data => {
          this.proy = data;
        }, err =>{
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.servProyectos.update(id, this.proy).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
        }
      )
    }

}

