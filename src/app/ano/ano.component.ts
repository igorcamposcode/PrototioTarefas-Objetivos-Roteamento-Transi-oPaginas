import { Component } from '@angular/core';
import {MatRow, MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';

export interface  PeriodicElement {
  name: string;
  position: number;
  color: string;
}

const ELEMENT_DATA:  PeriodicElement[] = [
  {position: 1, name: 'Comprar Coca-cola' , color: 'Red'},
  {position: 2, name: 'fazer Exercicio de programção linguagem (JAVA)', color: 'Blue'},
  {position: 3, name: 'Limpar Quarto e Banheiro', color: 'Red'},
  {position: 4, name: 'Estudar lógica de programação', color: 'Blue'},
  {position: 5, name: 'Assistir seu filme Favorito', color: 'Red'},
];

@Component({
  selector: 'app-ano',
  standalone: true,
  imports: [
   MatTableModule,
   MatFormFieldModule,
   MatInputModule,
   MatRow,
   ],
  templateUrl: './ano.component.html',
  styleUrl: './ano.component.css'
})
export class AnoComponent {

  displayedColumns: string[] = ['position', 'NomeTarefa', 'SelectColor'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private router: Router){}

  RetornarMenu(pageName: string){
    this.router.navigate([`${pageName}`]);
  }

}
