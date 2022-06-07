const createbutton = document.getElementById("createbutton");
const createDiv = document.getElementsByClassName("create");
const cardContainer = document.getElementById("cards");
const createForm = document.getElementById("createForm");
const portal = document.getElementById("portal");
const formsubmit = document.getElementById("formSubmit")

createbutton.addEventListener('click', showForm);

let newCards = [];
let cardNum = 0;


function showForm() {
        createForm.style.display = 'block';
}

function run_test(){
     
    let img = document.querySelector('input[name="charPic"]:checked').value;
    let name = document.getElementById('fname').value;
    let dimension = document.getElementById('dimension').value;
    console.log(name);
    console.log(dimension);
    console.log(img);

    var newCharacter = new character(name, dimension, img);
    
    newCards.push(newCharacter);
    console.log(newCharacter);
    createCard();
}


function createCard() {
    const insertCard = document.createElement("div");
    insertCard.classList.add("character");

    let cname = newCards[cardNum].name;
    let cdimension = newCards[cardNum].dimension;
    let cimg = newCards[cardNum].img;

    let source;
    let alt;

    switch(cimg) {
        case "rick":
            source = "../images/ricksanchez1.png";
            alt = "rick sanchez";
            break;
        case "morty":
            source = "../images/morty1.png";
            alt = "morty";
            break;
        case "summer":
            source = "../images/summer1.png";
            alt = "summer";
            break;
        case "beth":
            source = "../images/beth1.png";
            alt = "beth";
            break;
        case "jerry":
            source = "../images/jerry1.png";
            alt = "jerry";
            break;
        case "scaryterry":
            source = "../images/terry1.png";
            alt = "scary terry";
            break;

        default:
            source = "../images/portal.png";
            alt = "portal";
            cdimension = "unknown"
            cname = "Johane Doe"
    };

    console.log(source + " " + alt);
    
    let cardHtml =  `
            <img src="${source}" alt="${alt}" style="height: 300px; width:243px; border-radius: 5%;">
            <table>
                <tr>
                    <th style="">${cname}</th>
                </tr>
                <tr>
                    <td style="text-align: center;">${cdimension}</td>
                </tr>
            </table>
    `;

    insertCard.innerHTML = cardHtml;
    cardContainer.append(insertCard);
    cardNum++;
    console.log(cardNum);
    createForm.style.display = 'none';

    document.querySelector('input[name="charPic"]:checked').checked = false;
    document.getElementById('fname').value = "";
    document.getElementById('dimension').value = "";

}

function character(name, dimension, img) {
    this.name = name;
    this.dimension = dimension;
    this.img = img;
}
  