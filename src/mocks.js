import axios from "axios";

// ==========================================
// 1. MOCK DATA
// ==========================================

const mockStructure = {
    status: "success",
    data: {
        bph_inti: [
            {
                id: 1,
                name: "Satria",
                position: "Ketua Himpunan",
                image_url: "/assets/organization/anggota/ketua-wakil/satria.png",
                is_leader: true,
                sort_order: 1
            },
            {
                id: 2,
                name: "Aisyah",
                position: "Wakil Ketua Himpunan",
                image_url: "/assets/organization/anggota/ketua-wakil/aisyah.png",
                is_leader: false,
                sort_order: 2
            }
        ],
        departments: [
            {
                id: 1,
                name: "Sekretaris & Bendahara",
                slug: "sekretaris-bendahara",
                head_of_bidang: {
                    id: 3,
                    name: "Nabila Sekbend",
                    position: "Kepala Bidang",
                    image_url: "/assets/organization/anggota/sekbend/elita.png",
                    is_leader: true,
                    sort_order: 1
                },
                divisions: []
            },
            {
                id: 2,
                name: "Pengembangan Organisasi & Kewirausahaan",
                slug: "pengembangan-organisasi",
                head_of_bidang: {
                    id: 4,
                    name: "Ariel PO",
                    position: "Kepala Bidang",
                    image_url: "/assets/organization/anggota/po/ariel.png",
                    is_leader: true,
                    sort_order: 1
                },
                divisions: []
            },
            {
                id: 3,
                name: "Kemahasiswaan",
                slug: "kemahasiswaan",
                head_of_bidang: {
                    id: 5,
                    name: "Zaky Mawa",
                    position: "Kepala Bidang",
                    image_url: "/assets/organization/anggota/mawa/aqila.png",
                    is_leader: true,
                    sort_order: 1
                },
                divisions: []
            },
            {
                id: 4,
                name: "Jaringan",
                slug: "jaringan",
                head_of_bidang: {
                    id: 6,
                    name: "Nabila Elita Dewi",
                    position: "Kepala Bidang",
                    image_url: "/assets/organization/anggota/jaringan/elita.png",
                    is_leader: true,
                    sort_order: 1
                },
                divisions: []
            },
            {
                id: 5,
                name: "Penelitian & Pengembangan",
                slug: "penelitian-pengembangan",
                head_of_bidang: {
                    id: 7,
                    name: "Odi Litbang",
                    position: "Kepala Bidang",
                    image_url: "/assets/organization/anggota/litbang/odi.png",
                    is_leader: true,
                    sort_order: 1
                },
                divisions: []
            }
        ]
    }
};

const mockEvents = [
    {
        id: 1,
        title: "Workshop: Building Standalone Apps with React",
        date: "2026-06-15",
        location: "Lab Multimedia & Edge Computing",
        description: "Pelajari bagaimana merancang, membangun, dan mendeploy aplikasi React + Vite standalone ke Vercel tanpa dependency backend PHP.",
        image: "techtalk.svg"
    },
    {
        id: 2,
        title: "E-Mailkomp Annual Gathering 2026",
        date: "2026-07-20",
        location: "Villa Kaliurang & Convention Center",
        description: "Malam keakraban, games, sharing session alumni, dan peresmian kepengurusan baru E-Mailkomp Periode 2026.",
        image: "gathering.svg"
    },
    {
        id: 3,
        title: "National Hackathon Competition 2026",
        date: "2026-08-05",
        location: "Gedung Auditorium Utama",
        description: "Kompetisi hackathon tingkat nasional bertemakan 'Smart Technology for Green Environment' yang diadakan oleh E-Mailkomp.",
        image: "hackathon.svg"
    }
];

const mockCategories = [
    { id: 1, name: "Technology", articles_count: 2 },
    { id: 2, name: "Education", articles_count: 1 }
];

