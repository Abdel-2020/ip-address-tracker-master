/*After User hits enter or clicks the button,
store the value in the search in a variable.*/

const readInput = () => {
    const ipSearchValue = document.getElementById("ip-search");
    const ipSearchBtn = document.getElementsByClassName("ip-search-btn")[0];


    ipSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`${ipSearchValue.value}`);
    });

}

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

readInput();
fetchMaps();