// import {
//     Directive,
//     ElementRef,
//     OnDestroy,
//     OnInit,
//     Renderer2,
// } from "@angular/core";

// type MyVoid = () => void;

// @Directive({
//     selector: "[appHighlight]",
// })
// export class HighlightDirective implements OnInit, OnDestroy {
//     unsubscribeFromEvents: MyVoid[] = [];

//     constructor(private elRef: ElementRef, private render: Renderer2) {}

//     ngOnInit(): void {
//         //  console.log(this.elRef.nativeElement);

//         const mouseEnter = this.render.listen(
//             this.elRef.nativeElement,
//             "click",
//             this.mouseEnterHandler.bind(this),
//         );
//         // const mouseLeave = this.render.listen(
//         //     this.elRef.nativeElement,
//         //     "clickfalse",
//         //     this.mouseLeaveHandler.bind(this),
//         // );
//         this.unsubscribeFromEvents.push(mouseEnter);
//         // this.unsubscribeFromEvents.push(mouseLeave);
//     }

//     mouseEnterHandler(e: MouseEvent): void {
//         this.render.addClass(this.elRef.nativeElement, "active");
//     }

//     toggle(e: MouseEvent) {
//         this.render.addClass(this.elRef.nativeElement, "active");
//     }
//     ngOnDestroy(): void {}
// }
