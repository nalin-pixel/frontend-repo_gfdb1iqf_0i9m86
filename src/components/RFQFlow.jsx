import { useState } from "react";
import { Building2, Package, Tag, Hash, Calendar, Send } from "lucide-react";

function StepHeader({ step, title }) {
  return (
    <div className="mb-4">
      <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">Step {step}</span>
      <h3 className="mt-2 text-lg font-semibold text-gray-900">{title}</h3>
    </div>
  );
}

export default function RFQFlow() {
  const [form, setForm] = useState({
    company: "",
    product: "",
    quantity: "",
    sku: "",
    deadline: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">✓</div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">RFQ Submitted</h2>
          <p className="mt-2 text-gray-600">Suppliers will respond with quotes. You can track status in your dashboard.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Request for Quotation (RFQ)</h2>
          <p className="mt-2 text-gray-600">A quick, guided flow for businesses to source products on Gebeya.</p>
        </div>

        <form onSubmit={submit} className="grid grid-cols-1 gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div>
            <StepHeader step={1} title="Company & Product" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex items-center gap-2 rounded-lg border border-gray-200 p-3">
                <Building2 className="h-4 w-4 text-blue-600" />
                <input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Company name" className="w-full outline-none" />
              </label>
              <label className="flex items-center gap-2 rounded-lg border border-gray-200 p-3">
                <Package className="h-4 w-4 text-blue-600" />
                <input value={form.product} onChange={(e) => update("product", e.target.value)} placeholder="Product name" className="w-full outline-none" />
              </label>
            </div>
          </div>

          <div>
            <StepHeader step={2} title="Specs & Quantity" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <label className="flex items-center gap-2 rounded-lg border border-gray-200 p-3 md:col-span-1">
                <Tag className="h-4 w-4 text-blue-600" />
                <input value={form.quantity} onChange={(e) => update("quantity", e.target.value)} placeholder="Quantity" className="w-full outline-none" />
              </label>
              <label className="flex items-center gap-2 rounded-lg border border-gray-200 p-3 md:col-span-1">
                <Hash className="h-4 w-4 text-blue-600" />
                <input value={form.sku} onChange={(e) => update("sku", e.target.value)} placeholder="SKU (optional)" className="w-full outline-none" />
              </label>
              <label className="flex items-center gap-2 rounded-lg border border-gray-200 p-3 md:col-span-1">
                <Calendar className="h-4 w-4 text-blue-600" />
                <input type="date" value={form.deadline} onChange={(e) => update("deadline", e.target.value)} className="w-full outline-none" />
              </label>
            </div>
          </div>

          <div>
            <StepHeader step={3} title="Notes" />
            <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Describe materials, dimensions, certifications, packaging, etc." className="w-full rounded-lg border border-gray-200 p-3" rows={4} />
          </div>

          <div className="flex items-center justify-end">
            <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
              <Send className="h-4 w-4" /> Submit RFQ
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
