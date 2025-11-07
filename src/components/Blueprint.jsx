import { Eye, Clock, ThumbsUp, Search, Film, Tags } from "lucide-react";

function Stat({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 bg-white/60">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-md bg-blue-50 flex items-center justify-center">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <p className="font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Blueprint() {
  return (
    <section id="blueprint" className="bg-gradient-to-b from-white to-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Recommendation Engine Blueprint</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          The platform prioritizes discovery over search. Content signals like watch time, engagement, and semantics of captions/tags drive a personalized, video-first feed.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Stat icon={Film} title="Posted Content" desc="Analyze video/photo, captions, and tags for meaning and quality." />
          <Stat icon={Search} title="Search History" desc="Understand intent from natural language queries and filters." />
          <Stat icon={Eye} title="Consumed Content" desc="Track what users view to detect interest clusters." />
          <Stat icon={Clock} title="Watch Time" desc="Weight highly: seconds watched signals product relevance." />
          <Stat icon={ThumbsUp} title="Engagement" desc="Likes, comments, shares refine user-product matching." />
          <Stat icon={Tags} title="Semantic Graph" desc="Map entities and topics to connect people to products." />
        </div>
      </div>
    </section>
  );
}
