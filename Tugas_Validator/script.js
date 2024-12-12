function Validasi() {
    let isValid = true;

    document.getElementById('errNama').textContent = '';
    document.getElementById('errMail').textContent = '';
    document.getElementById('errJam').textContent = '';
    document.getElementById('errTujuan').textContent = '';
    document.getElementById('errTiket').textContent = '';

    const nama = document.getElementById('nama').value.trim();
    if (!nama || nama.length > 30) {
        isValid = false;
        document.getElementById('errNama').textContent = 'Nama wajib diisi dan maksimal 30 karakter.';
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        isValid = false;
        document.getElementById('errMail').textContent = 'Format email tidak isValid.';
    }

    const jam = document.getElementById('jam').value.trim();
    if (!jam) {
        isValid = false;
        document.getElementById('errJam').textContent = 'Jam keberangkatan wajib diisi.';
    }

    const tujuan = document.getElementById('tujuan').value.trim();
    if (!tujuan) {
        isValid = false;
        document.getElementById('errTujuan').textContent = 'Tujuan keberangkatan wajib diisi.';
    }

    const tiket = document.getElementById('tiket').value.trim();
    if (!tiket || tiket < 1 || tiket > 10) {
        isValid = false;
        document.getElementById('errTiket').textContent = 'Jumlah tiket harus antara 1 dan 10.';
    }

    const pesanBerhasil = document.getElementById('success');
    if (isValid) {
        pesanBerhasil.style.display = 'block';
        pesanBerhasil.innerHTML = `<strong>Data TerisValidasi!</strong><br>
            Nama: ${nama}<br>
            Email: ${email}<br>
            Jam Keberangkatan: ${jam}<br>
            Tujuan: ${tujuan}<br>
            Jumlah Tiket: ${tiket}`;
    } else {
        pesanBerhasil.style.display = 'none';
    }
}
