import {
  Component,
  OnInit,
} from '@angular/core';
import {HighlightDirective} from "../../directives/highlight.directive";
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`ChildDetail` component loaded asynchronously');

@Component({
  selector: 'child-detail',
  template: `
    <h1 myHighlight>Hello from Child Detail</h1>    
  `,
  directives: [ HighlightDirective ]
})
export class ChildDetailComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `ChildDetail` component');
  }

}
