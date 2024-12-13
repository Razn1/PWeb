function Validasi() {
    let Valid = true;

    document.getElementById('errNama').textContent = '';
    document.getElementById('errMail').textContent = '';
    document.getElementById('errJam').textContent = '';
    document.getElementById('errTujuan').textContent = '';
    document.getElementById('errTiket').textContent = '';

    const nama = document.getElementById('nama').value.trim();
    if (!nama || nama.length > 30) {
        Valid = false;
        document.getElementById('errNama').textContent = 'Nama wajib diisi dan maksimal 30 karakter.';
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        Valid = false;
        document.getElementById('errMail').textContent = 'Format email tidak Valid.';
    }

    const jam = document.getElementById('jam').value.trim();
    if (!jam) {
        Valid = false;
        document.getElementById('errJam').textContent = 'Jam keberangkatan wajib diisi.';
    }

    const tujuan = document.getElementById('tujuan').value.trim();
    if (!tujuan) {
        Valid = false;
        document.getElementById('errTujuan').textContent = 'Tujuan keberangkatan wajib diisi.';
    }

    const tiket = document.getElementById('tiket').value.trim();
    if (!tiket || tiket < 1 || tiket > 10) {
        Valid = false;
        document.getElementById('errTiket').textContent = 'Jumlah tiket harus antara 1 dan 10.';
    }

    const pesanBerhasil = document.getElementById('success');
    if (Valid) {
        pesanBerhasil.style.display = 'block';
        pesanBerhasil.innerHTML = `<strong>Data TerValidasi!</strong><br>
            Nama: ${nama}<br>
            Email: ${email}<br>
            Jam Keberangkatan: ${jam}<br>
            Tujuan: ${tujuan}<br>
            Jumlah Tiket: ${tiket}`;
    } else {
        pesanBerhasil.style.display = 'none';
    }
}
