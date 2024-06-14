import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { HomePrincipalComponent } from "./home-principal/home-principal.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuComponent, HomePrincipalComponent]
})
export class AppComponent {
  title = 'Projeto-Transicao-paginas';
}
