import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewgamesComponent } from './viewgames/viewgames.component';
import { AddgamesComponent } from './addgames/addgames.component';
import {FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ViewgamedetailsComponent } from './viewgamedetails/viewgamedetails.component';


@NgModule({
  declarations: [
    AdminComponent,
    ViewgamesComponent,
    AddgamesComponent,
    ViewgamedetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class AdminModule { }
