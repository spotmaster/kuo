import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { AppComponent } from './app.component';
import { DataService } from './core/services/data.service';
import { ApiService } from './core/services/api.service';
import { MockDataService } from './core/services/mock-data.service';
// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UygulamalarComponent } from './pages/uygulamalar/uygulamalar.component';
import { HttpClientModule } from '@angular/common/http';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnvanterComponent } from './pages/envanter/envanter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavigationComponent,
    UygulamalarComponent,
    EnvanterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    BreadcrumbComponent,
    BreadcrumbItemDirective,
    TableModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService, ApiService, MockDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
