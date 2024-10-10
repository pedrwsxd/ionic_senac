import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoListComponent } from './aluno-list.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AlunoListComponent],
  imports: [
    IonicModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    CommonModule
  ]
})
export class AlunoListModule { }
