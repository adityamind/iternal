import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from '../header/header.module';
import { SideNavModule } from '../side-nav/side-nav.module';
import { TopNavModule } from '../top-nav/top-nav.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CardDrawerComponent } from './components/card-drawer/card-drawer.component';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    HomeComponent,
    CardDrawerComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HeaderModule,
    SideNavModule,
    TopNavModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    DragDropModule,
    MatIconModule
  ],
  exports:[
    HomeComponent,
    CardDrawerComponent
  ]
})
export class MainModule { }
