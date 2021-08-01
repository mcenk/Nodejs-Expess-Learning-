const Customer = require('./models/customer')
const Restaurant = require('./models/restaurant')
const customerDatabase = require('./database/customer-database')
const restaurantDatabase = require('./database/restaurant-database')

const printBookingHistory = require('./lib/print-booking-history')

const serra = Customer.create({name: 'Serra', adress: 'Atakent'})
const cenk = Customer.create({name: 'Cenk', adress: 'Cennet'})
const rest=Restaurant.create({name: 'halis', adress: 'sefakoy'})
const rest2= Restaurant.create({name:'lezzet evi', adres: })

 serra.createOrder(rest,'adanaDurum','atakent')
 cenk.createOrder(rest,'lahmacun','cennet')
 cenk.createOrder


async function main() {
  try {
 
    await customerDatabase.save([serra, cenk])
    await restaurantDatabase.save([rest])

    const merve = Customer.create({ name: 'Merve', adress: 'Istasyonmh' })

    await customerDatabase.insert(merve)

    // const customers = await customerDatabase.load()
    // customers.forEach(printBookingHistory)
  } catch (e) {
    return console.log(e)
  }
}
main()
