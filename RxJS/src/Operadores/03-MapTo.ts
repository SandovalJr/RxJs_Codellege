import { Observer, fromEvent } from "rxjs";
import { displayLog } from "../utils/utlis";
import { Empleado } from "../interfaces/interfaces";
import { map, pluck, mapTo } from "rxjs/operators";
/*****
OBSERVABLE USANDO Map To 
******/

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]: ${value}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyUpMapTo$ = keyup$.pipe(mapTo("tecla presionada"));

keyUpMapTo$.subscribe(observer);
