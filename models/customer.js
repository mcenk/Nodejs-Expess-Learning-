const Order = require('./order')
const uuid = require('uuid')

class Customer {
  constructor(id = uuid.v4(), name, adress, orders = []) {
    this.id = id
    this.name = name
    this.adress = adress
    this.orders = orders
  }

  createOrder(restaurant, meal, adress) {
    const order = new Order(restaurant, this, meal, adress)

    this.orders.push(order)

    return order
  }

  static create({id, name, adress, orders}) {
    return new Customer(id, name, adress, orders)
  }
}

module.exports = Customer
