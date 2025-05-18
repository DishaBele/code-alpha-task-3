document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.closest('.product');
    const title = product.querySelector('.product-title').textContent;
    const price = product.querySelector('.product-price').textContent;

    fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ title, price })
    }).then(res => res.json())
      .then(data => alert(data.message));
  });
});
