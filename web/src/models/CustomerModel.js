export default class CustomerModel {
  id = 0;
  firstName = "";
  lastName = "";
  gender = "";
  email = "";
  company = "";
  title = "";

  constructor(id, firstName, lastName, gender, email, company, title) {
    if (arguments.length) {
      this.id = id;
      this.firstName = firstName || '-';
      this.lastName = lastName || '-';
      this.gender = gender || '-';
      this.email = email || '-';
      this.company = company || '-';
      this.title = title || '-';
    }
  }

  static from
}
