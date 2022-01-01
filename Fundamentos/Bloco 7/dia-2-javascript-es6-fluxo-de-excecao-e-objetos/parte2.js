const order = {
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
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.

    return `Olá ${Object.values(order.order.delivery)[0]}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${Object.values(order.address)[0]}, N°: ${Object.values(order.address)[1]}, AP: ${order.address.apartment}`;
  }
  
// console.log(customerInfo(order));
  
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva'
  order.payment.total = 50;
  return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]}, e ${Object.values(order.order.drinks.coke)[0]} é: ${Object.values(order.payment)}`;
}
  
console.log(orderModifier(order));