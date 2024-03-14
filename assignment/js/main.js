window.addEventListener('load', init);

// Globals
let url = 'http://localhost/programmeren3-eindopdracht/assignment/webservice/index.php'
let gallery;
let detailModal;
let detailContent;

/**
 * Initialize after the DOM is ready
 */
function init() {
    // Retrieve gallery
    gallery = document.getElementById('skateboardGallery');
    gallery.addEventListener('click', skateboardClickHandler);

    // Retrieve modal element
    detailModal = document.getElementById('skateboardDetail');
    detailModal.addEventListener('click', detailModalClickHandler);
    detailModal.addEventListener('close', dialogCloseHandler);
    detailContent = document.querySelector('.modal-content');

    // Start the application by loading skateboard data
    ajaxRequestSkateboards(url, createSkateboardCards);
}

function ajaxRequestSkateboards(url, successHandler) {
    // Make AJAX request to fetch skateboard data from PHP server
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        // Create skateboard cards with fetched data
        .then(successHandler)
        //Give error if error with url
        .catch(ajaxErrorHandler);
}

function createSkateboardCards(data) {
    // Loop through fetched skateboard data and create cards
    for (const skateboard of data){
        const skateboardCard = document.createElement('div');
        skateboardCard.classList.add('skateboardCard');
        skateboardCard.dataset.id = skateboard.id;
        // Append skateboard card to the magazine
        gallery.appendChild(skateboardCard);
        // Fill skateboard card with details
        fillSkateboardCard(skateboard, skateboardCard);

    }
    console.log(data)
}

function fillSkateboardCard(skateboard, skateboardCard, getSkateboardDetails) {

    // Element for the image of the skateboard
    const image = document.createElement('img');
    image.src = skateboard.image;
    skateboardCard.appendChild(image);

    // Element for the name of the skateboard
    const skateboardTitle = document.createElement('h2');
    skateboardTitle.innerHTML = skateboard.name;
    skateboardCard.appendChild(skateboardTitle);

    // Element for the name of the skateboard
    const skateboardDetailedName = document.createElement('p');
    skateboardDetailedName.innerHTML = skateboard.detailedName;
    skateboardCard.appendChild(skateboardDetailedName);

    // Element for the button of the skateboard
    const detailButton = document.createElement('button');
    detailButton.innerHTML = "View Details";
    detailButton.dataset.id = skateboard.id;
    skateboardCard.appendChild(detailButton);

    // Element for the button of the skateboard
    const favoriteButton = document.createElement('button');
    favoriteButton.innerHTML = "Add to favorites";
    favoriteButton.dataset.id = skateboard.id;
    skateboardCard.appendChild(favoriteButton);



}

function skateboardClickHandler(e) {
    const clickedItem = e.target;

    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    const skateboardData = clickedItem.dataset.id;

    fetch(`webservice/index.php?id=${skateboardData}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(fillSkateboardModal)
        .catch(error => {
            console.error('Error fetching skateboard details:', error);
        });
    detailModal.showModal();
    gallery.classList.add('dialog-open')
}

function fillSkateboardModal(getSkateboardDetails) {

    // Clear previous content
    detailContent.innerHTML = '';

    // Element for the name of the skateboard
    const skateboardTitle = document.createElement('h1');
    skateboardTitle.innerHTML = getSkateboardDetails.detailedName;
    detailContent.appendChild(skateboardTitle);

    // Element for the details of the skateboard
    const details = document.createElement('p');
    details.innerHTML = getSkateboardDetails.details;
    detailContent.appendChild(details);

    // Element for the price of the skateboard
    const price = document.createElement('p');
    price.innerHTML = `Prijs: ${getSkateboardDetails.price}`; // Check if this property exists
    detailContent.appendChild(price);
}


function detailModalClickHandler(e) {
    if (e.target.nodeName === 'DIALOG' || e.target.nodeName === 'BUTTON') {
        detailModal.close();
    }
}

function dialogCloseHandler() {
    // Close modal
    gallery.classList.remove('dialog-open');
}

function ajaxErrorHandler(data) {
    console.log(data)
    const error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = "Er is helaas iets fout gegaan met de API, probeer het later opnieuw";
    gallery.before(error);
}