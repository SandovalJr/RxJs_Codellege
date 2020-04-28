import { Observable, Subscriber, Observer, interval } from "rxjs";
import { displayLog } from "../utils/utlis";

/*****
 * Crear un obserbal
1 y no se utliza
******/

// const obs$ = Observable.create();

/*****
2- Manera de crear un observable
******/

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]:  ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

const intervalo$ = new Observable((subscriber) => {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
    console.log(count);
    
  }, 1000);

  // setTimeout(()=>{

  //   subscriber.complete()
  // },2500)

  return () => {
    clearInterval(interval);
    console.log('intervalo eliminado');
    
  };
});

const sub1 = intervalo$.subscribe(observer);
// const sub2 = intervalo$.subscribe(observer);

setTimeout(() => {
  // unsubscribe
  sub1.unsubscribe();
  console.log('unsubscribe');
  
}, 3000);
