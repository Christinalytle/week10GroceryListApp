document.getElementById('p-button').addEventListener('click', () => {
    var parent = document.getElementById('p-div'); 
    var newParagraph = document.createElement('p'); 
    newParagraph.innerHTML = document.getElementById('p-input').value; 
    parent.appendChild(newParagraph); 
    document.getElementById('p-input').value = ''; 

})