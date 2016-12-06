import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() setTime: any;
  @Output() time = new EventEmitter();
  @ViewChild("slider") slider;any
  public width = 320
  public selectedTime = 0;
  public oldTime =100;
  public selecting= false;
  public message = ""
  constructor() { }
  onResize( event){
    this.width = event.target.innerWidth
  }
  getValue(){
    setInterval(()=>{
      console.log("interval")
      this.selectedTime=$(this.slider.nativeElement).roundSlider("getValue")
      if(this.selectedTime != this.oldTime){
        this.oldTime = this.selectedTime
        this.time.emit({value: this.selectedTime});
      }

    },50)

  }
  ngOnInit() {
    this.getValue()
  }
  ngAfterViewInit() {
    var slider = $(this.slider.nativeElement).roundSlider({
      radius: (this.width-60)/2,
      startAngle:90,
      showTooltip:false,
      handleSize:"+22",
      max:60,
      width:8,
      sliderType: "min-range",
    });
    this.setTime.subscribe((r)=>{
      console.log(r)
      console.log($(this.slider.nativeElement).roundSlider("setValue", r))
    })
  }
}
