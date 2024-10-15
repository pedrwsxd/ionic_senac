import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrls: ['./aluno-edit.component.scss'],
})
export class AlunoEditComponent  implements OnInit {

  aluno = {
    nome: '',
    cpf: '',
    email: '',
    matricula: '',
    curso: '',
    endereco: {
    logradouro: '',
    bairro: '',
    cep: '',
    numero: '',
    complemento: '',
    cidade: '',
    uf: ''
  }
  };
  
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

  voltar(){
    this.router.navigate(['/alunos/listar']);
  }

  atualizarAluno(){
    this.alunoService.atualizar(this.aluno).subscribe(() => {
      alert("Aluno atualizado com sucesso");

      this.router.navigate(['/alunos/listar']);
    });
  }

}
