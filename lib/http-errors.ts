export class RequestError extends Error {
  statusCode: number;
  errors?: Record<string, string[]>;

  constructor(statusCode: number, message: string, errors?: Record<string, string[]>) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.name = "RequestError";
  }
}

class ValidationError extends Error {}

class NotFoundError extends Error {}

class ForbiddenError extends Error {}

class UnauthorizedError extends Error {}
