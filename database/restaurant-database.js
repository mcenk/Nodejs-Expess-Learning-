const BaseDatabase = require('./base-database')
const Restaurant = require('../models/restaurant')

class RestaurantDatabase extends BaseDatabase {
  async findByDriverName(name) {
    return this.findBy('name', name)
  }

  findByLocation(location) {
    return this.findBy('location', location)
  }
}

module.exports = new RestaurantDatabase(Restaurant)
