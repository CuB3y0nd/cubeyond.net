"use client";

export function Analytics() {
  const id = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const script = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_SRC || "https://analytics.cubeyond.net/script.js";

  if (!id) {
    return null;
  }

  return (
    <script
      src={script}
      data-website-id={id}
      defer
    />
  );
}
