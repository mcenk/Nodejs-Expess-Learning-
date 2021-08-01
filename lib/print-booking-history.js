const colors = require('colors')

function printBooking(order) {
  console.log(`${colors.blue(order.customer.name)} adli kullanici ${colors.blue(order.restaurant.name)} isimli restoranttan ${colors.bgRed.white(order.adress)} adresine ${colors.bgRed.white(order.meal)}'yemegini siparis etti`)
}

function printBookingHistory(customer) {
  if (customer.orders.length == 0)
    return console.log(`${colors.blue(customer.name)} has no bookings yet.`)

  customer.orders.forEach(printBooking)
}

module.exports = printBookingHistory
