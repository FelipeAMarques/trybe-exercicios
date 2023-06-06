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
      total: 60,
    },
  };
  
  const customerInfo = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    let entregador = fullOrder.order.delivery.deliveryPerson
    let remetente  = fullOrder.name 
    let telefone = fullOrder.phoneNumber
    let endereçoRua = fullOrder.address.street
    let endereçoNum = fullOrder.address.number
    let endereçoAp = fullOrder.address.apartment
    return `Olá, ${entregador}, entrega para: ${remetente}, telefone ${telefone}, ${endereçoRua}, ${endereçoNum}, ${endereçoAp}.`
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    fullOrder.order.deliveryPerson = 'Luiz Silva'
    fullOrder.order.payment = 50,00
    let remetente = fullOrder.order.deliveryPerson
    let valorPizza = fullOrder.order.payment
    let pizzas = Object.keys(fullOrder.order.pizza).join(', ')
    let bebida = fullOrder.order.drinks.coke.type
    return `Olá, ${remetente}, o valor total de seu pedido de ${pizzas} e ${bebida} é R$ ${valorPizza}.`
  }
  
  console.log(orderModifier(order));