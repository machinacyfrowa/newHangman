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
    //dopisz do listy już sprawdzonych obecną literę
    tested += char
    //deklarujemy zmienną found, która zawiera informację
    //czy znak istniej w haśle
    //zmienna będzie miała wartość true lub false (bool)
    let found = password.includes(char);
    //jeśli znalazłeś
    if(found)
    {
        //wypisz od konsoli
        console.log("Trafiony!");
        showPassword();
    }
    else
    {
        //jeśli nie znalazłeś też napisz 
        console.log("Pudło!");
        //zwiększ licznik błędów o 1
        errorCount++;
        //podmień obraz na kolejny
        //początek ścieżki jest zawsze taki sam: "img/"
        //potem wpisujemy numer obrazka
        //i kończymy ".png"
        document.getElementById("hangman").src = 
                    "img/" + errorCount + ".png";
        //jeśli ilość błędów jest równa lub większa od 7
        if(errorCount >= 6) {
            window.alert("Przegrałeś!")
        }
    }
}
function showPassword() {
    //funkcja wypisuje na ekranie hasło z zachowaniem ukrycia
    //znaków, które nie zostały odgadnięte
    //przygotuj zmienną na częściowo lub w całości ukryte hasło
    let hiddenPassword = "";
    //używając pętli foreach przejdz przez całe jawne hasło
    password.split().forEach(char => {
        //jeżeli litera hasła (char) znajduje się na liście już sprawdzanych
        if(tested.includes(char))
            hiddenPassword += char;
        //jeżeli nie
        else
            hiddenPassword += '_'
    });
    //wyświetl na stronie
    document.getElementById('password').innerHTML = hiddenPassword;
}

//definiujemy hasło do odgadnięcia
let password = "DUPA";
//definiujemy zmienną do przechowywania wszystkich próbowanych liter
let tested= "";
//definiujemy sobie licznik nietrafionych prób
let errorCount = 0;
//pokaż hasło (zakryte) na ekranie
showPassword();
//podpinamy funkcję do zdarzenia
//jeśli zmodyfikujemy zawartość pola input o id "guessedChar"
//to uruchomi się funkcja o nazwie guess
document.getElementById("guessedChar").addEventListener("input", guess)