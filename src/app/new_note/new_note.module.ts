import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewNoteRoutingModule } from './new_note-routing.module';

import { NewNotePage } from './new_note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewNoteRoutingModule,
    
  ],
  declarations: [NewNotePage],
  exports: [NewNotePage]
})
export class NewNoteModule { }