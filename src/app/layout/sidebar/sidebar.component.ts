import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navbarData } from './sidebar-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

  standalone: true,
  imports: [CommonModule],
})
export class SidebarComponent {
  navData = navbarData;

  @Input() isSidebarOpen: boolean = true;
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  onMouseOver() {
    this.isSidebarOpen = true;
  }

  onMouseLeave() {
    this.isSidebarOpen = false;
  }
}
