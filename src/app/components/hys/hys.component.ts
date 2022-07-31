import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { ServSkillsService } from 'src/app/service/serv-skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  skill: Skills[] = [];

  constructor(private servSkills: ServSkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.servSkills.lista().subscribe(data => { this.skill = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.servSkills.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}

