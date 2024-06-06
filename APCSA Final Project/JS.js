// Initialize counts from localStorage or set to 0 if not present
let drinkCount = parseInt(localStorage.getItem('drinkCount')) || 0;
let cookieCount = parseInt(localStorage.getItem('cookieCount')) || 0;

// Update the counts on the page
document.getElementById('drinkCount').innerText = drinkCount;
document.getElementById('cookieCount').innerText = cookieCount;

// Function to update prices and save counts to localStorage
function updatePrices() {
    let Cprice = cookieCount * 1;
    let Dprice = drinkCount * 1.5;
    let totalPrice = Cprice + Dprice;

    if (document.getElementById('Cprice')) {
        document.getElementById('Cprice').innerText = `$${Cprice.toFixed(2)}`;
    }
    if (document.getElementById('Dprice')) {
        document.getElementById('Dprice').innerText = `$${Dprice.toFixed(2)}`;
    }
    if (document.getElementById('price')) {
        document.getElementById('price').innerText = `$${totalPrice.toFixed(2)}`;
    }

    localStorage.setItem('cookieCount', cookieCount);
    localStorage.setItem('drinkCount', drinkCount);
}

// Function to add drinks
function addDrink() {
    drinkCount++;
    document.getElementById('drinkCount').innerText = drinkCount;
    updatePrices();
}

// Function to subtract drinks
function minusDrink() {
    if (drinkCount > 0) {
        drinkCount--;
        document.getElementById('drinkCount').innerText = drinkCount;
        updatePrices();
    }
}

// Function to add cookies
function addCookie() {
    cookieCount++;
    document.getElementById('cookieCount').innerText = cookieCount;
    updatePrices();
}

// Function to subtract cookies
function minusCookie() {
    if (cookieCount > 0) {
        cookieCount--;
        document.getElementById('cookieCount').innerText = cookieCount;
        updatePrices();
    }
}

// Function to display cookie count for purchase
function cPurchase() {
    if (document.getElementById('cPurchase')) {
        document.getElementById('cPurchase').innerText = cookieCount;
    }
}

// Function to display drink count for purchase
function dPurchase() {
    if (document.getElementById('dPurchase')) {
        document.getElementById('dPurchase').innerText = drinkCount;
    }
}

// Function to display the total
function updateTotal() {
    let Cprice = parseFloat(document.querySelector('.Cprice').textContent.slice(1));
    let Dprice = parseFloat(document.querySelector('.Dprice').textContent.slice(1));
    let totalPrice = Cprice + Dprice;
    document.getElementById('totalPrice').innerText = `$${totalPrice.toFixed(2)}`;
}

// Call updateTotal initially
updateTotal();

// Initial call to update the prices on page load
updatePrices();
