const priceStr = "25";
const price = Number(priceStr);
const quantity = 3;
let subtotal = price * quantity;

if (subtotal > 50)  {
    subtotal = subtotal - 5;
}

console.log("Finial amount: $" + subtotal);


const firstName = "Alex";
const age = 19;
const isLoggedin = true;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isLoggedin);

function sayHello(name, userAge) {
    return `Hello ${name} ${userAge} years old!`; 
}

console.log(sayHello(firstName,age));


for (let number = 1; number <= 10; number++) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    }

    else {
        console.log(number);
    }
}


const TicketAge  = 12;

if (TicketAge < 5 || TicketAge >= 65) {
    console.log("Ticket is Free");
}

else if ( TicketAge >= 5 && TicketAge <= 17) {
    console.log("Ticket is $5");
}

else {
    console.log("Ticket is $10");
} 