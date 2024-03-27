class Cont {
    #balance;

    set setBalance(balance) {
        if (balance >= 0) {
            this.#balance = balance;

        } else {
            this.#balance = 0;
            console.log('error');
        }
    }

    credit = (sum) => {
        return this.#balance += sum;
    }

    debit = (sum) => {
        if (this.#balance > sum) {
            return this.#balance -= sum;
        } else {
            this.#balance += 0;
            console.log('error');
        }
    }

    get getBalance() {
        return this.#balance;
    }
}

const cont1 = new Cont();
const cont2 = new Cont();

cont1.setBalance = 25;
cont2.setBalance = 250;

console.log(`Suma cont1: ${cont1.credit(200)}`);
console.log(`Suma cont2: ${cont2.credit(200)}`);

console.log(cont1.debit(400));
console.log(cont1.getBalance);
console.log(cont2.debit(400));