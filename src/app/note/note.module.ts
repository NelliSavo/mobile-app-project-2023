import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteRoutingModule } from './note-routing.module';

import { NotePage } from './note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteRoutingModule
  ],
  declarations: [NotePage],
  exports: [NotePage]
})
export class NoteModule { }
