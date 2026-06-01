import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Dashboard Admin",
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Ringkasan laporan akan tersedia pada Phase 7. Autentikasi admin pada
          Phase 3.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Laporan", value: "—" },
          { label: "Laporan Baru", value: "—" },
          { label: "Diproses", value: "—" },
          { label: "Darurat", value: "—" },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Data belum terhubung</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
