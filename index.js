
/*After User hits enter or clicks the button,
store the value in the search in a variable.*/

const readInput = () => {
    const ipSearchValue = document.getElementById("ip-search");
    const ipSearchBtn = document.getElementsByClassName(".ip-search-btn") ;
 


ipSearchBtn.addEvenListener('click', (e) => {
    e.preventDefault();
    console.log(`${ipSearchValue.value}`);

});





} 

