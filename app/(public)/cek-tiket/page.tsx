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
  title: "Cek Tiket",
};

export default function CekTiketPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Card>
        <CardHeader>
          <CardTitle>Cek Status Tiket</CardTitle>
          <CardDescription>
            Pencarian status tiket akan tersedia pada Phase 6 (Ticket Status
            Check).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="outline">
            <Link href="/">Kembali</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
