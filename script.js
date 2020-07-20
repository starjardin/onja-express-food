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
const outerFoodModale = document.querySelector(".outer-food");
const innerFoodModale = document.querySelector(".inner-food");

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

//Add an event to listen to the escape key
window.addEventListener('keydown', escape);

//Add an event outside the modale to escape
outerModale.addEventListener('click', hideModale);

//function to submit the form
const handleSubmit = (e) => {
  e.preventDefault();
  const formIsSubmit = e.target.matches("form");
  const form = e.target;
  const userName = form.name;
  //if you click submit order is true, Do this following steps
  if (formIsSubmit) {
    const myHtml = `
    <div class="order" data-dish="romazava" data-size="large" data-amount="2">
    <span class="title">
      ${userName.value}
    </span>
    <button class="details">Details</button>
    <button class="served">Delete order</button>
  </div>
    `
  orderList.insertAdjacentHTML('afterbegin', myHtml);
  outerModale.classList.remove('open');
  html.style.background="white";
  }
};

window.addEventListener('submit', handleSubmit);


//Delete button 
window.addEventListener('click', (e) => {
  const deleteButton = e.target.matches('.served');
  if (deleteButton) {
    const buttonServed = document.querySelector('.served');
    const served = buttonServed.closest('.order');
    served.remove()
  }
});

//Details button
const functionDetailsButton = (e) => {

};

//Add event listener to the details button here
window.addEventListener('click', (e) => {
  const details = e.target.matches('.details');
  if (details) {
    const user = document.querySelector(`[name='name']`);
    const foodSize = document.querySelectorAll(`[name='size']`);
    const amountOfDish = document.querySelector(`[name='amount']`);
    const options = document.querySelectorAll('option');
    //loop throuhg the radio buttons to get the checked list
      let chosenOPtion;
      foodSize.forEach(food => {
        food.checked;
        chosenOPtion = food.value;

      });
      //Loop thruogh the select list to get the selected list.
      let dish;
      options.forEach(option => {
        option.selected;
        dish = option.value;
      });

       //creating html for the food details
    const foodDetailsHtml = `
    <h2>${user.value}</h2>
      <h3>Order:</h2>
      <p> ${amountOfDish.value} ${chosenOPtion} ${dish}</p>
      <img src="./images/images-food.jpg" width="400px" height="300px">
    `
    outerModale.classList.add('open')
    innerModale.innerHTML = foodDetailsHtml;
    html.style.background="gray"
  }
});