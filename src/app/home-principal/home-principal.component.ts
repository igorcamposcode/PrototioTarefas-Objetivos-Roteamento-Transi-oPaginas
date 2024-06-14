import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-home-principal',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,FormsModule,ReactiveFormsModule],
  templateUrl: './home-principal.component.html',
  styleUrl: './home-principal.component.css'
})
export class HomePrincipalComponent {

  hide = true;

  //(Erros de E-mail e Senha)
  emailFormControl = new FormControl('',[Validators.required, Validators.email]);
  senhaFormControl = new FormControl('',[Validators.required]);

  //Roteamento para página menu!
  constructor(private router: Router){}

  CliqueMenu(pageName: string){
    this.router.navigate([`${pageName}`]);
  }

  Cadastro(pageName: string){
    this.router.navigate([`${pageName}`])
  }

  //Roteamento para página Esqueceu a senha!
  CliqueEsqueceu(pageName: string){
    this.router.navigate([`${pageName}`])
  }

  //Password (Senha)
  CliqueNoEvento(event: MouseEvent){
    this.hide = !this.hide;
    event.stopPropagation();
  }

}
