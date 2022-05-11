// Call pokemon list
let elPocemonList = $(".js-pocemon-list");

// Call form elements
let elTypeForm = $(".js-form");
let elTypeSelect = $(".js-form-select", elTypeForm);

// Create pokemon arrays
let sizeArray = ["Height", "Weight"];
let infoArray = ["Pokemon type", "Pokemon weaknesses"];
let typeArray = ["All", "Normal", "Grass", "Poison", "Fire", "Ice", "Flying","Dragon", "Water", "Bug", "Electric", "Ground", "Psychic", "Fighting", "Rock", "Ghost",]


// Display options to select
function addOptionTooSelect () {
  for (let i = 0; i < typeArray.length; i++) {
    let newTypeOption = createElement("option", "select-option", typeArray[i]);
    newTypeOption.value = typeArray[i];
    elTypeSelect.append(newTypeOption);
  }
}
addOptionTooSelect ()


// Display All pocemons on screen function
function displayPocemons (i) {
    // Pokemon infos array
    let pocemonSize = [pokemons[i].height, pokemons[i].weight];
    let pocemonInfo = [pokemons[i].type, pokemons[i].weaknesses]


    // Create pokemon card
    let newListItem = createElement("li", "pocemon__card card p-3 border-0 mb-4");
    elPocemonList.appendChild(newListItem);


    // Create pokemon img
    let newItemImg = createElement("img", "pocemon__card-img mx-auto mt-2");
    newItemImg.setAttribute("src", pokemons[i].img)
    newItemImg.width = "200";
    newListItem.append(newItemImg);


    // Create pokemon content
    let newCardContent = createElement("div", "pocemon__card-content card-body");
    newListItem.append(newCardContent);

    // Pokemon name
    let elPocemonName = createElement("h4", "card-title fw-bold", pokemons[i].name);
    newCardContent.append(elPocemonName);


    // Create infos box about pokemon
    let newAboutBox = createElement("div", "card-about bg-light p-2 rounded-3");
    newCardContent.append(newAboutBox);

    // Create loop and display infos about pokemon sizes
    let newListAbout = createElement("ul", "list-group list-unstyled")
    newAboutBox.append(newListAbout);

    for (let j = 0; j < pocemonSize.length; j++) {
        let newAboutSpan = createElement("span", "fw-bold", `${sizeArray[j]}: `);
        let newAboutResSpan = createElement("span", "", pocemonSize[j])
        let newListAboutItem = createElement("li", "card-about-item  p-2");
        newListAbout.append(newListAboutItem);
        newListAboutItem.append(newAboutSpan, newAboutResSpan)
    }

    // Create loop and display infos about pocemon type and weaknesses
    let newListInfo = createElement("ul", "list-unstyled");
    newAboutBox.append(newListInfo);

    for (let i = 0; i < pocemonInfo.length; i++) {
      let newListInfoItem = createElement("li", "card-about-item p-2");
      let newListInfoHeading = createElement("h6", "fw-bold", `${infoArray[i]}`);
      let newInfoItemList = createElement("ul", "pocemon__info list-unstyled d-flex flex-wrap justify-content-start");
      newListInfo.append(newListInfoItem);
      newListInfoItem.append(newListInfoHeading, newInfoItemList);
      for (let j = 0; j < pocemonInfo[i].length; j++) {
        let newInfoListItem = createElement("li", "me-2", pocemonInfo[i][j]);
        newInfoItemList.append(newInfoListItem);
      }
    }
}

// Display function all pocemons if select value is "All"
function displayAllPocemons () {
  if(elTypeSelect.value == "All") {
    // Pokemons array loop
    for (let i = 0; i < pokemons.length; i++) {
        displayPocemons (i);
    }
  }
}
displayAllPocemons ()


// Display function pocemons' types if select value is other
function displayPocemonTypes (i) {
  if(pokemons[i].type.includes(elTypeSelect.value)){
    displayPocemons(i);
  }
}

// Listen select element to change pokemons type and display types
elTypeSelect.addEventListener("change", function(e){
  elPocemonList.innerHTML = ""
  // Pokemons array loop
  if (elTypeSelect.value == "All") {
    displayAllPocemons ()
  } else{
    for (let i = 0; i < pokemons.length; i++) {
      displayPocemonTypes (i);
    }
  }
})