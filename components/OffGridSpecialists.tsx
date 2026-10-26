'use client';

export default function OffGridSpecialists() {
  // "20+ Mile service radius" was vague and did not match the coverage list —
  // Willcox to Elfrida is about 40 miles. Naming the valley is clearer.
  const stats = [
    { stat: 'Sulphur Springs Valley', label: 'Willcox to Elfrida, Dragoon to San Simon — contractors who already work out here' },
    { stat: 'ROC-Licensed', label: 'Every contractor we refer holds an Arizona Registrar of Contractors licence you can check' },
    { stat: 'One Request', label: 'Clearing, solar, water — one form, the right licensed contractor for each' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bgCard/50 to-bg/50"></div>

      <div className="max-w-4xl mx-auto">
        <div
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Off-Grid Specialists</h2>
          <p className="text-lg text-textSecondary leading-relaxed max-w-3xl mx-auto">
            Most land service companies are built for subdivisions and city lots. This site is built for the real Sulphur Springs Valley — the RU-4 parcels, the off-grid homesteads, the raw desert that needs to become home. We live out here too, and we know which licensed contractors actually show up for a 5-acre parcel with no power and a two-track for a driveway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-bg border border-borderColor rounded-lg text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">{item.stat}</div>
              <p className="text-textSecondary text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
