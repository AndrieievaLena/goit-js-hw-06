const categoriesEl = document.querySelectorAll('.item');
console.log( `Numbers of categories: ${categoriesEl.length}`);

for (const item of categoriesEl) {
    console.log(` Category: ${item.querySelector('h2').textContent} `);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
}

