/*After User hits enter or clicks the button,
store the value in the search in a variable.*/

/*const getUserInput = () => {
    let ipSearchValue = "";
    const ipSearchBtn = document.getElementsByClassName("ip-search-btn")[0];
    

    ipSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        return ipSearchValue = document.getElementById("ip-search");
      
    });
    return ipSearchValue;
    

}

*/


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
            let ipData = [data.query, data.city, "N/A", data.isp]
            let ipDetails = document.querySelectorAll(".ip-details-text"); 
            
            for (let i= 0; i < ipDetails.length; i++){

                ipDetails[i].innerHTML = ipData[i];

            }

        })

    console.log(ip);




}







let map = L.map('map').setView([51.505, -0.09],  19);

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






let marker = L.marker([51.5, -0.09], {
    icon: myIcon
}).addTo(map);




readUserInput();