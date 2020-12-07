import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '', redirectTo: 'home',pathMatch: 'full'},
  { path: 'mesi',loadChildren: () => import('./mesi/mesi.module').then( m => m.MesiPageModule)},
  { path: 'moesi',loadChildren: () => import('./moesi/moesi.module').then( m => m.MoesiPageModule)},
  { path: 'mesif',loadChildren: () => import('./mesif/mesif.module').then( m => m.MesifPageModule)},
  { path: 'language-popover', loadChildren: () => import('./pages/language-popover/language-popover.module').then( m => m.LanguagePopoverPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),TranslateModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
