import { ShoppingBag, Heart, Volume2, VolumeX, Play, Pause, Star, Tag } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function VideoCard({ item }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [liked, setLiked] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
    >
      <div className="relative aspect-[9/16] w-full bg-black">
        <video
          ref={videoRef}
          src={item.video}
          muted={muted}
          playsInline
          loop
          poster={item.poster}
          className="h-full w-full object-cover"
          onMouseEnter={() => { if (!playing) { videoRef.current?.play(); setPlaying(true); } }}
          onMouseLeave={() => { if (playing) { videoRef.current?.pause(); setPlaying(false); } }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute top-2 right-2 flex items-center gap-2">
          <button
            aria-label="Mute"
            onClick={toggleMute}
            className="rounded-full bg-white/90 p-2 shadow hover:bg-white"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <button
            aria-label="Play/Pause"
            onClick={togglePlay}
            className="rounded-full bg-white/90 p-2 shadow hover:bg-white"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <div className="flex items-center gap-2 text-xs opacity-90">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5"><Star className="h-3 w-3" /> {item.rating}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5"><Tag className="h-3 w-3" /> {item.category}</span>
          </div>
          <h4 className="mt-2 line-clamp-2 text-sm font-semibold">{item.title}</h4>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-lg font-bold">${item.price}
                <span className="ml-1 align-middle text-xs font-medium text-emerald-300">{item.discount && `-${item.discount}%`}</span>
              </p>
              <p className="text-xs opacity-90">by {item.creator}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLiked((v) => !v)}
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${liked ? "bg-rose-500 text-white" : "bg-white/90 text-gray-800"}`}
              >
                <Heart className={`h-3 w-3 ${liked ? "fill-current" : ""}`} /> {liked ? item.likes + 1 : item.likes}
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700">
                <ShoppingBag className="h-4 w-4" /> Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const items = [
  {
    id: 1,
    title: "Glass Card Wallet — Minimalist Fintech Design",
    creator: "@nati.design",
    price: 29,
    discount: 10,
    rating: "4.8",
    likes: 234,
    category: "Accessories",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Creator Hoodie — Cozy + Street",
    creator: "@lemlem",
    price: 54,
    discount: 0,
    rating: "4.6",
    likes: 182,
    category: "Apparel",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Smart Bottle — Tracks Hydration",
    creator: "@habesha.tech",
    price: 39,
    discount: 15,
    rating: "4.7",
    likes: 321,
    category: "Gadgets",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ShoppableFeed() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Shoppable Video Feed</h2>
            <p className="mt-2 max-w-2xl text-gray-600">Hover to play, tap to engage, and shop directly from short-form content.</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
