import { react19Thumb } from "../../../public/assets/articles/thumbnails";

export const Article2 = {
    id: 2,
    title: "Mastering React 19: Action Hooks dan Performa Ekstrem",
    slug: "mastering-react-19",
    image: react19Thumb,
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
};
