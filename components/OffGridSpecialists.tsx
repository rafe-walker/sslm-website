'use client';

export default function OffGridSpecialists() {
  const stats = [
    { stat: '20+ Mile', label: 'Service radius with equipment delivery' },
    { stat: 'Full-Service', label: 'From raw land to move-in ready' },
    { stat: 'One Call', label: 'Clearing, solar, water — all under one roof' },
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
            Most land service companies are built for subdivisions and city lots. We&apos;re built for the real Cochise County — the RU-4 parcels, the off-grid homesteads, the raw desert that needs to become home. We live out here too, and we know what it takes to build a life off the grid.
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
