import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex flex-col items-center gap-8 px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Task Management SaaS
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            A production-grade multi-tenant task management platform built with Next.js 15, Prisma, and PostgreSQL.
          </p>
        </div>

        {userId ? (
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Built with Next.js 16, React 19, TypeScript, Prisma & Clerk</p>
        </div>
      </main>
    </div>
  );
}
