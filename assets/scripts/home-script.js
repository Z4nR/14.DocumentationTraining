/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Comment : ... */
const buttonLogoutElement = document.querySelector('#buttonLogout');

buttonLogoutElement.addEventListener('click', function() {
/*Fungsi untuk kembali ke halaman login pada tombol button sudah ditambahkan */
  goToLogin();
});
