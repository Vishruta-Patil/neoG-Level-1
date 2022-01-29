const inputChips = document.querySelector(".input-chips")
const dynamiChip = document.querySelectorAll(".dynamic-chip")
const addChip = document.querySelector(".add-chip");

const inputHandler = (e) => {
    return e.target.value;
    // console.log(e.target.value)
}

// const deleteHandler = () => {
//     dynamiChip.remove();
// }

// function deleteHandler(event) {
//     console.log("hari om")
//     const parentElem = event.target.parentNode;
//     console.log(parentElem)
//     parentElem.remove();
// }

inputChips.addEventListener('input', inputHandler);
// dynamiChip[0].addEventListener('click', deleteHandler)

// document. getElementById("remove"). onclick = function() {
//     document. getElementById("register"). remove();
//     }


function createTag(label) {
    const div = document.createElement('div');
    div.setAttribute('class', 'chip');
    div.innerHTML = label;

    const closeBtn = document.createElement('i');
    closeBtn.setAttribute('class', 'material-icons');
    
    closeBtn.innerHTML = "cancel"
    div.append(closeBtn);


    return div;
}

const createChipUsingInput = (e) => {
    if(e.key==='Enter') {
        const tag = createTag(inputChips.value);
        addChip.append(tag)
        inputChips.value = ''
    }
}

addChip.append(createTag("Shree Krishna"))
inputChips.addEventListener('keyup', createChipUsingInput)


