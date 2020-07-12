import { Laptop } from './laptop';
import { Component } from '@angular/core';
import { Sticker } from './sticker.decorator';

@Sticker('Google')
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-decorators';
  constructor(){
    let laptop = new Laptop();
    console.log('Sticker:',laptop['sticker'])
  }
}
