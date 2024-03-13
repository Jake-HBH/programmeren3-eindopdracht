// window.addEventListener('load', init)
//
// let gallery;
//
// function init() {
// gallery = document.getElementById('skateboardGallery');
//
// ajaxRequest()
// }
//
// function ajaxRequest(successHandler) {
//     fetch("webservice/index.php")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error (${response.statusText}): ${response.statusText}`);
//             }
//             return response.json();
//         })
//         .then(successHandler)
//         .catch(ajaxErrorHandler);
// }
//
// function ajaxErrorHandler(data) {
//     console.log(data)
//     const error = document.createElement('div');
//     error.classList.add('error');
//     error.innerHTML = "Er is helaas iets fout gegaan met de API, probeer het later opnieuw";
//     gallery.before(error);
// }
//
// function createSkateboards(data){
// console.log();
// for (const skateboard of data){
//     const skateboardCard = document.createElement('div');
//     skateboardCard.classList.add('skateboard-card')
// }
// }









window.addEventListener('load', init);

// Globals
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
    loadSkateboards();
}

function loadSkateboards() {
    // Make AJAX request to fetch skateboard data from PHP server
    fetch('webservice/index.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(skateboards => {
            // Create skateboard cards with fetched data
            createSkateboardCards(skateboards);
        })
        .catch(error => {
            console.error('Error fetching skateboard data:', error);
        });
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
}

function fillSkateboardCard(skateboard, skateboardCard) {

    // Element for the image of the skateboard
    const image = document.createElement('img');
    image.src = skateboard.image;
    skateboardCard.appendChild(image);

    // Element for the name of the skateboard
    const skateboardTitle = document.createElement('h2');
    skateboardTitle.innerHTML = skateboard.name;
    skateboardCard.appendChild(skateboardTitle);

    // Element for the name of the skateboard
    const skateboardDetailedName = document.createElement('h3');
    skateboardDetailedName.innerHTML = skateboard.name;
    skateboardCard.appendChild(skateboardDetailedName);

    // Element for the button of the skateboard
    const detailButton = document.createElement('button');
    detailButton.innerHTML = "View Details";
    detailButton.dataset.id = skateboard.id;
    skateboardCard.appendChild(detailButton);
}

function skateboardClickHandler(e) {
    const clickedItem = e.target;

    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    const skateboardId = clickedItem.parentElement.dataset.id;

    // Make AJAX request to fetch skateboard details based on ID
    fetch(`index.php?id=${skateboardId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(skateboardDetails => {
            // Fill modal with fetched skateboard details
            fillSkateboardModal(skateboardDetails);
        })
        .catch(error => {
            console.error('Error fetching skateboard details:', error);
        });
    detailModal.showModal();
    gallery.classList.add('dialog-open')
}

function fillSkateboardModal(skateboardDetails) {
    // Log skateboardDetails to inspect its properties
    console.log('Skateboard details:', skateboardDetails);

    // Clear previous content
    detailContent.innerHTML = '';

    // Element for the name of the skateboard
    const skateboardTitle = document.createElement('h1');
    skateboardTitle.textContent = skateboardDetails.detailedName; // Check if this property exists
    detailContent.appendChild(skateboardTitle);

    // Element for the details of the skateboard
    const details = document.createElement('p');
    details.textContent = skateboardDetails.details;
    detailContent.appendChild(details);

    // Element for the price of the skateboard
    const price = document.createElement('p');
    price.textContent = `Price: ${skateboardDetails.price}`; // Check if this property exists
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

