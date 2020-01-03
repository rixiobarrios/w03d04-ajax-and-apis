let handleRandomCat = function() {
    const randomCatImage = document.querySelector('.randomCatImage');
    fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
            'x-api-key': '34e7bfbf-78c6-4be3-a091-45ea9b905500'
        }
    })
        .then(response => response.json())
        .then(response => {
            randomCatImage.src = `${response[0].url}`;
        });
};

const randomCatButton = document.querySelector('.randomButton');
randomCatButton.addEventListener('click', handleRandomCat);
