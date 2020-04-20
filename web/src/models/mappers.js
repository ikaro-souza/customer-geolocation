import CustomerModel from "./CustomerModel";

export function customerModelFromObject(data) {
  return new CustomerModel(
    data.id,
    data.first_name ?? data.firstName,
    data.last_name ?? data.lastName,
    data.gender,
    data.email,
    data.company,
    data.title,
    data.location
  );
}
