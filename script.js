let input = document.querySelector("input");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");


btn.addEventListener("click", () => {
    let inputValue = input.value;
    fet(inputValue);
});


async function fet(inputValue) {
    const response = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
    const data = await response.json();
    const car = data.filter((car) => car.codigo === inputValue);
    displayCars(car.slice(0, inputValue));
}


function displayCars(cars) {
    h1.innerHTML = "";
    
    cars.forEach(car => {
        const carInfo = document.createElement("div");
        carInfo.innerHTML = `
            <h2>${car.nome}</h2>
            <p>Código: ${car.codigo}</p>
        `;
        h1.appendChild(carInfo);
    });
}