document.addEventListener('DOMContentLoaded', () => {
  const koltuklarContainer = document.getElementById('koltuklar');
  const secilenListe = document.getElementById('secilenListe');
  const fiyatSec = document.getElementById('fiyatSec');
  const seansSec = document.getElementById('seansSec');
  const odemeButonu = document.getElementById("odemeButonu");

  const satirlar = ['A','B','C','D','E','F'];
  const doluKoltuklar = ['B2', 'C3', 'E4'];

  // Koltukları oluştur
  satirlar.forEach(satir => {
    for (let i = 1; i <= 5; i++) {
      const kod = satir + i;
      const koltuk = document.createElement('div');
      koltuk.classList.add('koltuk');
      koltuk.dataset.kod = kod;
      koltuk.textContent = kod;

      if (doluKoltuklar.includes(kod)) {
        koltuk.classList.add('dolu');
      }

      koltuklarContainer.appendChild(koltuk);
    }
  });

  // Koltuk seçimi ve buton aktifliği
  koltuklarContainer.addEventListener('click', (e) => {
    const hedef = e.target;
    if (hedef.classList.contains('koltuk') && !hedef.classList.contains('dolu')) {
      hedef.classList.toggle('secili');
    }

    const seciliKoltuklar = document.querySelectorAll(".koltuk.secili");
    odemeButonu.disabled = seciliKoltuklar.length === 0;

    // Seçilenleri listele
    secilenListe.innerHTML = ''; // Öncekileri temizle
    if (seciliKoltuklar.length > 0) {
      const fiyat = parseInt(fiyatSec.value);
      const seans = seansSec.value;
      let toplam = 0;

      const seansLi = document.createElement('li');
      seansLi.innerHTML = `<strong>Seans Saati: ${seans}</strong>`;
      secilenListe.appendChild(seansLi);

      seciliKoltuklar.forEach(koltuk => {
        const kod = koltuk.dataset.kod;
        toplam += fiyat;
        const li = document.createElement('li');
        li.textContent = `Koltuk: ${kod} - ${fiyat} TL`;
        secilenListe.appendChild(li);
      });

      const toplamLi = document.createElement('li');
      toplamLi.innerHTML = `<strong>Toplam: ${toplam} TL</strong>`;
      toplamLi.style.marginTop = '10px';
      secilenListe.appendChild(toplamLi);
    }
  });

  // Ödeme sayfasına yönlendirme
odemeButonu.addEventListener("click", () => {
  const seciliKoltuklar = document.querySelectorAll(".koltuk.secili");
  if (seciliKoltuklar.length === 0) {
    alert("Lütfen en az bir koltuk seçin.");
    return;
  }

  const fiyat = parseInt(fiyatSec.value);
  const seans = seansSec.value;
  const koltukListesi = Array.from(seciliKoltuklar).map(k => k.dataset.kod).join(',');

  const url = `../html/ödeme.html?film=Inception&koltuklar=${encodeURIComponent(koltukListesi)}&fiyat=${fiyat}&seans=${encodeURIComponent(seans)}`;
  window.location.href = '../html/ödeme.html';



  document.addEventListener("DOMContentLoaded", function () {
  const filmAdi = localStorage.getItem("secilenFilm") || "Film seçilmedi";
  document.getElementById("film-bilgisi").textContent = "🎬 Seçilen Film: " + filmAdi;

  

  kaydetButonu.addEventListener("click", function () {
    const seans = document.getElementById("seansSec").value;
    const fiyat = document.getElementById("fiyatSec").value;
    const koltuk = document.getElementById("koltukNo").value;

    const bilet = {
      film: filmAdi,
      seans: seans,
      fiyat: fiyat,
      koltuk: koltuk
    };

    // Tüm sepeti al, varsa ekle
    const eskiSepet = JSON.parse(localStorage.getItem("sepet")) || [];
    eskiSepet.push(bilet);

    // Güncel sepeti kaydet
    localStorage.setItem("sepet", JSON.stringify(eskiSepet));

    // Ana sayfaya dön
    window.location.href = "index.html";
  });

  // Önceki kayıtlar varsa göster
  const ozetListe = document.getElementById("sepetOzeti");
  const kayitliSepet = JSON.parse(localStorage.getItem("sepet")) || [];

  kayitliSepet.forEach((bilet) => {
    const li = document.createElement("li");
    li.textContent = `${bilet.film} - ${bilet.seans} - ${bilet.koltuk} - ${bilet.fiyat} TL`;
    ozetListe.appendChild(li);


    document.addEventListener("DOMContentLoaded", function () {
  const film = localStorage.getItem("secilenFilm");
  if (film) {
    document.getElementById("film-bilgisi").innerText += film;
  }

  document.getElementById("kaydetBtn").addEventListener("click", async () => {
    const seans = document.getElementById("seansSec").value;
    const fiyat = document.getElementById("fiyatSec").value;
    const koltuk = document.getElementById("koltukNo").value;

    const biletBilgisi = {
      film,
      seans,
      fiyat,
      koltuk
    };

    // Backend'e POST isteği at
    await fetch("http://localhost:3000/sepet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(biletBilgisi),
    });

    // Ana sayfaya yönlendir
    window.location.href = "index.html";
  });
});

  });
});
});

});
// Koltuk seçimi ve buton aktifliği
koltuklarContainer.addEventListener('click', (e) => {
  const hedef = e.target;
  if (hedef.classList.contains('koltuk') && !hedef.classList.contains('dolu')) {
    hedef.classList.toggle('secili');
  }

  const seciliKoltuklar = document.querySelectorAll(".koltuk.secili");
  odemeButonu.disabled = seciliKoltuklar.length === 0;

  // 🎉 Popcorn hediyesi kontrolü
  const hediyeMesaj = document.getElementById("hediyeMesaj");
  if (seciliKoltuklar.length === 2) {
    hediyeMesaj.textContent = "🎉 1 Adet Popcorn Bedava!";
  } else {
    hediyeMesaj.textContent = "";
  }

  // Seçilen koltukları listele (opsiyonel)
  secilenListe.innerHTML = '';
  if (seciliKoltuklar.length > 0) {
    const fiyat = parseInt(fiyatSec.value);
    const seans = seansSec.value;
    let toplam = 0;

    const seansLi = document.createElement('li');
    seansLi.innerHTML = `<strong>Seans Saati: ${seans}</strong>`;
    secilenListe.appendChild(seansLi);

    seciliKoltuklar.forEach(koltuk => {
      const kod = koltuk.dataset.kod;
      toplam += fiyat;
      const li = document.createElement('li');
      li.textContent = `Koltuk: ${kod} - ${fiyat} TL`;
      secilenListe.appendChild(li);
    });

    const toplamLi = document.createElement('li');
    toplamLi.innerHTML = `<strong>Toplam: ${toplam} TL</strong>`;
    toplamLi.style.marginTop = '10px';
    secilenListe.appendChild(toplamLi);
  }
});


 // Seçilenleri listele
    secilenListe.innerHTML = ''; // Öncekileri temizle
    if (seciliKoltuklar.length > 0) {
      const fiyat = parseInt(fiyatSec.value);
      const seans = seansSec.value;
      let toplam = 0;

      const seansLi = document.createElement('li');
      seansLi.innerHTML = `<strong>Seans Saati: ${seans}</strong>`;
      secilenListe.appendChild(seansLi);

      seciliKoltuklar.forEach(koltuk => {
        const kod = koltuk.dataset.kod;
        toplam += fiyat;
        const li = document.createElement('li');
        li.textContent = `Koltuk: ${kod} - ${fiyat} TL`;
        secilenListe.appendChild(li);
      });

      const toplamLi = document.createElement('li');
      toplamLi.innerHTML = `<strong>Toplam: ${toplam} TL</strong>`;
      toplamLi.style.marginTop = '10px';
      secilenListe.appendChild(toplamLi);
    }
  

 odemeButonu.addEventListener("click", () => {
  const seciliKoltuklar = document.querySelectorAll(".koltuk.secili");
  if (seciliKoltuklar.length === 0) {
    alert("Lütfen en az bir koltuk seçin.");
    return;
  }

  const film = filmSecSelect.value || localStorage.getItem("secilenFilm");
  const fiyat = parseInt(fiyatSec.value);
  const seans = seansSec.value;
  const koltukListesi = Array.from(seciliKoltuklar).map(k => k.dataset.kod).join(',');

  // Film + koltuklar + fiyat + seans bilgileri URL'ye eklendi
  const url = `../html/ödeme.html?film=${encodeURIComponent(film)}&koltuklar=${encodeURIComponent(koltukListesi)}&fiyat=${fiyat}&seans=${encodeURIComponent(seans)}`;

  window.location.href = url;
});

