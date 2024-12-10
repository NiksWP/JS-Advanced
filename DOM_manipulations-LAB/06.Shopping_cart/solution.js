function solve() {
   const addProductElements = document.querySelectorAll('.add-product');
   const textAreaElement = document.querySelector('textarea');
   const checkoutButton = document.querySelector('.checkout');

   let cart = {};

   checkoutButton.addEventListener('click', () => {
      const totalPrice = Object.values(cart).reduce((sum, current) => sum += current, 0);
      const list = Object.keys(cart).join(', ');
      console.log(textAreaElement.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`);

      addProductElements.forEach(button => button.setAttribute('disabled', 'disabled'))
      event.currentTarget.setAttribute('disabled, disabled');
   });

   function addProductHandler(event){
      console.log('added product');
      const productElement = event.currentTarget.parentElement.parentElement;
      const title = productElement.querySelector('.product-title').textContent;
      const price = Number(productElement.querySelector('.product-line-price').textContent);
      textAreaElement.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`

      if (!cart[title]) {
         cart[title] = 0;
      }
      cart[title] += price;
   }

   addProductElements.forEach(button => {
      button.addEventListener('click', addProductHandler);
   });
}