
// Hitung Biaya Parkir
function hitungBiaya(){
    let masuk = document.getElementById("masuk").value;
    let keluar = document.getElementById("keluar").value;
    let lamaWaktu = keluar - masuk 
    console.log(lamaWaktu)

    document.getElementById("lmwaktu").innerHTML = lamaWaktu
    // 2 Jam Pertama
    let biayaParkir = 3000
    lamaWaktu -= 2

    // Hitung Sisa Jam
    if(lamaWaktu > 0) {
        biayaParkir += (lamaWaktu * 1000)
    }
    console.log(biayaParkir)


    document.getElementById("biaya").innerHTML = "Rp." + biayaParkir
}