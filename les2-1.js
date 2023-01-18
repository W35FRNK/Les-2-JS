
  const naam = prompt('Uw naam', 'Naam');
  const geboortejaar = prompt('Uw geboortejaar', 'Geboortejaar' );
  const tekst = 'U heet ' + naam + ' en uw geboortejaar is ' + geboortejaar;

  document.getElementById('welkom').innerHTML = tekst;


  const huidigjaar = 2023;
  const totaal = parseInt(huidigjaar) - parseInt(geboortejaar)
  const tekst2 = 'De leeftijd van uw persoon is ' + totaal;

  document.getElementById('leeftijd').innerHTML = tekst2;

  const lengteZin = tekst2.length;
  console.log(lengteZin);
  console.log(tekst2.indexOf('n'));


  const x = parseInt(geboortejaar);
  if (x === 1980) {
    console.log('true');
  }

  else {
    console.log('false');
  }


