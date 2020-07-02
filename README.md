# Ogólnie #

Dostajesz niedokończoną aplikację oraz dokończoną bazę danych (`baza.db` i `data.sql` to te same dane). Po uruchomieniu aplikacja "prawie działa". Obejrzyj
kod aplikacji i wykonaj zadania. Każdy, kto chce zdać, musi wykonać zadanie na 3, a poozstałe punkty są mocno niezależne od siebie i wykonanie każdego z nich
podnosi ocenę o pół stopnia.

Wolno pisać w TypeScript, ale nie dodaje to punktów.

# Zadania #

## Minimum na 3 ##

- w index.js odczytaj poprawnie z bazy danych ostatnie pięć wpisów i wyświetl je użytkownikowi
- zaimplementuj logowanie (na stronie głównej), które po podaniu poprawnie loginu i hasła przenosi na /users, a po niepoprawnej próbie logowania pokazuje komunikat o błędnym loginie lub haśle (również na stronie głównej)
- zaimplementuj wyświetlanie na stronie /users wpisów śledzonych użytkowników
- zaimplementuj paginację na stronie /users
- zaimplementuj wylogowywanie
  
## Pug +0.5 ##

Zaimplementuj szablony w Pug:
- wykorzystaj dziedziczenie szablonów (Template Inheritance), 
- dołącz CSS, 
- na każdej ze stron powinna pojawiać się stopka (użyj odpowiedniego tagu z HTML) zawierająca napis: "Imię, Nazwisko egzamin WWW 2019 edycja 1"
- stopka powinna się nie wyświetlać, jeśli szerokość strony jest poniżej 480px 

## JSON +0.5 ##

Zaimplementuj dynamiczne ładowanie wpisów wyświetlanych na stronie głównej: zamiast być częścią szablonów powinny być one przesyłane jako JSON.
Implementacja powinna zawierać JS uruchamiany po stronie przeglądarki oraz inny JS uruchamiany po stronie serwera.

## Formularz +0.5 ##

Zaimplementuj odporne na CSRF (użyj csurf) i SQL injection formularze: dodawania wpisu i usuwania własnych wpisów (`/my_entries` w `users.js`), dodawać i usuwać 
wpisy powinni móc tylko nauczyciele, przy dodawaniu wpisu powinno się automatycznie na bieżący czas ustawić pole timestamp  (+0.5)

## Selenium +0.5 ##

Przygotuj testy w selenium (+0.5). Testy powinny być przygotowane do następujących podpunktów z zadania na 3: 
- czy wyświetla się pięć najnowszych wpisów na stronie głównej
- czy po złym haśle jest komunikat o błędzie, a po poprawnym jest się zalogowanym
- czy działa wylogowanie

Do testów dołącz odpowiedni skrypt w package.json (założenie bazy, uruchomienie i zamknięcie serwera, ...) 

## Podsumowanie ##

Opisz w pliku README.md co zrobiłeś/aś (każdy podpunkt 2-3 zdania)

# Uwagi #

1. Nie wolno modyfikować struktury bazy danych
2. Nie wolno używać bibliotek CSS, cały CSS należy napisać samodzielnie
3. Podobnie nie wolno używać bibliotej JS/TS, cały JS/TS należy napisać samodzielnie
4. Imię i Nazwisko z punktu 2 to oczywiście dane osobowe zdającego/zdającej
5. Oddać należy zzipowane (plik zip) katalogi `public`, `routes`, `views` oraz pliki `README.md`, `package.json`, `app.*` i ewentualne dodatkowe pliki z danymi do selenium. Nie powinno się oddawać `node_modules`. Zip powinien mieć sporo mniej niż 1 MB.

