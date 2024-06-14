class ApiError extends Error {
  constructor(
    StatusCode,
    message = "Something went wrong",
    errors = [],
    statck = ""
  ) {
    super(message), (this.StatusCode = StatusCode);
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    if (stack) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };
