import { Observer, of, from } from "rxjs";
import { displayLog } from "../utils/utlis";
import { Empleado } from "../interfaces/interfaces";
/*****
OBSERVABLE USANDO FROM
******/

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]:  ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

// el from si entra a los valores que tiene ese arreglo

const Empleados: Array<Empleado> = [
  {
    id: 1,
    nombre: "Jose Carlos",
  },
  {
    id: 2,
    nombre: "Cesar",
  },
  {
    id: 3,
    nombre: "Serch",
  },
];
const obs$ = from(Empleados);

obs$.subscribe(observer);
