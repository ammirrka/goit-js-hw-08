const items = document.querySelectorAll('.item');
const quantity = items.length;
console.log(`Number of categories: ${quantity}`);
const itemInfo = items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elementsOfItem = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsOfItem}`);
});
