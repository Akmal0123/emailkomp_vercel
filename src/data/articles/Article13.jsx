import { internetThumb } from "../../../public/assets/articles/thumbnails";

export const Article13 = {
    id: 13,
    title: "Bagaimana Internet Bekerja? Mari Mengenal Cara Kerja Internet",
    slug: "bagaimana-internet-bekerja",
    image: internetThumb,
    content: `
        <p>
            Internet sudah menjadi bagian penting dalam kehidupan sehari-hari. 
            Mulai dari mencari informasi, berkomunikasi, hingga belajar dan bekerja, 
            semuanya bisa dilakukan melalui internet.
        </p>
        <br />
        <p>
            Namun, pernahkah kamu berpikir bagaimana internet sebenarnya bekerja? 
            Bagaimana sebuah website bisa muncul hanya dalam beberapa detik setelah kita mengetikkan alamatnya di browser?
        </p>
        <br />
        <p>
            Untuk memahaminya, mari kita mengenal dasar-dasar teknologi yang membuat internet dapat bekerja.
        </p>

        <section>
            <h2>1. Apa Itu Internet?</h2>

            <p>
                Internet adalah jaringan global yang menghubungkan berbagai
                perangkat di seluruh dunia, seperti komputer, smartphone,
                dan server.
            </p>
            <br />
            <p>
                Secara sederhana, internet dapat diibaratkan sebagai jalan raya
                yang menghubungkan berbagai tempat. Bedanya, internet
                menghubungkan perangkat agar dapat saling bertukar data
                dan informasi.
            </p>
            <br />
            <p>
                Komunikasi tersebut menggunakan aturan tertentu yang disebut
                protokol, salah satunya TCP/IP (Transmission Control Protocol/
                Internet Protocol).
            </p>
        </section>

        <section>
            <h2>2. Bagaimana Internet Bekerja?</h2>

            <p>
                Ketika kita mengakses internet, perangkat akan terhubung
                melalui penyedia layanan internet atau Internet Service
                Provider (ISP).
            </p>
            <br />
            <p>Misalnya, saat membuka sebuah website, proses yang terjadi adalah:</p>

            <ol>
                <li>Pengguna mengetikkan alamat website melalui browser.</li>
                <li>DNS menerjemahkan nama domain menjadi alamat IP server.</li>
                <li>Browser menghubungi server tujuan.</li>
                <li>Server memproses permintaan dan mengirimkan data.</li>
                <li>Browser menerima data dan menampilkan halaman website.</li>
            </ol>
            <br />
            <p>
                Seluruh proses tersebut berlangsung sangat cepat sehingga
                pengguna dapat mengakses informasi dalam hitungan detik.
            </p>
        </section>

        <section>
            <h2>3. Teknologi Penting di Balik Internet</h2>

            <p>
                Ada beberapa teknologi yang memiliki peran penting
                dalam cara kerja internet:
            </p>

            <ul>
                <li>
                    <strong>IP Address:</strong>
                    Alamat yang digunakan untuk mengidentifikasi perangkat
                    atau antarmuka jaringan.
                </li>
                <li>
                    <strong>DNS:</strong>
                    Sistem yang menerjemahkan nama domain menjadi alamat IP.
                </li>
                <li>
                    <strong>Server:</strong>
                    Komputer atau sistem yang menyediakan layanan dan data
                    kepada perangkat lain.
                </li>
                <li>
                    <strong>Router:</strong>
                    Perangkat yang meneruskan paket data antarjaringan.
                </li>
                <li>
                    <strong>ISP:</strong>
                    Penyedia layanan yang memberikan akses internet
                    kepada pengguna.
                </li>
            </ul>
            <br />
            <p>
                Setiap komponen memiliki fungsi berbeda, tetapi saling
                bekerja sama agar komunikasi internet berjalan dengan baik.
            </p>
        </section>

        <section>
            <h2>4. Bagaimana Data Dikirim Melalui Internet?</h2>

            <p>
                Ketika mengirim pesan, membuka website, atau mengunggah foto,
                data akan dikirim melalui jaringan dalam bentuk paket-paket data.
            </p>
            <br />
            <p>
                Paket tersebut melewati berbagai perangkat jaringan hingga
                mencapai tujuan. Setelah diterima, data diproses dan disusun
                kembali agar dapat ditampilkan atau digunakan.
            </p>
            <br />
            <p>
                Proses ini memungkinkan seseorang mengirim informasi kepada
                orang lain meskipun berada di lokasi yang sangat jauh.
            </p>
        </section>

        <section>
            <h2>5. Mengapa Koneksi Internet Bisa Lambat?</h2>

            <p>
                Kecepatan internet dipengaruhi oleh beberapa faktor,
                di antaranya:
            </p>

            <ul>
                <li>Bandwidth atau kapasitas transfer data.</li>
                <li>Latency atau waktu perjalanan data.</li>
                <li>Kualitas jaringan yang digunakan.</li>
                <li>Jumlah perangkat yang terhubung.</li>
                <li>Kinerja server yang diakses.</li>
            </ul>
            <br />
            <p>
                Jadi, koneksi internet yang lambat tidak selalu disebabkan
                oleh penyedia layanan internet, tetapi juga bisa berasal
                dari kondisi jaringan atau server tujuan.
            </p>
        </section>

        <section>
            <h2>Kesimpulan</h2>

            <p>
                Internet merupakan teknologi yang memungkinkan berbagai
                perangkat saling terhubung dan bertukar informasi. Di balik
                kemudahannya, terdapat berbagai komponen seperti IP Address,
                DNS, server, router, dan protokol TCP/IP yang bekerja bersama.
            </p>
            <br />
            <p>
                Memahami cara kerja internet merupakan pengetahuan dasar
                yang penting, khususnya bagi mahasiswa IT. Dengan memahami
                konsep ini, kita dapat mempelajari teknologi yang lebih
                kompleks, seperti jaringan komputer, keamanan siber,
                dan pengembangan web.
            </p>
        </section>
    `,
    category_id: 2,
    category: {
        id: 2,
        name: "Education"
    },
    created_at: "2026-10-31T12:00:00Z",
    updated_at: "2026-10-31T12:00:00Z"
};
