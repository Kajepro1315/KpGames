const selectElement = document.getElementById("mainSELECT");

const kosciElement = document.getElementById("elementKosci");
const wisielecElement = document.getElementById("elementWisielec");
const PiotrusElement = document.getElementById("elementPiotrus");

function SelectFun() {
    const selectedValue = selectElement.value;
    console.log("Wybrano:", selectedValue);

    switch (selectedValue) {
        case "Kosci":
            kosciElement.style.display = "flex";
            wisielecElement.style.display = "none";
            PiotrusElement.style.display = "none";
            console.log("Kosci");
            break;
        case "Karty":
            kosciElement.style.display = "none";
            wisielecElement.style.display = "none";
            PiotrusElement.style.display = "flex";
            console.log("Karty");
            break;
        case "Komputerowe":
            kosciElement.style.display = "none";
            wisielecElement.style.display = "flex";
            PiotrusElement.style.display = "none";
            console.log("Komputerowe");
            break;
        case "clasic":
            kosciElement.style.display = "flex";
            wisielecElement.style.display = "flex";
            PiotrusElement.style.display = "flex";
            console.log("Inne");
            break;
        default:
            console.error("Nieprawidłowa opcja");
    }
}

selectElement.addEventListener("change", SelectFun);
