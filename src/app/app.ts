import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Hero } from './main/hero/hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sree_J_builder_0.0.0');
}
