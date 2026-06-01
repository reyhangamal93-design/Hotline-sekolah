import Link from "next/link";
import {
  ArrowRight,
  Eye,
  FilePlus,
  Lock,
  Ticket,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants/app";

const features = [
  {
    icon: FilePlus,
    title: "Buat Laporan",
    description:
      "Sampaikan masalah bullying, fasilitas, konsultasi BK, atau hal lain secara terstruktur.",
  },
  {
    icon: Lock,
    title: "Mode Anonim",
    description:
      "Laporkan tanpa identitas. Identitas pelapor tidak ditampilkan ke publik.",
  },
  {
    icon: Ticket,
    title: "Kode Tiket",
    description:
      "Setiap laporan mendapat kode unik untuk memantau status tanpa login.",
  },
  {
    icon: Eye,
    title: "Tindak Lanjut Jelas",
    description:
      "Tim sekolah memverifikasi, memproses, dan menutup laporan secara terdokumentasi.",
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-primary)/0.15,transparent)]"
        aria-hidden
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary" className="w-fit">
              Kanal resmi sekolah
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              {APP_NAME}
            </h1>
            <p className="text-lg text-muted-foreground">{APP_DESCRIPTION}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/lapor">
                  Buat Laporan
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/cek-tiket">Cek Status Tiket</Link>
              </Button>
            </div>
          </div>

          <Card className="w-full max-w-md border-primary/20 shadow-lg lg:shrink-0">
            <CardHeader>
              <CardTitle className="text-lg">Contoh kode tiket</CardTitle>
              <CardDescription>
                Simpan kode setelah mengirim laporan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="rounded-lg bg-muted px-4 py-3 font-mono text-lg tracking-wider">
                HTL-2026-A8K29P
              </p>
              <p className="text-sm text-muted-foreground">
                Gunakan kode ini di halaman Cek Tiket untuk melihat status
                laporan Anda.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t bg-muted/20 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-0 bg-card/80 shadow-sm">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Card className="bg-primary/5">
          <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-heading text-xl font-semibold">
                Butuh bantuan menggunakan hotline?
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Panduan cara melapor, anonimitas, dan keamanan data.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/bantuan">Lihat Bantuan</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
