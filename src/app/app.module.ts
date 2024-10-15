import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoListModule } from './aluno-list/aluno-list.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlunoDetalhesModule } from './aluno-detalhes/aluno-detalhes.module';
import { ProfessorListModule } from './professor-list/professor-list.module';
import { ProfessorDetalhesModule } from './professor-detalhes/professor-detalhes.module';
import { AlunoEditModule } from './aluno-edit/aluno-edit.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AlunoEditModule, AlunoDetalhesModule, AlunoListModule, ProfessorListModule, ProfessorDetalhesModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
