import { frameworkThumb } from "../../../public/assets/articles/thumbnails";

export const Article5 = {
    id: 5,
    title: "Perkembangan Web Development: Dari Website Statis ke Era Modern Framework",
    slug: "perkembangan-web-development-modern-framework",
    image: frameworkThumb,
    content: `
        <p>Pernah nggak sih kamu kepikiran, dulu website itu sesederhana apa? Dibandingkan dengan sekarang yang sudah bisa login, chat, bahkan terasa seperti aplikasi, perkembangan web ternyata jauh banget dari titik awalnya.</p>

        <br/>

        <p>Dunia web telah berkembang dari sekadar halaman statis menjadi sebuah sistem kompleks yang interaktif dan responsif. Perubahan ini bukan cuma soal tampilan, tapi juga bagaimana sebuah website bekerja dan berinteraksi dengan penggunanya. Yuk, kita telusuri evolusinya!</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 my-8 text-center">
            <div class="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Tahun 1990-an</p>
                <p class="text-xl font-bold text-gray-800">Web Statis</p>
                <p class="text-sm text-gray-500 mt-2">Hanya HTML murni. Tanpa interaksi, tanpa database penyimpan data.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Tahun 2000-an</p>
                <p class="text-xl font-bold text-gray-800">Web Dinamis</p>
                <p class="text-sm text-gray-500 mt-2">PHP & MySQL membuat web bisa menyimpan dan merespons data.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p class="text-xs font-bold text-primary-orange uppercase tracking-widest mb-2">2010 – Kini</p>
                <p class="text-xl font-bold text-gray-800">Modern Web</p>
                <p class="text-sm text-gray-500 mt-2">SPA & Framework mengubah website menjadi senyaman aplikasi native.</p>
            </div>
        </div>

        <h2>Era Website Statis</h2>

        <p>Di awal kemunculannya sekitar tahun 1991, ketika Tim Berners-Lee menciptakan World Wide Web, website hanya dibuat menggunakan HTML murni. Isinya sangat sederhana: teks, gambar, dan mungkin beberapa link navigasi. Semua orang yang membuka halaman tersebut akan melihat hal yang persis sama.</p>

        <br/>

        <p>Tidak ada interaksi. Tidak ada data yang berubah. Bahkan untuk mengedit konten, developer harus langsung mengubahnya lewat kode secara manual. Seiring berkembangnya CSS di pertengahan 1990-an, tampilan website mulai bisa dipercantik, namun secara fungsionalitas tetap terbatas.</p>

        <br/>

        <p>Meski terbatas, website statis masih punya beberapa kelebihan seperti cepat dimuat, ringan, dan mudah dibuat. Cocok untuk profil perusahaan atau halaman informasi sederhana. Bahkan hingga saat ini, konsep website statis masih digunakan melalui teknologi seperti Static Site Generator (SSG). Namun pada masa itu, kebutuhan pengguna mulai berkembang, mereka ingin lebih dari sekadar "melihat" informasi saja.</p>

        <h2>Era Website Dinamis</h2>

        <p>Masuk ke fase berikutnya di akhir 1990-an hingga awal 2000-an, website mulai terasa "hidup". Dengan bantuan bahasa backend seperti PHP, ASP, dan database seperti MySQL, website kini bisa menyimpan dan mengelola data secara dinamis.</p>

        <br/>

        <p>Website kini bisa menyimpan data dan melayani setiap pengguna dengan tampilan yang unik. Sekarang pengunjung web bisa:</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div class="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                <p class="text-sm font-medium leading-tight text-center text-amber-600"><strong>Login aman ke sistem dengan akun pribadi</strong></p>
            </div>
            <div class="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                <p class="text-sm font-medium leading-tight text-center text-amber-600"><strong>Mengisi form dan mengirimkan data</strong></p>
            </div>
            <div class="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                <p class="text-sm font-medium leading-tight text-center text-amber-600"><strong>Menyaksikan konten personalisasi</strong></p>
            </div>
        </div>

        <p>Website tidak lagi statis, tetapi sudah bisa menyesuaikan diri dengan setiap interaksi penggunanya. Contoh nyata dari era ini adalah platform e-commerce, dashboard admin, forum diskusi, dan sistem komentar blog.</p>

        <br/>

        <p>Namun ada satu masalah besar: hampir setiap interaksi masih membutuhkan reload seluruh halaman. Klik tombol? Reload. Kirim komentar? Reload. Hal ini membuat pengalaman pengguna terasa lambat dan kurang mulus.</p>

        <h2>JavaScript Modern dan AJAX</h2>

        <p>Untuk mengatasi masalah tersebut, JavaScript mulai berkembang pesat. Teknologi seperti AJAX (Asynchronous JavaScript and XML), yang dipopulerkan oleh Google melalui Gmail dan Google Maps sekitar tahun 2005, memungkinkan website berkomunikasi dengan server tanpa harus melakukan reload halaman.</p>

        <br/>

        <p>Hasilnya, navigasi antar halaman menjadi jauh lebih cepat, interaksi terasa halus, dan website bekerja senyaman aplikasi <em>native</em>. Beberapa fitur ikonik hasil teknologi ini meliputi:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div class="bg-amber-50 border border-amber-200 rounded-lg p-5 hover:bg-amber-100 transition-colors">
                <p class="font-bold text-amber-700 mb-1 flex items-center gap-2"> Infinite Scroll</p>
                <p class="text-sm text-gray-600 leading-relaxed">Konten media sosial memuat otomatis saat kamu men-scroll ke bawah tanpa henti.</p>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-5 hover:bg-blue-100 transition-colors">
                <p class="font-bold text-blue-700 mb-1 flex items-center gap-2"> Notifikasi Real-time</p>
                <p class="text-sm text-gray-600 leading-relaxed">Pemberitahuan muncul seketika di sudut layarmu tanpa perlu menekan tombol refresh.</p>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-5 hover:bg-blue-100 transition-colors">
                <p class="font-bold text-blue-700 mb-1 flex items-center gap-2"> Live Chat</p>
                <p class="text-sm text-gray-600 leading-relaxed">Berbalas pesan langsung dengan mulus dan instan di dalam halaman web.</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 rounded-lg p-5 hover:bg-amber-100 transition-colors">
                <p class="font-bold text-amber-700 mb-1 flex items-center gap-2"> Auto-complete</p>
                <p class="text-sm text-gray-600 leading-relaxed">Saran pencarian atau produk muncul dengan sendirinya segera setelah kamu mengetik.</p>
            </div>
        </div>

        <p>Library seperti jQuery juga lahir di era ini (2006) dan menjadi sangat populer karena menyederhanakan manipulasi DOM dan penanganan event di berbagai browser. jQuery menjadi jembatan penting sebelum era framework modern tiba.</p>

        <br/>

        <p>Namun di sisi lain, kode JavaScript menjadi semakin kompleks. Developer mulai kesulitan mengelola proyek yang semakin besar tanpa struktur yang jelas.</p>

        <h2>Era Modern Framework & Library</h2>

        <p>Di sinilah framework dan library modern hadir sebagai solusi. Dimulai dari AngularJS (2010), lalu React (2013), Vue (2014), dan di sisi backend ada Laravel (2011) serta Express.js (2010), developer kini tidak perlu lagi membangun semuanya dari nol.</p>

        <div class="overflow-x-auto my-6">
            <table class="w-full border-collapse border border-gray-300 shadow-sm">
                <thead class="bg-amber-50">
                    <tr>
                        <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Manfaat Utama Framework</th>
                        <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Dampak Signifikan pada Development</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Arsitektur Terstandar</td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-600">Menyusun kode menjadi lebih rapi, konsisten, dan mudah dipahami semua orang.</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Komponen Reusable</td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-600">Mempercepat proses pengerjaan karena elemen UI dapat dipakai berulang kali.</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Kolaborasi & Maintenance</td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-600">Sangat memudahkan pemeliharaan proyek skala besar dengan anggota tim yang banyak.</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">State Management</td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-600">Mampu mengelola dan melacak aliran data aplikasi yang kompleks secara efisien.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Selain itu, konsep seperti MVC (Model-View-Controller) dan component-based architecture membuat pemisahan antara data, tampilan, dan logika bisnis menjadi lebih jelas dan terstruktur.</p>

        <br/>

        <p>Era ini juga melahirkan Single Page Application (SPA), di mana halaman tidak perlu reload saat berpindah konten. Website pun terasa jauh lebih cepat dan responsif, bahkan mirip aplikasi mobile. Framework seperti Next.js dan Nuxt.js bahkan menggabungkan keunggulan SPA dengan Server-Side Rendering (SSR) untuk performa dan SEO yang lebih optimal. Namun, ada tantangan baru bagi para developer web: ekosistem teknologi berkembang sangat cepat, sehingga mereka harus terus belajar dan memperbarui skill agar tidak tertinggal.</p>

        <h2>Penutup</h2>

        <p>Perjalanan web development menunjukkan bagaimana teknologi terus beradaptasi dengan kebutuhan manusia. Dari website statis yang sederhana hingga aplikasi web modern yang kompleks dan interaktif, semuanya terjadi dalam waktu kurang dari tiga dekade.</p>

        <br/>

        <p>Saat ini, framework telah menjadi standar dalam pengembangan web. Dan ke depan, teknologi seperti WebAssembly, Progressive Web App (PWA), dan integrasi AI diprediksi akan semakin mengubah cara kita membangun dan menggunakan web.</p>

        <br/>

        <p><strong>Bagi developer, kunci utama dalam menghadapi perkembangan teknologi ini adalah terus belajar, bereksperimen, dan beradaptasi. Karena di dunia web, yang tidak berkembang akan tertinggal.</strong></p>
    `,
    category_id: 3,
    category: {
        id: 3,
        name: "Web Development"
    },
    created_at: "2026-05-20T10:00:00Z",
    updated_at: "2026-08-04T09:58:55Z"
};