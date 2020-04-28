import { Observable, Subscriber, Observer } from "rxjs";
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

const obs$ = new Observable((subscriber) => {
  subscriber.next("Hola mundo");
  subscriber.next("Hola JC");
  subscriber.next("Hola sandoval");
  subscriber.next({ a: 2, b: 5 });

  //   causando un error
  // const a: any = undefined;
  // a.nombre = "sandovaljr";

  // const b: any = undefined;
  // b.apellid = "Escobedo";

  //   subscriber.next("paso error");

  // complete no se puede enviar ningun parametro por lo cual no recibe nada
  subscriber.complete();
  subscriber.next("xyz");
});

obs$.subscribe(observer);
