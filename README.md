# Zadania #

1. Minimum na 3: 
  - w index.js odczytaj poprawnie z bazy danych ostatnie pięć wpisów i wyświetl je użytkownikowi
  - zaimplementuj logowanie, które po podaniu poprawnie loginu i hasła przenosi na /users, a po niepoprawnej próbie logowania pokazuje komunikat o błędnym loginie lub haśle
  - zaimplementuj wyświetlanie na stronie /users wpisów śledzonych użytkowników
  - zaimplementuj paginację na stronie /users
  - zaimplementuj wylogowywanie
2. TODO: coś o CSS (+0.5)
3. Zamień kod na TypeScript (+0.5)
4. Zaimplementuj odporne na CSRF (użyj csurf) i SQL injection formularz dodawania wpisu i usuwania wpisu, dodawać i usuwać wpisy powinni móc tylko nauczyciele, po dodaniu wpisu powinno się automatycznie ustawić pole timestamp (+0.5)
5. FIXME (słaby pomysł): zaimplementuj, pamiętając o współbieżności, ograniczenie pozwalające jednemu nauczycielowi dodać jedynie jeden wpis na minutę.

# Uwagi #

1. Nie wolno modyfikować struktury bazy danych
