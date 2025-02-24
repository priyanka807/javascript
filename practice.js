function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: 1, name: "Pinka" });
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Orders fetched for user ${userId}`);
            resolve(["Order1", "Order2"]);
        }, 1000);
    });
}

function processPayment(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Payment processed for ${order}`);
            resolve("Payment successful");
        }, 1000);
    });
}

// Using Promises (Chained `.then()` instead of nesting)
getUser()
    .then(user => getOrders(user.id))
    .then(orders => processPayment(orders[0]))
    .then(paymentStatus => console.log(paymentStatus))
    .catch(error => console.log(error));  // Error handling
