# PROJECT_STATE — Hotline Sekolah

## Current Phase

**Phase 2** — Supabase Setup and Database Schema (berikutnya)

## Completed

### Phase 1 — Project Setup ✅

- [x] Next.js App Router + TypeScript
- [x] Tailwind CSS v4
- [x] shadcn/ui (manual setup — CLI gagal SSL)
- [x] next-themes (light/dark)
- [x] Font Inter + Plus Jakarta Sans
- [x] Struktur folder dasar (`app/(public)`, `app/(admin)`, `components/`, `lib/`)
- [x] ESLint (dari create-next-app)
- [x] `.env.example`
- [x] Layout publik + layout admin
- [x] Komponen UI: button, card, badge, input, textarea, select, dialog, table, label
- [x] Halaman beranda hotline
- [x] Placeholder: `/lapor`, `/cek-tiket`, `/bantuan`, `/admin/*`

## In Progress

- (kosong)

## Known Issues

- `npx shadcn init` gagal karena SSL certificate (`unable to verify the first certificate`). Komponen UI di-setup manual; gunakan `components.json` jika CLI sudah bisa diakses.
- Nama folder proyek `Hotline sekolah` tidak valid untuk npm; `package.json` memakai nama `hotline-sekolah`.

## Technical Decisions

- Next.js 16 + React 19 (template terbaru create-next-app)
- Tailwind CSS v4 dengan CSS variables (shadcn-style)
- Tema teal/primary untuk nuansa kepercayaan & sekolah
- Route groups: `(public)` dan `(admin)`
- Halaman fitur MVP ditandai placeholder sampai phase terkait

## Next Task

Phase 2:

1. Buat project Supabase
2. Setup Drizzle ORM + schema + migration
3. Seed roles, permissions, kategori
4. RLS + bucket private attachments

## Environment Notes

Salin `.env.example` ke `.env.local` dan isi setelah Supabase project dibuat (Phase 2).

## Testing (Phase 1)

- [x] `npm run build` sukses
- [ ] `npm run dev` berjalan (uji manual di browser)
- [ ] Light/dark mode dapat diganti (uji manual)
- [ ] Tampilan mobile tidak rusak (uji manual)
