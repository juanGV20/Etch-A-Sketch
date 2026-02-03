
const divContainer = document.querySelector('.container-divs')
let button = document.querySelector('button');

const createGrid = (size) => {
    let row;
    let cell; 

    size > 100 ? size = 100 : size < 2 ? size = 2 : size;
    
    for (let i = 0; i < size; i++) {
        row = document.createElement('div');
        row.className = 'row'
        divContainer.appendChild(row);
    }
    const rowDivs = document.querySelectorAll(".row");
    rowDivs.forEach((rowDiv) => {
        for (let rows = 0; rows < size; rows++) {
            cell = document.createElement("div");
            cell.className = "cell";
            rowDiv.appendChild(cell);
        }
    });
    hoverEfect();

}

const hoverEfect = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((celda) => {
        celda.addEventListener('mouseenter', adjustColor)
    })
}
createGrid(25);

function adjustColor(cell) {
    if (cell.target.className == "cell") {
        cell.target.style.backgroundColor = "orange";
        cell.target.style.opacity = "0.1";
        cell.target.classList.add("hovered");

    } else if (Number(cell.target.style.opacity) < 1) {
        let value = Number(cell.target.style.opacity); 
        value += 0.3;
        cell.target.style.opacity = value.toString();
    };
};