import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold">Task Management</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {user?.emailAddresses[0]?.emailAddress}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}!
          </h2>
          <p className="text-muted-foreground">
            You're successfully authenticated. This is your dashboard.
          </p>

          <div className="mt-8 rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-2">Your User Info</h3>
            <pre className="bg-muted p-4 rounded text-sm overflow-auto">
              {JSON.stringify(
                {
                  id: user?.id,
                  email: user?.emailAddresses[0]?.emailAddress,
                  firstName: user?.firstName,
                  lastName: user?.lastName,
                },
                null,
                2
              )}
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
}
