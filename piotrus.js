// // Podstawowa logika gry Piotruś

// // 🃏 Talia - pary i jeden "Piotruś"
// const karty = [
//   'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
//   'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H',
//   'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L',
//   'P' // Piotruś
// ];

// let talia = [];
// let gracz1 = [];
// let gracz2 = [];
// let odrzucone = [];

// let turaGracza1 = true;

// // 🔁 Tasowanie
// function tasuj(tablica) {
//   for (let i = tablica.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [tablica[i], tablica[j]] = [tablica[j], tablica[i]];
//   }
//   return tablica;
// }

// // 🧹 Usuwanie par
// function usunPary(reka) {
//   const paraMap = {};
//   const bezPar = [];

//   for (let karta of reka) {
//     if (paraMap[karta]) {
//       delete paraMap[karta];
//       odrzucone.push(karta);
//     } else {
//       paraMap[karta] = true;
//     }
//   }

//   return Object.keys(paraMap);
// }

// // 🎮 Inicjalizacja gry
// function start() {
//   talia = tasuj([...karty]);
//   gracz1 = [];
//   gracz2 = [];
//   odrzucone = [];

//   // Rozdaj karty na przemian
//   talia.forEach((karta, index) => {
//     if (index % 2 === 0) {
//       gracz1.push(karta);
//     } else {
//       gracz2.push(karta);
//     }
//   });

//   gracz1 = usunPary(gracz1);
//   gracz2 = usunPary(gracz2);

//   aktualizujUI();
// }

// // 🔄 Ruch jednego gracza
// function ruchGracza() {
//   if (gracz2.length === 0) return;

//   const index = Math.floor(Math.random() * gracz2.length);
//   const wybrana = gracz2.splice(index, 1)[0];

//   gracz1.push(wybrana);
//   gracz1 = usunPary(gracz1);

//   turaGracza1 = false;
//   setTimeout(ruchKomputera, 1000);
//   aktualizujUI();
// }

// // 🤖 Komputer wybiera kartę
// function ruchKomputera() {
//   if (gracz1.length === 0) return;

//   const index = Math.floor(Math.random() * gracz1.length);
//   const wybrana = gracz1.splice(index, 1)[0];

//   gracz2.push(wybrana);
//   gracz2 = usunPary(gracz2);

//   turaGracza1 = true;
//   aktualizujUI();
//   sprawdzWygrana();
// }

// // ✅ Sprawdzenie stanu gry
// function sprawdzWygrana() {
//   if (gracz1.length === 1 && gracz1.includes('P')) {
//     alert("Przegrałeś! Został Ci Piotruś.");
//   } else if (gracz2.length === 1 && gracz2.includes('P')) {
//     alert("Wygrałeś! Komputer ma Piotrusia.");
//   }
// }

// // 🎨 UI – uproszczony update
// function aktualizujUI() {
//   const g1 = document.querySelectorAll('.imgKartaGracz-0');
//   const g2 = document.querySelectorAll('.imgKartaGracz-1');
//   const stos = document.getElementById('odlozoneP');

//   g1.forEach((el, i) => {
//     el.style.visibility = i < gracz1.length ? 'visible' : 'hidden';
//   });

//   g2.forEach((el, i) => {
//     el.style.visibility = i < gracz2.length ? 'visible' : 'hidden';
//   });

//   stos.textContent = odrzucone.length;
// }

// // 🖱️ Dodaj kliknięcie
// document.querySelectorAll('.karta-gracz-1').forEach(div => {
//   div.addEventListener('click', () => {
//     if (turaGracza1) ruchGracza();
//   });
// });

// // 🔁 Start gry po załadowaniu
// window.addEventListener('DOMContentLoaded', start);

const karty = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10", "11", "11", "12", "12", "P"];

const kartyImg = ["https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/1.png?v=1746982220286",
     "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/1.png?v=1746982220286",
      "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/2.png?v=1746982260480",
       "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/2.png?v=1746982260480",
        "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/3.png?v=1746982264470",
         "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/3.png?v=1746982264470",
          "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/4.png?v=1746982270858",
           "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/4.png?v=1746982270858",
            "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/5.png?v=1746982975785",
             "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/5.png?v=1746982975785",
              "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/6.png?v=1746982979125",
               "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/6.png?v=1746982979125",
                "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/7.png?v=1747064127973",
                 "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/7.png?v=1747064127973",
                  "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/8.png?v=1747064131546",
                   "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/8.png?v=1747064131546",
                    "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/9.png?v=1747064135765",
                     "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/9.png?v=1747064135765",
                      "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/10.png?v=1747064140469",
                       "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/10.png?v=1747064140469",
                        "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/11.png?v=1747064143902",
                         "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/11.png?v=1747064143902",
                          "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/12.png?v=1747064148755",
                           "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/12.png?v=1747064148755",
                            "https://cdn.glitch.global/0994abc0-5bb3-4035-a04a-6a966b4aef9e/13.png?v=174706415207"]

let talia = [];
let gracz0 = [];
let gracz1 = [];
let odrzucone = [];

let turaGracza0 = true;

function tasuj(tablica) {
     for (let i = tablica.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [tablica[i], tablica[j]] = [tablica[j], tablica[i]];
     }
     return tablica;
};

function usunPary(reka) {
     const ParyMap = {}; 
     const BezPar = [];

     for (let karta of reka) {
          if (ParyMap[karta]) {
               delete ParyMap[karta];
               odrzucone.push(karta);
          } else {
               paraMap[karta] = true;
          }
     }

     return Object.keys(ParyMap);
}
