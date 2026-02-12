"use client";

type Props = {
  onClose: () => void;
};

export default function ApplyModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-lg w-full max-w-2xl p-8 relative">

        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-blue-600 text-white w-8 h-8 rounded"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 uppercase">
          Love BlueHorse? Join The Party
        </h2>

        <form className="space-y-4">

          <input className="w-full border p-3 rounded" placeholder="Applying for" />
          <input className="w-full border p-3 rounded" placeholder="Your Name" />

          <div className="grid md:grid-cols-2 gap-4">
            <input className="border p-3 rounded" placeholder="Email Id" />
            <input className="border p-3 rounded" placeholder="Phone Number" />
          </div>

          <input className="w-full border p-3 rounded" placeholder="Location" />

          <textarea className="w-full border p-3 rounded" placeholder="Remark"></textarea>

          <input type="file" className="w-full border p-3 rounded" />

          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
