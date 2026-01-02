import { Component } from '@angular/core';
import { HeaderComponent } from "../../organisms/header/header.component";
import { SideMenuComponent } from "../../organisms/side-menu/side-menu.component";
import { FooterComponent } from "../../organisms/footer/footer.component";

@Component({
  selector: 'app-main-template',
  imports: [HeaderComponent, SideMenuComponent, FooterComponent],
  templateUrl: './main-template.component.html',
  styleUrl: './main-template.component.css'
})
export class MainTemplateComponent {

}
