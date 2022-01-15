class StringBuilder {
  baseString = '';
  constructor(baseString) {
    this._value = baseString;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this.prepend(str);
    this.append(str);
  }
}

const builder = new StringBuilder('.');

builder.append('^');
builder.prepend('^');
builder.pad('=');
console.log(builder.value);
