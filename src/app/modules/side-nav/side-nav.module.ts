import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideNavRoutingModule } from './side-nav-routing.module';
import { SideNavComponent } from './side-nav.component';


@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    SideNavRoutingModule
  ],
  exports:[
    SideNavComponent
  ]
})
export class SideNavModule { }
