// Latihan 1 — Menampilkan output
function latihan1() {
    document.getElementById("pesan").textContent = "Hello World";
    console.log("Hello World");
}

// Latihan 2 — Alert dan prompt
function latihan2() {
    const namaPengguna = prompt("Masukkan nama Anda:", "");
    if (namaPengguna && namaPengguna.trim() !== "") {
        alert("Halo, " + namaPengguna + "!");
        document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
    } else {
        alert("Nama belum diisi.");
    }
}

// Latihan 3 — Function dan operasi aritmetika
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

// Latihan 4 — Seleksi kondisi if–else
function latihan4() {
    const inputNilai = prompt("Masukkan nilai (0–100):");
    const nilaiMahasiswa = Number(inputNilai);

    if (inputNilai === null || inputNilai.trim() === "" ||
        Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
        alert("Input nilai tidak valid.");
    } else if (nilaiMahasiswa >= 60) {
        alert("Lulus");
    } else {
        alert("Belum lulus");
    }
}

// Latihan 5 — Seleksi kondisi switch
function latihan5() {
    const inputPilihan = prompt("Masukkan angka 1–5:");
    switch (inputPilihan) {
        case "1": alert("Bilangan satu"); break;
        case "2": alert("Bilangan dua"); break;
        case "3": alert("Bilangan tiga"); break;
        case "4": alert("Bilangan empat"); break;
        case "5": alert("Bilangan lima"); break;
        default: alert("Pilihan tidak tersedia");
    }
}

// Latihan 6 — Form bilangan genap atau ganjil
function cekBilangan() {
const input = document.getElementById("bilangan").value;
const angka = Number(input);
const hasil = document.getElementById("hasilBilangan");
if (input.trim() === "" || !Number.isInteger(angka)) {
hasil.textContent = "Masukkan bilangan bulat yang valid.";
} else if (angka % 2 === 0) {
hasil.textContent = "Bilangan genap";
} else {
hasil.textContent = "Bilangan ganjil";
}
}

// Latihan 7 — Mengubah warna halaman
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// Latihan 8 — DOM dan checkbox menu makanan
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// Mini Project — Kalkulator Nilai Mahasiswa
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

document.getElementById("formNilai").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputTugas = document.getElementById("tugas").value;
    const inputUts = document.getElementById("uts").value;
    const inputUas = document.getElementById("uas").value;
    const hasil = document.getElementById("hasilNilai");

    if (inputTugas.trim() === "" || inputUts.trim() === "" || inputUas.trim() === "") {
        hasil.textContent = "Semua nilai harus diisi.";
        return;
    }

    const tugas = Number(inputTugas);
    const uts = Number(inputUts);
    const uas = Number(inputUas);

    if ([tugas, uts, uas].some(nilai => Number.isNaN(nilai) || nilai < 0 || nilai > 100)) {
        hasil.textContent = "Setiap nilai harus berada pada rentang 0–100.";
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    hasil.textContent = "Nilai akhir: " + akhir.toFixed(2) +
        " | Predikat: " + tentukanPredikat(akhir) +
        " | Status: " + (akhir >= 60 ? "Lulus" : "Belum lulus");
});

// Eksperimen mandiri: Latihan 3 menerima dua bilangan dari prompt
function eksperimenOperasi() {
    const inputA = prompt("Masukkan bilangan pertama:");
    const inputB = prompt("Masukkan bilangan kedua:");
    if (inputA === null || inputB === null || inputA.trim() === "" || inputB.trim() === "") {
        alert("Kedua bilangan harus diisi.");
        return;
    }
    const a = Number(inputA);
    const b = Number(inputB);
    if (Number.isNaN(a) || Number.isNaN(b)) {
        alert("Masukkan bilangan yang valid.");
        return;
    }
    operasiDasar(a, b);
    alert("Hasil operasi ditampilkan di Console.");
}

// Eksperimen mandiri: tabel perkalian angka 7 dari 1 sampai 10
function tabelPerkalian7() {
    let teks = "";
    for (let i = 1; i <= 10; i++) {
        teks += "7 x " + i + " = " + (7 * i) + (i < 10 ? "\n" : "");
    }
    document.getElementById("hasilEksperimen").textContent = teks;
}

// Eksperimen mandiri: function cekGenap(angka)
function cekGenap(angka) {
    return angka % 2 === 0;
}

function ujiCekGenap() {
    const input = prompt("Masukkan bilangan bulat:");
    const angka = Number(input);
    if (input === null || input.trim() === "" || !Number.isInteger(angka)) {
        document.getElementById("hasilEksperimen").textContent = "Masukkan bilangan bulat yang valid.";
    } else {
        document.getElementById("hasilEksperimen").textContent =
            cekGenap(angka) ? "true — bilangan genap" : "false — bilangan ganjil";
    }
}

// Eksperimen mandiri: menyembunyikan atau menampilkan elemen HTML
function togglePesan() {
    const pesan = document.getElementById("pesan");
    pesan.hidden = !pesan.hidden;
}
