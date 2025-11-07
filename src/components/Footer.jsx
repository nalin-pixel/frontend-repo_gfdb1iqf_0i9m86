import { Shield, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
        <div>
          <p className="font-semibold text-gray-900">Gebeya & Merkato</p>
          <p className="mt-2">A hybrid social commerce ecosystem powered by an AI recommendation engine.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Trust & Support</p>
          <ul className="mt-2 space-y-1">
            <li className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> Trade Assurance</li>
            <li>WOW Customer Service</li>
            <li>Hassle-free Returns</li>
          </ul>
        </div>
        <div className="flex items-end md:justify-end">
          <p className="inline-flex items-center gap-1">Built with <Heart className="h-4 w-4 text-rose-500" /> by Flames Blue</p>
        </div>
      </div>
    </footer>
  );
}
