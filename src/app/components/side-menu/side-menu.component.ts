import { CommonModule } from '@angular/common';
import { SideMenuHeaderComponent } from './side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from './side-menu-options/side-menu-options.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent, CommonModule],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

  @Input() open = false;
  @Output() close = new EventEmitter<void>();

}
