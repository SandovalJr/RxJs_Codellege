import { Observer, of } from "rxjs";
import { displayLog } from "../utils/utlis";
import { take } from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => console.log(`[Next]: `, value),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

const numero$ = of(1, 2, 3, 4, 5);
numero$.pipe(take(2)).subscribe(observer)