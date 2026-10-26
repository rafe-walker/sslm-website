import type { BlogPost } from '../types'

export const winter_freeze_protection_tanks_pumps_lines_sulphur_springs_valley: BlogPost = {
  id: '35',
  slug: 'winter-freeze-protection-tanks-pumps-lines-sulphur-springs-valley',
  title: 'Winter on the Valley Floor: Freeze Protection for Tanks, Pumps and Lines',
  seoTitle: 'Freeze Protection for Water Tanks, Pressure Tanks and Pumps in the Sulphur Springs Valley (Willcox NOAA Normals)',
  description:
    'Willcox normals: 93 nights at or below 32°F and 11 at or below 20°F a year. What fails first on tanks, lines and pumps, burial depth, heat tape, draining, when to call.',
  date: '2026-10-26',
  author: 'Sulfur Springs Land Management',
  readTime: '8 min read',
  category: 'Off-Grid Living',
  keywords: [
    'freeze protection water tank arizona',
    'willcox az first freeze date',
    'heat tape well pressure tank',
    'water line burial depth cochise county',
    'frozen pipes off grid arizona',
    'winterize well pump house',
    'sulphur springs valley winter temperatures',
  ],
  featuredImage: '/blog/winter-freeze-protection-tanks-pumps-lines-sulphur-springs-valley.png',
  sources: [
    { label: 'NOAA NCEI — U.S. Climate Normals 1991–2020, Willcox, AZ (USC00029334), monthly and annual/seasonal', url: 'https://www.ncei.noaa.gov/access/us-climate-normals/' },
    { label: 'NOAA NCEI Access Service — Willcox annual freeze normals (data query)', url: 'https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-annualseasonal-1991-2020&stations=USC00029334&dataTypes=ANN-TMIN-PRBFST-T32FP50,ANN-TMIN-PRBLST-T32FP50,ANN-TMIN-PRBFST-T28FP50,ANN-TMIN-PRBFST-T20FP50,ANN-TMIN-AVGNDS-LSTH032,ANN-TMIN-AVGNDS-LSTH020,ANN-TMIN-PRBOCC-LSTH020,ANN-TMIN-PRBOCC-LSTH016&format=json&includeStationName=true' },
    { label: 'KOLD News 13 — Cochise County record cold, 13 January 2013', url: 'https://www.kold.com/story/20575669/cochise-county-freezes-through-record-cold-temperatures/' },
    { label: 'Wikipedia — Willcox, Arizona (elevation; NOAA-derived climate table)', url: 'https://en.wikipedia.org/wiki/Willcox,_Arizona' },
    { label: 'Cochise County — Building Safety Codes and design criteria (frost line, winter design temperature)', url: 'https://www.cochise.az.gov/DocumentCenter/View/3426/Cochise-County-Building-Safety-Codes-PDF' },
    { label: 'Cochise County — Local Amendments to the International Codes', url: 'https://www.cochise.az.gov/DocumentCenter/View/168/Local-Amendments-PDF' },
    { label: 'ICC — Build It to Code to Minimize Damage from Frozen Water Pipes (IRC P2603.5, P2603.6, P2903.10)', url: 'https://media.iccsafe.org/news/eNews/2014v11n3/techsvcs.html' },
    { label: 'University of Nebraska–Lincoln Extension G2152 — Private Drinking Water Wells: The Distribution System', url: 'https://extensionpubs.unl.edu/publication/g2152/na/html/view' },
    { label: 'A.A.C. R4-9-102 — ROC classifications (C-37 Plumbing, C-53 Water Well Drilling, C-11 Electrical)', url: 'https://www.law.cornell.edu/regulations/arizona/Ariz-Admin-Code-SS-R4-9-102' },
  ],
  content: `
    <div class="blog-content">
      <p>People who move to the valley from Phoenix are surprised by winter. People who move from Michigan are surprised too, for the opposite reason. Both end up with the same burst fitting in the first January, because the valley floor has a specific kind of cold and nobody told them what it was.</p>

      <p>This post puts numbers on it, from NOAA's 1991–2020 normals for the Willcox station, then works through what those numbers do to an off-grid water system in the order its pieces fail.</p>

      <h2>The numbers</h2>

      <p>Willcox sits at about 4,170 feet. NOAA station USC00029334 gives these 1991–2020 normals:</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Measure</th><th>Willcox normal</th></tr></thead>
          <tbody>
            <tr><td>Normal daily low, December / January / February</td><td>28.2°F / 28.4°F / 31.8°F</td></tr>
            <tr><td>Normal daily high, December / January</td><td>60.2°F / 61.3°F</td></tr>
            <tr><td>Median first 32°F freeze / last</td><td>31 October / 9 April</td></tr>
            <tr><td>Median first 28°F freeze / last</td><td>12 November / 16 March</td></tr>
            <tr><td>Median first 20°F night / last</td><td>8 December / 1 February</td></tr>
            <tr><td>Nights at or below 32°F per year</td><td>93</td></tr>
            <tr><td>Nights at or below 20°F per year</td><td>11</td></tr>
            <tr><td>Chance of a 20°F night in a given winter / 16°F</td><td>98% / 72%</td></tr>
          </tbody>
        </table>
      </div>

      <p>Two things in that table drive everything else. The normal January low is below freezing and the normal January high is 61°F: a 33-degree daily swing, so the cold here is overnight, radiative and brief. And it still gets properly cold about eleven nights a year, with roughly three winters in four seeing 16°F. On 13 January 2013 Willcox recorded 7°F; the all-time record is −7°F. Those nights find the weak point, and they cluster in dry, still, clear spells between early December and the end of January.</p>

      <p>Design for the 93 ordinary nights with insulation and depth. Design for the eleven hard ones with heat and drains.</p>

      <h2>What fails first</h2>

      <p>Water freezes from the outside in and from the smallest volume up. That gives a reliable order:</p>

      <ol>
        <li><strong>Exposed small-bore line above ground.</strong> Half-inch PVC or PEX from tank to pump house, a garden hose left connected, a float-valve supply. Freezes on an ordinary 28°F night. The pipe may survive; the fitting at the end of it often does not.</li>
        <li><strong>Hose bibbs and yard hydrants without a drain-back.</strong> The standing column in the riser freezes and splits the body behind the handle. Found in March.</li>
        <li><strong>The pressure switch, gauge and the nipple they sit on.</strong> A quarter-inch brass tee of still water in an unheated pump house. It freezes, the switch reads nothing, and the pump will not start or will not stop.</li>
        <li><strong>Above-ground pressure pump and its check valve.</strong> A jet or booster pump on a hauled-water system holds a cup of water in the housing. Cast housings crack; check valves freeze shut.</li>
        <li><strong>The pressure tank.</strong> Rarely bursts, because the air cushion gives it room, but the inlet tee and drain valve below it do.</li>
        <li><strong>The storage tank itself.</strong> Last, and almost never solid. Several thousand gallons hold heat and the daily sun recharges it. A skin of ice on a 2,500-gallon tank is normal; a frozen outlet at the bottom is the actual problem.</li>
      </ol>

      <p>The submersible pump down the well is not on this list. It sits far below any frost and, as the Nebraska Extension guide puts it, "needs no frost protection." The pitless adapter and the pipe from wellhead to house are a different matter.</p>

      <h2>Burial depth</h2>

      <p>Cochise County's adopted design criteria set the frost line depth at <strong>0 inches below 5,500 feet elevation</strong> and 12 inches above it, with a winter design temperature of 18 to 20°F. The whole valley floor is below 5,500 feet, so the county's frost line forces nothing.</p>

      <p>The residential code still does. IRC P2603.5 requires exterior water piping buried "not less than 12 inches deep and not less than 6 inches below the frost line." With a frost line of zero, the binding number is 12 inches of cover, a minimum. In practice 18 inches is cheap insurance against the eleven hard nights and the tractor tyre both. Where a line rises to a tank or hydrant, the riser is the vulnerable part, and that is where insulation and heat go.</p>

      <h2>Insulation, and why it is not enough</h2>

      <p>The IPC commentary, quoted by the ICC, says it directly: "insulation itself (without a heat source) cannot protect a pipe from freezing." Insulation only slows heat loss. It stretches the time to freezing past an ordinary valley night, which is why a wrapped riser survives December and fails on 8 January. So the pairing is heat plus insulation, applied to the small volumes:</p>

      <ul>
        <li><strong>Self-regulating heat tape</strong> on the riser, the pressure switch tee, the booster pump inlet and any exposed line, under closed-cell foam. Self-regulating, not constant-wattage, and run from a GFCI outlet so a damaged cable trips rather than burns. A plug-in heat cable is owner work; a new hardwired circuit to the pump house is a C-11 electrician's.</li>
        <li><strong>A pump house that is a box, not a lean-to.</strong> Closed, insulated, with the pressure tank and switch inside. A small thermostatic heater set to come on at 40°F runs a handful of hours a year. Off grid, a heater on a dead inverter protects nothing, so size the battery for the one cloudy night.</li>
        <li><strong>Insulated tank outlet.</strong> Wrap the bottom fitting, the valve and the first few feet of line. That is where the tank freezes, if it freezes at all.</li>
      </ul>

      <h2>Draining</h2>

      <p>Anything that cannot be kept warm should be kept empty. Hose bibbs need an accessible stop-and-waste valve inside so the exposed section drains, which is what IRC P2903.10 asks for, or a frost-proof bibb whose stem reaches into conditioned space. Yard hydrants should be self-draining. Disconnect hoses in October; a connected hose holds water in the bibb and defeats a frost-proof design. If you leave a hauled-water system for the winter, drain the booster pump and the pressure tank and open the lowest valve.</p>

      <div class="callout">
        <span class="callout-label">The October list</span>
        <p>Hoses off. Heat tape plugged in and tested with a hand on it. Pump house door shut and gaps foamed. Tank outlet wrapped. Stop-and-waste valves closed on anything you will not use until April. A spare pressure switch on the shelf.</p>
      </div>

      <h2>When to call someone</h2>

      <p>Most of this is owner work and none of it should wait for a quote. The calls worth making are specific. A split fitting on the pressure side, a cracked booster pump housing or re-plumbing the pump house is plumbing inside your property lines, the ROC's C-37 classification. Pulling the pump or touching the pitless adapter at the wellhead is C-53 water well work, and the services in our <a href="/blog/pumps-pressure-tanks-who-services-them-willcox">pumps and pressure tanks</a> post are equipped for it. A new circuit for a heater or hardwired heat tape is C-11 electrical. Ask for the ROC number and check it at azroc.my.site.com; under A.R.S. § 32-1121 the licence requirement starts at $1,000 or at any work needing a permit.</p>

      <p>If you are still designing, the <a href="/blog/water-systems-off-grid-arizona">off-grid water systems guide</a> covers layout, and the cheapest freeze protection is made there.</p>
  <div class="callout"><span class="callout-label">Run the numbers</span><p>Free, sourced calculators on our sister site, no signup:</p><ul><li><a href="https://plotnode.io/calculators/cistern-sizing/" rel="noopener">Hauled-water cistern sizing calculator</a> — household × gallons per day × days of autonomy, snapped to standard tank sizes.</li></ul></div>


      <h2>What we could not confirm</h2>

      <ul>
        <li>Normals are for the Willcox station only. Pearce-Sunsites, Kansas Settlement, Elfrida and the benches toward the Chiricahuas will differ, and low ground near the playa is colder on still nights.</li>
        <li>The −7°F all-time record comes from Wikipedia's NOAA-derived table; we did not locate the NOAA daily record directly. The 7°F on 13 January 2013 is from news reporting.</li>
        <li>Whether Cochise County Building Safety applies a burial depth stricter than the IRC minimum on a given permit. The amendments we read do not add one; ask the inspector.</li>
        <li>How long a given tank, line or fitting survives at a given temperature. The failure order above is experience, not test data.</li>
      </ul>

      <h2>The short version</h2>

      <p>Willcox normals give 93 freezing nights a year, 11 at or below 20°F, a median first freeze on 31 October and a last on 9 April, with a 33-degree daily swing that keeps the cold short and overnight. Small volumes fail first: exposed lines, bibbs, the pressure-switch tee, a booster pump housing. Big tanks almost never freeze solid. The county frost line on the valley floor is zero, so the code minimum is 12 inches of cover; dig 18. Insulation alone will not hold a hard night, so pair it with self-regulating heat tape and a closed pump house, and drain what you cannot heat. C-37 plumber for split fittings, C-53 pump service for the wellhead, C-11 electrician for a new circuit.</p>

      <p>Tell us the parcel and the job and <a href="/#contact">a licensed local contractor will call you to quote it</a>.</p>
    </div>
  `,
}
