let handleRandomCat = function() {
    const randomCatImage = document.querySelector('.randomCatImage');
    fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
            'x-api-key': '34e7bfbf-78c6-4be3-a091-45ea9b905500'
        }
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            randomCatImage.src = `${response[0].url}`;
        });
};

const randomCatButton = document.querySelector('.randomButton');
randomCatButton.addEventListener('click', handleRandomCat);

let handleRandomCategoryCat = function(evt) {
    evt.preventDefault();
    const randomCategoryImage = document.querySelector('.categoryCatImage');
    const userInput = document.querySelector('.input').value;
    fetch(
        `https://api.thecatapi.com/v1/images/search?category_ids=${userInput}`,
        {
            headers: {
                'x-api-key': '34e7bfbf-78c6-4be3-a091-45ea9b905500'
            }
        }
    )
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            randomCategoryImage.src = `${response[0].url}`;
        });
};
const findCatsMeow = document.querySelector('.searchButton');
findCatsMeow.addEventListener('click', handleRandomCategoryCat);
