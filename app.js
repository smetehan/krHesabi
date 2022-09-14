const hesapBtn = document.querySelector("#hesapla-btn");
const krediMiktar = document.querySelector("#kredi-mik");
const krediVade = document.querySelector("#krediVade");
const toplamTutar = document.querySelector("#toplamTutar");
const krediTipi = document.querySelector("#krediTipi");
const fOrani = document.querySelector("#fOrani");
const taksitTutar = document.querySelector("#taksitTutar");
const faizOranKonut = 1.29;
const faizOranIhtiyac = 1.99;
const faizOranArac = 1.79;
const konutKredi = document.querySelector("#konut");
let krediSekli;
if (hesapBtn) {
  hesapBtn.addEventListener("click", () => {
    const vade = Number(document.querySelector("#kredi-vade").value);
    const tutar = Number(document.querySelector("#kredi-tutar").value);
    const kredi = document.querySelector("#kredi-sec").value;
    console.log(kredi);

    if (kredi == "" || vade == "" || tutar == "") {
      alert("Lütfen Kredi Tipini, Vade Sayısını ve Tutarı Giriniz");
    } else if (kredi == 1) {
      document.querySelector(".tabloKredi").style.display = "inline";
      krediSekli = "Konut Kredisi";
      const konutFaiz = tutar * (faizOranKonut / 100) * vade;
      const konutToplam = tutar + konutFaiz;
      const konutTaksit = konutToplam / vade;
      krediMiktar.innerText = tutar;
      krediVade.innerText = vade;
      toplamTutar.innerText = konutToplam;
      krediTipi.innerText = krediSekli;
      fOrani.innerText = faizOranKonut;
      taksitTutar.innerText = konutTaksit;
    } else if (kredi == 2) {
      document.querySelector(".tabloKredi").style.display = "inline";
      krediSekli = "İhtiyaç Kredisi";
      const ihtiyacFaiz = tutar * (faizOranIhtiyac / 100) * vade;
      const ihtiyacToplam = tutar + ihtiyacFaiz;
      const ihtiyacTaksit = ihtiyacToplam / vade;
      krediMiktar.innerText = tutar;
      krediVade.innerText = vade;
      toplamTutar.innerText = ihtiyacToplam;
      krediTipi.innerText = krediSekli;
      fOrani.innerText = faizOranIhtiyac;
      taksitTutar.innerText = ihtiyacTaksit;
    } else if (kredi == 3) {
      document.querySelector(".tabloKredi").style.display = "inline";
      krediSekli = "Araç Kredisi";
      const aracFaiz = tutar * (faizOranArac / 100) * vade;
      const aracToplam = tutar + aracFaiz;
      const aracTaksit = aracToplam / vade;
      krediMiktar.innerText = tutar;
      krediVade.innerText = vade;
      toplamTutar.innerText = aracToplam;
      krediTipi.innerText = krediSekli;
      fOrani.innerText = faizOranArac;
      taksitTutar.innerText = aracTaksit;
    }
  });
}
