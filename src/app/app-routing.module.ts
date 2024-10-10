import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'alunos/listar',
    component: AlunoListComponent
  },
  {
    path: 'alunos/ver/:id',
    component: AlunoDetalhesComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
