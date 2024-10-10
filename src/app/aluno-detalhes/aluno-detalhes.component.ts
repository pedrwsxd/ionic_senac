import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from './../services/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.scss'],
})
export class AlunoDetalhesComponent  implements OnInit {

  aluno: any = {};
  
  constructor(
    private router: Router,
    private alunoService: AlunoService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.alunoService.listarPorId(id).subscribe((data: any) =>{
      this.aluno = data;
    })
  }

}
