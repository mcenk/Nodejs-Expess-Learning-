class Restaurant {
  constructor(name, adress) {
    this.name = name
    this.adress = adress
  }

  static create({name, adress}) {
    return new Restaurant(name, adress)
  }
}

module.exports = Restaurant
