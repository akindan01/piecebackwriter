import React, { useState } from "react";

export default function Poems() {
  const poems = [
    {
      title: "The Missing Piece",
      excerpt: "Fade in, fade out...",
      content: `Fade in, fade out.  
Five happy words, drowned and now lost.  
I pick up bricks of memory,  
trying to build a castle where the heart heals.  
One, two…  
Where is the missing piece?

A whispered promise,  
a climax of hope.  
The castle walls rise, stone by stone,  
the heart pounds as it goes, row by row.  
Shades of effort, echoes of light,  
but a space remains—  
a hollow that no stone fills.

I built to survive, not to feel.  
Stacked walls high enough  
to keep out the storm,  
but also the sun.  
I mistook silence for peace,  
control for healing,  
and still, the ache hums quietly beneath it all.

What I longed for was never out there—  
not in what I lost,  
but in what I buried:  
the softness, the surrender,  
the truth I was too tired to hold.

Some pieces don’t return—  
they wait.  
And when the heart is ready,  
not whole, but honest,  
they find their way back.  

Not as perfection.  
But as presence.`,
      author: "Akinremi Daniel",
    },
    {
      title: "Tears That Falls",
      excerpt: "Tears that fall like Autumn Rain...",
      content: `TEARS that fall like autumn rain,  
DEFINING the heart’s deep pain,  
SILENT drops that speak a thousand words,  
ECHOES of a sorrow that deepens every words.

TEARS that falls, tears that burns  
PUSHING out the fears,  
FLOWING out like a torrent, unimaginable things now reaveled.  
SO clear nothing seems so dear, oh worn and weary.

TEARS that falls, aches like sores,  
DEEP, deep and deep a drop feels like more,  
TEARS that fall, a love once lost,  
ECHOES of a heart that paid the cost.  
IN the shadows of memories, pain resides,  
A broken heart where sorrow hides.`,
      author: "Akinremi Daniel",
    },
    {
      title: "Beyond Cracks",
      excerpt: "Beyond Cracks, where love resides...",
      content: `BEYOND CRACKS, where love resides  
BEAUTIFUL sparks of broken tides  
LINES that stronger abide  
SOUNDS of the cracks, oh love’s discharged.

DISCHARGED LOVE with in a soft heart solute  
DISSOLVED in the solvent of the broken tides of fragile pieces mending into a whole  
IN the depth of cracks, there love unfolds.

RESONANCE of sounds, vibrant movement of lines to the heart,  
FREQUENCIES of notes, melodious in heart,  
SIGHT of cracks, fascinating in sight,  
DISCHARGED LOVE, comforting pains in the heart.

BEYOND CRACKS, I find peace out of every lines and sounds.  
BEYOND CRACKS, the feeling of positivity is mapped.`,
      author: "Akinremi Daniel",
    },
    {
    title: "The Twilight",
    excerpt: "The sun is low, a slow, deep breath of color...",
content: `The sun is low, a slow, deep breath of color,
And the world finally hits the pause button.
This isn't night yet it's the soft, fading moment
when you realize how fast this life is running.

You remember things you planned and forgot,
The person you haven't called in too long,
The little fight you had this morning that now seems silly.
The twilight is like a truth serum for the soul.

In this half-light, the heavy feeling of the day
gets weighed against the hope for tomorrow.

It’s the simple, silent acknowledgment of being human
tired, sometimes lonely, but always ready to start again.
It makes you feel small against the wide sky,
but also quietly strong.

The twilight is life telling you to stop, look, and feel.
It’s the gentle end of one story and the promise of the next.`,
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

          {/* CTA */}
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
