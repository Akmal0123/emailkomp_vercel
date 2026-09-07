import { gitCollabThumb } from "../../../public/assets/articles/thumbnails";

export const Article10 = {
    id: 10,
    title: "Bebas Panik Merge Conflict: Panduan Git Kolaborasi untuk Tim Proyek dan Tugas Kuliah",
    slug: "panduan-git-kolaborasi-mahasiswa",
    image: gitCollabThumb,
    content: `
        <p>Pukul 23.30 malam, setengah jam sebelum portal pengumpulan tugas besar ditutup. Tiba-tiba salah satu rekan tim mengirim pesan panik di grup WhatsApp: layar terminalnya memerah dan memunculkan tulisan <i>CONFLICT (content): Merge conflict in src/App.jsx</i>. Kode yang awalnya berjalan lancar mendadak rusak, aplikasi gagal dikompilasi, dan kepanikan massal pun terjadi.</p>

        <br/>

        <p>Skenario di atas merupakan mimpi buruk yang hampir pasti pernah dialami oleh setiap mahasiswa jurusan informatika maupun developer pemula. Ironisnya, solusi darurat yang sering diambil justru memperparah keadaan: menyalin kode secara manual ke Notepad, menghapus folder proyek, lalu melakukan clone ulang dari repositori utama. Padahal, jika dipahami dengan tenang, konflik pada Git bukanlah tanda kerusakan sistem, melainkan mekanisme perlindungan data yang sangat cerdas.</p>

        <div class="grid grid-cols-3 gap-4 my-6 text-center">
            <div class="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p class="text-2xl font-bold text-primary-orange">Bagi Tugas</p>
                <p class="text-sm text-gray-500 mt-2">Pecah fitur ke cabang terpisah agar tidak saling bertabrakan dengan rekan tim</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p class="text-2xl font-bold text-primary-orange">Lindungi "Main"</p>
                <p class="text-sm text-gray-500 mt-2">Jangan pernah push langsung ke cabang utama demi menjaga kode tetap stabil</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p class="text-2xl font-bold text-primary-orange">Commit Bertahap</p>
                <p class="text-sm text-gray-500 mt-2">Simpan perubahan kecil secara rutin, hindari menumpuk banyak kode sekaligus</p>
            </div>
        </div>

        <h2>Mengapa Merge Conflict Terjadi?</h2>

        <p>Untuk berdamai dengan Git, kita perlu memahami cara kerjanya. Git melacak riwayat proyek baris demi baris layaknya pohon silsilah waktu. Ketika kamu dan teman satu timmu sama-sama menarik kode terbaru di pagi hari, kalian berdua berangkat dari titik acuan yang sama.</p>

        <br/>

        <p>Masalah muncul ketika sore harinya, rekanmu mengubah logika fungsi navigasi di baris 40 file <code>App.jsx</code> lalu mengunggahnya ke server. Berselang lima menit kemudian, kamu juga mengubah baris 40 pada file yang sama dengan implementasi yang berbeda. Saat kamu mencoba menggabungkan kodemu, Git menghadapi dilema logis: <i>versi baris 40 milik siapa yang harus dipertahankan?</i></p>

        <br/>

        <p>Alih-alih menebak sendiri dan berisiko menghapus karya salah satu pihak secara sembrono, Git sengaja menghentikan proses penggabungan dan meminta manusia yang memiliki akal budi untuk menentukan pilihan. Tanda merah yang muncul di layar sebenarnya adalah cara Git berkata: "Tolong periksa bagian ini bersama temanmu sebelum kita satukan."</p>

        <h2>Membaca Simbol Konflik Tanpa Rasa Cemas</h2>

        <p>Ketika konflik terjadi, Git akan menyisipkan penanda khusus tepat di dalam file kode yang berselisih. Tampilannya terlihat seperti mantra asing, tetapi strukturnya sebenarnya sangat sederhana:</p>

        <div class="bg-gray-900 text-gray-100 rounded-xl p-5 my-6 font-mono text-sm overflow-x-auto shadow-md">
            <p class="text-amber-400 font-bold">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</p>
            <p class="text-gray-300">const apiUrl = "https://api.kampus-uns.ac.id/v1"; // Kode versi lokal di komputermu</p>
            <p class="text-blue-400 font-bold">=======</p>
            <p class="text-gray-300">const apiUrl = "https://api.emailkomp.org/v2"; // Kode versi temanmu yang sudah masuk server</p>
            <p class="text-emerald-400 font-bold">&gt;&gt;&gt;&gt;&gt;&gt;&gt; fitur-integrasi-api</p>
        </div>

        <p>Cara menyelesaikannya cukup dengan membuka file tersebut di text editor modern (seperti Visual Studio Code), lalu diskusikan bersama rekan tim: baris mana yang benar? Setelah memilih, hapus seluruh baris penanda (simbol panah dan sama dengan), simpan file, lalu jalankan perintah penutup <code>git add</code> dan <code>git commit</code>.</p>

        <h2>Alur Kerja Feature Branch: Rahasia Kolaborasi Tim Tanpa Bentrok</h2>

        <p>Kebiasaan terburuk yang sering dilakukan tim mahasiswa adalah bekerja bersama-sama di cabang <code>main</code> atau <code>master</code>. Pola ini ibarat memasak di satu wajan kecil secara berebutan. Terapkan alur kerja cabang fitur sederhana berikut agar kolaborasi berjalan mulus:</p>

        <ol class="list-decimal pl-6 space-y-3 my-4 text-gray-700">
            <li>
                <strong>Tarik Versi Paling Segar:</strong> Sebelum menyentuh kode apa pun di awal sesi belajar kelompok, biasakan menjalankan <code>git pull origin main</code> untuk memastikan pondasi kodemu sinkron dengan repositori.
            </li>
            <li>
                <strong>Buat Cabang Khusus untuk Tugasmu:</strong> Jangan pernah mengutak-atik cabang utama. Buat cabang baru dengan nama tugas spesifik menggunakan perintah <code>git checkout -b fitur-autentikasi</code>.
            </li>
            <li>
                <strong>Kerjakan dan Simpan Secara Bertahap:</strong> Buat commit secara atomik. Artinya, setiap selesai menyelesaikan satu fungsi kecil yang berfungsi baik, simpan perubahannya. Hindari menumpuk ratusan baris perubahan dalam satu commit raksasa bertuliskan pesan asal-asalan seperti "update kode".
            </li>
            <li>
                <strong>Unggah Cabang Fitur ke Repositori:</strong> Setelah pekerjaan di cabangmu tuntas dan telah diuji secara lokal, kirim cabang tersebut menggunakan perintah <code>git push origin fitur-autentikasi</code>.
            </li>
            <li>
                <strong>Buka Diskusi Melalui Pull Request:</strong> Satukan kode melalui fitur Pull Request atau Merge Request di GitHub. Di sini rekan satu tim dapat memeriksa hasil kerjaanmu bersama-sama sebelum disatukan ke cabang utama.
            </li>
        </ol>

        <div class="bg-amber-50 border border-amber-200 rounded-lg p-5 my-6">
            <p class="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-2 font-bold">Trik Penyelamat: Manfaatkan Git Stash</p>
            <p class="text-gray-700 text-sm leading-relaxed">Pernahkah kamu sedang asyik mengetik kode di tengah jalan, lalu tiba-tiba temanmu memanggil untuk segera memeriksa perbaikan penting di cabang lain? Jangan panik dan jangan hapus perubahanmu. Jalankan perintah <code>git stash</code>. Perintah ini ibarat memasukkan pekerjaan yang belum selesai ke dalam laci rahasia yang aman. Setelah selesai urusan di cabang lain, kembali ke cabangmu lalu ketik <code>git stash pop</code> untuk mengeluarkan kembali kode tersebut persis seperti kondisi terakhir.</p>
        </div>

        <h2>Panduan Ringkas Perintah Kolaborasi Git</h2>

        <div class="overflow-x-auto my-6">
            <table class="w-full border-collapse border border-gray-300 shadow-sm">
                <thead class="bg-amber-50">
                    <tr>
                        <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Perintah Git</th>
                        <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Fungsi Nyata di Tim</th>
                        <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Kaidah Terbaik</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-800"><code>git status</code></td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-700">Melihat daftar file yang baru ditambahkan, diedit, atau mengalami konflik.</td>
                        <td class="border border-gray-300 px-4 py-3 font-medium text-amber-600">Jalankan setiap saat sebelum dan sesudah menjalankan perintah lain</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-800"><code>git checkout -b [nama]</code></td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-700">Membuat cabang kerja mandiri baru sekaligus berpindah ke dalamnya.</td>
                        <td class="border border-gray-300 px-4 py-3 font-medium text-blue-600">Beri nama spesifik seperti <code>fitur-navbar</code> atau <code>perbaikan-bug-login</code></td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-800"><code>git pull origin main</code></td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-700">Mengambil pembaharuan terbaru dari repositori pusat ke komputer lokal.</td>
                        <td class="border border-gray-300 px-4 py-3 font-medium text-amber-600">Wajib dieksekusi setiap awal hari sebelum mulai menulis baris kode baru</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-800"><code>git stash</code></td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-700">Mengamankan perubahan kode yang belum selesai agar bisa berpindah cabang.</td>
                        <td class="border border-gray-300 px-4 py-3 font-medium text-blue-600">Gunakan <code>git stash pop</code> untuk mengembalikan kode kembali saat sudah siap</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-800"><code>git log -n 5</code></td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-700">Melihat daftar 5 riwayat commit terakhir beserta penulis dan waktunya.</td>
                        <td class="border border-gray-300 px-4 py-3 font-medium text-amber-600">Sangat berguna saat mencari tahu siapa yang terakhir mengubah baris terkait</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Penutup: Mentalitas Seorang Software Engineer</h2>

        <p>Kemampuan menulis algoritma yang efisien memang penting, tetapi di dunia nyata software tidak pernah dibangun oleh satu orang yang bekerja sendirian di dalam gua. Kemampuan berkolaborasi, menjaga kebersihan riwayat repositori, dan menyelesaikan perbedaan versi kode dengan kepala dingin adalah pembeda utama antara sekadar mahasiswa yang bisa coding dengan calon software engineer profesional yang siap terjun ke industri teknologi.</p>

        <br/>

        <p>Jadikan setiap kemunculan pesan <i>merge conflict</i> sebagai kesempatan untuk berdiskusi dengan rekan satu timmu. Diskusikan arsitekturnya, satukan logikanya, selesaikan konfliknya, dan nikmati proses membangun karya bersama!</p>
    `,
    category_id: 2,
    category: {
        id: 2,
        name: "Education"
    },
    created_at: "2026-09-07T12:00:00Z",
    updated_at: "2026-09-07T12:00:00Z"
};
