const detail = (title, text) => ({ title, text });
const question = (question, answer) => ({ question, answer });

export const cleaningServices = [
  {
    slug: 'glas-und-fensterreinigung',
    title: 'Glass and window cleaning',
    shortTitle: 'Glass cleaning',
    summary: 'Clear shop windows, bright offices and an uninterrupted view from your conservatory.',
    intro: 'Fingerprints on an entrance door need a different approach from pollen on a glass roof. We agree which panes and frames to clean, check how to reach them and clean the inside and outside as often as you need.',
    photoKey: 'glas',
    scope: [
      detail('Windows, frames and recesses', 'We clean the sides of the glass specified in your quote. You can include frames, sills and the inner recesses around opening windows in the same visit.'),
      detail('Shop windows and glass partitions', 'We remove fingerprints and streaks from glass in entrances, meeting rooms and sales areas. We arrange the work around the times your visitors and customers use the space.'),
      detail('Conservatories and glass façades', 'For sloping glass or high windows, we check access in advance and choose a method suited to the glazing and its coating.'),
    ],
    plan: ['Tell us how many windows you have and which sides need cleaning.', 'Discuss access, blinds or shading, and any delicate coatings.', 'Arrange a single visit or a regular interval.'],
    faq: [
      question('Are frames and recesses included?', 'You can request both. Your quote will list exactly which parts of the windows the visit covers.'),
      question('What information helps you assess high windows?', 'Photos from inside and outside, the approximate height, and details of vehicle access and which windows can open help us plan the work.'),
    ],
  },
  {
    slug: 'buero-und-gebaeudereinigung',
    title: 'Office and building cleaning',
    shortTitle: 'Office cleaning',
    summary: 'A cleaning plan for workstations, conference rooms and shared spaces.',
    intro: 'Rain brings muddy footprints into the entrance. Lunch leaves cups and crumbs in the staff kitchen. We plan routine cleaning around how each room is used and when your business is open.',
    photoKey: 'buero',
    scope: [
      detail('Workstations and meeting rooms', 'We agree on a schedule for desks cleared for cleaning, other surfaces, floors and waste bins. Together we decide how to handle paperwork and equipment.'),
      detail('Kitchenettes and washrooms', 'We clean sinks, taps, worktops and frequently touched surfaces according to your plan. We can also check supplies by arrangement.'),
      detail('Entrances, stairs and flooring', 'We adjust cleaning in busy areas to the amount of foot traffic. Carpet and upholstery cleaning and intensive floor care can have their own appointments.'),
    ],
    plan: ['List the rooms, floor finishes and hours of use.', 'Agree the tasks and frequency for each area.', 'Confirm access, how to give feedback and how to check the work.'],
    faq: [
      question('Can you clean outside office hours?', 'Tell us your preferred times. We will agree when the team can get in and which areas become available first.'),
      question('Can we change the plan later?', 'Yes. If occupancy changes, you refurbish the office or you host an event, we can review the work with you and adjust the agreed tasks.'),
    ],
  },
  {
    slug: 'hotelreinigung',
    title: 'Hotel cleaning and housekeeping',
    shortTitle: 'Hotel cleaning',
    summary: 'Room changeovers, linen and guest areas looked after around your hotel schedule.',
    intro: 'There is often little time between check-out and the next arrival. Our team coordinates room order, linen changes and sign-off with reception. For guests staying another night, we work around their privacy and the routines of your hotel.',
    photoKey: 'hotel',
    scope: [
      detail('Check-out and stayover rooms', 'We make beds, clean bedrooms and bathrooms, and replenish the guest amenities you supply according to your hotel standards. The tasks depend on whether the guest is leaving or staying.'),
      detail('Lobby, corridors and event rooms', 'We clean the agreed public areas before breakfast, between meetings or after events, depending on when they are in use.'),
      detail('Linen and room handover', 'We agree storage locations, linen collection and delivery routes, and how to report progress with your head housekeeper or reception, so the status of each room is clear.'),
    ],
    plan: ['Tell us the room count, room types and expected occupancy.', 'Discuss housekeeping standards and linen arrangements.', 'Agree responsibilities and room sign-off with reception.'],
    faq: [
      question('Can your team support our own housekeepers?', 'Yes. You can book individual areas, cover for busy check-out days or a larger share of your room cleaning.'),
      question('How do we plan for changes in occupancy?', 'A forecast of arrivals and departures helps us plan. For last-minute changes, get in touch with your agreed contact.'),
    ],
  },
  {
    slug: 'bau-und-sonderreinigung',
    title: 'Construction and specialist cleaning',
    shortTitle: 'Construction cleaning',
    summary: 'From the first completed area to a building ready for handover.',
    intro: 'Fine construction dust settles on sockets, door frames and newly installed surfaces. We schedule cleaning around the progress of the work and follow care instructions for new flooring and fittings.',
    photoKey: 'bau',
    scope: [
      detail('Initial site cleaning', 'Once an area is clear, we remove the agreed loose debris and packaging so walkways and work areas are ready for the next trades.'),
      detail('Detailed and final cleaning', 'Before handover, we clean windows, doors, floors, built-in fittings and sanitary fixtures. We check the underlying surface before treating adhesive, paint or mortar residue.'),
      detail('Specialist cleaning', 'For heavily used carpets, natural stone, production areas or warehouses, we discuss suitable methods and access with you separately.'),
    ],
    plan: ['Describe the construction phase, materials and handover date.', 'Identify completed areas and any work still in progress.', 'Review the result together before acceptance.'],
    faq: [
      question('When should we book the final clean?', 'Ideally, after the last work that produces a lot of dust. If you are handing over the building in stages, we can clean one section at a time.'),
      question('What information do you need about delicate floors?', 'Manufacturer guidance, details of sealants and the date the flooring was laid help us choose a suitable approach.'),
    ],
  },
  {
    slug: 'fassadenreinigung',
    title: 'Façade cleaning',
    shortTitle: 'Façade care',
    summary: 'Care for rendered, glazed and clad exteriors, tailored to the material.',
    intro: 'Road dust on metal, green growth in shady spots and streaks on render call for different treatments. We look at the material, its condition and how to reach it before recommending a method.',
    photoKey: 'fassade',
    scope: [
      detail('Stone, render and concrete', 'We assess the dirt and the texture of the surface. A small test patch helps us check the result and how the surface responds to the proposed method.'),
      detail('Metal and glass', 'We consider coated panels, glass sections and their surrounding seals together when choosing tools and cleaning products.'),
      detail('Deposits, graffiti and work at height', 'For persistent marks and areas that are hard to reach, we plan a dedicated visit with the appropriate access equipment and measures to secure the work area.'),
    ],
    plan: ['Describe the side of the building, its height and the marks or damage.', 'Discuss the material, access and a test patch.', 'Arrange the work area and timing around building users.'],
    faq: [
      question('Do all sides of the building need cleaning at once?', 'You can book one side at a time. Where surfaces are visible together, we discuss in advance how you would like the cleaned area to meet the adjoining one.'),
      question('Do you always use a pressure washer?', 'No. The material, joints and coating determine the method. Gentler options are available for delicate surfaces.'),
    ],
  },
  {
    slug: 'kita-reinigung',
    title: 'Nursery and kindergarten cleaning',
    shortTitle: 'Nursery cleaning',
    summary: 'Cleaning for playrooms, eating areas, changing stations and child-sized washbasins.',
    intro: 'Children build on the floor, make things at the table and nap in the next room. We agree the tasks for each area with the nursery manager and schedule visits around the children’s day.',
    photoKey: 'kita',
    scope: [
      detail('Playrooms, eating areas and nap rooms', 'We clean floors and agreed surfaces. For toys and play materials, we check care instructions with the nursery staff and agree who will clean what.'),
      detail('Washrooms and changing areas', 'We use dedicated routines for sanitary facilities and frequently touched surfaces in line with your nursery hygiene plan.'),
      detail('Cloakrooms and entrances', 'Sand, leaves and wet shoes put more strain on entrances than on quieter rooms. We set the cleaning frequency to match how each area is used.'),
    ],
    plan: ['Review how the rooms are used and the nursery hygiene plan.', 'Allow for naps, mealtimes and collection times.', 'Agree tasks and handovers with the nursery manager.'],
    faq: [
      question('Can you clean after collection time?', 'Yes. Tell us when the nursery closes and which times are available. We will agree access and a schedule with you.'),
      question('Can you accommodate requests about cleaning products?', 'Let us know in advance about fragrance restrictions or particular materials. We will check which products are suitable for those areas.'),
    ],
  },
  {
    slug: 'schulreinigung',
    title: 'School cleaning',
    shortTitle: 'School cleaning',
    summary: 'From classrooms to the sports hall, with a schedule that follows the school year.',
    intro: 'A classroom after the last lesson, a sports hall in use all afternoon and a lunchtime club each have different opening hours. We coordinate routine cleaning with school leaders, caretakers and the organisation responsible for the site.',
    photoKey: 'schule',
    scope: [
      detail('Classrooms, corridors and stairs', 'We schedule desks, floors, corridors and stairs around occupancy. For specialist teaching rooms and equipment, we agree which surfaces are cleared for cleaning.'),
      detail('Washrooms, sports facilities and dining areas', 'Washrooms, changing rooms and shared spaces have their own cleaning plan, including any afternoon or sports club use.'),
      detail('School holiday deep cleaning', 'Empty rooms give us time for more intensive floor care, glass cleaning and detail work. We agree access with caretakers and holiday childcare staff.'),
    ],
    plan: ['Compare the room list with occupancy times.', 'Distinguish routine tasks from school holiday work.', 'Agree how to sign off the work and report unusual issues.'],
    faq: [
      question('How do you work around lessons and after-school activities?', 'Alongside the timetable, share the hours for childcare, clubs and sports groups. We then stagger cleaning by part of the building.'),
      question('Can we request a holiday clean separately?', 'Yes. Tell us which rooms and floor coverings are involved and when they will be free, so we can assess the work.'),
    ],
  },
];

