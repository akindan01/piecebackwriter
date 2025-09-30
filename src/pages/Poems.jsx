import React, { useState } from "react";

export default function Poems() {
  const poems = [
    {
      title: "The Missing Piece",
      excerpt: "Fade in, fade out...",
      content: `Fade in, fade out, the silence calls,
Whispers drift through empty halls.
A piece misplaced, yet sought in vain,
Longing’s echo, a sweet refrain.`,
      author: "Akinremi Daniel",
    },
    {
      title: "Tears That Falls",
      excerpt: "Tears that fall like Autumn Rain...",
      content: `Tears that fall like autumn rain,
Washing hearts of hidden pain.
Each drop a story, soft, untold,
Of fleeting warmth, of hands grown cold.`,
      author: "Akinremi Daniel",
    },
    {
      title: "Beyond Cracks",
      excerpt: "Beyond Cracks, where love resides...",
      content: `Beyond cracks where love resides,
Strength is born where hope collides.
Though broken edges scar the seam,
Within the flaws still lives a dream.`,
      author: "Akinremi Daniel",
    },
  ];

  const [selectedPoem, setSelectedPoem] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="Poems"
      className="reveal bg-gray-50 min-h-screen w-full px-6 md:px-20 py-12 text-center"
    >
      <h2 className="text-5xl md:text-6xl font-serif font-bold text-black">
        Poems
      </h2>
      <p className="mt-2 text-gray-600 italic text-lg">
        Words that linger, thoughts that breathe
      </p>

      {/* If a single poem is selected */}
      {selectedPoem ? (
        <div className="mt-10 max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 text-left">
          <h3 className="text-3xl font-bold font-serif text-black">
            {selectedPoem.title}
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
            {selectedPoem.content}
          </p>
          <p className="mt-6 text-sm text-gray-500 italic">
            — {selectedPoem.author}
          </p>
          <button
            className="mt-6 bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
            onClick={() => setSelectedPoem(null)} // go back
          >
            Back to Poems
          </button>
        </div>
      ) : (
        <>
          {/* Poems Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAll ? poems : poems.slice(0, 3)).map((poem, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold font-serif text-black">
                  {poem.title}
                </h3>
                <p className="text-gray-600 mt-3">{poem.excerpt}</p>
                <p className="mt-4 text-sm text-gray-500 italic">
                  — {poem.author}
                </p>
                <button
                  className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
                  onClick={() => setSelectedPoem(poem)} // show full poem
                >
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          {!showAll && (
            <div className="mt-12">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-black px-10 py-3 rounded-lg font-semibold transition"
                onClick={() => setShowAll(true)} // show all poems
              >
                Explore All Poems
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
