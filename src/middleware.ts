// This project is built with Vite (not Next.js). The original Next.js
// middleware file referenced `next/server` which pulls Next internals into the
// client bundle and causes runtime issues like "process is not defined".
//
/// Keep a no-op placeholder export to avoid type errors in imports elsewhere.

export function middlewarePlaceholder() {
  // No-op: intentionally left blank for Vite client build.
  return null;
}

export const config = {
  // Intentionally empty: middleware handled by hosting layer if needed.
};
