"use client";

interface CalComEmbedProps {
  url: string;
}

export default function CalComEmbed({ url }: CalComEmbedProps) {
  const embedUrl = url.includes("?") ? `${url}&embed=true` : `${url}?embed=true`;

  return (
    <iframe
      src={embedUrl}
      className="w-full border-0"
      style={{ minWidth: "320px", height: "700px" }}
      title="Schedule a meeting"
      allowFullScreen
    />
  );
}
