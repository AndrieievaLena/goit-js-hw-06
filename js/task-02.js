const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients') 

const items = ingredients.map(ingredient => {
  const addedEl = document.createElement('li');
  addedEl.textContent = ingredient;
  addedEl.classList.add('item')
  return addedEl
})

ingredientsList.append(...items)
console.log(ingredientsList)