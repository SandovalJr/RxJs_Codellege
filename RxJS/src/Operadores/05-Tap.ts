import { Observer, range, from, fromEvent } from "rxjs";
import { displayLog } from "../utils/utlis";
import { filter, pluck, map, tap } from "rxjs/operators";
import { Empleado2 } from "../interfaces/interfaces";
/*****
OBSERVABLE USANDO Tap
******/

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]: ${value}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

const numero$ = range(1, 7);

numero$
  .pipe(
    tap((x) => console.log("antes", x)),
    map((val) => val * 10),
    tap({
      next: (valor) => console.log("despues", valor),
      complete: () => console.log("se termino todo"),
    })
  )
  .subscribe(observer);
