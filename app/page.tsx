"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [videoUrls, setVideoUrls] = useState<string[]>([]);

  useEffect(() => {
    fetch('./videos.txt')
      .then(res => res.text())
      .then(data => {
        const urls = data.split('\n').filter(Boolean);
        setVideoUrls(urls);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        Hello YouTube Time Machine
      </h1>
      <div className="flex flex-col items-center">
        {videoUrls.map((url, index) => (
          <div key={index} className="my-4">
            <iframe
              width="560"
              height="315"
              src={url.replace('watch?v=', 'embed/')}
              title={`YouTube video player ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </main>
  );
}
