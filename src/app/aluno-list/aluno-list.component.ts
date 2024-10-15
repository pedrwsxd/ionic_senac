import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss'],
})
export class AlunoListComponent  implements OnInit {

  alunos: any[] = []; //Aluno é um array sem formatação 
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.listarAluno();
  }
  
  listarAluno(){
    this.alunoService.listar().subscribe((data) =>{
      this.alunos = data;
      console.log(this.alunos);
    })
  }

  excluirAluno(id: number){
    this.alunoService.excluir(id).subscribe(() => {
      this.listarAluno();
    })
  }


}
