import {Component, View, bootstrap, EventEmitter} from 'angular2/angular2';

// mockup component
@Component({
  events : ['buzz'],
  properties: ['colorOfFlower'],
  selector: 'bees'
})
@View({
  template: '<h2>Bees here</h2>\
  <input #input1 (keyup)="onChange($event, input1.value)" [value]="colorOfFlower" />\
  <button (click)="buzzReady()">send colorOfFlower to be visited</button>\
  '
})
class Bees {
  buzz: EventEmitter;
  colorOfFlower:string = 'prefered color of flower';
  constructor () {
    //>>this.graph = gs.graphel;
    this.buzz = new EventEmitter();
  }
  buzzReady() {
    console.log("from the bottom");
    this.buzz.next({colorOfFlower: this.colorOfFlower});
  }
  onChange(e, new_value) {
    this.colorOfFlower = new_value;
  }
}

// flowerfield
@Component({
  properties: ['work'],
  selector: 'flower-field'
})
@View({
  template: '\
    <h2>flower field</h2>\
    <div>{{work}}</div>\
  '
})
class FlowerField {
  work:string = 'many colored flowers';
}

@Component({
  selector: 'app'
})
@View({
  directives: [Bees, FlowerField],
  templateUrl: 'templates/app.html'
})
class App {
  theWork: string = 'an App level string';
  respondTobuzz(work) {
    console.log("to the top");
    console.log(work.colorOfFlower);
    this.theWork = work.colorOfFlower;
  }
}


bootstrap(App);
