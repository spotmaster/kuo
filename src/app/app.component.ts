import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavigationComponent,
  ],
})
export class AppComponent implements OnInit {
  isSidebarOpen: boolean = true;

  ngOnInit() {
    // Uygulama başladığında sidebar durumunu local storage'dan yükle
    const storedSidebarState = localStorage.getItem('isSidebarOpen');
    if (storedSidebarState !== null) {
      this.isSidebarOpen = JSON.parse(storedSidebarState);
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    // Sidebar durumunu local storage'a kaydet
    localStorage.setItem('isSidebarOpen', JSON.stringify(this.isSidebarOpen));
  }
}
