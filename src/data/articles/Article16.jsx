import { aiHallucinationThumb } from "../../../public/assets/articles/thumbnails";

export const Article16 = {
    id: 16,
    title: "Memahami Fenomena Halusinasi pada AI dan Pendekatan Teknis untuk Menekan Resikonya",
    slug: "memahami-fenomena-halusinasi-ai",
    image: aiHallucinationThumb,
    content: `
        <p>
            Kecerdasan buatan, khususnya model bahasa besar atau Large Language Model (LLM), semakin banyak digunakan untuk membantu menulis, mencari informasi, dan menjawab pertanyaan. Chatbot berbasis AI dapat menghasilkan jawaban yang terlihat runtut, dan meyakinkan. Namun, jawaban yang terlihat meyakinkan tidak selalu berarti akurat.
        </p>

        <br />

        <p>
            Fenomena ketika AI menghasilkan informasi yang keliru, tidak akurat, atau bahkan dibuat-buat disebut halusinasi AI. Jika jawaban AI langsung dipercaya tanpa pemeriksaan, informasi keliru dapat menyebar dan memengaruhi keputusan pengguna. Oleh karena itu, memahami halusinasi AI serta pendekatan teknis untuk menekan risikonya menjadi penting, terutama bagi pengguna teknologi digital.
        </p>

        <br />

        <p>
            Bagi mahasiswa, kecerdasan buatan sering menjadi alat bantu yang praktis ketika mengerjakan tugas, mencari ide, merangkum materi, atau memahami topik baru. Chatbot berbasis AI dapat memberikan jawaban dengan cepat dan terlihat teratur, sehingga terasa seperti sumber informasi yang siap digunakan. Namun, pengalaman tersebut tidak selalu berjalan mulus, kadang jawaban yang diberikan terasa meleset dari harapan, terlalu umum, atau bahkan menyebutkan informasi yang tidak dapat ditemukan.
        </p>

        <br />

        <p>
            Kondisi ini berkaitan dengan fenomena halusinasi AI, yaitu ketika model AI menghasilkan informasi yang keliru, tidak akurat, atau dibuat-buat, tetapi disajikan seolah-olah benar. Misalnya, mahasiswa meminta rekomendasi jurnal untuk tugas, lalu AI memberikan judul, nama penulis, dan tahun terbit yang terlihat lengkap. Setelah dicari, ternyata referensi tersebut tidak ada atau rinciannya keliru.
        </p>

        <br />

        <p>
            Masalah ini penting karena mahasiswa sering menggunakan AI tanpa selalu memiliki waktu atau kemampuan untuk memeriksa setiap informasi. Jika jawaban AI langsung dipercaya, kesalahan dapat berlanjut ke tugas, presentasi, atau keputusan akademik lainnya. Oleh karena itu, memahami penyebab halusinasi AI dan pendekatan teknis untuk menekan risikonya menjadi penting, agar AI dapat dimanfaatkan sebagai alat bantu belajar yang lebih bertanggung jawab.
        </p>

        <h2>1. Apa itu halusinasi AI?</h2>

        <p>
            Halusinasi dalam konteks kecerdasan buatan (Artificial Intelligence), khususnya pada Large Language Models (LLM) seperti GPT, Gemini, atau model generatif lainnya, merujuk pada fenomena ketika model menghasilkan keluaran (output) berupa teks, informasi, fakta, atau kutipan yang keliru, tidak akurat, fiktif, namun disajikan dengan sangat percaya diri, kohesif, dan meyakinkan secara tata bahasa. Berdasarkan literatur komputasi, halusinasi dibedakan menjadi dua kategori utama:
        </p>

        <br />

        <ul>
            <li>
                <strong>Halusinasi Faktual (Factual Hallucination):</strong> Keluaran bertentangan dengan fakta dunia nyata yang dapat diverifikasi (misalnya, menyatakan tanggal lahir tokoh sejarah yang salah atau menciptakan undang-undang fiktif).
            </li>
            <li>
                <strong>Halusinasi Kesetiaan (Faithfulness Hallucination):</strong> Keluaran menyimpang atau tidak konsisten dengan konteks sumber atau instruksi spesifik yang diberikan oleh pengguna dalam prompt.
            </li>
        </ul>

        <h2>2. Mengapa AI Bisa Berhalusinasi?</h2>

        <p>
            LLM tidak bekerja seperti mesin pencari yang selalu mengambil dokumen dari internet. Model ini belajar dari data teks dalam jumlah besar, lalu menghasilkan respons dengan memprediksi kata atau bagian teks berikutnya berdasarkan pola yang dipelajari. Karena itu, model dapat menyusun kalimat yang gramatikal dan logis, tetapi belum tentu faktual.
        </p>

        <br />

        <p>
            Penyebab utama terjadinya halusinasi meliputi:
        </p>

        <br />

        <ul>
            <li>
                <strong>Keterbatasan pengetahuan model:</strong> Model mungkin tidak memiliki informasi yang cukup mengenai topik tertentu, terutama informasi terbaru atau sangat spesifik.
            </li>
            <li>
                <strong>Pola bahasa yang dominan:</strong> Model cenderung melanjutkan pola kalimat yang sering muncul dalam data pelatihan, meskipun isi kalimat tersebut belum tentu benar.
            </li>
            <li>
                <strong>Prioritas Kelancaran Sintaksis di Atas Kebenaran:</strong> Tujuan utama fungsi objektif dalam pelatihan model adalah memaksimalkan kelancaran bahasa (fluency), sehingga model cenderung memprioritaskan struktur kalimat yang mengalir mulus meskipun isinya tidak berdasar secara faktual.
            </li>
        </ul>

        <h2>3. Bagaimana Halusinasi Muncul dalam Jawaban?</h2>

        <p>
            Misalnya, seorang mahasiswa bertanya, “Sebutkan tiga jurnal tentang pemanfaatan AI dalam pembelajaran”. Chatbot memberikan tiga judul jurnal beserta nama penulis dan tahun terbit. Jawaban itu terlihat lengkap, tetapi belum tentu jurnal tersebut benar-benar ada.
        </p>

        <br />

        <p>
            Chatbot dapat menghasilkan referensi yang dibuat-buat maupun referensi nyata dengan rincian sitasi yang keliru, seperti nama penulis, judul, tahun, atau volume jurnal. Hal ini menunjukkan bahwa format jawaban yang rapi dan penggunaan istilah akademik bukan bukti bahwa informasinya telah diverifikasi.
        </p>

        <br />

        <p>
            Proses munculnya halusinasi dapat ditelusuri melalui tahapan inferensi model saat merespons sebuah kueri:
        </p>

        <br />

        <ul>
            <li>
                <strong>Analisis Kueri dan Pemetaan Vektor:</strong> Masukan (prompt) dari pengguna diubah menjadi representasi numerik (vektor) dan dicocokkan dengan pola parameter internal model yang telah dipelajari selama pelatihan.
            </li>
            <li>
                <strong>Kalkulasi Probabilitas Token:</strong> Model menghitung probabilitas kemunculan untuk setiap kandidat kata berikutnya berdasarkan konteks kalimat yang sedang dibangun.
            </li>
            <li>
                <strong>Pemilihan Kata dan Akumulasi Kesalahan (Error Propagation):</strong> Jika pada tahap awal model memilih kata yang menyimpang akibat bobot probabilitas yang keliru, kata-kata berikutnya akan beradaptasi dengan kata menyimpang tersebut. Akibatnya, model masuk ke dalam jalur generasi teks yang sepenuhnya salah, namun terus melanjutkan kalimat hingga selesai karena secara struktur gramatikal kalimat tersebut tetap konsisten.
            </li>
        </ul>

        <h2>4. Pendekatan Teknis untuk Menekan Risiko Halusinasi</h2>

        <p>
            Untuk meminimalisir probabilitas dan dampak halusinasi, berbagai pendekatan teknis tingkat lanjut diterapkan dalam rekayasa sistem AI:
        </p>

        <br />

        <ul>
            <li>
                <strong>Implementasi Retrieval-Augmented Generation (RAG):</strong> RAG menghubungkan model generatif dengan basis data atau repositori dokumen eksternal yang terverifikasi. Sebelum model menghasilkan jawaban, sistem melakukan pencarian dokumen yang relevan dengan kueri, lalu menyertakan teks sumber tersebut sebagai konteks tambahan. Hal ini memaksa model untuk merumuskan respons berdasarkan referensi faktual nyata alih-alih mengandalkan memori internal semata.
            </li>
            <li>
                <strong>Pengaturan Parameter Inferensi (Hyperparameter Tuning):</strong> Mengontrol parameter seperti temperature mendekati angka nol (0). Pengaturan ini membatasi keacakan dan kreativitas model, sehingga model secara konsisten memilih token dengan probabilitas tertinggi yang lebih patuh pada fakta.
            </li>
            <li>
                <strong>Arsitektur Verifikasi Berlapis (Multi-Agent Validation):</strong> Menggunakan sistem berlapis di mana satu modul bertugas menghasilkan teks (generator), sementara modul terpisah bertugas memvalidasi klaim faktual atau mendeteksi inkonsistensi logika (verifier) sebelum keluaran disajikan kepada pengguna.
            </li>
        </ul>

        <h2>5. Contoh Penerapan Praktis</h2>

        <p>
            Penerapan mitigasi halusinasi secara nyata dapat dilihat pada berbagai sistem berbasis teknologi modern:
        </p>

        <br />

        <ul>
            <li>
                <strong>Sistem Pencarian Dokumen Hukum Berbasis RAG:</strong> Firma hukum dan institusi riset menggunakan sistem LLM yang diintegrasikan secara ketat dengan pangkalan data undang-undang resmi. Sistem dikonfigurasi agar menolak menjawab jika referensi dokumen hukum yang sah tidak ditemukan, sehingga mencegah model mengarang pasal atau putusan hukum fiktif.
            </li>
            <li>
                <strong>Asisten Pemrograman Otomatis (Coding Assistant):</strong> Platform pengembangan perangkat lunak menerapkan mekanisme penyaringan sintaksis dan pengujian otomatis (unit testing) secara instan pada cuplikan kode yang dihasilkan AI, guna memastikan fungsi pustaka (libraries) atau API yang disarankan benar-benar ada dan valid secara teknis.
            </li>
        </ul>

        <h2>Penutup</h2>

        <p>
            Halusinasi AI adalah keterbatasan penting dari model bahasa besar: AI dapat menghasilkan jawaban yang terlihat meyakinkan, tetapi tidak selalu akurat atau faktual. Fenomena ini muncul karena model menghasilkan teks berdasarkan pola bahasa, bukan karena memiliki kemampuan verifikasi fakta seperti manusia.
        </p>

        <br />

        <p>
            Pendekatan teknis seperti RAG, pemberian konteks yang jelas, dan verifikasi silang dapat membantu menekan risiko halusinasi. Namun, tidak ada pendekatan yang sepenuhnya menghilangkan kesalahan.
        </p>

        <br />

        <p>
            Pesan utamanya sederhana:
        </p>

        <br />

        <blockquote>
            "Gunakan AI sebagai alat bantu berpikir dan menyusun draf, bukan sebagai sumber kebenaran akhir. Selalu periksa kembali informasi penting sebelum dipakai, terutama jika jawaban tersebut akan dikutip, dikirim, atau dijadikan dasar keputusan."
        </blockquote>
    `,
    category_id: 1,
    category: {
        id: 1,
        name: "Technology"
    },
    created_at: "2026-11-06T12:00:00Z",
    updated_at: "2026-11-06T12:00:00Z"
};
