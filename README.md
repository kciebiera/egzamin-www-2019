# Zadania #

1. Minimum na 3: 
  - w index.js odczytaj poprawnie z bazy danych ostatnie pięć wpisów i wyświetl je użytkownikowi
  - zaimplementuj logowanie (na stronie głównej), które po podaniu poprawnie loginu i hasła przenosi na /users, a po niepoprawnej próbie logowania pokazuje komunikat o błędnym loginie lub haśle (również na stronie głównej)
  - zaimplementuj wyświetlanie na stronie /users wpisów śledzonych użytkowników
  - zaimplementuj paginację na stronie /users
  - zaimplementuj wylogowywanie
2. Zaimplementuj szablony w pug, wykorzystaj dziedziczenie szablonów (Template Inheritance), dołącz CSS, na każdej ze stron powinna pojawiać się stopka (użyj odpowiedniego tagu z HTML) zawierająca napis: "Imię, Nazwisko egzamin WWW 2019 edycja 1". Stopka powinna się nie wyświetlać, jeśli szerokość strony jest poniżej 480px (+0.5)
3. Zaimplementuj dynamiczne ładowanie wpisów wyświetlanych na stronie głównej: zamiast być częścią szablonów powinny być one przesyłane jako JSON i pojedyncze wywołanie powinno zwracać jedną stronę wpisów. Oprogramuj zmianę stron w kodzie uruchamianym w przeglądarce. Jeśli implementujesz też dodawanie wpisów, to pamiętaj, że liczba stron wpisów może się zmienić (+0.5)
4. Zaimplementuj odporne na CSRF (użyj csurf) i SQL injection formularz dodawania wpisu i usuwania wpisu (`my_entries` w `users.js`), dodawać i usuwać wpisy powinni móc tylko nauczyciele, przy dodawaniu wpisu powinno się automatycznie na bieżący czas ustawić pole timestamp  (+0.5)
5. Przygotuj testy w selenium (+0.5). Do testów dołącz odpowiedni skrypt w package.json (założenie bazy, uruchomienie i zamknięcie serwera, ...) Testy powinny być przygoowane do następujących podpunktów z zadania 1: 
  - czy wyświetla się pięć najnowszych wpisów na stronie głównej
  - czy po złym haśle jest komunikat o błędzie, a po poprawnym jest się zalogowanym
  - czy działa wylogowanie

 

# Uwagi #

1. Nie wolno modyfikować struktury bazy danych
2. Nie wolno używać bibliotek CSS, cały CSS należy napisać samodzielnie
3. Imię i Nazwisko z punktu 2 to oczywiście dane osobowe zdającego
4. Oddać powinieneś zzipowane (plik zip) katalogi `public`, `routes`, `views` oraz pliki `package.json`, `app.*` i ewentualne dodatkowe pliki z danymi do selenium.
