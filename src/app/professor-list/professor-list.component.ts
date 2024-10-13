import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss'],
})
export class ProfessorListComponent implements OnInit {
  professores: any[] = []; //Professor é um array sem formatação

  constructor(private professorService: ProfessorService) {}

  ngOnInit() {
    this.listarProfessor();
  }

  listarProfessor() {
    this.professorService.listar().subscribe((data) => {
      this.professores = data;
      console.log(this.professores);
    });
  }
}
