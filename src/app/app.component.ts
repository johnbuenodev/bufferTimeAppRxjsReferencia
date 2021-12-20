import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bufferTimeAppRxjs';

  constructor() {}

  public ngOnInit(): void {
    const timerObj = interval(1000); //500 milisegundos - 1000 - 1 segundo

    //Se o timerObj Interval for 1000 = 1segundo  / e / o BufferTime aplicado 5000  = 5 segundos ele vai pegar 5 valores por interval
    const bufferObj = timerObj.pipe(bufferTime(2000)); // 2000 segundos - 500 no interval e 2 segundos vai ser 4 exec no pipe
    //Interval igual a 1segundo e bufferTime igual a 2segundos vai pegar 2 valores por segundo.

    //Consumindo o Observable
    const subsObj = bufferObj.subscribe( res => console.log("Buffer em : ", res));
    //subsObj.unsubscribe();

    // Criando buffer para trazer dados novos e dados já informados 
    //const timer = interval(500);
    //const buffer = timer.pipe(bufferTime(2000,100)); //vai trazer 4 valores por vez sendo 2 novos e 2 já informados
    //const subs = buffer.subscribe( res => console.log("Buffer: ", res));

  }


}
