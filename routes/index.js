var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  
  res.send(`
  <p id='error-message'>tutaj powinna się pojawić ewentualna informacja o błędnej próbie logowania</p>
  <form method='post'>
  <input type='text' name='login'>
  <input type='password' name='haslo'>
  <input type='submit'>
  </form>
  <div id='ostatnie-wpisy'>
  <ul>
  <li><a href='pytanie?id=6'>2020-06-06 10:00 pytanie_3_2</a>(2 odpowiedzi)</li>
  <li><a href='pytanie?id=5'>2020-06-05 10:00 pytanie_3_1</a>(1 odpowiedź)</li>
  <li><a href='pytanie?id=4'>2020-06-04 10:00 pytanie_2_2</a>(0 odpowiedzi)</li>
  </ul>
  <a href='#'>Następna strona</a>
  </div>
  `);  
});


router.get('/pytanie', function(req, res, next) {
  res.send(`
  <h1>Pytanie</h1>
  pytanie_3_2
  </h1>Odpowiedzi</h1>
  <h2>nauczyciel_1</h2>
  odpowiedz_1
  <h2>nauczyciel_2</h2>
  odpowiedz_2
  <h1>Moja odpowiedz</h1>
  <form method='post'>
  <input type='text' name='Odpowiedź'>
  <input type='submit'>
  </form>
  
  `);
});
module.exports = router;
