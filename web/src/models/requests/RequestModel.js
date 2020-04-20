export const Methods = {
  GET: "GET",
};

export const requestTypes = {
  CUSTOMER_LIST: 1,
  CUSTOMER: 2,
};

export class RequestParameter {
  constructor(name, value, description) {
    this.name = name;
    this.value = value;
    this.description = description;
  }
}

export default class RequestModel {
  constructor(
    method,
    endpoint,
    name,
    description,
    parameters = [],
    results = []
  ) {
    this.method = method;
    this.endpoint = endpoint || "-";
    this.name = name || "";
    this.description = description;
    this.parameters = parameters;
    this.results = results;
  }
}
