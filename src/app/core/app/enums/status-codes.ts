export enum statusCodes {
    Unauthorized = 401,
    PaymentRequired,
    NotAllowed,
    NoResource,
    EmailAlreadySend = 417,
    InternalServerError = 500,
    ServiceUnavailable = 503,
    WebServerUnavailable = 529,
    VerifyDevice = 492,
    Require2FA = 493,
    TooMuchRequests = 429
}
