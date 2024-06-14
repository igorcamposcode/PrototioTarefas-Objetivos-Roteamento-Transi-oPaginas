
import { NgModule } from "@angular/core";
import { HomePrincipalComponent } from "./home-principal/home-principal.component";
import { MenuComponent } from "./menu/menu.component";
import { Routes, RouterModule } from "@angular/router";
import { EsqueceuSenhaComponent } from "./esqueceu-senha/esqueceu-senha.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { AnoComponent } from "./ano/ano.component";
import { MesComponent } from "./mes/mes.component";

export const appRoutes: Routes = [

  {path: 'login', component: HomePrincipalComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'Esqueceu_Senha', component: EsqueceuSenhaComponent},
  {path: 'menu', component: MenuComponent},

  // ( Está parte obteve mudanças ao inves de fazer uma inclusão em mes e ano, iremos fazer da seguinte forma
  // iremos incluir uma tabela pelo id e iremos declarar os objetivos e Tarefas a serem feitos por uma cor e o que for sendo concluido teremos uma caixinha de check
  // e ao clicar em check seu objetivo estara finalizado e sera guardado como consulta do objetivo que você incluiu.)

  {path: 'consultar', component: AnoComponent},
  {path: 'incluir', component: MesComponent},

  //Login Redirecionamento direto
  {path: '', redirectTo: 'login', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}





