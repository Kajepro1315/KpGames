
//tablica na wyrazy
 
const wyrazy = [
    'giganci', 'funkcje','wisielec', 'giganci programowania', 'komputer', 'program', 'konsola', 'klawiatura', 'mysz', 'ekran',
    'serwer', 'internet', 'przeglądarka', 'aplikacja', 'debugowanie', 'zmienna', 'pętla', 'warunek', 'tablica', 'obiekt',
    'klasa', 'metoda', 'argument', 'parametr', 'string', 'liczba', 'boolean', 'null', 'undefined', 'słownik',
    'biblioteka', 'moduł', 'import', 'eksport', 'baza danych', 'zapytanie', 'algorytm', 'sortowanie', 'rekurencja',
    'telefon', 'tablet', 'drukarka', 'słuchawki', 'mikrofon', 'kamera', 'głośnik', 'telewizor', 'pilot', 'ładowarka',
    'jabłko', 'gruszka', 'banan', 'truskawka', 'winogrono', 'malina', 'borówka', 'pomarańcza', 'cytryna', 'arbuz',
    'stół', 'krzesło', 'biurko', 'łóżko', 'sofa', 'regał', 'szafa', 'półka', 'dywan', 'zasłona',
    'lampa', 'żarówka', 'kabel', 'gniazdko', 'okno', 'drzwi', 'klamka', 'ściana', 'sufit', 'podłoga',
    'kubek', 'talerz', 'łyżka', 'widelec', 'nóż', 'garnek', 'patelnia', 'czajnik', 'mikrofala', 'lodówka',
    'pies', 'kot', 'ptak', 'ryba', 'chomik', 'królik', 'koń', 'krowa', 'owca', 'świnia',
    'las', 'drzewo', 'liść', 'kwiat', 'trawa', 'krzew', 'ziemia', 'skała', 'woda', 'rzeka',
    'morze', 'jezioro', 'góry', 'plaża', 'piasek', 'deszcz', 'śnieg', 'słońce', 'chmura', 'wiatr',
    'szkoła', 'uczeń', 'nauczyciel', 'lekcja', 'tablica', 'zeszyt', 'długopis', 'ołówek', 'linijka', 'plecak',
    'muzyka', 'piosenka', 'artysta', 'zespół', 'instrument', 'gitara', 'fortepian', 'perkusja', 'skrzypce', 'flet',
    'film', 'aktor', 'kamera', 'kino', 'reżyser', 'scena', 'dialog', 'fabula', 'napisy', 'efekty',
    'książka', 'autor', 'czytelnik', 'strona', 'okładka', 'rozdział', 'słowo', 'zdanie', 'biblioteka', 'wydawnictwo',
    'samochód', 'rower', 'autobus', 'pociąg', 'tramwaj', 'hulajnoga', 'motor', 'samolot', 'statek', 'ciężarówka',
    'miasto', 'wieś', 'ulica', 'droga', 'plac', 'park', 'sklep', 'dom', 'blok', 'most',
    'sport', 'piłka', 'boisko', 'bramka', 'zawodnik', 'mecz', 'trener', 'kibic', 'wynik', 'punkt',
    'człowiek', 'dziecko', 'kobieta', 'mężczyzna', 'babcia', 'dziadek', 'matka', 'ojciec', 'siostra', 'brat',
    'emocje', 'radość', 'smutek', 'złość', 'strach', 'miłość', 'nienawiść', 'duma', 'tęsknota', 'wstyd',
    'czas', 'godzina', 'minuta', 'sekunda', 'dzień', 'noc', 'tydzień', 'miesiąc', 'rok', 'kalendarz',
    'pogoda', 'upał', 'mróz', 'burza', 'mróz', 'mgła', 'rosa', 'grad', 'cisza', 'hałas',
    'język', 'polski', 'angielski', 'niemiecki', 'francuski', 'hiszpański', 'włoski', 'ukraiński', 'japoński', 'chiński',
    'komedia', 'dramat', 'horror', 'kryminał', 'fantasy', 'przygoda', 'science fiction', 'thriller', 'animacja', 'dokument',
    'zegar', 'budzik', 'kalendarz', 'planer', 'notes', 'notatka', 'kartka', 'karton', 'taśma', 'klej',
    'papier', 'nożyczki', 'spinacz', 'koperta', 'segregator', 'folder', 'archiwum', 'dysk', 'pendrive', 'chmura',
    'hasło', 'login', 'konto', 'profil', 'ustawienie', 'system', 'aktualizacja', 'plik', 'folder', 'programowanie',
    'gra', 'gracz', 'zadanie', 'misja', 'poziom', 'punkty', 'ranking', 'bonus', 'boss', 'eksploracja',
    'kolor', 'czerwony', 'zielony', 'niebieski', 'żółty', 'biały', 'czarny', 'szary', 'brązowy', 'pomarańczowy',
    'kuchnia', 'łazienka', 'pokój', 'sypialnia', 'salon', 'korytarz', 'piwnica', 'strych', 'garaż', 'balkon',
    'makaron', 'ryż', 'ziemniaki', 'chleb', 'masło', 'jajko', 'ser', 'szynka', 'ogórek', 'pomidor',
    'cukier', 'sól', 'pieprz', 'miód', 'czekolada', 'ciastko', 'ciasto', 'lody', 'woda', 'sok',
    'kawa', 'herbata', 'napój', 'kieliszek', 'szklanka', 'butelka', 'termos', 'dzbanek', 'bar', 'restauracja',
    'apteka', 'szpital', 'lekarz', 'pielęgniarka', 'tabletka', 'syrop', 'zastrzyk', 'badanie', 'rentgen', 'choroba'
];
  


