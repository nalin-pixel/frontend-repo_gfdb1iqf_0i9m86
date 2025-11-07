import { useState } from "react";
import { Users, Star, CheckCircle2 } from "lucide-react";

const creators = [
  { id: 1, name: "Liya", handle: "@liya.shop", niche: "Beauty", rate: 12, rating: 4.9, followers: "120k" },
  { id: 2, name: "Dawit", handle: "@dawit.tech", niche: "Gadgets", rate: 10, rating: 4.7, followers: "88k" },
  { id: 3, name: "Saba", handle: "@saba.style", niche: "Fashion", rate: 15, rating: 4.8, followers: "203k" },
  { id: 4, name: "Yonatan", handle: "@yoni.home", niche: "Home", rate: 8, rating: 4.6, followers: "64k" },
];

function CreatorCard({ c, selected, onToggle }) {
  return (
    <button onClick={() => onToggle(c.id)} className={`w-full rounded-xl border p-4 text-left transition ${selected ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white hover:border-gray-300"}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white flex items-center justify-center font-semibold">{c.name[0]}</div>
          <div>
            <p className="font-semibold text-gray-900">{c.name} <span className="text-gray-500">{c.handle}</span></p>
            <p className="text-sm text-gray-600">{c.niche} • {c.followers} followers</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-700 inline-flex items-center gap-1"><Star className="h-4 w-4 text-amber-500" /> {c.rating}</p>
          <p className="text-xs text-gray-500">Commission {c.rate}%</p>
        </div>
      </div>
    </button>
  );
}

export default function AffiliateSelection() {
  const [selected, setSelected] = useState([]);

  const toggle = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Creator Affiliate Selection</h2>
            <p className="mt-2 max-w-2xl text-gray-600">Choose creators to promote your product. Set commission rates and launch campaigns.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {creators.map((c) => (
            <CreatorCard key={c.id} c={c} selected={selected.includes(c.id)} onToggle={toggle} />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4">
          <div className="text-sm text-gray-600">
            <Users className="mr-2 inline-block h-4 w-4" /> {selected.length} creator{selected.length !== 1 ? "s" : ""} selected
          </div>
          <button
            disabled={selected.length === 0}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold text-white ${selected.length ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300"}`}
          >
            <CheckCircle2 className="h-4 w-4" /> Start Campaign
          </button>
        </div>
      </div>
    </section>
  );
}
