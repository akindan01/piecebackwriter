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
    <section id="Poems" className="bg-gray-50 min-h-screen py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
            Selected Works
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <p className="mt-6 text-gray-500 italic text-lg max-w-xl mx-auto">
            “Words that linger, thoughts that breathe.”
          </p>
        </div>

        {selectedPoem ? (
          <div className="animate-slideUp max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-10 md:p-16 border border-gray-100 relative">
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors text-sm uppercase tracking-wide font-bold"
              onClick={() => setSelectedPoem(null)}
            >
              Close
            </button>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-black mb-8 text-center">
              {selectedPoem.title}
            </h3>
            <div className="w-12 h-1 bg-gray-200 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-loose whitespace-pre-line font-serif text-center">
              {selectedPoem.content}
            </p>
            <p className="mt-12 text-sm text-gray-400 uppercase tracking-widest text-center">
              Written by {selectedPoem.author}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(showAll ? poems : poems.slice(0, 3)).map((poem, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  onClick={() => setSelectedPoem(poem)}
                >
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-black transition-colors mb-4">
                      {poem.title}
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed mb-6">
                      {poem.excerpt}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4 border-t border-gray-100 pt-4">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{poem.author}</span>
                    <span className="text-sm font-bold underline decoration-1 underline-offset-4 group-hover:text-gray-700">Read</span>
                  </div>
                </div>
              ))}
            </div>

            {!showAll && (
              <div className="mt-16 text-center">
                <button
                  className="bg-transparent border border-black text-black px-10 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide text-sm"
                  onClick={() => setShowAll(true)}
                >
                  View Archive
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