//tablica do adresów grafik
const tabObrazki = [ // od 0 do 10
  '_thumbnails_0.png',
  '_thumbnails_1.png',
  '_thumbnails_2.png',
  '_thumbnails_3.png',
  '_thumbnails_4.png',
  '_thumbnails_5.png',
  '_thumbnails_6.png',
  '_thumbnails_7.png',
  '_thumbnails_8.png',
  '_thumbnails_9.png',
  '_thumbnails_10.png'
];
 
// losowy wyraz z tablicy wyrazy
const wyraz = wyrazy[Math.floor(Math.random() * wyrazy.length)];
 
 
// tablica z odpowiedziami ktore zawiera przysłoniete hasło
const odpowiedzi =[];
 
//zmienna informująca czy po podaniu literki udało sie trafić
let czyTrafiony = false;
 
//szanse w grze, musi być wartośc tyle ile grafik
let szanse = 11;
 
//tablica przechowująca użyte litery
const uzyte=[];


//spacje
let spacje = 0;
 

//przygotowanie do zakrycia wylosowanego wyrazu
for (let i = 0; i<wyraz.length; i++){
  if (wyraz[i] == " ") {
  odpowiedzi [i] = "|"
    spacje++;
  } else {
  
  odpowiedzi[i] = '_';
    
  }
};
 

//zmienna przechowującas info ile zostało liter do odgadnięcia 
let pozostaleLitery = wyraz.length - spacje;

//wyświetlanie tablicy zasłonietego hasła, każdy element w tablicy czyli _ łączymy ze spacją
document.getElementById('gra').textContent = odpowiedzi.join(" ");
 
 
//zdarzenie na klikniecie przycisku ok
document.getElementById("ok").addEventListener('click', function(){
  //przed każdym nowym zatwierdzeniem literki ustawiamy zmienna na false
  czyTrafiony = false;
 
  //czyścimy wyswietlanie kkomunikatu
  document.getElementById('komunikat').textContent = "";
 
  //zmienna przechowująca literke gracza
  
  const strzal = document.getElementById('litera').value.toLowerCase();
  
  
 
  document.getElementById('litera').value = "";
 
  if(strzal.length == 0){
    document.getElementById("komunikat").textContent = "Proszę, podaj jedną literkę";
  }
  
  else if (uzyte.includes(strzal)){
    
    document.getElementById("komunikat").textContent = "Ta litera została już podana" ;
    
  }
  
  else {
    
    uzyte.push(strzal);
    
    for (let j = 0; j<wyraz.length; j++){
      if(wyraz[j] == strzal){
        czyTrafiony =true;
        odpowiedzi[j] = strzal; //odsłaniamy litery w haśle
        pozostaleLitery--;
 
        //aktualizacja wyswietlanego hasła
        document.getElementById('gra').textContent = odpowiedzi.join(" ");
      }
    }
 
    //zwycięstwo
    if (pozostaleLitery == 0){
      document.getElementById("ok").disabled = true;
      document.getElementById("litera").disabled = true;
      document.getElementById("komunikat").textContent = "Brawo odgadnięte hasło to: " + wyraz;
    }
 
    //utrata szansy, rysowanie wisielca
    if (czyTrafiony == false){
      ustawObrazek();
      szanse--;
 
      //przegrana
      if (szanse==0){
        document.getElementById("ok").disabled = true;
        document.getElementById("litera").disabled = true;
        document.getElementById("komunikat").textContent = "Przegrana odgadnięte hasło to: " + wyraz;
      }
    }
  }
});   
 
function ustawObrazek(){
  //wybieramy z tablicy odpowiedni adres zdjecia i ustawiamy jako source(src) obrazka 
  document.getElementById('wisielec').src=tabObrazki[szanse-1];
  //wyświeltanie obrazka
  document.getElementById('wisielec').style.display='block';
}
 
// reset
 
 
document.getElementById("reset").addEventListener("click", function(){
  //odświerzenie
  window.location.reload();
});



 
