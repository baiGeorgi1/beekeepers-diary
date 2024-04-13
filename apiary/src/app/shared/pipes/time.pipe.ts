import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
    name: "timePipe",
})
export class TimePipe implements PipeTransform {
    transform(date: number, ...args: unknown[]): unknown {
        return moment(date).format("Do MMM  YY");
    }
}
