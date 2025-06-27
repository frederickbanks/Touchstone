
// Newsletter subscribe
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    if (!email) return;
    let subs = JSON.parse(localStorage.getItem('subscribers') || '[]');
    subs.push({ email, date: new Date().toISOString() });
    localStorage.setItem('subscribers', JSON.stringify(subs));
    alert('Thank you for subscribing!');
    event.target.reset();
}

// Feedback form
function submitFeedback(event) {
    event.preventDefault();
    const data = {
        name: document.getElementById('fbName').value,
        email: document.getElementById('fbEmail').value,
        message: document.getElementById('fbMessage').value,
        date: new Date().toISOString()
    };
    let feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    feedbacks.push(data);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    alert('Thank you for your feedback!');
    event.target.reset();
}

// Shopping cart
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added.');
}

function openCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Cart is empty.';
        cartItems.appendChild(li);
    } else {
        cart.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = item;
            cartItems.appendChild(li);
        });
    }
    modal.style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function clearCart() {
    localStorage.removeItem('cart');
    openCart();
}

function processOrder() {
    localStorage.removeItem('cart');
    alert('Thank you for your order.');
    closeCart();
}

// Close modal when clicking outside content
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
