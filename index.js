/*After User hits enter or clicks the button,
store the value in the search in a variable.*/

const readInput = () => {
    const ipSearchValue = document.getElementById("ip-search");
    const ipSearchBtn = document.getElementsByClassName("ip-search-btn")[0];



    ipSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`${ipSearchValue.value}`);
        return ipSearchValue.value;
    });





}


readInput();