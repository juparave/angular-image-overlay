import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DirectivesModule } from './directives/directives.module';
import { InteractjsComponent } from './pages/interactjs/interactjs.component';
import { FabricjsComponent } from './pages/fabricjs/fabricjs.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, DirectivesModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, InteractjsComponent, FabricjsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
