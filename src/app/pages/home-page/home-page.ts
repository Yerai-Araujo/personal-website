import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationStart } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [RouterOutlet, SideMenuComponent, CommonModule],
  templateUrl: './home-page.html',
})
export class HomePage {

  isMenuOpen = false;
  private routerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSub = this.router.events.subscribe(evt => {
      if (evt instanceof NavigationStart && this.isMenuOpen) {
        this.setMenu(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  setMenu(open: boolean) {
    this.isMenuOpen = open;
    document.body.style.overflow = open ? 'hidden' : '';
  }

}
