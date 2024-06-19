import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mes',
  standalone: true,
  imports: [MatFormFieldModule,MatSelectModule,MatInputModule,FormsModule,ReactiveFormsModule],
  templateUrl: './mes.component.html',
  styleUrl: './mes.component.css'
})
export class MesComponent {
[x: string]: any;

  tarefaFormControl = new FormControl('',[Validators.required]);

  constructor(private router: Router) {}

  // Retorna para a página Menu //

  VoltarMenu(pageName: string){
    this.router.navigate([`${pageName}`]);
  }

}
