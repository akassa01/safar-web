import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/appStore";

// Shared fallback landing for shared-place links, used by both `/place/{id}` (catalog
// id) and `/place` (name+coords fallback). Users with the Safar app never reach it —
// iOS opens the app via the Universal Link (see /.well-known/apple-app-site-association).
export default function PlaceLanding() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 text-center bg-background text-dark">
      <Image src="/logo.png" alt="Safar" width={96} height={96} className="rounded-2xl" priority />

      <div className="flex flex-col gap-3 max-w-md">
        <h1 className="font-headline text-4xl font-extrabold uppercase tracking-tight">
          A place worth visiting
        </h1>
        <p className="text-muted text-lg">
          Someone shared a place with you on Safar. Get the app to see it, save it to
          your bucket list, and track your own travels.
        </p>
      </div>

      <Link href={APP_STORE_URL} aria-label="Download Safar on the App Store">
        <Image src="/app-store-badge.svg" alt="Download on the App Store" width={180} height={60} priority />
      </Link>

      <Link href="/" className="text-accent text-sm underline underline-offset-4">
        Learn more about Safar
      </Link>
    </main>
  );
}

export const placeLandingMetadata = {
  title: "A place worth visiting on Safar",
  description:
    "Someone shared a place with you on Safar — the social travel journal. Get the app to see it and save it to your trips.",
};
