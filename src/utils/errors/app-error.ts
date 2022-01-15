export class ApplicationError extends Error {
  constructor() {
    super("Something went wrong! Please try again!");
  }
}
