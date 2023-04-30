import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorModalService implements ErrorHandler {

  // constructor() { }
  handleError(error: any) {
    // do something with the exception
    if (error instanceof HttpErrorResponse) {
      console.log("From error handler", error)
    }
  }
}
// class MyErrorHandler implements ErrorHandler {
//   handleErro(error) {
//     // do something with the exception
//   }
// }

// @NgModule({
//   providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
// })
// class MyModule {}
