import { Observer, of } from "rxjs";
import { displayLog } from "../utils/utlis";

/*****
OBSERVABLE USANDO OF
******/

/*****
 * Crear un obserbal
1 y no se utliza
******/

// const obs$ = Observable.create();

/*****
2- Manera de crear un observable
******/

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]:  ${JSON.stringify(value * 10)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

/*****
<T> = es el tipo 
si esta despues  la T significa que puede recibir cualquier tipo de dato y retorna un observable del tipo de dato generico que pusimos al inicio

******/



// const obs$ = of<number>(1,2,3,4,5,6)

// const obs$ = of<any>(
//   1,
//   "sandoval",
//   () => {
//     console.log("x");
//   },
//   {
//     a: 1,
//     b: 2,
//   },
//   5
// );

const obs$ = of<any>(...[1, 2, 3, 4, 5, 6]);
displayLog("Inicio obs");
obs$.subscribe(observer);
displayLog("fin obs");
