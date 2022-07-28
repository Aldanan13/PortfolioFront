import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ServEducacionService } from 'src/app/service/serv-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreEduc: string = '';
  descripcionEduc: string = '';

  constructor(private servEducacion: ServEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educa = new Educacion(this.nombreEduc, this.descripcionEduc);
    this.servEducacion.save(educa).subscribe(
      data => {
        alert("Estudio añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