const mockArticles = [
    {
        id: 1,
        title: "Panduan Lengkap Web Development Modern di 2026",
        slug: "web-dev-trends-2026",
        image: "web-dev.svg",
        content: `
            <p>Dunia pengembangan web terus berevolusi dengan sangat cepat. Memasuki tahun 2026, arsitektur frontend standalone yang sangat teroptimasi dan serverless menjadi standar utama bagi startup dan enterprise.</p>
            <h2>Mengapa Memilih Frontend Standalone?</h2>
            <p>Mendeploy web application sebagai standalone client-side (seperti React + Vite) ke platform seperti Vercel atau Netlify memberikan banyak keunggulan:</p>
            <ul>
                <li><strong>Kecepatan Load Instan:</strong> Asset disajikan langsung dari Edge CDN terdekat dengan user.</li>
                <li><strong>Deploy Super Mudah:</strong> Cukup hubungkan repository GitHub, dan deployment selesai secara otomatis (CI/CD).</li>
                <li><strong>Biaya Rendah:</strong> Tanpa perlu membayar server VPS bulanan untuk backend yang selalu aktif.</li>
            </ul>
            <h2>Tren Utama Web Dev di 2026</h2>
            <p>1. <strong>Edge Rendering:</strong> Menggeser eksekusi logika lebih dekat ke pengguna akhir untuk meminimalkan latensi.</p>
            <p>2. <strong>AI-Driven UI Components:</strong> Penggunaan tool AI untuk mempermudah prototyping dan penulisan styling adaptif.</p>
            <p>3. <strong>React 19 & Standalone SPA:</strong> Pemanfaatan compiler modern untuk menghilangkan boilerplate state management.</p>
        `,
        category_id: 1,
        category: { id: 1, name: "Technology" },
        created_at: "2026-05-10T12:00:00Z",
        updated_at: "2026-05-12T14:30:00Z"
    },
    {
        id: 2,
        title: "Mastering React 19: Action Hooks dan Performa Ekstrem",
        slug: "mastering-react-19",
        image: "react-19.svg",
        content: `
            <p>React 19 membawa perubahan fundamental yang membuat proses development menjadi jauh lebih menyenangkan. Dengan diperkenalkannya compiler otomatis dan Action Hooks baru, boilerplate code berkurang drastis.</p>
            <h2>Fitur Kunci React 19</h2>
            <ul>
                <li><strong>React Compiler:</strong> Tidak perlu lagi menulis useMemo atau useCallback secara manual. Compiler akan mengoptimasi rendering secara otomatis!</li>
                <li><strong>Actions & useTransition:</strong> Mengelola async state form submission kini menjadi bawaan library React, meminimalkan loading states manual.</li>
                <li><strong>Document Metadata Support:</strong> Tag title, meta, dan link sekarang bisa dideklarasikan langsung di dalam component tingkat rendah tanpa bantuan third-party library.</li>
            </ul>
            <p>Dengan fitur-fitur baru ini, membangun web portal standalone menjadi sangat efisien, cepat, dan terstruktur dengan sangat baik.</p>
        `,
        category_id: 1,
        category: { id: 1, name: "Technology" },
        created_at: "2026-05-14T09:00:00Z",
        updated_at: "2026-05-14T09:00:00Z"
    },
    {
        id: 3,
        title: "Tips Sukses Menghadapi Coding Interview Perusahaan Teknologi",
        slug: "ace-coding-interview",
        image: "interview.svg",
        content: `
            <p>Coding interview seringkali dianggap sebagai tahapan yang paling menantang dalam proses rekrutmen perusahaan teknologi. Namun, dengan persiapan yang matang dan metodis, Anda bisa melaluinya dengan sukses.</p>
            <h2>Tahapan Persiapan Terbaik</h2>
            <ol>
                <li><strong>Kuasai Struktur Data Dasar:</strong> Pastikan Anda memahami array, linked list, tree, hash map, dan graph secara mendalam.</li>
                <li><strong>Latih Problem Solving di LeetCode/Hackerrank:</strong> Kerjakan setidaknya 2-3 soal sehari bertemakan string manipulation, binary search, dan dynamic programming.</li>
                <li><strong>Komunikasi saat Coding:</strong> Selalu jelaskan cara berpikir Anda kepada interviewer saat menulis code. Jangan diam saja!</li>
            </ol>
            <p>Ingatlah bahwa interviewer tidak hanya menilai kebenaran sintaks kode Anda, tetapi juga bagaimana cara Anda menganalisis masalah dan bekerja sama.</p>
        `,
        category_id: 2,
        category: { id: 2, name: "Education" },
        created_at: "2026-05-15T15:20:00Z",
        updated_at: "2026-05-15T15:20:00Z"
    }
];

