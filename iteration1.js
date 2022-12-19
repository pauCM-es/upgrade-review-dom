//?  1.1 Basandote en el array siguiente, crea una lista ul > li 
//?  dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

function createList (listArray, placeElement) {
  const newUl = document.createElement("ul")
  listArray.forEach(itemList => {
    const newLi = document.createElement("li")
    newLi.textContent = itemList
    newUl.appendChild(newLi)
  })
  placeElement.append(newUl)
}

createList(countries, document.body)

//?  1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.querySelector(".fn-remove-me").remove()

//?  1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//?  en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divWithAttribute = document.querySelector("[data-function='printHere']");

createList(cars, divWithAttribute)

//?  1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
//?  h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const newDiv = document.createElement("div")
document.body.append(newDiv)

countries2.forEach(cntry => {
  const newH4 = document.createElement("h4")
  newH4.textContent = cntry.title
  const newImg = document.createElement("img")
  newImg.src = cntry.imgUrl

  newDiv.appendChild(newH4)
  newDiv.appendChild(newImg)
})

//?  1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//?  elemento de la lista.

//?  1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//?  elementos de las listas que elimine ese mismo elemento del html.

