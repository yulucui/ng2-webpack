import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TestService {

    constructor(private http: Http){}

    public get(queryString: string = '*:*') {
      console.log(queryString)
        //noinspection TypeScriptValidateTypes
      return this.http.get('/data?queryString=' + queryString);
        // return 0;
    }
}
