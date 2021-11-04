import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackButtonDirective } from 'src/app/directives/back-button.directive';
import { AutoFocus } from 'src/app/directives/autofocus.directive';

@NgModule({
  declarations: [
    BackButtonDirective,
    AutoFocus
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackButtonDirective,
    AutoFocus
  ]
})
export class DirectivesModule { }