import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
//import { GifService } from 'src/app/gifs/services/gifs.service';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {
  //gifService = inject(GifService);

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Sobre mí',
      route: '/home/info',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Portfolio',
      route: '/home/projects',
    },
  ];
}
