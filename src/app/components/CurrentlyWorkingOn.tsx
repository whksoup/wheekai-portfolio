"use client";

import { useEffect, useRef, useState } from "react";

/**
 * "Currently working on" — live, unfinished things, shown running rather than
 * described.
 *
 * WHY THE SIMULATOR IS CLICK-TO-LOAD AND NOT JUST AN <iframe src>.
 *
 * Two reasons, and the second is the one that would have hurt:
 *
 *   COST. The haircut simulator boots a WebGL context, loads a GLB, and builds
 *   a few hundred thousand strands. Mounting it on page load means every
 *   visitor pays that — including the ones who came to look at the LEGO work
 *   and never scroll this far. On a laptop it is a spinning fan; on a phone it
 *   is battery and a stalled first paint.
 *
 *   SCROLL CAPTURE. The simulator runs OrbitControls, which claims drag and
 *   wheel events inside its own document. A live iframe two-thirds of the way
 *   down a portfolio is a trap on touch: the reader flicks to scroll past, the
 *   canvas eats the gesture, and the page stops moving with no way to tell why.
 *   Requiring a deliberate click means nobody enters the canvas by accident,
 *   and "Close" is always one tap away once they do.
 *
 * The placeholder panel is #14161a because that is `scene.background` inside
 * the simulator. Activating it should look like the panel waking up, not like
 * a different thing being swapped in.
 */

type WipItem = {
  /** Short name — the thing itself, not a category. */
  title: string;
  /** One or two sentences. What it is and what state it's in. */
  blurb: string;
  /** Optional repo link, rendered as a small monospace line under the blurb. */
  repo?: string;
  /** Live embed (the simulator) — mutually exclusive with `video`. */
  iframe?: { src: string; label: string };
  /** Looping clip — plays only while on screen. */
  video?: { src: string; poster?: string };
};

const SCENE_BG = "#14161a";

export default function CurrentlyWorkingOn({ items }: { items: WipItem[] }) {
  return (
    <section className="mx-auto mb-24 max-w-6xl px-4">
      <h2 className="mb-2 text-2xl font-bold">In my free time, these are the things I'm currently working on:</h2>
      <p className="mb-8 max-w-xl text-sm text-neutral-500">
        These are literal works in progress, fresh off the latest stable branch. Feel free to reach out if you have any ideas to build on these!
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {items.map((item) => (
          <WipPanel key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function WipPanel({ item }: { item: WipItem }) {
  return (
    <figure className="m-0">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-900">
        {item.iframe ? (
          <LazyIframe src={item.iframe.src} label={item.iframe.label} />
        ) : item.video ? (
          <InViewVideo src={item.video.src} poster={item.video.poster} />
        ) : null}
      </div>

      <figcaption className="mt-4">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="mt-1 max-w-prose text-sm leading-relaxed text-neutral-600">
          {item.blurb}
        </p>
        {item.repo && (
          <a
            href={item.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-mono text-xs text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {item.repo.replace(/^https:\/\/(www\.)?/, "")}
          </a>
        )}
      </figcaption>
    </figure>
  );
}

/**
 * The iframe does not exist in the DOM until asked for. Unmounting on close
 * tears the WebGL context down rather than leaving it rendering off-screen —
 * `display:none` would keep the render loop alive and the fan spinning.
 */
function LazyIframe({ src, label }: { src: string; label: string }) {
  const [live, setLive] = useState(false);

  if (!live) {
    return (
      <button
        type="button"
        onClick={() => setLive(true)}
        style={{ backgroundColor: SCENE_BG }}
        className="group flex h-full w-full flex-col items-center justify-center gap-3 text-neutral-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-600 transition-colors group-hover:border-white">
          <svg
            viewBox="0 0 24 24"
            className="ml-0.5 h-4 w-4 fill-current"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="text-sm">{label}</span>
        <span className="px-6 text-center text-xs text-neutral-500">
          Loads a 3D scene — click to start
        </span>
      </button>
    );
  }

  return (
    <>
      <iframe
        src={src}
        title={label}
        className="h-full w-full border-0"
        allow="fullscreen"
        loading="lazy"
      />
      <button
        type="button"
        onClick={() => setLive(false)}
        className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 text-xs text-white backdrop-blur transition-colors hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Close
      </button>
    </>
  );
}

/**
 * Plays only while visible. A muted autoplay loop that runs the whole time the
 * page is open decodes video behind three screens of scroll for no one.
 * `prefers-reduced-motion` gets the controls instead of an automatic loop.
 *
 * WHY `.muted` IS SET IMPERATIVELY, NOT JUST AS A JSX PROP.
 *
 * `<video muted>` is already here as a prop, and in dev that's enough — but
 * React deliberately omits `muted` from the actual server-rendered HTML
 * string (it's a long-standing React quirk, tracked upstream since the
 * `muted` attribute doesn't round-trip through SSR the way most boolean
 * attributes do). The browser's autoplay gate can inspect the element before
 * hydration has run and see an unmuted video, and silently refuse to play it
 * — no error, it just never starts. Setting `el.muted = true` imperatively in
 * an effect closes that gap regardless of whether the JSX prop made it into
 * the markup.
 *
 * WHY THERE IS A FALLBACK BUTTON AT ALL.
 *
 * `.play()` can still be rejected for reasons that have nothing to do with
 * the file being broken — an autoplay policy this component doesn't know
 * about, a browser extension, low-power mode. Silently doing nothing in that
 * case is indistinguishable from the feature being broken. So: if autoplay
 * fails, the poster stays up with a visible play control, same affordance as
 * the simulator's own click-to-load panel. A real 404 or bad codec shows
 * instead as an explicit error, via `onError`, so it doesn't read as the same
 * "just click it" problem when the actual fix is the file path.
 */
function InViewVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const attemptPlay = () => {
      el.muted = true;
      el.defaultMuted = true;
      el
        .play()
        .then(() => setNeedsTap(false))
        .catch(() => setNeedsTap(true));
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) attemptPlay();
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <div className="relative h-full w-full">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        controls={reduced}
        onError={() =>
          setError(`Couldn't load this video — check that ${src} exists.`)
        }
        className="h-full w-full object-cover"
      />

      {!reduced && needsTap && !error && (
        <button
          type="button"
          onClick={() => {
            const el = ref.current;
            if (!el) return;
            el.muted = true;
            el.play().then(() => setNeedsTap(false));
          }}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center bg-black/30 text-white transition-colors hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-black/40">
            <svg
              viewBox="0 0 24 24"
              className="ml-0.5 h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 px-6 text-center text-xs text-neutral-400">
          {error}
        </div>
      )}
    </div>
  );
}