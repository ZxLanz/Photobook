# Photobook

Aplikasi photobooth statis untuk acara. `index.html` digunakan di komputer booth untuk mengambil dan menyimpan foto. Tamu membuka `lihat.html` melalui QR code untuk melihat dan mengunduh foto.

## Menjalankan secara lokal

Gunakan server lokal, bukan membuka file HTML langsung. Dari folder proyek:

```bash
python3 -m http.server 8000
```

Buka `http://localhost:8000/`. Untuk mengakses booth dari ponsel pada jaringan Wi-Fi yang sama, gunakan alamat LAN komputer booth. Kamera memerlukan `localhost` atau koneksi HTTPS.

## Konfigurasi

Atur `config.js`:

- `supabaseUrl` dan `supabaseAnonKey`: URL proyek dan publishable key Supabase.
- `bucket`: nama bucket penyimpanan foto; default `photos`.
- `siteUrl`: alamat publik situs, termasuk garis miring di akhir. Untuk repository ini, formatnya `https://ZxLanz.github.io/Photobook/`.

Publishable/anon key memang digunakan di browser. Jangan pernah menaruh `service_role` atau secret key di file publik.

Bucket `photos` harus dapat dibaca secara publik agar tautan QR bisa menampilkan foto. Kebijakan upload Supabase juga harus mengizinkan aplikasi booth menyimpan foto.

## Publikasi dengan GitHub Pages

1. Unggah file proyek ke repository GitHub bernama `Photobook` pada branch `main`.
2. Buka **Settings → Pages**.
3. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu simpan.
4. Setelah situs aktif, URL-nya `https://ZxLanz.github.io/Photobook/`; `config.js` sudah memakai URL tersebut.
5. Uji halaman `https://ZxLanz.github.io/Photobook/lihat.html?id=ID_FOTO` dengan ID foto yang sudah diunggah.

> Tautan QR tidak dapat digunakan publik selama `siteUrl` masih menunjuk ke alamat lokal atau placeholder.

## Berkas utama

- `index.html`: antarmuka booth, kamera, komposisi frame, upload, dan QR.
- `lihat.html`: viewer publik dan unduhan foto.
- `config.js`: konfigurasi Supabase dan URL situs.
- `frame/`: aset frame foto.