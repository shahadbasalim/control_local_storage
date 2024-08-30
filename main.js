let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach((span) => {
    span.addEventListener("click", (e) => {
        if (e.target.classList.contains("check-item")) {
            checkItem();
        }
        if (e.target.classList.contains("add-item")) {
            addItem();
        }
        if (e.target.classList.contains("delete-item")) {
            deleteItem();
        }
        if (e.target.classList.contains("show-item")) {
            showItem();
        }
    })
})
function checkInput() {
    results.innerHTML = "input can't be empty";
}
function checkItem() {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) {
            results.innerHTML = `Found local storage item called <span>${theInput.value}</span>`;
        } else {
            results.innerHTML = `No local storage item with the name <span>${theInput.value}</span>`;
        }
    } else {
        checkInput();
    }
}
function addItem() {
    if (theInput.value !== '') {
        localStorage.setItem(theInput.value, "Test");
        results.innerHTML = `Local storage item <span>${theInput.value}</span> added`;
        theInput.value = '';
    } else {
        checkInput();
    }    
}
function deleteItem() {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value);    
            results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Deleted`;    
            theInput.value = '';
        } else {    
            results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;    
        }
    } else {    
        checkInput();    
    }
}
function showItem() {
    if (localStorage.length) {
        results.innerHTML = '';    
        for (let [key, value] of Object.entries(localStorage)) {    
            results.innerHTML += `<span class="keys">${key}</span>`;    
        }    
    } else {    
        results.innerHTML = `Local Storage Is Empty`;   
    }
}