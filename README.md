# Egzamin WWW 2019 termin drugi #

Zadanie należy oddać na moodle!

# Wyjaśnienia #

- można użyć `better-sqlite3`
- można dodać `tsconfig.json` i `tslint.json`, można użyć `express-session` i `connect-sqlite3`
- w wersji z ts-node można nie używać `bin/www`
- w wersji z TypeScriptem można odpalać przez ts-node (proszę pamiętać o dodaniu zależności w `packages.json`)
- jak ktoś robi wersję z JSON, to nie musi oddawać wersji pośredniej
- biblioteki typu @types można zainstalować


# Ogólnie #

Egzamin trwa 2020-09-08 od **9:00** do **13:45**. Czas od 13:45 do 14:00 należy poświęcić na wgrywanie wyników do moodle. Podczas egzaminu jestem na #www-2020 na rokecie.
Na rockecie i tutaj będę publikował wyjaśnienia.

Dostajesz niedokończoną aplikację oraz dokończoną bazę danych (`baza.db` i `data.sql` to te same dane). Po uruchomieniu aplikacja "prawie działa". Obejrzyj
kod aplikacji i wykonaj zadania. Każdy, kto chce zdać, musi wykonać zadanie na 3, a poozstałe punkty są mocno niezależne od siebie i wykonanie każdego z nich
podnosi ocenę o pół stopnia.

Wolno pisać w TypeScript, ale nie dodaje to punktów.



## Zawartość bazy danych ##

Tabele:
- `osoba` - loginy, hasła (niezaszyfrowane) osób mających konto w naszym serwisie oraz informacje o tym czy osoba jest nauczycielem czy nie
- `pytanie` - pytanie, które zadał uczeń, jego login (klucz zewnętrzny), oraz czas dodania wpisu (dla uproszczenia przyjmujemy, że czas dodania wpisu jest kluczem)
- `odpowiedz` - odpowiedz nauczyciela na pytanie ucznia

W ramach zadania powstanie serwer, który będzie modyfikował jedynie zawartość tabeli `odpowiedz`, czyli nie będzie można np. dodawać użytkowników ani zadawać nowych pytań

Nie należy modyfikować struktury bazy danych (np dodawać pól do tabel, ani zmieniać typów, ...)

# Zadania #

## Minimum na 3 ##

- w `index.js` odczytaj poprawnie z bazy danych najnowsze (według pola timestamp) trzy pytania i wyświetl je użytkownikowi wraz z informacją o liczbie odpowiedzi na każde z pytań
- przygotuj paginację na stronie `index.js`
- zaimplementuj logowanie (na stronie głównej) oraz wylogowywanie, obydwie czynności **tylko dla nauczycieli**, uczniowie się ani nie logują ani nie wylogowują
- zaimplementuj stronę `/pytanie`, która wyświetla treść pytania oraz wszystkie odpowiedzi
  
## Pug +0.5 ##

Zaimplementuj szablony w Pug:
- wykorzystaj dziedziczenie szablonów (Template Inheritance), 
- dołącz CSS, 
- na każdej ze stron powinna pojawiać się stopka (użyj odpowiedniego tagu z HTML) zawierająca napis: "Imię, Nazwisko egzamin WWW 2019 edycja 2"
- stopka powinna się nie wyświetlać, jeśli szerokość strony jest poniżej 480px 

## JSON +0.5 ##

Zaimplementuj dynamiczne ładowanie wpisów wyświetlanych na stronie z pytaniem: zamiast być częścią szablonów powinny być one przesyłane jako JSON.
Implementacja powinna zawierać JS uruchamiany po stronie przeglądarki oraz inny JS uruchamiany po stronie serwera.

## Formularz +0.5 ##

Zaimplementuj odporne na CSRF (użyj csurf) i SQL injection formularze: dodawania wpisu i usuwania własnych wpisów (`/pytanie` w `index.js`), dodawać i usuwać 
odpowiedzi powinni móc tylko nauczyciele.

## Selenium +0.5 ##

Przygotuj testy w selenium. Testy powinny być przygotowane do następujących podpunktów z zadania na 3: 
- czy wyświetla się trzy najnowszye wpisów na stronie głównej
- czy po złym haśle jest komunikat o błędzie, a po poprawnym jest się zalogowanym
- czy działa paginacja

Do testów dołącz odpowiedni skrypt w package.json (założenie bazy, uruchomienie i zamknięcie serwera, ...) 

## Podsumowanie ##

Opisz w pliku README.md co zrobiłeś/aś (każdy podpunkt 2-3 zdania)

# Uwagi #

1. Nie wolno modyfikować struktury bazy danych
2. Nie wolno używać bibliotek CSS, cały CSS należy napisać samodzielnie
3. Podobnie nie wolno używać bibliotej JS/TS, cały JS/TS należy napisać samodzielnie
4. Imię i Nazwisko z punktu 2 to oczywiście dane osobowe zdającego/zdającej
5. Oddać należy zzipowane (plik zip) katalogi `public`, `routes`, `views` oraz pliki `README.md`, `package.json`, `app.*` i ewentualne dodatkowe pliki z danymi do selenium. Nie powinno się oddawać `node_modules`. Zip powinien mieć sporo mniej niż 1 MB.


GLHF