const mockNewsCategories = [
    { id: 1, name: "Himpunan News", news_count: 2 },
    { id: 2, name: "Campus Events", news_count: 1 }
];

const mockNews = [
    {
        id: 1,
        title: "E-Mailkomp Sukses Menggelar Expo Teknologi Tahunan 2026",
        slug: "emailkomp-expo-2026",
        image: "expo.svg",
        content: `
            <p>Himpunan Mahasiswa Ilmu Komputer (E-Mailkomp) sukses menyelenggarakan Expo Teknologi Tahunan 2026. Acara yang berlangsung selama tiga hari ini dihadiri oleh lebih dari 1.000 pengunjung dari berbagai kalangan.</p>
            <h2>Pameran Karya Mahasiswa Terbaik</h2>
            <p>Tahun ini, Expo menampilkan lebih dari 30 proyek buatan mahasiswa aktif, mulai dari IoT smart system, web application standalone, game interaktif, hingga solusi AI untuk medis.</p>
            <blockquote>"Kami sangat bangga dengan kreativitas dan inovasi yang ditunjukkan oleh rekan-rekan mahasiswa. Ini membuktikan bahwa ilmu komputer bukan hanya teori, tapi solusi riil," ujar Satria selaku Ketua Himpunan E-Mailkomp.</blockquote>
            <p>Expo ditutup dengan meriah oleh panggung seni dan pengumuman proyek favorit pengunjung yang dimenangkan oleh tim pengembang 'Smart Trash Sorter' berbasis machine learning.</p>
        `,
        news_category_id: 1,
        category: { id: 1, name: "Himpunan News" },
        created_at: "2026-05-12T10:00:00Z",
        updated_at: "2026-05-12T10:00:00Z"
    },
    {
        id: 2,
        title: "Tim Ilmu Komputer Meraih Juara 1 Hackathon Nasional 2026",
        slug: "hackathon-victory-2026",
        image: "hackathon.svg",
        content: `
            <p>Kabar membanggakan kembali datang dari perwakilan mahasiswa Ilmu Komputer. Tim E-Mailkomp Elite berhasil menyabet Juara 1 pada ajang Hackathon Nasional 2026 yang diselenggarakan di Jakarta.</p>
            <h2>Solusi 'Eco-Track' untuk Pengurangan Jejak Karbon</h2>
            <p>Tim yang beranggotakan tiga orang mahasiswa angkatan 2023 ini merancang sebuah platform terintegrasi bernama 'Eco-Track' yang membantu rumah tangga menghitung dan mengurangi jejak karbon secara gamified.</p>
            <p>Dengan presentasi yang sangat lugas dan demo prototype fungsional berbasis React standalone, dewan juri sepakat memberikan nilai tertinggi kepada perwakilan E-Mailkomp.</p>
            <p>Selamat kepada tim pemenang! Semoga prestasi gemilang ini terus menginspirasi mahasiswa lainnya untuk terus berkarya dan berprestasi.</p>
        `,
        news_category_id: 2,
        category: { id: 2, name: "Campus Events" },
        created_at: "2026-05-16T11:45:00Z",
        updated_at: "2026-05-16T11:45:00Z"
    },
    {
        id: 3,
        title: "Penerimaan Anggota Baru E-Mailkomp 2026 Resmi Dibuka!",
        slug: "recruitment-emailkomp-2026",
        image: "inagurasi.svg",
        content: `
            <p>Ingin mengembangkan soft skills, menambah relasi, dan berpartisipasi aktif dalam memajukan lingkungan Ilmu Komputer? Open Recruitment Pengurus & Anggota E-Mailkomp 2026 resmi dibuka!</p>
            <h2>Mengapa Bergabung dengan E-Mailkomp?</h2>
            <p>E-Mailkomp memberikan wadah luar biasa bagi mahasiswa untuk:</p>
            <ul>
                <li>Mengasah leadership dan manajemen organisasi.</li>
                <li>Membangun project teknologi bersama di bawah divisi Jaringan & Litbang.</li>
                <li>Menghubungkan Anda langsung dengan alumni berprestasi di industri IT nasional.</li>
            </ul>
            <p>Segera daftarkan diri Anda sebelum tanggal 30 Mei 2026 melalui tombol pendaftaran di website resmi kami!</p>
        `,
        news_category_id: 1,
        category: { id: 1, name: "Himpunan News" },
        created_at: "2026-05-18T08:00:00Z",
        updated_at: "2026-05-18T08:00:00Z"
    }
];

