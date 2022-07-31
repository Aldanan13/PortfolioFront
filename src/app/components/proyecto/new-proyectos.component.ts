import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ServProyectosService } from 'src/app/service/serv-proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {

  nombreP: string = '';
  descripcionP: string = '';

  constructor(private servProyectos: ServProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyectos(this.nombreP, this.descripcionP);
    this.servProyectos.save(proy).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
