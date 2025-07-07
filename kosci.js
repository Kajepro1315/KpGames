let punkty = [];

let punktyRundy;

let aktualnyGracz;

let czyMoznaGrac;

let punktyMax;

const obrazki = [
  "kosc-1.png",
  "kosc-2.png",
  "kosc-3.png",
  "kosc-4.png",
  "kosc-5.png",
  "kosc-6.png"
];


nowagra();

function nowagra() {
  czyMoznaGrac = true;
  
  aktualnyGracz = 0;
  
  document.querySelector(".kosc").style.display= "none";
  
  punkty = [0,0];
  
  punktyRundy = 0;
  
  
  document.getElementById("wynik-0").textContent="0";
  document.getElementById("wynik-1").textContent="0";
  document.getElementById("aktualne-punkty-0").textContent="0";
   document.getElementById("aktualne-punkty-1").textContent="0";
  
  document.getElementById("nazwa-0").textContent="Gracz 1";
  document.getElementById("nazwa-1").textContent="Gracz 2";
  
  document.querySelector(".gracz-0-panel").classList.remove("zwyciestwo");
  document.querySelector(".gracz-1-panel").classList.remove("zwyciestwo");
  
  document.querySelector(".gracz-0-panel").classList.remove("aktywny");
  document.querySelector(".gracz-1-panel").classList.remove("aktywny");
  
  document.querySelector(".gracz-0-panel").classList.add("aktywny");
  
  document.querySelector(".punkty-max").style.display="block";
  punktyMax = document.getElementById("wartosc").value;
  
  if (punktyMax != 0) {
    czyMoznaGrac = true;
  };
};

document.querySelector(".btn-rzuc").addEventListener("click", function(){
    
  if(czyMoznaGrac) {
    document.querySelector(".punkty-max").style.display="none";
    punktyMax = document.getElementById("wartosc").value;
    const liczbaOczek = Math.floor(Math.random()*6)+1;
    const koscObrazek = document.querySelector(".kosc");
    koscObrazek.src = obrazki[liczbaOczek-1];
    koscObrazek.style.display="block";
    
    if(liczbaOczek != 1) {
      punktyRundy += liczbaOczek;
      document.querySelector("#aktualne-punkty-" + aktualnyGracz).textContent =punktyRundy;
    } else {
      nastepnyGracz();
    }
  }
  
});

function nastepnyGracz() {
  aktualnyGracz == 0 ? aktualnyGracz = 1 : aktualnyGracz = 0;
  
  punktyRundy = 0;
  
  document.getElementById("aktualne-punkty-0").textContent = "0";
  document.getElementById("aktualne-punkty-1").textContent = "0";
  
  document.querySelector(".gracz-0-panel").classList.toggle("aktywny");
  document.querySelector(".gracz-1-panel").classList.toggle("aktywny");
};

document.querySelector(".btn-zatrzymaj").addEventListener("click", function(){
  if (czyMoznaGrac) {
    punkty[aktualnyGracz] += punktyRundy;
    
    document.querySelector("#wynik-" + aktualnyGracz).textContent=punkty[aktualnyGracz];
    
    if (punkty[aktualnyGracz]>= punktyMax) {
      czyMoznaGrac = false;
      document.querySelector("#nazwa-"+aktualnyGracz).textContent = "Zwycięstwo!";
      document.querySelector(".kosc").style.display="none";
      
      document.querySelector(".gracz-"+ aktualnyGracz+"-panel").classList.add("zwyciestwo");
    } else {
      nastepnyGracz()
    }
  }
});



document.querySelector(".btn-nowa-gra").addEventListener("click", nowagra);
