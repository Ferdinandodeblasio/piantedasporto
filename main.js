// Piante d'Asporto: poche righe, il sito funziona anche senza.
(function () {
  // indirizzo spezzato, per non regalarlo ai raccoglitori di email
  var mail = ["piantedasporto", "gmail.com"].join("@");

  // link email: href="regolamento.html#info" diventa mailto con oggetto
  document.querySelectorAll("[data-mail]").forEach(function (a) {
    var oggetto = a.getAttribute("data-mail");
    a.href = "mailto:" + mail + (oggetto ? "?subject=" + encodeURIComponent(oggetto) : "");
  });

  // eventi: nasconde quelli passati, mostra "In arrivo" se non ne resta nessuno.
  // ?tutti nell'indirizzo mostra anche i passati (per controllare le schede).
  var lista = document.querySelector("[data-eventi]");
  if (!lista) return;
  var tutti = /[?&]tutti\b/.test(location.search);
  var oggi = new Date();
  oggi.setHours(0, 0, 0, 0);
  var futuri = 0;

  lista.querySelectorAll("[data-date]").forEach(function (ev) {
    var p = ev.getAttribute("data-date").split("-");
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    if (d < oggi && !tutti) ev.hidden = true;
    else futuri++;
  });

  if (!futuri) {
    lista.hidden = true;
    var titolo = document.getElementById("titolo-appuntamenti");
    if (titolo) titolo.textContent = "In arrivo";
    var box = document.querySelector("[data-in-arrivo]");
    if (box) box.hidden = false;
  }
})();
