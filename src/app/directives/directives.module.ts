import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableDirective } from './draggable.directive';
import { DroppableDirective } from './droppable.directive';
import { ResizableDirective } from './resizable.directive';

@NgModule({
  declarations: [
    DraggableDirective,
    DroppableDirective,
    ResizableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DraggableDirective,
    DroppableDirective,
    ResizableDirective
  ]
})
export class DirectivesModule { }