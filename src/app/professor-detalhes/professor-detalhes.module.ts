import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProfessorDetalhesComponent } from './professor-detalhes.component';



@NgModule({
  declarations: [ProfessorDetalhesComponent],
  imports: [
    IonicModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    CommonModule
  ]
})
export class ProfessorDetalhesModule { }
