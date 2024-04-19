function guess(char) {
    //zmieniamy wielkość znaku/ów na wielkie litery
    char = char.toUpperCase();
    //piszemy do konsoli jaki klawisz został wciśnięty
    console.log("Wcisnąłeś klawisz " + char);
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
    password.split('').forEach(char => {
        //jeżeli litera hasła (char) znajduje się na liście już sprawdzanych
        if(tested.includes(char))
            hiddenPassword += char;
        //jeżeli nie
        else
            hiddenPassword += '_'
    });
    //wyświetl na stronie
    document.getElementById('password').innerHTML = hiddenPassword;
    if(!hiddenPassword.includes("_")){
        setTimeout(() => {
            alert("Gratki - wygrałeś!");
            location.reload();
        }, 1000)
        
    }
}

function createButton(char) {
    //funkcja tworząca w dokumencie guzik z podanym symbolem (char)

    //utwórz guzik w pamięci
    const button = document.createElement('button');
    //zmień jego etykietkę na podany znak
    button.innerText = char;
    //dopnij do niego funkcję buttonPressed
    button.addEventListener("click", buttonPressed);
    //umieść go w dokumencie
    document.getElementById("keyboard").appendChild(button);
}
function buttonPressed(event) {
    let char = event.srcElement.innerText;
    guess(char);
}

function displayKeyboard() {
    //zdefiniuj wszystkie możliwe litery na klawiaturze
    let chars = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUVWXYZŻŹ";
    //podziel je na jednoelementową tablicę (split()) i dla każdego
    //elementu wywołaj funkcję createButton
    chars.split('').forEach(char => {
        createButton(char);
    });
}

//definiujemy hasło do odgadnięcia
let password = "DUPA";
//definiujemy zmienną do przechowywania wszystkich próbowanych liter
let tested= "";
//definiujemy sobie licznik nietrafionych prób
let errorCount = 0;
//pokaż hasło (zakryte) na ekranie
showPassword();


//pokaż klawiaturę
displayKeyboard();