export const retailService = {
  slug: 'regalservice',
  title: 'Shelf services',
  shortTitle: 'Shelf services',
  summary: 'Stock the shelves, match prices to products and set up promotions on time.',
  intro: 'When a delivery arrives, every item needs to reach the right shelf. We take on agreed tasks from receiving goods to checking the aisles, coordinating each shift with the store manager.',
  photoKey: 'regalservice',
  scope: [
    detail('Shelf stocking and presentation', 'We sort goods, fill empty spaces and face up the front rows according to your shelf plan. Cardboard and empty containers go to the agreed collection point.'),
    detail('Stock checks and rotation', 'We check the assigned sections against your instructions, follow your stock rotation procedure and report missing products to the store manager.'),
    detail('Prices and labels', 'We check that each label matches the product and its position. We refer unclear prices and missing labels to the store for confirmation.'),
    detail('Promotions and display changes', 'For weekly changeovers or seasonal launches, we set up secondary displays and stands and change the product range to match your layout.'),
    detail('Deliveries and shift handovers', 'We coordinate the agreed routes from the stockroom to the sales floor. We record outstanding quantities, missing items and positions still awaiting access for the next shift.'),
  ],
  plan: ['Agree the store, product groups and delivery times.', 'Confirm shelf plans, promotion materials and responsibilities.', 'Review completed work and hand outstanding items over to the store manager.'],
  faq: [
    question('Can you work during opening hours?', 'Yes. We agree which aisle to start with and how to keep access clear for customers.'),
    question('Can I book a single promotional display?', 'Yes. Tell us the date, number of stores and layout you have in mind. We can assess one-off promotions and product moves.'),
    question('What information does the team need?', 'Current display plans, product lists, pricing information and the name of the person responsible on site are helpful.'),
  ],
};