// ==========================================
// 2. FETCH INTERCEPTOR (GLOBAL MOCK API)
// ==========================================

const originalFetch = window.fetch;
window.fetch = async function (input, init) {
    let url = typeof input === "string" ? input : input.url;

    // Normalisasi url agar aman dari relative paths
    let pathname = "";
    try {
        pathname = new URL(url, window.location.origin).pathname;
    } catch (e) {
        pathname = url;
    }

    // Intercept api endpoints
    if (pathname.includes("/api/")) {
        console.log(`[Mock API Interceptor] Fetching: ${pathname}`);

        // Helper return json
        const jsonResponse = (data, status = 200) => {
            return Promise.resolve(new Response(JSON.stringify(data), {
                status,
                headers: { "Content-Type": "application/json" }
            }));
        };

        // Router
        if (pathname.endsWith("/api/structure") || pathname.endsWith("api/structure")) {
            return jsonResponse(mockStructure);
        }
        if (pathname.endsWith("/api/events") || pathname.endsWith("api/events")) {
            return jsonResponse(mockEvents);
        }
        if (pathname.endsWith("/api/categories") || pathname.endsWith("api/categories")) {
            return jsonResponse(mockCategories);
        }
        if (pathname.endsWith("/api/news-categories") || pathname.endsWith("api/news-categories")) {
            return jsonResponse(mockNewsCategories);
        }
        if (pathname.endsWith("/api/articles") || pathname.endsWith("api/articles")) {
            return jsonResponse({ status: "success", data: mockArticles });
        }
        if (pathname.endsWith("/api/news") || pathname.endsWith("api/news")) {
            return jsonResponse({ status: "success", data: mockNews });
        }

        // Detail pages & filtered
        // 1. Articles by category: /api/categories/:id/articles
        const catArtMatch = pathname.match(/\/api\/categories\/(\d+)\/articles/);
        if (catArtMatch) {
            const catId = parseInt(catArtMatch[1]);
            const filtered = mockArticles.filter(a => a.category_id === catId);
            return jsonResponse({ status: "success", data: filtered });
        }

        // 2. News by category: /api/news-categories/:id/news
        const catNewsMatch = pathname.match(/\/api\/news-categories\/(\d+)\/news/);
        if (catNewsMatch) {
            const catId = parseInt(catNewsMatch[1]);
            const filtered = mockNews.filter(n => n.news_category_id === catId);
            return jsonResponse({ status: "success", data: filtered });
        }

        // 3. Single Article: /api/articles/:slug
        const artSlugMatch = pathname.match(/\/api\/articles\/([^/]+)/);
        if (artSlugMatch) {
            const slug = artSlugMatch[1];
            const article = mockArticles.find(a => a.slug === slug);
            return jsonResponse(article || null);
        }

        // 4. Single News: /api/news/:slug
        const newsSlugMatch = pathname.match(/\/api\/news\/([^/]+)/);
        if (newsSlugMatch) {
            const slug = newsSlugMatch[1];
            const singleNews = mockNews.find(n => n.slug === slug);
            return jsonResponse(singleNews || null);
        }

        // 5. Contact Post: /api/contact
        if (pathname.endsWith("/api/contact") || pathname.endsWith("api/contact")) {
            return jsonResponse({ status: "success", message: "Pesan Anda berhasil terkirim! Terima kasih." });
        }
    }

    return originalFetch(input, init);
};

