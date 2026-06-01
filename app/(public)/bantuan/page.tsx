import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Bantuan",
};

export default function BantuanPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Card>
        <CardHeader>
          <CardTitle>Pusat Bantuan</CardTitle>
          <CardDescription>
            Panduan lengkap akan ditambahkan bersama form laporan dan cek tiket.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <ul className="list-inside list-disc space-y-2">
            <li>Gunakan mode anonim jika Anda ingin privasi lebih terjaga.</li>
            <li>Simpan kode tiket setelah mengirim laporan.</li>
            <li>Untuk keadaan darurat, hubungi petugas sekolah langsung.</li>
          </ul>
          <Button asChild variant="outline">
            <Link href="/lapor">Buat Laporan</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
