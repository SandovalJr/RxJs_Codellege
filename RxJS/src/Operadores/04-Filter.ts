import { Observer, range, from, fromEvent } from "rxjs";
import { displayLog } from "../utils/utlis";
import { filter, pluck, map } from "rxjs/operators";
import { Empleado2 } from "../interfaces/interfaces";
/*****
OBSERVABLE USANDO Filter
******/

// const observer: Observer<any> = {
//   next: (value) => displayLog(`[Next]: ${value}`),
//   error: (err) => console.error("[Error Observable] ", err.name),
//   complete: () => console.warn("[Complete]"),
// };

// const src$ = range(1, 10);

// src$.pipe(filter((v) => v % 2 == 1)).subscribe(observer);

const empleados: Array<Empleado2> = [
  {
    id: 1,
    nombre: "Raul",
    puesto: "Leader Manager",
    edad: 23,
  },
  {
    id: 2,
    nombre: "Ray",
    puesto: "Developer Sr",
    edad: 26,
  },
  {
    id: 3,
    nombre: "Eduardo",
    puesto: "El intendente",
    edad: 21,
  },
  {
    id: 4,
    nombre: "Manu",
    puesto: "Developer Sr",
    edad: 21,
  },
  {
    id: 5,
    nombre: "Paco",
    puesto: "Developer Sr",
    edad: 27,
  },
];

/**************PRACTICA*******************
1-Convertir el array a un observable 
2- Filtrar a los empleados que son developers Sr y posteriormente a los que no lo son 
3- filtrar a los empleados que osn mayores a 21 años
*******************************************/

// 1-Convertir el array a un observable

const observerEmpleados: Observer<any> = {
  next: (value) => displayLog(`${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

const obs$ = from(empleados);

// obs$
//   .pipe(filter((v) => v.puesto == "Developer Sr"))
//   .subscribe(observerEmpleados);

// obs$
//   .pipe(filter((v) => v.puesto != "Developer Sr"))
//   .subscribe(observerEmpleados);

// obs$.pipe(filter((v) => v.edad > 21)).subscribe(observerEmpleados);
// obs$.pipe(pluck(('puesto'))).subscribe(observerEmpleados);

/*****
=================================================================================
******/

// Solo deja pasar al valor si es Enter
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

keyup$
  .pipe(
    pluck("code"),
    filter((v) => v == "Enter")
  )
  .subscribe(observerEmpleados);
