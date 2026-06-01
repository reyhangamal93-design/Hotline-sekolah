import Link from "next/link";

import { APP_NAME } from "@/lib/constants/app";

export function PublicFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {APP_NAME}. Data laporan dilindungi.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/bantuan" className="hover:text-foreground">
            Bantuan
          </Link>
          <Link href="/cek-tiket" className="hover:text-foreground">
            Cek Tiket
          </Link>
        </div>
      </div>
    </footer>
  );
}
