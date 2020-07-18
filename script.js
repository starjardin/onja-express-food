console.log('good luck!');
//To do list:
//Add and show the modal: grab the button and the inner and the aouter element
const addOrderButton = document.querySelector('.add-order');
const innerModale = document.querySelector('.inner-modale');
const outerModale = document.querySelector('.outer-modale');
//create a function to show the modal
const showOrder = (e) => {
  const form = `
  <form>
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
  </form>`
};

//add an event listener to the buttons
addOrderButton.addEventListener('click', showOrder);

//add and event listener to the window and the escape key and its function
//add the the form to the inner html when it gets shown in the modal
//add the click button to submit the order
//show the chosen list to the screen
//delete button to delete the entry