export const householdService = {
  slug: 'haushalt',
  title: 'Household help',
  shortTitle: 'Household services',
  summary: 'Personal help with cleaning, laundry and occasional jobs around your home.',
  intro: 'You might like someone to take care of the kitchen and bathroom each week, or you might need a thorough clean before moving in. You choose the rooms and the jobs that matter most.',
  photoKey: 'haushalt',
  scope: [
    detail('Living rooms and bedrooms', 'We vacuum or mop suitable floors, dust accessible shelves and clean the surfaces you specify.'),
    detail('Bathrooms and kitchens', 'A regular visit can include basins, taps, showers, toilets, sinks and kitchen worktops.'),
    detail('Laundry and bedding', 'You can ask us to change bedding, fold washing or iron clothes. Let us know roughly how much there is.'),
    detail('Appliances and cupboard interiors', 'We can allow extra time by arrangement for an oven, an empty fridge or the insides of kitchen cupboards.'),
    detail('Windows and glass', 'Book windows, mirrors and glazed doors on their own or as part of a visit. The number, size and accessibility of the panes help us estimate the work.'),
    detail('Moving and one-off deep cleaning', 'For a single visit, we agree the rooms and priorities separately. Tell us whether the property will already be empty.'),
  ],
  plan: ['Tell us the rooms, tasks and postcode.', 'Choose a one-off visit or your preferred frequency.', 'Receive a personal quote with the work and price set out.'],
  faq: [
    question('Can I ask for just a few rooms?', 'Yes. For example, write “bathroom and kitchen only” and list any extras separately. We can then estimate the work for those rooms.'),
    question('Do I need to be home for the first visit?', 'Discuss access and any details about your home with us in advance. A brief walk-through is particularly helpful on the first visit.'),
    question('Who provides products and equipment?', 'Tell us your preferences and what equipment you have. Your quote will explain what each side will provide and whether any material costs apply.'),
  ],
};

