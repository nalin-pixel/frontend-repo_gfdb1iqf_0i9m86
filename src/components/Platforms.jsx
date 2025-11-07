import { Building2, Users, ShieldCheck, Wallet, Package, Truck, Video, Store, Handshake, Sparkles } from "lucide-react";

function Card({ icon: Icon, title, children, badge }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-md bg-blue-50 flex items-center justify-center">
            <Icon className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        {badge && (
          <span className="rounded-full bg-emerald-50 text-emerald-700 text-xs px-2 py-1">{badge}</span>
        )}
      </div>
      <div className="mt-3 text-gray-600 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function Platforms() {
  return (
    <section id="gebeya" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Two Platforms, One Ecosystem</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Gebeya powers B2B wholesale with trust and scale. Merkato is a social, shoppable experience for consumers with video-first discovery at its core.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card icon={Building2} title="Gebeya (B2B)">
            <ul className="list-disc pl-6 space-y-1">
              <li>Verified suppliers and business onboarding.</li>
              <li>Bulk and tiered pricing for large orders.</li>
              <li>Request for Quotation (RFQ) workflows.</li>
              <li>Trade assurance with escrow for high trust.</li>
            </ul>
          </Card>

          <Card icon={Users} title="Merkato (B2C/C2C)" badge="Video-first">
            <ul className="list-disc pl-6 space-y-1">
              <li>Infinite scroll feed with shoppable short videos.</li>
              <li>LIVE shopping and creator affiliate tools.</li>
              <li>User-to-user marketplace for local selling.</li>
              <li>Loyalty, group-buying, and gamified engagement.</li>
            </ul>
          </Card>
        </div>

        <div id="merkato" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card icon={Package} title="Fulfillment by Merkato (FBM)">
            Store, pack, and ship inventory through our network. Optimized for next-day delivery.
          </Card>
          <Card icon={Truck} title="Rocket Delivery">
            Ultrafast logistics with local hubs and route optimization.
          </Card>
          <Card icon={Wallet} title="Merkato Pay">
            Built-in wallet with escrow and rewards, powering a financial ecosystem.
          </Card>
        </div>
      </div>
    </section>
  );
}
