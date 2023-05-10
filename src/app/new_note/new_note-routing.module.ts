import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewNotePage } from './new_note.page';

const routes: Routes = [
  {
    path: '',
    component: NewNotePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewNoteRoutingModule {}