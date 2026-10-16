import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 ">
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            You can only see this if you have a valid auth token.
          </CardDescription>
        </CardHeader>
        <CardContent>Welcome to the eSakay management portal.</CardContent>
      </Card>
    </div>
  );
}
