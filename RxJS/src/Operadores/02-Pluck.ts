import { Observer, fromEvent } from "rxjs";
import { displayLog } from "../utils/utlis";
import { Empleado } from "../interfaces/interfaces";
import { map, pluck } from "rxjs/operators";
/*****
OBSERVABLE USANDO PLUCK 
******/

const observer: Observer<any> = {
  next: (value) => console.log(`[Next]: `, value),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

/*****
CON EL MAP
******/
// keyup$.pipe(map(({ keyCode }) => ({ keyCode }))).subscribe(observer);

/*****
UTILIZANDO PLUCK
******/

keyup$.pipe(pluck("target", "baseURI")).subscribe(observer);
