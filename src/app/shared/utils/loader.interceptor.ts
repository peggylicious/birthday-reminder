import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../data-access/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private totalRequests = 0;
  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('caught '+ request.url)
    this.loaderService.show()
    this.totalRequests++;
    return next.handle(request).pipe(finalize(() => {
      this.totalRequests--;
      if (this.totalRequests == 0) {
        this.loaderService.hide()
      }
    }))
  }
}