export const householdPricing = {
  intro: 'Your quote covers the jobs you ask us to do. Your floor area, number of bathrooms and preferred frequency help us estimate how long a visit will take.',
  factors: [
    detail('Time per visit', 'Two homes of the same size can take different amounts of time. A second bathroom, large areas of glass or delicate flooring can all affect the work involved.'),
    detail('First and repeat visits', 'A deep clean often involves different tasks from regular upkeep. If you want ongoing help, you can request separate estimates for the first visit and subsequent visits.'),
    detail('Additional tasks', 'For ironing, inside window panes or the oven, we agree the time and work separately. This makes it clear which tasks the regular visit includes.'),
    detail('Travel and materials', 'Your postcode and the equipment needed form part of the quote. Before booking, you will see whether either has an additional charge and what the total price is, including VAT.'),
  ],
  example: 'Two three-hour visits in a month add up to six hours. Multiply those six hours by the agreed hourly rate and add any extra charges listed in the quote. For a one-off visit you pay for that visit once.',
  closing: 'Tell us your priorities and when you would like a visit. We will send a personal quote for you to review before booking.',
};

export const aboutContent = {
  title: 'White Stone in Munich',
  intro: 'The first delivery reaches the shop floor, guests check out of their hotel rooms and the first office meeting begins. These are the moments we plan our work around. White Stone brings building cleaning, shelf services and household help together in Munich.',
  principles: [
    detail('Agree the details on site', 'We ask about access, materials and available times before planning a visit. Both sides know which jobs are due and when they will happen.'),
    detail('Clean according to need', 'We distinguish busy spaces from quieter ones. Our choice of cleaning products, the amounts we use and our water use depend on the material and the task.'),
    detail('Make the handover clear', 'Whether you run a store, work at a hotel reception or arrange help for your own home, we agree a direct point of contact for questions and changes.'),
  ],
  team: {
    name: 'Saqib Ali',
    role: 'Managing Director',
    text: 'Saqib Ali leads White Stone GmbH in Munich. If you are planning regular support or would like to combine several services, you can reach the management team through our contact form.',
  },
};