odemeButonu.addEventListener("click", () => {
  const seciliKoltuklar = document.querySelectorAll(".koltuk.secili");
  if (seciliKoltuklar.length === 0) {
    alert("Lütfen en az bir koltuk seçin.");
    return;
  }

  const film = filmSecSelect.value || localStorage.getItem("secilenFilm");
  const fiyat = parseInt(fiyatSec.value);
  const seans = seansSec.value;
  const koltukListesi = Array.from(seciliKoltuklar).map(k => k.dataset.kod).join(', ');

  const url = `../html/ödeme.html?film=${encodeURIComponent(film)}&koltuklar=${encodeURIComponent(koltukListesi)}&fiyat=${fiyat}&seans=${encodeURIComponent(seans)}`;

  window.location.href = url;
});

document.addEventListener("DOMContentLoaded", () => {
  const odemeButonu = document.getElementById("odemeButonu");
  const filmSec = document.getElementById("filmSec");
  const seansSec = document.getElementById("seansSec");
  const fiyatSec = document.getElementById("fiyatSec");

  odemeButonu.addEventListener("click", () => {
    const seciliKoltuklar = document.querySelectorAll(".koltuk.secili");
    if (seciliKoltuklar.length === 0) {
      alert("Koltuk seçimi yapmadınız.");
      return;
    }

  });
});
