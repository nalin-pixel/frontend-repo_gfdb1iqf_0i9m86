import { ShoppingBag, Rocket, Shield, Video } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-blue-600" />
          <span className="font-semibold text-gray-900">Gebeya & Merkato</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#gebeya" className="hover:text-gray-900">Gebeya (B2B)</a>
          <a href="#merkato" className="hover:text-gray-900">Merkato (B2C/C2C)</a>
          <a href="#blueprint" className="hover:text-gray-900">Recommendation Engine</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
            <Video className="h-4 w-4" />
            Live Demo
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
            <ShoppingBag className="h-4 w-4" />
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
