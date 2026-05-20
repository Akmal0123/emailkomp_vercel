import axios from "axios";
import { Article1 } from "./data/articles/Article1";
import { Article2 } from "./data/articles/Article2";
import { Article3 } from "./data/articles/Article3";
import { News1 } from "./data/news/News1";
import { News2 } from "./data/news/News2";
import { News3 } from "./data/news/News3";

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

const mockArticles = [Article1, Article2, Article3];

const mockNewsCategories = [
    { id: 1, name: "Himpunan News", news_count: 2 },
    { id: 2, name: "Campus Events", news_count: 1 }
];

const mockNews = [News1, News2, News3];

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
