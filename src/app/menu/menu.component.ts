import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router) {}

  // Redireciona para página incluir
  CliqueIncluir(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
  
  // Redireciona para página consulta
  CliqueConsulta(pageName: string){
    this.router.navigate([`${pageName}`]);
  }

  // Retorna ao login/Finaliza a sessão
  CliqueHome(pageName: string){
    this.router.navigate([`${pageName}`]);
  }

}
