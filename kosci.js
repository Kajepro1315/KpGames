let punkty = [];

let punktyRundy;

let aktualnyGracz;

let czyMoznaGrac;

let punktyMax;

const obrazki = [
  "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/8fbc579f-3346-47a0-abbc-945a83abb962_kosc-1.png?v=1746542924074",
  "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/8fbc579f-3346-47a0-abbc-945a83abb962_kosc-2.png?v=1746542918187",
  "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/8fbc579f-3346-47a0-abbc-945a83abb962_kosc-3.png?v=1746542912661",
  "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/8fbc579f-3346-47a0-abbc-945a83abb962_kosc-4.png?v=1746542907214",
  "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/8fbc579f-3346-47a0-abbc-945a83abb962_kosc-5.png?v=1746542896939",
  "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/8fbc579f-3346-47a0-abbc-945a83abb962_kosc-6.png?v=1746345999536"
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