import { Observer, fromEvent, of, interval } from "rxjs";
import { displayLog } from "../utils/utlis";
import {
  takeUntil,
} from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]: ${value}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const boton = document.createElement("button");

boton.innerHTML = "Detener Tiempo";
document
  .querySelector("body")
  ?.insertBefore(boton, document.querySelector("#log-container"));

const counter$ = interval(1000);
const btn$ = fromEvent<MouseEvent>(boton, "click");

counter$.pipe(takeUntil(btn$)).subscribe(observer);
