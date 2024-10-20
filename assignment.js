let bank = {
    bankName: "United Bank for Africa",
    totalBalance: 150000000,
    loanLimit: 75000000
}


let customer = [];

function anyNumber() {
    let accountNumber = "56";
    for (let i = 0; i < 8; i++) {
        accountNumber += Math.floor(Math.random() * 10);
    }
    return accountNumber;
}

function creatAccount(accountName, age, phoneNumber) {
        
        customer.push({
            accountName: accountName,
            age: age,
            phoneNumber: phoneNumber,
            accountBalance: 0,
            loanBalance: 0,
            accountNumber: accountNumber
        });
    }



creatAccount("Tongzum Gomallang", 22, "11111111111");
creatAccount("Joy Fukky", 34, "22222222222");
creatAccount("Nenfort Joshua", 37, "33333333333");
creatAccount("Dyelshak Racy", 25, "44444444444");

function requestLoan(amount, customerIndex) {
    bank.totalBalance -= amount;
    customer[customerIndex].accountBalance += amount;
    customer[customerIndex].loanBalance += amount;
    console.log("Loan granted to:", customer[customerIndex].accountName);
    console.log("New account balance:", customer[customerIndex].accountBalance);
    console.log("New loan balance:", customer[customerIndex].loanBalance);
}


requestLoan(5000, 0);


console.log([0]);
