import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('headingEle') headingRef!: ElementRef<HTMLHeadingElement>;

  @ViewChild('inputElementText')
  inputElementText!: ElementRef<HTMLInputElement>;

  @ViewChild('inputElementBox') inputElementBox!: ElementRef<HTMLInputElement>;

  @ViewChild('boxElement') boxElement!: ElementRef<HTMLDivElement>;

  onTextColorChange() {
    const colorValue = this.inputElementText.nativeElement.value;
    this.headingRef.nativeElement.style.color = colorValue;
  }
  onBoxColorChange() {
    const colorValue = this.inputElementBox.nativeElement.value;
    this.boxElement.nativeElement.style.backgroundColor = colorValue;
  }
}
