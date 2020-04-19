import CustomerModel from "./models/CustomerModel";

export const PAGE_SIZE = 20;
export const EXAMPLE_CUSTOMER = new CustomerModel(
  1,
  "John",
  "Doe",
  "Male",
  "john@doe.com",
  "A Not So Cool Company",
  "Salesperson"
);
export const API_ENDPOINT = "api/customers/";
