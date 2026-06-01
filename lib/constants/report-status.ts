export const REPORT_STATUSES = [
  "received",
  "verified",
  "in_progress",
  "waiting_response",
  "resolved",
  "rejected",
  "closed",
] as const;

export type ReportStatus = (typeof REPORT_STATUSES)[number];

export const REPORT_STATUS_LABELS: Record<ReportStatus, string> = {
  received: "Diterima",
  verified: "Terverifikasi",
  in_progress: "Diproses",
  waiting_response: "Menunggu",
  resolved: "Selesai",
  rejected: "Ditolak",
  closed: "Ditutup",
};

export const URGENCY_LEVELS = ["low", "medium", "high", "emergency"] as const;

export type UrgencyLevel = (typeof URGENCY_LEVELS)[number];

export const URGENCY_LABELS: Record<UrgencyLevel, string> = {
  low: "Rendah",
  medium: "Sedang",
  high: "Tinggi",
  emergency: "Darurat",
};
