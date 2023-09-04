import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'emergency-assist',
    loadChildren: () => import('./emergency-assist/emergency-assist.module').then( m => m.EmergencyAssistPageModule)
  },
  {
    path: 'car-services',
    loadChildren: () => import('./car-services/car-services.module').then( m => m.CarServicesPageModule)
  },
  {
    path: 'motorcycle-services',
    loadChildren: () => import('./motorcycle-services/motorcycle-services.module').then( m => m.MotorcycleServicesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
