function guess() {
    //deklarujemy zmienną char i zapisujemy do niej zawartość
    //pola input (w założeniu literę)
    let char = document.getElementById("guessedChar").value;
    //zmieniamy wielkość znaku/ów na wielkie litery
    char = char.toUpperCase();
    //piszemy do konsoli jaki klawisz został wciśnięty
    console.log("Wcisnąłeś klawisz " + char);
    //resetuje pole input do stanu poczatkowego
    document.getElementById("guessedChar").value = "";
    //deklarujemy zmienną found, która zawiera informację
    //czy znak istniej w haśle
    //zmienna będzie miała wartość true lub false (bool)
    let found = password.includes(char);
    //jeśli znalazłeś
    if(found)
        //wypisz od konsoli
        console.log("Trafiony!");
    else
        //jeśli nie znalazłeś też napisz 
        console.log("Pudło!");
}

//definiujemy hasło do odgadnięcia
let password = "DUPA";
//podpinamy funkcję do zdarzenia
//jeśli zmodyfikujemy zawartość pola input o id "guessedChar"
//to uruchomi się funkcja o nazwie guess
document.getElementById("guessedChar").addEventListener("input", guess)