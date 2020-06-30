# Zadania #

1. Minimum na 3: 
  - w index.js odczytaj poprawnie z bazy danych ostatnie pięć wpisów i wyświetl je użytkownikowi
  - zaimplementuj logowanie, które po podaniu poprawnie loginu i hasła przenosi na /users, a po niepoprawnej próbie logowania pokazuje komunikat o błędnym loginie lub haśle
  - zaimplementuj wyświetlanie na stronie /users wpisów śledzonych użytkowników
  - zaimplementuj paginację na stronie /users
  - zaimplementuj wylogowywanie
2. Zaimplementuj szablony w pug, wykorzystaj dziedziczenie szablonów (Template Inheritance) dołącz CSS w którym będzie się pojawiała stopka (użyj odpowiedniego tagu z HTML) zawierająca napis: "Imię, Nazwisko egzamin WWW 2019 edycja 1". Stopka powinna się nie wyświetlać, jeśli szerokość strony jest poniżej 480px (+0.5)
3. Zamień kod na TypeScript, zainstaluj konieczne pakiety, przygotuj linter do uruchomienia a w pliku README.md opisz w jaki sposób uruchamiasz linter (+0.5) 
4. Zaimplementuj odporne na CSRF (użyj csurf) i SQL injection formularz dodawania wpisu i usuwania wpisu, dodawać i usuwać wpisy powinni móc tylko nauczyciele, po dodaniu wpisu powinno się automatycznie ustawić pole timestamp (+0.5)
5. Zaimplementuj, pamiętając o współbieżności, ograniczenie pozwalające jednemu nauczycielowi dodać jedynie jeden wpis na minutę.

# Uwagi #

1. Nie wolno modyfikować struktury bazy danych
2. Nie wolno używać bibliotek CSS, cały CSS należy napisać samodzielnie
3. Imię i Nazwisko z punktu 2 to oczywiście dane osobowe zdającego
