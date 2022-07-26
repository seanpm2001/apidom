class ParserError extends Error {
  public cause: undefined | Error;

  constructor(message: string, cause?: Error) {
    super(message);
    this.cause = cause;
  }
}

export default ParserError;