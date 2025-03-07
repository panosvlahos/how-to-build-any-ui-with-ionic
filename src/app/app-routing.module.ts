import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  // },
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirect to login by default
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'create-user', loadChildren: () => import('./pages/create-user/create-user.module').then(m => m.CreateUserPageModule) },
  { path: 'tab1', loadChildren: () => import('./pages/tab1/tab1.module').then(m => m.Tab1PageModule) },
  { path: 'tab2', loadChildren: () => import('./pages/tab2/tab2.module').then(m => m.Tab2PageModule) },
  { path: 'tab3', loadChildren: () => import('./pages/tab3/tab3.module').then(m => m.Tab3PageModule) },
  { path: 'tab4', loadChildren: () => import('./pages/tab4/tab4.module').then(m => m.Tab4PageModule) },
  {
    path: 'create-user',
    loadChildren: () => import('./pages/create-user/create-user.module').then( m => m.CreateUserPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
