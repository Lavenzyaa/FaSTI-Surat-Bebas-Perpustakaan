document.getElementById("formBebasPustaka").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let nim = document.getElementById("nim").value;
    let prodi = document.getElementById("prodi").value;
    let statusBuku = document.getElementById("statusBuku").value;
    let pesan = document.getElementById("pesan");

    if (nama === "" || nim === "" || prodi === "" || statusBuku === "") {
        pesan.style.color = "red";
        pesan.innerText = "❌ Semua data wajib diisi!";
        return;
    }

    if (statusBuku === "ada") {
        pesan.style.color = "red";
        pesan.innerText = "❌ Pengajuan ditolak. Masih ada pinjaman buku.";
    } else {
        pesan.style.color = "green";
        pesan.innerText = "✅ Pengajuan surat bebas perpustakaan berhasil dikirim.";
        document.getElementById("formBebasPustaka").reset();
    }
});
