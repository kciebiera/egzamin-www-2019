BEGIN;
CREATE TABLE osoba(login varchar NOT NULL PRIMARY KEY, haslo varchar NOT NULL, nauczyciel boolean NOT NULL);

INSERT INTO osoba VALUES ('nauczyciel_1', 'haslo_1', 1);
INSERT INTO osoba VALUES ('nauczyciel_2', 'haslo_2', 1);
INSERT INTO osoba VALUES ('nauczyciel_3', 'haslo_3', 1);
INSERT INTO osoba VALUES ('uczen_1', 'haslo_1', 0);
INSERT INTO osoba VALUES ('uczen_2', 'haslo_2', 0);
INSERT INTO osoba VALUES ('uczen_3', 'haslo_3', 0);

CREATE TABLE pytanie(login_osoby varchar NOT NULL, timestamp datetime NOT NULL PRIMARY KEY, tresc text NOT NULL);
INSERT INTO pytanie VALUES ('uczen_1', '2020-06-01 10:00:00', 'pytanie_1_1');
INSERT INTO pytanie VALUES ('uczen_1', '2020-06-02 10:00:00', 'pytanie_1_2');
INSERT INTO pytanie VALUES ('uczen_2', '2020-06-03 10:00:00', 'pytanie_2_1');
INSERT INTO pytanie VALUES ('uczen_2', '2020-06-04 10:00:00', 'pytanie_2_2');
INSERT INTO pytanie VALUES ('uczen_3', '2020-06-05 10:00:00', 'pytanie_3_1');
INSERT INTO pytanie VALUES ('uczen_3', '2020-06-06 10:00:00', 'pytanie_3_2');


CREATE TABLE odpowiedz(timestamp_pytania datetime NOT NULL,
	nauczyciel varchar NOT NULL,
	tresc text NOT NULL);
INSERT INTO odpowiedz VALUES ('2020-06-06 10:00:00', 'nauczyciel_1', 'odpowiedz_1_1');
INSERT INTO odpowiedz VALUES ('2020-06-06 10:00:00', 'nauczyciel_2', 'odpowiedz_1_2');
INSERT INTO odpowiedz VALUES ('2020-06-05 10:00:00', 'nauczyciel_2', 'odpowiedz_2_1');
INSERT INTO odpowiedz VALUES ('2020-06-04 10:00:00', 'nauczyciel_3', 'odpowiedz_3_1');
COMMIT;