// ==========================================
// 3. AXIOS INTERCEPTOR (GLOBAL MOCK API)
// ==========================================

axios.interceptors.request.use(
    (config) => {
        let url = config.url || "";
        let pathname = "";
        try {
            pathname = new URL(url, window.location.origin).pathname;
        } catch (e) {
            pathname = url;
        }

        if (pathname.includes("/api/")) {
            console.log(`[Mock API Interceptor] Axios Request: ${pathname}`);

            // Helper return adapter mock
            config.adapter = async function () {
                const getResponse = () => {
                    if (pathname.endsWith("/api/structure") || pathname.endsWith("api/structure")) {
                        return mockStructure;
                    }
                    if (pathname.endsWith("/api/events") || pathname.endsWith("api/events")) {
                        return mockEvents;
                    }
                    if (pathname.endsWith("/api/categories") || pathname.endsWith("api/categories")) {
                        return mockCategories;
                    }
                    if (pathname.endsWith("/api/news-categories") || pathname.endsWith("api/news-categories")) {
                        return mockNewsCategories;
                    }
                    if (pathname.endsWith("/api/articles") || pathname.endsWith("api/articles")) {
                        return { status: "success", data: mockArticles };
                    }
                    if (pathname.endsWith("/api/news") || pathname.endsWith("api/news")) {
                        return { status: "success", data: mockNews };
                    }

                    // Detail pages
                    const catArtMatch = pathname.match(/\/api\/categories\/(\d+)\/articles/);
                    if (catArtMatch) {
                        const catId = parseInt(catArtMatch[1]);
                        return { status: "success", data: mockArticles.filter(a => a.category_id === catId) };
                    }

                    const catNewsMatch = pathname.match(/\/api\/news-categories\/(\d+)\/news/);
                    if (catNewsMatch) {
                        const catId = parseInt(catNewsMatch[1]);
                        return { status: "success", data: mockNews.filter(n => n.news_category_id === catId) };
                    }

                    const artSlugMatch = pathname.match(/\/api\/articles\/([^/]+)/);
                    if (artSlugMatch) {
                        const slug = artSlugMatch[1];
                        return mockArticles.find(a => a.slug === slug) || null;
                    }

                    const newsSlugMatch = pathname.match(/\/api\/news\/([^/]+)/);
                    if (newsSlugMatch) {
                        const slug = newsSlugMatch[1];
                        return mockNews.find(n => n.slug === slug) || null;
                    }

                    if (pathname.endsWith("/api/contact") || pathname.endsWith("api/contact")) {
                        return { status: "success", message: "Pesan Anda berhasil terkirim! Terima kasih." };
                    }

                    return null;
                };

                return {
                    data: getResponse(),
                    status: 200,
                    statusText: "OK",
                    headers: {},
                    config: config,
                    request: {}
                };
            };
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

console.log("[Mock API Service] Interceptors initialized successfully!");
