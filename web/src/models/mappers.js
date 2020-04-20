import CustomerModel from "./CustomerModel";

export function customerModelFromObject({
  id,
  first_name,
  last_name,
  gender,
  email,
  company,
  title,
  location,
}) {
  return new CustomerModel(
    id,
    first_name,
    last_name,
    gender,
    email,
    company,
    title,
    location
  );
}
