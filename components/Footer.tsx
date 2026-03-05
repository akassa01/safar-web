export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center" style={{ background: "#2E2E2E", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <p className="text-white/25 text-xs font-sans tracking-wide">
        © {new Date().getFullYear()} Safar. All rights reserved.{" "}
        <a href="/privacy" className="underline hover:text-white/50 transition-colors">
          Privacy Policy
        </a>
      </p>
    </footer>
  );
}
