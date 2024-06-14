import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,MatIconModule,MatButtonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  hide = true

  emailFormControl = new FormControl('',[Validators.required, Validators.email]);
  senhaFormControl = new FormControl('',[Validators.required]);

  constructor (private router: Router){}

  cliqueIrLogin(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  CliqueNoEvento(event: MouseEvent){
    this.hide = !this.hide;
    event.stopPropagation();
  }

}
