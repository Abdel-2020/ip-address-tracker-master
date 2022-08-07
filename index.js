const readUserInput = () => {
    let ipSearchValue = document.getElementById("ip-search");
    const ipSearchBtn = document.getElementsByClassName("ip-search-btn")[0];


    ipSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (ipSearchValue.value.length == 0) {
            alert(`Please enter an IP`);
        } else {
            findIp(ipSearchValue.value);
        }

    });
}


const findIp = (ip) => {


    fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(ip);
            let ipData = [data.query, data.city, "N/A", data.isp]
            let ipDetails = document.querySelectorAll(".ip-details-text");
            let latLon = [data.lat, data.lon];


            for (let i = 0; i < ipDetails.length; i++) {
                ipDetails[i].innerHTML = ipData[i];
            }

            displayLocation(latLon);

        })



}

const displayLocation = (locationArr) => {

    map.setView(locationArr, 19);
    let marker = L.marker(locationArr, {
        icon: myIcon
    }).addTo(map);
}


let map = L.map('map').setView([51.505, -0.09], 19);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

let myIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
    iconSize: [50, 60],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],

});





readUserInput();