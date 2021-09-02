class Bank {

    // Account Details
    static getAccountDetails() {
        var accountDetails = {
            1001: { name: "Maria Anders", acno: 1001, pin: 1234, password: "1aA!1aA!", balance: 3000 },
            1002: { name: "Ana Trujillo", acno: 1002, pin: 2345, password: "2bB@2bB@", balance: 2500 },
            1003: { name: "Antonio Moreno", acno: 1003, pin: 3456, password: "3cC#3cC#", balance: 5000 },
            1004: { name: "Thomas Hardy", acno: 1004, pin: 4567, password: "4dD$4dD$", balance: 8900 },
            1005: { name: "Christina Berglund", acno: 1005, pin: 5678, password: "5eE%5eE%", balance: 10000 },
        }
        return accountDetails;
    }

    // Open Account Function
    static register() {
        var password = document.getElementById('password').value;
        var confirm = document.getElementById('confirm').value;
        if (password.length < 8) {
            alert("Enter a combination of at least eight characters.");
            return false;
        }
        if (password != confirm) {
            alert("Passwords do not match!")
            return false;
        }
        if (document.getElementById('agree').checked) {
            alert("Account Opened Successfully!");
            window.location.href = "user_login.html";
        }
        else {
            alert("Please agree to our Terms and Conditions.");
            return false;
        }
        return true;
    }

    // Login Function
    static login() {
        var acno = document.getElementById('acno').value;
        var password = document.getElementById('password').value;
        try {
            if (isNaN(acno)) throw "Not a valid account Number!";
        }
        catch (err) {
            alert(err);
        }
        let data = Bank.getAccountDetails();
        if (acno in data) {
            let pwd = data[acno].password;
            if (pwd == password) {
                alert("Logged In Successfully!");
                window.location.href = "user/home.html";
            }
            else {
                alert("Incorrect account number or Password!");
            }
        }
        else {
            alert("User does not exist!");
        }
    }

    // Deposit Function
    static deposit() {
        var acno = document.getElementById('acno').value;
        var pin = document.getElementById('pin').value;
        var amount = Number(document.getElementById('amount').value);
        var data = Bank.getAccountDetails();
        if (acno in data) {
            let mpin = data[acno].pin;
            if (pin == mpin) {
                data[acno].balance += amount;
                alert("Amount has been deposited!\nYour current balance is ₹" + data[acno].balance + ".");
                window.location.href = "home.html";
            }
            else
                alert("Incorrect PIN!");
        }
    }

    // Withdraw Function
    static withdraw() {
        var acno = document.getElementById('acno').value;
        var pin = document.getElementById('pin').value;
        var amount = Number(document.getElementById('amount').value);
        var data = Bank.getAccountDetails();
        if (acno in data) {
            var mpin = data[acno].pin
            if (pin == mpin) {
                data[acno].balance -= amount;
                alert("Amount has been withdrawn!\nYour current balance is ₹" + data[acno].balance + ".");
                window.location.href = "home.html";
            }
            else
                alert("Incorrect PIN!");
        }
    }

    // Display Account Details on Deposit Page
    static ddeposit() {
        var x = document.getElementById('acno').value;
        var data = Bank.getAccountDetails();
        if (x in data) {
            let dname = data[x].name;
            let dbal = data[x].balance;
            document.getElementById('dname').innerHTML = "Hello, " + dname + "!";
            document.getElementById('dbal').innerHTML = "Your current balance is ₹" + dbal + ".";
        }
    }

    // Display Account Details on Withdraw Page
    static dwithdraw() {
        var x = document.getElementById('acno').value;
        var data = Bank.getAccountDetails();
        if (x in data) {
            let dname = data[x].name;
            let dbal = data[x].balance;
            document.getElementById('dname').innerHTML = "Hello, " + dname + "!";
            document.getElementById('dbal').innerHTML = "Your current balance is ₹" + dbal + ".";
        }
    }

}