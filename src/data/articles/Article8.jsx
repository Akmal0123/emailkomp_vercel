import { openCode } from "../../../public/assets/articles/thumbnails";

export const Article8 = {
    id: 8,
    title: "OpenCode: AI Coding Agent Open Source yang Wajib Dicoba Developer",
    slug: "opencode-ai-coding-agent-open-source",
    image: openCode,
    content: `
        <p>Bayangkan kamu punya asisten coding pribadi yang bisa membaca kode proyekmu, menulis file baru, menjalankan perintah terminal, bahkan melakukan debugging, semuanya langsung dari terminal atau desktop. Kedengarannya futuristik? Tidak lagi. Perkenalkan <strong>OpenCode</strong>, AI coding agent open source yang sedang naik daun di kalangan developer seluruh dunia.</p>

        <br/>

        <p>Di era di mana tools AI bermunculan setiap hari, OpenCode hadir dengan pendekatan yang berbeda: <em>sepenuhnya open source, gratis, dan mengutamakan privasi</em>. Kamu tidak perlu khawatir data kodemu disimpan di server pihak ketiga, karena OpenCode memang dirancang untuk tidak menyimpan kode atau data konteks penggunanya.</p>

        <div class="grid grid-cols-3 gap-4 my-6 text-center">
            <div class="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p class="text-3xl font-bold text-primary-orange">100%</p>
                <p class="text-sm text-gray-500 mt-2">Open source dan gratis, bisa dimodifikasi, milik komunitas</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p class="text-3xl font-bold text-primary-orange">10+</p>
                <p class="text-sm text-gray-500 mt-2">Provider AI yang didukung: Claude, GPT-4o, Gemini, dan lainnya</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p class="text-3xl font-bold text-primary-orange">LSP</p>
                <p class="text-sm text-gray-500 mt-2">Dukungan Language Server Protocol untuk context-aware coding</p>
            </div>
        </div>

        <h2>Apa Itu OpenCode?</h2>

        <p>OpenCode adalah sebuah <strong>AI coding agent</strong> yang berjalan di terminal, IDE, maupun aplikasi desktop. Berbeda dengan code assistant biasa yang hanya memberikan saran sebaris kode, OpenCode bertindak sebagai <em>agen</em>, ia bisa memahami konteks seluruh proyek, mengedit banyak file sekaligus, menjalankan perintah shell, dan bahkan merencanakan perubahan sebelum mengeksekusinya.</p>

        <br/>

        <p>OpenCode mendukung berbagai model AI populer. Kamu bisa menggunakan model gratis bawaan atau menghubungkannya dengan model dari provider mana pun, termasuk Claude (Anthropic), GPT (OpenAI), Gemini (Google), dan lebih dari 75 provider LLM lainnya melalui integrasi Models.dev, bahkan model lokal sekalipun.</p>

        <h2>Fitur Unggulan OpenCode</h2>

        <div class="overflow-x-auto my-6">
            <table class="w-full border-collapse border border-gray-300 shadow-sm">
                <thead class="bg-amber-50">
                    <tr>
                        <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Fitur Unggulan</th>
                        <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Deskripsi Kemampuan</th>
                        <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Manfaat bagi Developer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-800">LSP Enabled</td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-700">Memuat Language Server Protocol (LSP) otomatis sesuai bahasa pemrograman proyek.</td>
                        <td class="border border-gray-300 px-4 py-3 font-medium text-amber-600">Konteks kode jauh lebih akurat</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-800">Multi-Session</td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-700">Menjalankan beberapa sesi agent secara paralel di dalam satu proyek yang sama.</td>
                        <td class="border border-gray-300 px-4 py-3 font-medium text-blue-600">Multitasking tanpa tumpang tindih</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-800">Integrasi Akun</td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-700">Bisa login menggunakan akun GitHub Copilot atau ChatGPT Plus/Pro yang dimiliki.</td>
                        <td class="border border-gray-300 px-4 py-3 font-medium text-amber-600">Memaksimalkan biaya langganan yang ada</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-800">Multi-Platform</td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-700">Tersedia via terminal, desktop app (Win/Mac/Linux), dan ekstensi VS Code.</td>
                        <td class="border border-gray-300 px-4 py-3 font-medium text-blue-600">Sangat fleksibel di semua environment</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors text-left">
                        <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-800">Privacy First</td>
                        <td class="border border-gray-300 px-4 py-3 text-gray-700">OpenCode dirancang untuk tidak menyimpan kode atau data ke server pihak ketiga.</td>
                        <td class="border border-gray-300 px-4 py-3 font-medium text-amber-600">Aman untuk proyek perusahaan yang sensitif</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Built-in Agents</h2>

        <p>OpenCode memiliki dua agent bawaan yang bisa kamu ganti dengan menekan tombol <code>Tab</code>:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
            <div class="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-500 mb-2 flex items-center gap-2">⚡ Agent Eksekutor</p>
                <p class="text-xl font-extrabold text-gray-800 mb-3">Build Agent</p>
                <p class="text-sm text-gray-600 leading-relaxed">
                    Punya akses penuh layaknya <em>co-pilot</em> ahli. Agent ini siap menulis kode, merombak banyak file sekaligus, hingga mengeksekusi perintah terminal untuk membangun fiturmu dari nol. <strong>Pilihan utama untuk sesi development yang cepat dan aktif.</strong>
                </p>
            </div>
            <div class="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                <p class="text-xs font-bold uppercase tracking-wider text-blue-500 mb-2 flex items-center gap-2">🔍 Agent Arsitek</p>
                <p class="text-xl font-extrabold text-gray-800 mb-3">Plan Agent</p>
                <p class="text-sm text-gray-600 leading-relaxed">
                    Bertugas menganalisis, membaca, dan merencanakan solusi tanpa risiko merusak sistem (<em>read-only</em>). <strong>Sangat ideal digunakan saat kamu ingin menelusuri proyek asing</strong> atau memetakan solusi untuk <em>bug</em> yang rumit dengan aman.
                </p>
            </div>
        </div>

        <div class="bg-amber-50 border border-amber-200 rounded-lg p-5 my-6">
            <p class="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">FAKTA MENARIK</p>
            <p class="text-gray-700 text-sm leading-relaxed">Dengan lebih dari <strong>193.000 GitHub Stars</strong>, <strong>900+ kontributor</strong>, dan digunakan oleh lebih dari <strong>7,5 juta developer setiap bulan</strong>, OpenCode telah menjadi salah satu proyek AI coding agent open source paling populer di dunia. Proyek ini bahkan memiliki README yang diterjemahkan ke lebih dari 20 bahasa, menunjukkan komunitas global yang sangat aktif.</p>
        </div>

        <h2>Cara Install OpenCode di Komputermu</h2>

        <p>Instalasi OpenCode cukup simpel, pilih sistem operasimu di bawah dan ikuti langkah-langkahnya.</p>

        <style>
            .oc-wrap input[type="radio"] { display: none; }
            .oc-tabs { display: flex; gap: 0; border-bottom: 2px solid #374151; }
            .oc-tabs label { padding: 10px 20px; cursor: pointer; font-weight: 600; font-size: 14px; color: #9ca3af; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: all 0.2s; }
            .oc-tabs label:hover { color: #ff972fff; }
            #oc-r-win:checked ~ .oc-tabs label[for="oc-r-win"],
            #oc-r-mac:checked ~ .oc-tabs label[for="oc-r-mac"],
            #oc-r-linux:checked ~ .oc-tabs label[for="oc-r-linux"] { color: #ff972fff; border-bottom-color: #ff972fff; background: #f59e0b14; border-radius: 8px 8px 0 0; }
            .oc-panel { display: none; background: #1f2937; border-radius: 0 0 12px 12px; padding: 24px; color: #e5e7eb; }
            #oc-r-win:checked ~ #oc-p-win,
            #oc-r-mac:checked ~ #oc-p-mac,
            #oc-r-linux:checked ~ #oc-p-linux { display: block; }
            .oc-step { display: flex; gap: 16px; margin-bottom: 24px; }
            .oc-step:last-child { margin-bottom: 0; }
            .oc-num { min-width: 32px; height: 32px; border-radius: 50%; background: #ff972fff; color: #1f2937; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; flex-shrink: 0; margin-top: 2px; }
            .oc-step-body { flex: 1; }
            .oc-step-title { font-weight: 700; font-size: 15px; color: #f3f4f6; margin-bottom: 4px; }
            .oc-step-desc { font-size: 13px; color: #9ca3af; margin-bottom: 10px; line-height: 1.5; }
            .oc-cmd { background: #111827; border-radius: 8px; padding: 12px 16px; font-family: 'Courier New', Consolas, monospace; font-size: 13px; color: #e5e7eb; border: 1px solid #374151; margin-bottom: 8px; user-select: all; -webkit-user-select: all; cursor: text; transition: border-color 0.2s; overflow-x: auto; }
            .oc-cmd:hover { border-color: #ff972fff; }
            .oc-tip { background: #374151; border-radius: 8px; padding: 12px 16px; font-size: 13px; color: #9ca3af; margin-top: 12px; line-height: 1.5; }
        </style>

        <div class="oc-wrap">
            <input type="radio" name="oc-os" id="oc-r-win" checked />
            <input type="radio" name="oc-os" id="oc-r-mac" />
            <input type="radio" name="oc-os" id="oc-r-linux" />

            <div class="oc-tabs">
                <label for="oc-r-win">Windows</label>
                <label for="oc-r-mac"> macOS</label>
                <label for="oc-r-linux">Linux</label>
            </div>

            <div class="oc-panel" id="oc-p-win">
                <div class="oc-step">
                    <div class="oc-num">1</div>
                    <div class="oc-step-body">
                        <div class="oc-step-title">Install OpenCode</div>
                        <div class="oc-step-desc">Buka <strong style="color:#e5e7eb;">PowerShell</strong> atau <strong style="color:#e5e7eb;">Command Prompt</strong>, lalu jalankan salah satu perintah ini:</div>
                        <div class="oc-cmd">npm i -g opencode-ai@latest</div>
                        <div class="oc-step-desc">atau pakai Scoop:</div>
                        <div class="oc-cmd">scoop install opencode</div>
                    </div>
                </div>
                <div class="oc-step">
                    <div class="oc-num">2</div>
                    <div class="oc-step-body">
                        <div class="oc-step-title">Buka terminal di folder proyekmu</div>
                        <div class="oc-step-desc">Arahkan ke folder proyek yang ingin kamu kerjakan bersama OpenCode:</div>
                        <div class="oc-cmd">cd C:\\Users\\kamu\\project-ku</div>
                    </div>
                </div>
                <div class="oc-step">
                    <div class="oc-num">3</div>
                    <div class="oc-step-body">
                        <div class="oc-step-title">Jalankan OpenCode</div>
                        <div class="oc-step-desc">Ketik satu perintah ini dan OpenCode langsung membaca seluruh proyekmu:</div>
                        <div class="oc-cmd">opencode</div>
                        <div class="oc-tip">💡 OpenCode akan otomatis memindai folder proyekmu dan siap menerima instruksi. Tinggal ketik apa yang mau kamu kerjakan!</div>
                    </div>
                </div>
            </div>

            <div class="oc-panel" id="oc-p-mac">
                <div class="oc-step">
                    <div class="oc-num">1</div>
                    <div class="oc-step-body">
                        <div class="oc-step-title">Install OpenCode via Homebrew</div>
                        <div class="oc-step-desc">Buka <strong style="color:#e5e7eb;">Terminal</strong>. Jika belum punya Homebrew, install dulu dari <a href="https://brew.sh" target="_blank" style="color:#ff972fff;">brew.sh</a>. Lalu jalankan:</div>
                        <div class="oc-cmd">brew install anomalyco/tap/opencode</div>
                        <div class="oc-step-desc">atau cara cepat pakai curl:</div>
                        <div class="oc-cmd">curl -fsSL https://opencode.ai/install | bash</div>
                    </div>
                </div>
                <div class="oc-step">
                    <div class="oc-num">2</div>
                    <div class="oc-step-body">
                        <div class="oc-step-title">Buka Terminal di folder proyekmu</div>
                        <div class="oc-step-desc">Arahkan terminal ke direktori proyek yang mau kamu kerjakan:</div>
                        <div class="oc-cmd">cd ~/project-ku</div>
                    </div>
                </div>
                <div class="oc-step">
                    <div class="oc-num">3</div>
                    <div class="oc-step-body">
                        <div class="oc-step-title">Jalankan OpenCode</div>
                        <div class="oc-step-desc">Ketik perintah berikut dan OpenCode akan langsung siap membantu:</div>
                        <div class="oc-cmd">opencode</div>
                        <div class="oc-tip">💡 Pertama kali dijalankan, OpenCode akan membangun context dari struktur proyekmu secara otomatis. Siap coding!</div>
                    </div>
                </div>
            </div>

            <div class="oc-panel" id="oc-p-linux">
                <div class="oc-step">
                    <div class="oc-num">1</div>
                    <div class="oc-step-body">
                        <div class="oc-step-title">Install OpenCode</div>
                        <div class="oc-step-desc">Buka <strong style="color:#e5e7eb;">Terminal</strong>. Cara paling universal yang jalan di semua distro:</div>
                        <div class="oc-cmd">curl -fsSL https://opencode.ai/install | bash</div>
                        <div class="oc-step-desc">Arch Linux bisa pakai pacman:</div>
                        <div class="oc-cmd">sudo pacman -S opencode</div>
                    </div>
                </div>
                <div class="oc-step">
                    <div class="oc-num">2</div>
                    <div class="oc-step-body">
                        <div class="oc-step-title">Masuk ke folder proyekmu</div>
                        <div class="oc-step-desc">Pindahkan terminal ke direktori proyek yang mau kamu kerjakan bareng AI:</div>
                        <div class="oc-cmd">cd ~/project-ku</div>
                    </div>
                </div>
                <div class="oc-step">
                    <div class="oc-num">3</div>
                    <div class="oc-step-body">
                        <div class="oc-step-title">Jalankan OpenCode</div>
                        <div class="oc-step-desc">Satu perintah dan langsung ngoding bareng AI:</div>
                        <div class="oc-cmd">opencode</div>
                        <div class="oc-tip">💡 OpenCode akan memindai semua file di proyekmu secara otomatis. Langsung ketik instruksimu dan biarkan AI bekerja!</div>
                    </div>
                </div>
            </div>
        </div>


        <h2>Penutup</h2>

        <p>OpenCode bukan sekadar tools AI biasa. Ia adalah representasi dari bagaimana komunitas open source bisa menciptakan alat yang setara atau bahkan melampaui produk berbayar dari perusahaan besar. Dengan dukungan komunitas global yang masif, pembaruan yang sangat aktif, dan filosofi privasi yang kuat, OpenCode layak menjadi senjata utama di arsenal setiap developer modern.</p>

        <br/>

        <p>Apakah kamu seorang developer berpengalaman yang ingin mempercepat workflow, atau pemula yang baru belajar coding, OpenCode bisa menjadi mitra yang tepat. Cukup install, jalankan, dan biarkan AI membantumu menulis kode yang lebih baik.</p>

        <br/>

        <p><strong>Yang terbaik dari semua ini? OpenCode sepenuhnya gratis dan open source. Jadi tidak ada alasan untuk tidak mencobanya sekarang.</strong></p>
    `,
    category_id: 1,
    category: { id: 1, name: "Technology" },
    created_at: "2026-08-03T10:00:00Z",
    updated_at: "2026-08-04T10:00:00Z"
};
