import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../services/professor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professor-detalhes',
  templateUrl: './professor-detalhes.component.html',
  styleUrls: ['./professor-detalhes.component.scss'],
})
export class ProfessorDetalhesComponent  implements OnInit {

  professor: any = {};
  
  constructor(
    private router: Router,
    private professorService: ProfessorService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.professorService.listarPorId(id).subscribe((data: any) =>{
      this.professor = data;
    })
  }

}
