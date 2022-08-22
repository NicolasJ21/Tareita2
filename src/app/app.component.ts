import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tarea2';

  public Bienvenido(): void{
    alert('Bienvenido a la pagina')
  }

  public Emoji(): void{
    alert('🥵')
  }

  public ImagenEpica(): void{
    alert('Hola profe, se como poner imagen epico uwu')
  }

  public multiplicar(n1:number, n2: number): number{
    return n1 * n2;
  }




}
