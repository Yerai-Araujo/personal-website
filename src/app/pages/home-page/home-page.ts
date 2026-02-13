import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [RouterOutlet, SideMenuComponent, CommonModule],
  templateUrl: './home-page.html',
})
export class HomePage {

  isMenuOpen = false;

  setMenu(open: boolean) {
    this.isMenuOpen = open;
    document.body.style.overflow = open ? 'hidden' : '';
  }

}
