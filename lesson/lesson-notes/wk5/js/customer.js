const customer = {
name: "Alex",
isPremium: true,
loyaltypoints: 0
};


let rawUnits = "120.5";
let rawTax = "0.05";

const units = parseFloat();
const taxRate = parseFloat();













const getTotal = (subtotal, taxRate, isPremium) => {
    if (isPremium === true) {
        subtotal -5;
    }
    let tax = subtotal * taxRate;
    tax += subtotal; // tax = tax + subtotal
    return tax;
};



const blocksofFifty = 0;
for









console.log(`customer: ${customer.name} \n Units used: ${units} \n Total Bill ${getTotal ()}`)