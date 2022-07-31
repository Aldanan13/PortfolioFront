import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { ServSkillsService } from 'src/app/service/serv-skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreS: string = '';
  descripcionS: number ;

  constructor(private servSkills: ServSkillsService, private router: Router) { }

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Skills(this.nombreS, this.descripcionS);
    this.servSkills.save(skill).subscribe(
      (data) => {
        alert('Skill añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }
}
