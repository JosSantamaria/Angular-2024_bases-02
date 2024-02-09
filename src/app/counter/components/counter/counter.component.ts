import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  // public title: string = '02-bases : Mi primer app de Angular';
  public counter: number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  decreaseBy(value:number):void{
    this.counter-= value;
  }

  resetCounter(value:number){
    this.counter = value;
  }
}
