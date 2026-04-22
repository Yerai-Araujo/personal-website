import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project2',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './project2.component.html',
  standalone: true,
})
export class Project2Component {
  headline = 'Asset tracker Microservicios';

  constructor(public router: Router) {}}
