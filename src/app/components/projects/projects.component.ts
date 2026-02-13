import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


export interface ProjectCard {
  id: string;          // para trackBy y rutas
  title: string;
  description: string;
  route: any[];        // routerLink en formato array
}


@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  projects: ProjectCard[] = [
    {
      id: 'project1',
      title: 'Asset tracker',
      description: 'API de backend para rastrear y valorar activos digitales y físicos (criptomonedas y metales preciosos), y gestionar tu portfolio utilizando Spring Boot.',
      route: ['/home/projects', 'project1'],
    },
  ];

  trackById(_index: number, item: ProjectCard) {
    return item.id;
  }

}
