import { enableProdMode, ErrorHandler, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { LoaderInterceptor } from './app/shared/utils/loader.interceptor';
import { CustomErrorHandler } from './app/shared/data-access/custom-error-handler.service';
if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: ErrorHandler, useClass: CustomErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem("access_token");
        },
        allowedDomains: ["example.com", "localhost:3000", 'birthday-reminder-server-rah7.onrender.com'],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    })),
  ],
});
