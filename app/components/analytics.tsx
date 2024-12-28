"use client";

export function Analytics() {
  const id = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  if (!id) {
    return null;
  }

  return (
    <script
      src="https://analytics.cubeyond.net/script.js"
      data-website-id={id}
      defer
    />
  );
}
