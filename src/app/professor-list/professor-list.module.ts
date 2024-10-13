import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProfessorListComponent } from './professor-list.component';



@NgModule({
  declarations: [ProfessorListComponent],
  imports: [
    IonicModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    CommonModule
  ]
})
export class ProfessorListModule { }
