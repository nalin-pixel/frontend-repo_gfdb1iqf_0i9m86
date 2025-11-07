import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700">
            <span className="font-medium">Hybrid Social Commerce</span>
            <span className="opacity-70">Gebeya (B2B) + Merkato (B2C/C2C)</span>
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            AI-driven discovery. Shoppable video. Rocket-fast fulfillment.
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            A next-generation marketplace where content meets commerce. Built around a TikTok-style recommendation engine that connects the right products to the right people.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#merkato" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Explore Merkato</a>
            <a href="#gebeya" className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">Visit Gebeya</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
}
