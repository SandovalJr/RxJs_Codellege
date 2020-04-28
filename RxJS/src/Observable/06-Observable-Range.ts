import { Observer, of, range, interval } from "rxjs";
import { displayLog } from "../utils/utlis";
import { Empleado } from "../interfaces/interfaces";
/*****
OBSERVABLE USANDO RANGE 
******/

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]:  ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

const src$ = of(1, 2, 3, 4, 5);

// src$.subscribe(observer);

// UTILIZAMOS EL RANGE
const srcRange = interval(2000);
displayLog(`Inicio`);
srcRange.subscribe(observer);
displayLog(`Final`);
