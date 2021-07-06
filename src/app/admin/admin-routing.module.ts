import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgamesComponent } from './addgames/addgames.component';
import { AdminComponent } from './admin.component';
import { ViewgamedetailsComponent } from './viewgamedetails/viewgamedetails.component';
import { ViewgamesComponent } from './viewgames/viewgames.component';

const routes: Routes = [{ path: '', component: AdminComponent ,children:[
  {path:"addGames", component:AddgamesComponent},
  {path:"viewGames", component:ViewgamesComponent},
  {path:"viewGames/:gameName", component:ViewgamedetailsComponent},
  {path:"", redirectTo:"addGames", pathMatch:"full"}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
