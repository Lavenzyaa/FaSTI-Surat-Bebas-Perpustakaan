// ===== FORM VALIDATION & SUBMIT HANDLER =====
document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // mencegah reload halaman

      const inputs = form.querySelectorAll("input[required]");
      let valid = true;

      inputs.forEach(input => {
        if (input.value.trim() === "") {
          input.style.border = "2px solid red";
          valid = false;
        } else {
          input.style.border = "1px solid #ccc";
        }
      });

      if (!valid) {
        alert("⚠️ Harap lengkapi semua data yang wajib diisi!");
        return;
      }

      // Konfirmasi pengiriman
      const confirmSubmit = confirm(
        "Apakah data yang Anda masukkan sudah benar?"
      );

      if (confirmSubmit) {
        alert("✅ Permohonan berhasil dikirim!\nSilakan menunggu proses verifikasi.");
        form.reset();
      }
    });
  }

});
