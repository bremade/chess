export function TypeException(message) {
  this.message = message;
  this.name = "TypeException";
}

TypeException.prototype.toString = function () {
  return `Exception - ${this.name}: "${this.message}"`;
};

export function ValidationException(message) {
  this.message = message;
  this.name = "ValidationException";
}

ValidationException.prototype.toString = function () {
  return `Exception - ${this.name}: "${this.message}"`;
};
