import type { Metadata } from "next";
import PlaceLanding, { placeLandingMetadata } from "./PlaceLanding";

// Fallback landing for shared-place links carrying the name+coords fallback identity
// (`getsafar.ca/place?n=&lat=&lng=&mk=`). See PlaceLanding for why app users never
// reach this page.
export const metadata: Metadata = {
  ...placeLandingMetadata,
  openGraph: { ...placeLandingMetadata },
  twitter: { card: "summary_large_image", ...placeLandingMetadata },
};

export default function SharedPlacePage() {
  return <PlaceLanding />;
}
