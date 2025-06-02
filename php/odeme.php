<?php
// Bağlantı
$host = "localhost";
$user = "root";
$pass = "";
$db = "sinema";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Bağlantı hatası: " . $conn->connect_error);
}

// Formdan gelen veriler
$film = $_POST['film'];
$koltuklar = $_POST['koltuklar'];
$seans = $_POST['seans'];
$fiyat = $_POST['fiyat'];

// Veritabanına ekle
$sql = "INSERT INTO biletler (film, koltuklar, seans, ucret) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssi", $film, $koltuklar, $seans, $fiyat);

if ($stmt->execute()) {
    echo "<h2>🎟️ Bilet Alındı!</h2>";
    echo "<p><strong>Film:</strong> $film</p>";
    echo "<p><strong>Koltuklar:</strong> $koltuklar</p>";
    echo "<p><strong>Seans:</strong> $seans</p>";
    echo "<p><strong>Toplam:</strong> $fiyat TL</p>";
} else {
    echo "Hata: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>