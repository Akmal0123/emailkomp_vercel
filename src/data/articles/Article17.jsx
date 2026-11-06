import { caraKerjaLLMThumb } from "../../../public/assets/articles/thumbnails";

export const Article17 = {
    id: 17,
    title: "Cara Kerja AI Generatif (LLM) Dijelaskan dengan Bahasa Awam",
    slug: "cara-kerja-ai-generatif-llm",
    image: caraKerjaLLMThumb,
    content: `
        <p>
            Hampir semua mahasiswa kini pernah mengobrol dengan ChatGPT, Gemini, atau Claude. Kita mengetik pertanyaan, lalu dalam hitungan detik muncul jawaban yang rapi, runtut, bahkan terasa seperti ditulis manusia. Wajar kalau banyak orang bertanya-tanya: apakah AI benar-benar berpikir? Dari mana ia tahu semua itu? Kenapa kadang ia salah tetapi terdengar sangat yakin?
        </p>

        <br />

        <p>
            Jawabannya ada pada teknologi yang disebut Large Language Model atau LLM, yaitu mesin di balik AI generatif berbasis teks. Artikel ini menjelaskan cara kerjanya dengan bahasa sederhana, tanpa rumus rumit, agar siapa pun bisa memahaminya dan memakainya dengan lebih bijak.
        </p>

        <h2>1. Apa itu AI generatif dan LLM?</h2>

        <p>
            AI generatif adalah jenis kecerdasan buatan yang mampu menghasilkan sesuatu yang baru, misalnya teks, gambar, suara, atau kode program. Berbeda dengan AI lama yang hanya mengklasifikasikan data (misalnya menandai email sebagai spam atau bukan), AI generatif membuat konten dari nol berdasarkan perintah yang kita berikan.
        </p>

        <br />

        <p>
            LLM adalah AI generatif yang khusus mengolah bahasa. Kata "large" (besar) merujuk pada dua hal: data latihnya yang sangat banyak, dan jumlah "parameter" di dalamnya yang bisa mencapai miliaran. Parameter bisa dibayangkan sebagai jutaan tombol pengatur kecil yang menentukan bagaimana model bereaksi terhadap suatu masukan.
        </p>

        <h2>2. Belajar dari tumpukan teks</h2>

        <p>
            Bayangkan seorang anak yang membaca jutaan buku, artikel, dan percakapan tanpa pernah diberi tahu mana yang benar. Ia hanya diminta satu hal berulang-ulang: menebak kata berikutnya. Itulah inti pelatihan LLM.
        </p>

        <br />

        <p>
            Contohnya, model diberi kalimat "Ibu kota Indonesia adalah ..." lalu diminta menebak kelanjutannya. Kalau tebakannya salah, parameter di dalamnya disesuaikan sedikit. Proses ini diulang miliaran kali dengan data yang sangat beragam, sampai model makin jago menebak. Tahap ini disebut pelatihan awal (pre-training) dan membutuhkan komputer berkekuatan besar yang bekerja berminggu-minggu.
        </p>

        <h2>3. Teks dipecah menjadi potongan kecil</h2>

        <p>
            Komputer tidak membaca kata seperti manusia. Teks lebih dulu dipecah menjadi potongan kecil yang disebut token, yang bisa berupa satu kata, sebagian kata, atau tanda baca. Kata "belajar" misalnya bisa menjadi satu token, sedangkan kata yang jarang dipakai bisa dipecah menjadi beberapa token. Setiap token kemudian diubah menjadi deretan angka karena yang bisa diolah mesin hanyalah angka.
        </p>

        <h2>4. Menebak kata berikutnya, berulang-ulang</h2>

        <p>
            Saat kita mengirim pertanyaan, model tidak mengambil jawaban dari sebuah lemari arsip. Ia menghitung token apa yang paling mungkin muncul berikutnya, memilih salah satunya, lalu mengulangi proses yang sama sampai jawaban selesai. Seperti fitur prediksi teks di keyboard ponsel, tetapi jauh lebih canggih karena mempertimbangkan seluruh konteks percakapan.
        </p>

        <br />

        <p>
            Model biasanya tidak selalu memilih tebakan peringkat pertama. Ada unsur keacakan terkontrol, sehingga pertanyaan yang sama bisa menghasilkan jawaban yang sedikit berbeda setiap kali ditanyakan. Unsur inilah yang membuat jawaban AI terasa kreatif.
        </p>

        <h2>5. Kenapa terasa "paham"? Berkat perhatian</h2>

        <p>
            Model modern memakai rancangan bernama Transformer. Kekuatan utamanya adalah mekanisme attention (perhatian), yaitu kemampuan menentukan kata mana dalam sebuah kalimat yang paling berkaitan dengan kata lainnya.
        </p>

        <br />

        <p>
            Perhatikan kalimat ini: "Rina memberi buku kepada Dita karena dia lupa membawa buku." Manusia tahu "dia" merujuk pada Dita. Dengan attention, model belajar menghubungkan kata "dia" dengan kata yang tepat, bukan sekadar kata yang berdekatan. Kemampuan menangkap hubungan antarkata inilah yang membuat jawaban LLM terasa nyambung dan kontekstual.
        </p>

        <h2>6. Dari penebak kata menjadi asisten</h2>

        <p>
            Model yang baru selesai pelatihan awal hanya pandai melanjutkan teks. Kalau ditanya sesuatu, ia bisa saja menjawab dengan pertanyaan lain. Karena itu ada tahap lanjutan: model dilatih dengan contoh percakapan yang baik, lalu dinilai oleh manusia. Jawaban yang membantu, sopan, dan aman diberi nilai tinggi, sedangkan jawaban yang buruk diberi nilai rendah. Dari proses ini, model belajar berperilaku seperti asisten yang menjawab dengan jelas dan menolak permintaan yang berbahaya.
        </p>

        <h2>7. Kenapa AI bisa salah tapi terdengar yakin?</h2>

        <p>
            Karena tugas dasarnya adalah menyusun kalimat yang masuk akal, bukan memeriksa kebenaran. Kalau model tidak memiliki informasi yang cukup, ia tetap bisa merangkai jawaban yang terdengar meyakinkan padahal keliru. Fenomena ini disebut halusinasi. Contohnya, AI bisa menyebut judul jurnal atau nama penulis yang sebenarnya tidak pernah ada.
        </p>

        <br />

        <p>
            Selain itu, pengetahuan model terbatas pada data latihnya, sehingga informasi terbaru bisa terlewat, kecuali model terhubung ke pencarian internet.
        </p>

        <h2>8. Tips memakai LLM dengan bijak</h2>

        <ul>
            <li>Beri perintah yang jelas dan spesifik, lengkap dengan konteks dan format jawaban yang diinginkan.</li>
            <li>Anggap jawaban AI sebagai draf awal, bukan kebenaran mutlak. Periksa kembali fakta, angka, dan referensinya.</li>
            <li>Jangan memasukkan data pribadi atau rahasia ke dalam percakapan.</li>
            <li>Gunakan AI untuk membantu memahami materi, bukan untuk menggantikan proses berpikir sendiri.</li>
        </ul>

        <h2>Penutup</h2>

        <p>
            Secara sederhana, LLM adalah mesin yang belajar dari teks dalam jumlah sangat besar untuk menebak kata berikutnya dengan sangat cermat. Dari tugas yang tampak sederhana itu, lahirlah kemampuan menulis, menerjemahkan, merangkum, hingga membuat kode.
        </p>

        <br />

        <p>
            Namun, LLM tidak berpikir seperti manusia dan tidak otomatis benar. Pesan utama artikel ini: pahami cara kerjanya, manfaatkan kelebihannya, dan tetap kritis terhadap hasilnya. Dengan begitu, AI menjadi teman belajar yang andal, bukan sumber informasi yang dipercaya begitu saja.
        </p>
    `,
    category_id: 1,
    category: {
        id: 1,
        name: "Technology"
    },
    created_at: "2026-11-07T00:00:00Z",
    updated_at: "2026-11-07T00:00:00Z"
};
