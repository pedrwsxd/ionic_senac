import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlunoDetalhesComponent } from './aluno-detalhes.component';



@NgModule({
  declarations: [AlunoDetalhesComponent],
  imports: [
    IonicModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    CommonModule
  ]
})
export class AlunoDetalhesModule { }
