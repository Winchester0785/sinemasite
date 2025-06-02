document.getElementById('payment-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Basit bir form doğrulaması (sadece demo amaçlı)
  const name = document.getElementById('name').value;
  const cardNumber = document.getElementById('card-number').value;

  if (name && cardNumber.length >= 16) {
    // Ödeme başarılı mesajı göster
    document.getElementById('payment-form').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
  } else {
    alert('Lütfen geçerli bir kart bilgisi giriniz.');
  }
  document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);

  const film = params.get("film");
  const koltuklar = params.get("koltuklar");
  const seans = params.get("seans");
  const fiyat = params.get("fiyat");

  document.getElementById("film-bilgisi").innerHTML = `<strong>Film:</strong> ${film}`;
  document.getElementById("seans-bilgisi").innerHTML = `<strong>Seans:</strong> ${seans}`;
  document.getElementById("koltuk-bilgisi").innerHTML = `<strong>Koltuklar:</strong> ${koltuklar}`;
  document.getElementById("fiyat-bilgisi").innerHTML = `<strong>Toplam Tutar:</strong> ${fiyat} TL`;

  // Ödeme işlemi (örnek, gerçek işlem yapılmaz)
  document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("confirmation").classList.remove("hidden");
    document.getElementById("payment-form").style.display = "none";
  });
});

});
document.getElementById("odemeButonu").addEventListener("click", () => {
  const seciliKoltuklar = document.querySelectorAll(".koltuk.secili");
  if (seciliKoltuklar.length === 0) {
    alert("Lütfen en az bir koltuk seçin.");
    return;
  }

});
