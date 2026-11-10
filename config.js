/* Pengaturan Pojok Foto — ubah di sini saja, tidak perlu menyentuh index.html */
window.APP_CONFIG = {
  // --- Penyimpanan foto (Supabase). Kosongkan untuk mode demo. ---
  supabaseUrl: 'https://vhukwlhnbkhksypxhlii.supabase.co',
  // Publishable key memang untuk browser; jangan pernah masukkan sb_secret atau service_role di sini.
  supabaseAnonKey: 'sb_publishable_GhtGD1gWyOlroscMDQPdaw_V1VnXwyp',
  bucket: 'photos',       // bucket ini public agar foto dapat dibuka dari QR
  maxPhotoBytes: 2097152, // validasi browser; tetap atur batas 2 MB dan image/jpeg di bucket

  // URL GitHub Pages untuk repository publik ini.
  // QR viewer memakai URL ini agar dapat dibuka dari perangkat umum.
  // Untuk lokal, bisa tetap pakai alamat LAN, tapi untuk QR publik gunakan URL publik di atas.
  siteUrl: 'https://ZxLanz.github.io/Photobook/',

  // --- Donasi ---
  qrisImage: 'qris.png',  // taruh gambar QRIS kamu di folder yang sama
  donationNote: 'Donasi seikhlasnya ya, terima kasih banyak!',

  // --- Kios ---
  eventName: 'Mahasiswa Award', // judul acara di layar sambutan
  idleSeconds: 120        // layar QR kembali ke awal setelah sekian detik
};
