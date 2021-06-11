import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  @Input() appHighLight: string = '';
  constructor(private _el: ElementRef) {}

  ngOnInit(): void {
    this._el.nativeElement.style.color = this.appHighLight;
  }
}
