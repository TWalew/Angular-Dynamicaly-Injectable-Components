import { HttpErrorResponse } from '@angular/common/http';

export type ApiError = Error400 | Error401;

export interface Error400 extends HttpErrorResponse {
  status: 400;
  error: {
    violations: Array<{
      message: string;
    }>;
  };
}

export interface Error401 extends HttpErrorResponse {
  status: 401;
  error: {
    code: number;
    message: string;
  };
}

export interface Error500 extends HttpErrorResponse {
  status: 500;
  error: {
    code: number;
    message: string;
  };
}
