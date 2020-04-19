import CustomerModel from "./CustomerModel";

export default function CustomerModelFromObject({
  id,
  first_name,
  last_name,
  gender,
  email,
  company,
  title,
}) {
  return new CustomerModel(
    id,
    first_name,
    last_name,
    gender,
    email,
    company,
    title
  );
}
