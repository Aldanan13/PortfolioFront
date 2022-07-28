import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ServEducacionService } from 'src/app/service/serv-educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  educa: Educacion = null;

  constructor(private servEducacion: ServEducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servEducacion.detail(id).subscribe(
      data =>{
        this.educa = data;
      }, err =>{
        alert("Error al modificar estudio");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.servEducacion.update(id, this.educa).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar educacion");
         this.router.navigate(['']);
      }
    )
  }

}

