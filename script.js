console.log('good luck!');
//Add and show the modal: grab the button and the inner and the aouter element
const addOrderButton = document.querySelector('.add-order');
const innerModale = document.querySelector('.inner-modale');
const outerModale = document.querySelector('.outer-modale');
const orderList = document.querySelector('.order-list');
const container = document.querySelector('.container');
const html = document.querySelector('html');
const foodSize = document.querySelector(`[name='size']`);
const amount = document.querySelector(`[name='amount']`);
const options = document.querySelector(`option`);


//create a function to show the modal
const showOrder = (e) => {
  outerModale.classList.add('open');
  if (outerModale.classList.contains('open')) {
    html.style.backgroundColor = "rgb(0, 0, 0, .6)";
  }

  innerModale.innerHTML = `
  <form class="form-submit">
  <h2>add an order</h2>
  <p>Your name :</p>
  <input
    class="input-form"
    type="text"
    id="name"
    name="name"
    placeholder="Enter your name here"
    required
  />
  <p>Please select your dish :</p>
  <select name="dish" class="select-form" required>
    <option value="romazava">Romazava</option>
    <option value="koba">Koba</option>
    <option value="ravitoto">Ravitoto</option>
    <option value="mokary">Mokary</option>
    <option value="achard">Achard</option>
    <option value="masikita">Masikita</option>
    <option value="sambos">Sambos</option>
    <option value="mofo-baolina">Mofo baolina</option>
    <option value="ranonapango">Ranonapango</option>
  </select>
  <p>Please select the size of your plate :</p>
  <input type="radio" id="small" name="size" value="small" required />
  <label for="small">Small</label><br />
  <input type="radio" id="medium" name="size" value="medium" />
  <label for="medium">Medium</label><br />
  <input type="radio" id="large" name="size" value="large" />
  <label for="large">Large</label><br />
  <p>How many pieces do you want to order?</p>
  <input
    class="input-form"
    type="number"
    id="quantity"
    name="amount"
    placeholder="Enter a number here"
    required
  />
  <button class="submitOrder" type="submit">Add this order</button>
</form>
  `
};

//add an event listener to the buttons
addOrderButton.addEventListener('click', showOrder);

//add and event listener to the window and the escape key and its function
const hideModale = e => {
  const isOutside = !e.target.closest('form');
  if (isOutside === true) {
    outerModale.classList.remove('open')
    html.style.backgroundColor = 'white'
  }
}

const escape = event => {
  if (event.key=== "Escape") {
    outerModale.classList.remove('open')
    html.style.backgroundColor = 'white'
  }
}

window.addEventListener('keydown', escape)

outerModale.addEventListener('click', hideModale)

//add the the form to the inner html when it gets shown in the modal

const outerFoodModale = document.querySelector(".outer-food");
const innerFoodModale = document.querySelector(".inner-food");

//add the click button to submit the order

window.addEventListener('click', (e) => {
  const form = e.target.matches(".submitOrder");
  const userName = document.querySelector(`[name='name']`);
  if (form) {
    const myHtml = `
    <div class="order" data-dish="romazava" data-size="large" data-amount="2">
    <span class="title">
      ${userName.value}
    </span>
    <button class="details">Details</button>
    <button class="served">Delete order</button>
  </div>
    `
  orderList.insertAdjacentHTML('afterbegin', myHtml)
  outerModale.style.display = "none;"
  }
  console.log(form)
  const formSubmit = document.querySelector('.submitOrder');
  formSubmit.addEventListener('click', (e) => {
    e.preventDefault();
})


});
//show the chosen list to the screen
//delete button to delete the entry

window.addEventListener('click', e => {
  const details = e.target.matches(".details");
  console.log(details)
})
// const formSubmit = document.querySelector('.submitOrder');

// formSubmit.addEventListener('click', (e) => {
//   e.preventDefault();
//   innerModale.innerHTML = `
//     <h1>${userName.value}</h1>
//     <h2>order:</h2>
//     <p>${amount.value} ${foodSize.value} ${options.value}</p>
//     <img scr="https://picsum.photos/" alt="delecious food">
//   `
//   innerModale.classList.add('my-food', 'options')
//   html.style.backgroundColor = "rgb(0, 0, 0, .6)";
// })