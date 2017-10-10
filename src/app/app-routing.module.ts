import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './components/common/layouts/admin-layout/admin-layout.component';
import { AuthService } from './services/auth/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: 'sessions',
  //       loadChildren: './views/sessions/sessions.module#SessionsModule',
  //       data: { title: 'Session' }
  //     }
  //   ]
  // },
  {
    path: '',
    component: AdminLayoutComponent,
    // canActivate: [AuthService],
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/others/others.module#OthersModule',
        data: { title: 'Dashboard Blank', breadcrumb: 'DASHBOARD' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
