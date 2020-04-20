export class Location {
  constructor(city, latitude, longitude) {
    this.city = city;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  toString() {
    return `${this.city} @ [${this.latitude}, ${this.longitude}]`;
  }
}

export default class CustomerModel {
  constructor(
    id,
    firstName,
    lastName,
    gender,
    email,
    company,
    title,
    location
  ) {
    this.id = id || 0;
    this.firstName = firstName || "-";
    this.lastName = lastName || "-";
    this.gender = gender || "-";
    this.email = email || "-";
    this.company = company || "-";
    this.title = title || "-";
    this.location = undefined;

    this.setLocation(location);
  }

  setLocation(location) {
    this.location =
      location === undefined
        ? location
        : new Location(location.city, location.latitude, location.longitude);
  }
}
