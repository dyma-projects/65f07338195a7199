import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[appColor]'
})
export class ColorDirective {

    constructor (private elRef: ElementRef<any>) {
        console.log(elRef);
    }

    @HostListener('window:keydown', ['$event']) windowClick($event) {
        this.changeTextColor($event);
    }

    public changeTextColor(event: KeyboardEvent): void {
        switch (event.key) {
            case 'ArrowUp':
                this.elRef.nativeElement.style.color = 'red';
                break;
            case 'ArrowRight':
                this.elRef.nativeElement.style.color = 'blue';
                break;
            case 'ArrowDown':
                this.elRef.nativeElement.style.color = 'green';
                break;
            case 'ArrowLeft':
                this.elRef.nativeElement.style.color = 'orange';
                break;
            default:
                this.elRef.nativeElement.style.color = 'black';
                break;
        }
    }

}