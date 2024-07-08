import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UygulamalarComponent } from './pages/uygulamalar/uygulamalar.component';
import { UygulamadetayComponent } from './pages/uygulamadetay/uygulamadetay.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';
import { YardimComponent } from './pages/yardim/yardim.component';
import { EnvanterComponent } from './pages/envanter/envanter.component';
import { EkipComponent } from './pages/ekip/ekip.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { breadcrumb: 'Dashboard' },
  },
  {
    path: 'uygulamalar',
    component: UygulamalarComponent,
    data: { breadcrumb: 'Uygulama Listesi' },
  },
  {
    path: 'uygulama-detay/:id',
    component: UygulamadetayComponent,
    data: { breadcrumb: 'Uygulama Detay' },
  },
  {
    path: 'kanban',
    component: KanbanComponent,
    data: { breadcrumb: 'Kanban Board' },
  },
  {
    path: 'monitoring',
    component: MonitoringComponent,
    data: { breadcrumb: 'Monitoring' },
  },
  {
    path: 'ekipler',
    component: EkipComponent,
    data: { breadcrumb: 'Ekipler' },
  },
  {
    path: 'yardim',
    component: YardimComponent,
    data: { breadcrumb: (resolvedId: string) => `Viewing ${resolvedId} now` },
  },
  {
    path: 'envanter',
    component: EnvanterComponent,
    data: { breadcrumb: 'Envanter' },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
