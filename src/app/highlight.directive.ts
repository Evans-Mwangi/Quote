import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'green'

  }
  

}
