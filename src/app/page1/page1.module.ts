import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page1RoutingModule } from './page1-routing.module';

import { Page1Component } from './page1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page1RoutingModule
  ],
  declarations: [Page1Component]
})
export class Page1Module { }
