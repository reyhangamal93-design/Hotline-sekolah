export const ADMIN_ROLES = [
  "super_admin",
  "kepala_sekolah",
  "wakasek_kesiswaan",
  "guru_bk",
  "sarpras",
  "operator",
] as const;

export type AdminRole = (typeof ADMIN_ROLES)[number];
