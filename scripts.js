let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60.00,
  },
};

function customerInfo(order) {
  return 'Olá, ' + order.order.delivery.deliveryPerson + '. Entrega para: ' +
  order.name + '. Telefone: ' + order.phoneNumber + ', ' +
  order.address.street + ', ' + order.address.number + ', ' +
  order.address.apartment;
}

customerInfo(order);

let newOrder = {
  name: 'Luiz Silva',
  phoneNumber: '61-998484948',
  address: {
    street: 'Rua dos Libertários',
    number: '301',
    apartment: '214',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 5,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'João Tributo',
      price: 0,
    },
  },
  payment: {
    total: 50.00,
  },
};

Object.assign(order, newOrder);

function orderModifier(order) {
  return 'Olá ' + order.name + '. O seu pedido de: ' +
  Object.keys(order.order.pizza) + Object.keys(order.order.drinks) +
  ' é: R$' + order.payment.total;
}

orderModifier(order);
