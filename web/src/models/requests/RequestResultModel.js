export default class RequestResultModel {
  constructor(status, fields) {
    this.status = status;
    this.fields = fields;
  }

  toJSON() {
    let result = {};
    this.fields.forEach((f) => (result = { ...result, [f.name]: f.value }));
    return result;
  }
}

class RequestResultStatus {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
}

export class ResultBodyField {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  toJSON() {
    return {
      [this.name]: this.value,
    };
  }
}

export const resultStatus = {
  OK: new RequestResultStatus(200, "OK"),
  NOT_FOUND: new RequestResultStatus(404, "Not found"),
  SERVER_ERROR: new RequestResultStatus(500, "Internal server error"),
};

export const SERVER_ERROR_RESULT = new RequestResultModel(
  resultStatus.SERVER_ERROR,
  [new ResultBodyField("message", "Internal server error")]
);
