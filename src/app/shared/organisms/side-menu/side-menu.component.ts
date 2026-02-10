import { Component, OnInit, output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-side-menu',
  imports: [Menu, ButtonModule ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent implements OnInit {
  menuItems: MenuItem[] | undefined;
  isVisible = true;

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Reservations',
        items: [
          {
            label: 'New reservation',
            icon: 'pi pi-plus',
            routerLink: '/new-reservation',
          },
          {
            label: 'My reservations',
            icon: 'pi pi-list',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ];
    console.log(this.isVisible)
  }

  onClickShowButton(){
    console.log(this.isVisible)
    this.isVisible = !this.isVisible;
  }
}
