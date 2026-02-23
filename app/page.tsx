import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
