import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { ServEducacionService } from 'src/app/service/serv-educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educa: Educacion[] = [];

  constructor(private servEducacion: ServEducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.servEducacion.lista().subscribe(data => { this.educa = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.servEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo borrar el estudio");
        }
      )
    }
  }
}
