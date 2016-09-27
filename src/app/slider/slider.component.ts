import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @ViewChild('slider') public slider:ElementRef;
  public width = 320
  constructor() { }
  onResize( event){
    console.log(event.target.innerWidth)
  }
  getTheValue() {
    console.log($(this.slider.nativeElement).roundSlider('getValue'))
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    var slider = $(this.slider.nativeElement).roundSlider({
        startAngle:90,
        radius: (this.width-60)/2,
        width: 8,
        handleSize: "+16",
        handleShape: "dot",
        sliderType: "min-range",
        value: 5,
        max:20,
        editableTooltip: false,
    });
  }
}
