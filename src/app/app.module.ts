import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavigationComponent,
    RouterModule,
    CommonModule,
    BreadcrumbComponent,
    BreadcrumbItemDirective,
  ],
  providers: [],
})
export class AppModule {}
