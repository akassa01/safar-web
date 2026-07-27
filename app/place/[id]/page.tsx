import type { Metadata } from "next";
import PlaceLanding, { placeLandingMetadata } from "../PlaceLanding";

// Fallback landing for shared-place links carrying a catalog id (`getsafar.ca/place/{id}`).
// See PlaceLanding for why app users never reach this page.
export const metadata: Metadata = {
  ...placeLandingMetadata,
  openGraph: { ...placeLandingMetadata },
  twitter: { card: "summary_large_image", ...placeLandingMetadata },
};

export default async function SharedPlaceByIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Awaited to satisfy Next's async dynamic API contract; the id is available here if
  // we later personalize the unfurl.
  await params;
  return <PlaceLanding />;
}
