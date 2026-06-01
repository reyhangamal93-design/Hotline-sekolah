import Link from "next/link";
import { Shield } from "lucide-react";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants/app";

const navItems = [
  { href: "/lapor", label: "Buat Laporan" },
  { href: "/cek-tiket", label: "Cek Tiket" },
  { href: "/bantuan", label: "Bantuan" },
];

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-heading font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Shield className="h-5 w-5" aria-hidden />
          </span>
          <span className="hidden sm:inline">{APP_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button size="sm" className="md:hidden" asChild>
            <Link href="/lapor">Lapor</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
