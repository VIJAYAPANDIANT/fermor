import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas text-charcoal flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2">
          <span className="eyebrow-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>404 — Not Found</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal font-sans">
          Page not found.
        </h1>

        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="pt-2">
          <Link href="/" className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Fermor</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
