// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    let obj = {}

    if (currency >= 50) {
        let count = Math.floor(currency / 50);
        obj.H = count;
        currency = currency % 50;
    }

    if (currency >= 25) {
        let count = Math.floor(currency / 25);
        obj.Q = count;
        currency = currency % 25;
    }
    
    if (currency >= 10) {
        let count = Math.floor(currency / 10);
        obj.D = count;
        currency = currency % 10;
    }

    if (currency >= 5) {
        let count = Math.floor(currency / 5);
        obj.N = count;
        currency = currency % 5;
    }

    if (currency >= 1) {
        let count = Math.floor(currency / 1);
        obj.P = count;
        currency = currency % 1;
    }

    return obj;
}
