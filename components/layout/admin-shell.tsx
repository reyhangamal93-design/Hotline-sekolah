import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  FolderTree,
  Users,
  Settings,
  Shield,
} from "lucide-react";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { APP_NAME } from "@/lib/constants/app";

const adminNav = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/laporan", label: "Laporan", icon: FileText },
  { href: "/admin/kategori", label: "Kategori", icon: FolderTree },
  { href: "/admin/pengguna", label: "Pengguna", icon: Users },
  { href: "/admin/pengaturan", label: "Pengaturan", icon: Settings },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="border-b bg-card md:w-64 md:border-b-0 md:border-r">
        <div className="flex h-16 items-center gap-2 border-b px-4 font-heading font-semibold">
          <Shield className="h-5 w-5 text-primary" aria-hidden />
          <span className="truncate">{APP_NAME}</span>
        </div>
        <nav className="flex gap-1 overflow-x-auto p-2 md:flex-col" aria-label="Admin">
          {adminNav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4" aria-hidden />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b px-4">
          <p className="text-sm text-muted-foreground">Panel Admin</p>
          <ThemeToggle />
        </header>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
