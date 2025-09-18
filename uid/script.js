function toggleCart() {
    const cartBox = document.getElementById('cartBox');
    cartBox.style.display = cartBox.style.display === 'block' ? 'none' : 'block';
  }
  
  function addToCart(productName, price) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCart();
  }
  
  
  function removeFromCart(index) {
    try {
        console.log("Removing item at index:", index);
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        console.log("Current cart items:", cartItems);
        cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        console.log("Updated cart items:", cartItems);
        updateCart();
    } catch (error) {
        console.error("Error in removeFromCart:", error);
    }
}

  

  function updateCart() {
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = '';

    let totalPrice = 0;
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);

        cartItemsList.appendChild(listItem);
        totalPrice += item.price;
    });

}

  
  
  function redirectToCheckout() {
    window.location.href = 'checkout.html';
  }
  

  window.onload = updateCart;



  
  function toggleMenu() {
    const menuContent = document.getElementById("menuContent");
    menuContent.classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const dropdownContent = dropdowns[i];
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    }
}



var modal = document.getElementById("myModal");


function openModal() {
  modal.style.display = "block";
}


function closeModal() {
  modal.style.display = "none";
}

function filterProducts() {
  var minPrice = parseFloat(document.getElementById("minPrice").value);
  var maxPrice = parseFloat(document.getElementById("maxPrice").value);
  var products = document.getElementsByClassName("product");

  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var price = parseFloat(product.querySelector("p").innerText.substring(1));

    if ((isNaN(minPrice) || price >= minPrice) && (isNaN(maxPrice) || price <= maxPrice)) {
      product.style.display = "block"; 
    } else {
      product.style.display = "none"; 
    }
  }
}

function resetFilters() {
  document.getElementById("minPrice").value = ""; 
  document.getElementById("maxPrice").value = ""; 
  var products = document.getElementsByClassName("product");
  for (var i = 0; i < products.length; i++) {
    products[i].style.display = "block"; 
  }
}