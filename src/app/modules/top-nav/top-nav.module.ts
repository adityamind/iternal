import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavRoutingModule } from './top-nav-routing.module';
import { TopNavComponent } from './top-nav.component';


@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    TopNavRoutingModule
  ],
  exports:[
    TopNavComponent
  ]
})
export class TopNavModule { }
