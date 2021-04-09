let id = 0; 
// Main function that gets the value of the text box and radio box, enters it into the table with a Delete Button
document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date(); 
    let table = document.getElementById('list'); 
    let row = table.insertRow(1); 
    row.setAttribute('id', `item-${id}`); 
    row.insertCell(0).innerHTML = document.getElementById('new-grocery-item').value;
    row.insertCell(1).innerHTML = `${createdDate.getMonth() + 1} - ${createdDate.getDate()} - ${createdDate.getFullYear()}`; 
    row.insertCell(2).innerHTML = radioButton(); //see RadioButton function at bottom
    let actions = row.insertCell(3); 
    actions.appendChild(createDeleteButton(id++)); //see createDeleteButton at bottom 
    document.getElementById('new-grocery-item').value = ''; 
    document.getElementById('other-text').value = ''; 
}); 

//Function to cerate the delete button 
function createDeleteButton(id) {
    let btn = document.createElement('button'); 
    btn.className = 'btn btn-primary'; 
    btn.id = id; 
    btn.innerHTML = 'Delete'; 
    btn.onclick = () => {
        console.log(`Delete row with id: item-${id}`); 
        let elementToDelete = document.getElementById(`item-${id}`); 
        elementToDelete.parentNode.removeChild(elementToDelete); 
    }; 
    return btn; 
}

//This function takes the radio button selected and add it to the second row of the table. 
//This function is needed because there are mulitple selections and we need to find the one
//the user clicked. 
function radioButton() {
    let store = ''; 
    if (document.getElementById('frys').checked) {
        store = document.getElementById('frys').value;
    } else if (document.getElementById('traderJoes').checked) {
        store = document.getElementById('traderJoes').value;
    }  else if (document.getElementById('costco').checked) {
        store = document.getElementById('costco').value;
    } else if (document.getElementById('wholeFoods').checked) {
        store = document.getElementById('wholeFoods').value;
    } else {
            store = document.getElementById('other-text').value; 
        }
   return store; 
}