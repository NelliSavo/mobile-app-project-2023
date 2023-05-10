import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotePage } from './note/note.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { path: 'note/:id', component: NotePage },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1Module)
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then( m => m.NoteModule)
  },
  {
    path: 'new_note',
    loadChildren: () => import('./new_note/new_note.module').then( m => m.NewNoteModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }