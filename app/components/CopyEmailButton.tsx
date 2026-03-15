"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("julia@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-auto p-2 text-[#737373] hover:text-[#0066FF] transition-colors"
      title={copied ? "Copiado" : "Copiar email"}
    >
      {copied ? <Check size={18} /> : <Copy size={18} />}
    </button>
  );
}
