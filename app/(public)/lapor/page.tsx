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
  title: "Buat Laporan",
};

export default function LaporPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Card>
        <CardHeader>
          <CardTitle>Form Laporan</CardTitle>
          <CardDescription>
            Form laporan publik akan tersedia pada Phase 5 (Public Report Form).
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Button asChild variant="outline">
            <Link href="/">Kembali</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
