import {Directive, ElementRef, Renderer, OnInit, AfterViewInit, AfterViewChecked} from "@angular/core";

@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective implements AfterViewChecked{
  ngAfterViewChecked(): void {
    console.log(this.el.nativeElement);
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }
    ngAfterViewInit(): void {

    }

    constructor(private el: ElementRef, private renderer: Renderer){

    }
}
