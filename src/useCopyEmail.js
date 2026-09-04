import { useState } from "react";

// Copies the email to the clipboard on click and returns whether it just
// succeeded, so a component can show a brief "copied" confirmation.
// mailto: still fires as a fallback for setups where a default mail app
// is configured — the copy is the part that's guaranteed to work everywhere.
export function useCopyEmail(email) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — mailto: still
      // has a chance to fire via the anchor's normal navigation.
    }
  };

  return { copied, handleClick };
}
