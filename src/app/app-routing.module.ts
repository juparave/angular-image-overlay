import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractjsComponent } from './pages/interactjs/interactjs.component';
import { FabricjsComponent } from './pages/fabricjs/fabricjs.component';
import { AppComponent } from './app.component';



const routes: Routes = [

  { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
  { path: 'interactjs', component: InteractjsComponent },
  { path: 'fabricjs', component: FabricjsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
