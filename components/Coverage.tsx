'use client';

const coverageAreas = {
  primary: ['Cochise', 'Sunsites', 'Pearce', 'Willcox', 'Dragoon', 'Benson'],
  extended: ['Sierra Vista', 'Tombstone', 'Bisbee', 'Douglas', 'St. David'],
};

export default function Coverage() {
  return (
    <section id="coverage" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className="p-8 bg-bgCard border border-borderColor rounded-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Service Area</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-accent mb-2">Primary Coverage</h3>
              <p className="text-textSecondary">
                {coverageAreas.primary.join(', ')}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-accent mb-2">Extended Area</h3>
              <p className="text-textSecondary">
                {coverageAreas.extended.join(', ')}
              </p>
            </div>

            <div className="pt-4 border-t border-borderColor">
              <p className="text-textSecondary flex items-start gap-2">
                <span className="text-accent font-bold">&bull;</span>
                <span><strong>Equipment Delivery:</strong> We deliver equipment to your property within our service area — no need to arrange your own transport.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
