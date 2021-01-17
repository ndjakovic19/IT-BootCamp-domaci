export{Kupac,registrovaniKupci,isValidKupac,Proizvod,proizvodi,BelaTehnika,belaTehnika,PrehrambeniProizvod,prehrambeniProizvod}

class Kupac {
  username
  password
  korpa
  constructor(username, password) {
    this.username = username
    this.password = password
    this.korpa = []
  }



}

let registrovaniKupci = [new Kupac('Ana', '123'), new Kupac('Pera', 'p'),new Kupac('Nevena', '321')]

const isValidKupac = kupac => {
  return registrovaniKupci.some(k => k.username == kupac.username && k.password == kupac.password)
  //vratiće true ili false
}

class Proizvod {
  naziv
  cena
  zalihe
  constructor(naziv, cena, zalihe) {
    this.naziv = naziv
    this.cena = cena
    this.zalihe = zalihe
  }
}

let proizvodi = []

class BelaTehnika extends Proizvod {
  garancija
  constructor(naziv, cena, zalihe, garancija) {
    super(naziv, cena, zalihe)
    this.garancija = garancija
  }
}

let belaTehnika = [new BelaTehnika('Šporet', '30000', '10', '2'), new BelaTehnika('Frizider', '27000', '20', '2'), new BelaTehnika('Mikrotalasna', '10000', '15', '2')]
belaTehnika.forEach(el => {
  proizvodi.push(el)
})


class PrehrambeniProizvod extends Proizvod {
  rok
  constructor(naziv, cena, zalihe, rok) {
    super(naziv, cena, zalihe)
    this.rok = rok
  }
}

let prehrambeniProizvod = [new PrehrambeniProizvod('Mleko', '100', '100', '27.01.2021.'), new PrehrambeniProizvod('Plazma', '120', '100', '20.03.2021.'), new PrehrambeniProizvod('Jaja', '150', '50', '01.02.2021.')]
prehrambeniProizvod.forEach(el => {
  proizvodi.push(el)
})

console.log(proizvodi);

