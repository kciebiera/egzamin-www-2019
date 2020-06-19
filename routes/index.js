var express = require('express');
var router = express.Router();

// TODO: nie działa wypisywanie ostatnich wpisów
// popraw poniższy kod tak aby wyświetlał ostatnie pięć wpisów w kolejności
// od najnowszego i używał puga
router.get('/', function(req, res, next) {
  let db =req.app.locals.db;
  let ostatnieWpisy = '<li>wpis testowy</li>';
  
  db.each('SELECT login_osoby, tresc FROM wpis', function (err, row) {
    ostatnieWpisy += '<li>' + row.login_osoby + ': ' + row.tresc + '</li>';
    console.log(ostatnieWpisy);
  })
  res.send(`
  <p id='error-message'>tutaj powinna się pojawić ewentualna informacja o błędnej próbie logowania</p>
  <form method='post'>
  <input type='text' name='login'>
  <input type='password' name='haslo'>
  <input type='submit'>
  </form>
  <div id='ostatnie-wpisy'>
  <ul>
  ${ostatnieWpisy}
  </ul>
  </div>
  `);  
});

// TODO: zaimplementuj logowanie
// logowanie powinno albo przekierować do trasy / albo do trasy /users

module.exports = router;
