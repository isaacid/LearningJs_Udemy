const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20
};

let bills = [125, 555, 44];
let tips = [];

for (let bill of bills) {
    tips.push(calcTip(bill))
}