import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './child-detail.routes';
import { ChildDetailComponent } from './child-detail.component';
import {HighlightDirective} from "../../directives/highlight.directive";

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ChildDetailComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ChildDetailModule {
  public static routes = routes;
}
