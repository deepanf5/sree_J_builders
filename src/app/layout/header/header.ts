import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [
    ButtonModule,
    MenubarModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  providers: []
})
export class Header implements OnInit {

  items: MenuItem[] | undefined;
  private route = inject(Router);

  ngOnInit(): void {
    this.headerConfig()
  }



  headerConfig() {
    this.items = [
      {
        label: 'Home',
        command: () => {
          this.route.navigate(['/home']);

        },
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Projects',
       command: () => {
              this.route.navigate(['/projects']);
            }
      },
      {
        label: 'Our Team',

        command: () => {
          this.route.navigate(['/team']);
        }
      },
    ]
  }

}
