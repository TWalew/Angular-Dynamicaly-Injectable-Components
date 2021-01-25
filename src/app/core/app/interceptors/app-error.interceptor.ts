import { Injectable, Injector } from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { EMPTY, Observable } from "rxjs";
import { Router } from "@angular/router";
import { ErrorHandlerDialogComponent } from "../../../content/shared/components/dialogs/error-handler-dialog/error-handler-dialog.component";
import { catchError } from "rxjs/operators";
import { statusCodes } from "../enums/status-codes";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Injectable()
export class AppErrorInterceptor implements HttpInterceptor {
  private statusCodes = statusCodes;
  private errorDialogRef: MatDialogRef<ErrorHandlerDialogComponent>;

  constructor(private injector: Injector, private router: Router) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        if (
          !this.router.url.includes("login") &&
          !this.router.url.includes("forgot-password") &&
          !this.router.url.includes("register") &&
          !request.url.includes("logout")
        ) {
          if (response.status === this.statusCodes.Unauthorized) {
            return EMPTY;
          }

          this.detectErrors(request, response);
        }

        return next.handle(request);
      })
    );
  }

  protected get dialog(): MatDialog {
    return this.injector.get(MatDialog);
  }

  private detectErrors(
    request: HttpRequest<any>,
    response: HttpErrorResponse
  ): void {
    switch (response.status) {
      case this.statusCodes.PaymentRequired:
        this.openErrorDialog("402", "APP_ERRORS.402");
        break;
      case this.statusCodes.NotAllowed:
        this.openErrorDialog("403", "APP_ERRORS.403");
        break;
      case this.statusCodes.NoResource:
        this.openErrorDialog("404", "APP_ERRORS.404");
        break;
      case this.statusCodes.TooMuchRequests:
        this.openErrorDialog("429", "APP_ERRORS.429");
        break;
      case this.statusCodes.InternalServerError:
        this.openErrorDialog("500", "APP_ERRORS.500");
        break;
      case this.statusCodes.ServiceUnavailable:
        this.openErrorDialog("503", "APP_ERRORS.503");
        break;
      case this.statusCodes.WebServerUnavailable:
        this.openErrorDialog("529", "APP_ERRORS.529");
        break;
      default:
        break;
    }
  }

  private openErrorDialog(title: string, errorMessage: string): void {
    if (!this.errorDialogRef) {
      this.errorDialogRef = this.dialog.open(ErrorHandlerDialogComponent, {
        width: "500px",
        data: {
          title,
          errorMessage
        },
        panelClass: "logged-in-dialog"
      });

      this.errorDialogRef.afterClosed().subscribe(() => {
        this.errorDialogRef = undefined;
      });
    }
  }
}
