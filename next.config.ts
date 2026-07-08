import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

// The site has no third-party origins: fonts are self-hosted via next/font,
// images have no configured remotePatterns, and the only inline <script>
// tags are `type="application/ld+json"` data islands, which browsers never
// execute and which script-src therefore does not gate. 'unsafe-inline' is
// kept for script-src/style-src specifically for Next.js's own inline
// hydration script and this codebase's inline `style={{...}}` attributes
// (e.g. HeroIllustration's SVG mask) — inline style *attributes* cannot be
// covered by a CSP nonce (nonces only apply to <script>/<style> elements),
// so this is required regardless of a nonce-based approach.
const CSP_DIRECTIVES = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

// Only applied in production: HSTS is meaningless over local http dev, and
// a strict CSP here would fight Next.js's dev-mode HMR/React Refresh
// (which relies on eval), so neither header should affect `next dev`.
const productionOnlyHeaders =
  process.env.NODE_ENV === "production"
    ? [
        { key: "Content-Security-Policy", value: CSP_DIRECTIVES },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]
    : [];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [...securityHeaders, ...productionOnlyHeaders],
      },
    ];
  },
};

export default nextConfig;
