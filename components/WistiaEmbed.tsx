"use client";

import { useEffect } from "react";

interface WistiaEmbedProps {
  videoId: string;
}

export default function WistiaEmbed({ videoId }: WistiaEmbedProps) {
  useEffect(() => {
    // Load Wistia script
    const script1 = document.createElement("script");
    script1.src = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      // Cleanup scripts on unmount
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
    };
  }, [videoId]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        className={`wistia_embed wistia_async_${videoId} videoFoam=true`}
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}
