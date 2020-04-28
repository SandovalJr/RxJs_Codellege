import { Observer, fromEvent, of, interval, pipe, from } from "rxjs";
import { displayLog } from "../utils/utlis";
import {
  takeUntil,
  tap,
  skip,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
} from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) =>  displayLog(`[Next], ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

// const n$ = of(1, 2, 5, 4, 5, 6, 1, 3, 1, 2, 4, 2, 3, 4, 5, 6, 4, 5);
const num$ = of(1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 2);
// si hay varios valores iguales unicamente imite 1 = no los repite
num$.pipe(distinctUntilChanged()).subscribe(observer);

interface personaje {
  nombre: string;
}

const personajes: Array<personaje> = [
  {
    nombre: "Mario",
  },
  {
    nombre: "Luigi",
  },
  {
    nombre: "Mario",
  },
  {
    nombre: "Bowser",
  },
  {
    nombre: "Hoopa",
  },
  {
    nombre: "Hoopa",
  },
  {
    nombre: "Super Boo",
  },
];

// from(personajes)
//   .pipe(distinctUntilChanged((anterior, actual) => anterior.nombre == actual.nombre))
//   .subscribe(observer);

from(personajes)
  .pipe(distinctUntilKeyChanged('nombre'))
  .subscribe(observer);
