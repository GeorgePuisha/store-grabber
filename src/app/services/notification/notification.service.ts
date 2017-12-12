import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { map, catchError } from "rxjs/operators";

import * as io from "socket.io-client";

@Injectable()
export class NotificationService {

  public url = "http://localhost:3001";

  public socket: any;

  public GetInstanceStatus(): Observable<any> {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on("message", (data) => {
        data = JSON.parse(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    return observable.share();
  }

  constructor() { }

}
