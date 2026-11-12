const detail = (title, text) => ({ title, text });

function guide(slug, title, category, summary, photoKey, relatedHref, sections, takeaway) {
  return { slug, title, category, summary, photoKey, relatedHref, sections, takeaway };
}

export const adviceArticles = [
  guide(
    'regalplan-lesen', 'How to read a shelf plan', 'Shelf services',
    'Similar varieties can be hard to tell apart at a glance. Three details will help you put each product in the right place.', 'regalservice', '/regalservice',
    [
      detail('Find the right shelf bay', 'Match the aisle, bay and shelf level to the current plan. Check its date if anything has changed since last week. An old photo can show where a product used to sit, but the space allocated to it may have changed.'),
      detail('Check the product and its shelf space', 'Pack size, variety and item number distinguish products in almost identical packaging. The number of packs displayed side by side determines where the space for the next product begins.'),
      detail('Report anything that does not fit', 'If the right product still will not fit, record the item, its shelf position and the space available. The store manager can then make a decision about that particular spot.'),
    ], 'A useful way to brief someone is to walk the aisle together with the current plan and two similar-looking products.'
  ),
  guide(
    'fenstertermin-vorbereiten', 'Preparing for a window cleaning visit', 'Glass cleaning',
    'A quote can be more precise when the cleaner knows which sides and frames to clean and how to reach them.', 'glas', '/reinigung/glas-und-fensterreinigung',
    [
      detail('Count the windows and frames', 'List the windows and glazed doors. Note whether you want the inside, outside, frames, inner frame grooves or sills cleaned. A wide fixed pane needs a different approach from several small windows that open inwards.'),
      detail('Describe the access', 'Mention desks in front of windows, courtyards without vehicle access and fixed sunshades. A photo of the whole area is especially helpful for windows that do not open.'),
      detail('Arrange access on the day', 'Agree who will unlock each room and where moveable items can go. For shop windows, choose a time outside the busiest shopping hours if possible.'),
    ], 'One photo of each side of the building and a short window list are usually enough for a first conversation.'
  ),
  guide(
    'haushaltshilfe-erster-termin', 'Your first home cleaning visit', 'Household services',
    'What matters most if time is short? A few simple decisions make the first visit easier for everyone.', 'haushalt', '/haushalt',
    [
      detail('Choose three priorities', 'Put the most important jobs at the top of your list. “Shower, kitchen cupboard fronts, then the hall floor” gives your cleaner an order to follow. List extras such as ironing separately.'),
      detail('Show your cleaner around', 'Point out a delicate worktop, a shower screen that sticks or a pet they might meet. Let them know which rooms you would like to keep private.'),
      detail('Review the first week', 'After the visit, make a note of whether the time allowed suited the jobs on your list. For the next visit you can adjust the balance or add a particular task.'),
    ], 'Keep your priorities and the agreed list of tasks handy for the first visit.'
  ),
  guide(
    'fassadenreinigung-ohne-hochdruck', 'When a gentle façade wash makes sense', 'Façade care',
    'The wall material, its coating and the condition of the joints all affect how an exterior can be cleaned.', 'fassade', '/reinigung/fassadenreinigung',
    [
      detail('Identify the wall finish', 'Painted render behaves differently from bare metal or glazed panels. Building records, details of previous paintwork and signs of damage help the team assess the surface.'),
      detail('Try a small test area', 'An inconspicuous test patch shows how the finish responds. Let it dry before judging the colour and texture, since a wet wall can look quite different.'),
      detail('Consider neighbouring fittings', 'Sills, fittings and seals often sit directly in the work area. Discuss which parts need protection and where the wash water will be collected.'),
    ], 'Describe the finish you want and the material to be cleaned. The team can then select a suitable method.'
  ),
  guide(
    'belag-an-der-fassade', 'Understanding green deposits and dark streaks on façades', 'Façade care',
    'The pattern of discolouration can offer clues before anyone visits the building.', 'fassade', '/reinigung/fassadenreinigung',
    [
      detail('Record the pattern', 'Photograph the whole wall, then take a close-up of the mark. A streak directly beneath a sill raises different questions from a large discoloured area on a north-facing wall.'),
      detail('Look at the surroundings', 'Shade, nearby planting and water splashing at the base affect how quickly a wall dries. Note whether the deposits returned soon after previous cleaning.'),
      detail('Check for an underlying cause', 'Cleaning can remove an existing deposit. If a joint leaks or water regularly overflows onto the wall, ask the property manager to have the building detail checked as well.'),
    ], 'Record where you took each photo so you can see whether the deposit returns in the same place.'
  ),
  guide(
    'fassadenpflege-planen', 'How often does a façade need attention?', 'Façade care',
    'Different sides of a building weather at different rates. A brief visual check helps establish a sensible cleaning schedule.', 'fassade', '/reinigung/fassadenreinigung',
    [
      detail('Assess each side separately', 'Street-facing walls collect dust and spray. In a sheltered courtyard, render may stay damp for longer. Split the building into areas with similar conditions when assessing its needs.'),
      detail('Keep a record of changes', 'Photograph the same spots in similar light. This helps the owners and property manager decide whether to treat one patch or clean a larger area.'),
      detail('Coordinate access equipment', 'If a platform is already on site for other façade work, it may also be possible to use it for cleaning. Agree in advance who is responsible, how long it is available and which areas it can reach.'),
    ], 'A short inspection is useful even if the next full clean can wait.'
  ),
  guide(
    'fassadenangebot-vergleichen', 'What to look for in a façade cleaning quote', 'Façade care',
    'A price per square metre tells you little about the work included for your particular building.', 'fassade', '/reinigung/fassadenreinigung',
    [
      detail('Mark out the work area', 'The base of the wall, window reveals, canopies and balconies may all be visible parts of the façade but need separate treatment. Mark them on a photo or drawing so every quote covers the same area.'),
      detail('Identify additional costs', 'Access equipment, barriers, water management and protecting neighbouring surfaces can account for a substantial part of the work. Ask which items the total includes.'),
      detail('Agree how to inspect the finish', 'Before work starts, agree on a reference patch and the light in which to assess it. Point out existing discolouration or damage during the joint walk-round.'),
    ], 'Check that the quotes cover the same work before comparing their prices.'
  ),
  guide(
    'produktionsflaechen-reinigen', 'Planning cleaning around a working production line', 'Specialist cleaning',
    'A gap in the shift schedule becomes usable once everyone knows the access routes and who can release the area.', 'bau', '/reinigung/bau-und-sonderreinigung',
    [
      detail('Confirm which areas are available', 'Production halls, warehouses and the spaces around machinery have different access rules. The person responsible on site identifies the areas available and the times when the team may enter.'),
      detail('Agree on traffic routes', 'Describe forklift movements, deliveries and narrow passages. The team can then work section by section while keeping a route available for operations.'),
      detail('Hand the area back to the shift', 'Agree who will inspect the result and release the cleaned area for use. Note explicitly in the handover record which places could not be reached.'),
    ], 'A simple floor plan marked with access times is more useful for scheduling than the total floor area alone.'
  ),
  guide(
    'treppenhaus-pflegeplan', 'A cleaning plan for a shared stairwell', 'Building cleaning',
    'The entrance, landings and cellar access carry different amounts of traffic. Their cleaning schedules can reflect that.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Start at the front door', 'In winter, grit and moisture collect at the entrance while upper landings often stay clean for longer. Mark these different zones as you walk through the building together.'),
      detail('Include the small fittings', 'Visitors notice handrails, letterboxes, the lift mirror and the entry buzzer panel. Decide for each item whether to include it in routine cleaning or book it separately.'),
      detail('Keep access open', 'Discuss pushchairs, deliveries and peak times. Working in an agreed sequence helps keep part of the entrance dry and accessible.'),
    ], 'Agree who will report damage spotted during cleaning so the property manager can follow it up.'
  ),
  guide(
    'gebaeudedienste-abstimmen', 'Coordinating several services in one building', 'Building cleaning',
    'Caretakers, cleaners and outside contractors often need the same doors, rooms and time slots.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Identify overlaps', 'Mark deliveries, maintenance visits, events and regular cleaning on a weekly schedule. You can then see early on whether two teams need the same space at once.'),
      detail('Arrange a handover', 'Both shifts should know who opens a door, receives a returned key or reports a fault. A short list of contacts by role is enough.'),
      detail('Date changes to the schedule', 'When a room booking changes, the team needs to know which plan is current. Date each revision and remove superseded copies from circulation.'),
    ], 'Leave a little time for handovers when fitting work around the building’s daily activities.'
  ),
  guide(
    'laufende-reinigungsvereinbarung', 'What to include in a regular cleaning agreement', 'Building cleaning',
    'A clear description of each task gives both parties a practical way to review the service.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Specify the room and frequency', 'A task such as cleaning doors needs a location and an interval. Door handles at reception may need more frequent attention than the entire surface of a storeroom door.'),
      detail('Record special visits separately', 'List deep cleans, window cleaning and cleaning after events separately. Both parties can then see what happens regularly and what requires its own booking.'),
      detail('Give feedback a clear destination', 'Name a contact on each side. Feedback that identifies the room, date and specific observation is easy to match to the relevant job.'),
    ], 'Review the room list when departments move or opening hours change.'
  ),
  guide(
    'kosten-einer-gebaeudereinigung', 'What determines the cost of building cleaning?', 'Building cleaning',
    'A meeting room and a washroom of the same size can take quite different amounts of time to clean.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('List each type of room', 'Floor area is one factor alongside surfaces, fittings and use. An open corridor takes different work from a staff kitchen with many separate contact points.'),
      detail('Account for frequency', 'Washrooms cleaned every working day and archives cleaned monthly contribute differently to the total. Ask for a breakdown by area or type of work.'),
      detail('Check the additional items', 'Ask whether the quote covers consumables, key handovers or an early or late visit. These details make it easier to compare offers on equal terms.'),
    ], 'For an initial quote, share a room list with approximate floor areas and the days each room is in use.'
  ),
  guide(
    'reinigungsfirma-auswaehlen', 'Questions to ask at a first site visit', 'Building cleaning',
    'A walk through the building is a quick way to see how well a proposed cleaning plan fits your business.', 'reinigung', '/reinigung',
    [
      detail('Describe a typical day', 'Explain when the first staff arrive, when reception welcomes visitors and when the last meeting room becomes free. The provider can then suggest workable visiting times.'),
      detail('Point out a difficult area', 'Show the provider a delicate floor or a heavily used glass door. The questions they ask about the material, how it is used and your expectations will tell you how they plan to approach the work.'),
      detail('Discuss how you will work together', 'Who will brief the team? Who handles questions? When can the plan change? These details are as much a part of a practical quote as the price.'),
    ], 'Invite someone who works in the building every day. They will often know the details that matter most.'
  ),
  guide(
    'hygieneplan-im-alltag', 'Turning a hygiene plan into everyday tasks', 'Building cleaning',
    'For a hygiene plan to work on site, each requirement needs to describe a task the team can carry out.', 'kita', '/reinigung/kita-reinigung',
    [
      detail('Identify the areas covered', 'The facility decides which requirements apply to each room. Instructions should name the room or surface type so the team knows exactly where to apply them.'),
      detail('Agree who does what', 'Discuss what the facility’s staff will handle during the day and what the external team will do. This matters especially for surfaces that need attention between uses.'),
      detail('Leave room for feedback', 'A short record should show what the team completed and what remains open. If a door was locked, also record who will arrange another opportunity for access.'),
    ], 'Make sure every affected team receives a revised plan before its next shift.'
  ),
  guide(
    'regalservice-beauftragen', 'Arranging shelf services for a store', 'Shelf services',
    'Planning a shelf-stocking visit takes more information than the size of the sales floor.', 'regalservice', '/regalservice',
    [
      detail('Describe deliveries and product ranges', 'Give typical delivery quantities, product groups and delivery days. An aisle of small product variations involves different tasks from a promotional display stocked with full cartons.'),
      detail('Set the working hours', 'Explain when goods are available, how staff enter the stockroom and which areas need to be ready for customers first. Weekends and promotion launches may need their own schedule.'),
      detail('Agree on the final check', 'A short walk-round, a list of outstanding items or agreed photos may be enough for the shift handover. Decide how to record it before the first visit.'),
    ], 'For several stores, prepare a separate sheet for each location with access instructions, delivery times and a local contact.'
  ),
  guide(
    'aktionsflaeche-aufbauen', 'Setting up the next weekly promotion', 'Shelf services',
    'An orderly changeover starts with clearing the previous display and ends with checking the new price labels.', 'regalservice', '/regalservice',
    [
      detail('Decide where the remaining stock goes', 'Before dismantling the display, agree where saleable stock, stands and old promotional materials belong. This keeps the aisle usable during the changeover.'),
      detail('Have the display instructions ready', 'Match the planned location to the product variants, promotion dates and prices. Check in advance that every component has arrived, including brackets and price signs.'),
      detail('Check from the customer’s viewpoint', 'Approach from the direction customers walk. Can they reach the products, see the right prices and move past the display? Finish with a short walk-round with the store manager.'),
    ], 'Record any missing promotional items in the handover so the next delivery can go to the right display.'
  ),
  guide(
    'regalluecken-nachfuellen', 'What to do about a gap on the shelf', 'Shelf services',
    'An empty space can mean missing stock, a misplaced item or a delivery that has yet to arrive.', 'regalservice', '/regalservice',
    [
      detail('Identify the product', 'Check the shelf label and the neighbouring positions first. When packs look alike, an item in the wrong place can hide the actual gap.'),
      detail('Check stock and deliveries', 'If the item is in the stockroom and released for sale, it can go out on display. Identify the department responsible for any delivery that has yet to be unpacked.'),
      detail('Report unresolved gaps', 'If the product is still missing, record the shelf position and item number using the store’s procedure. The person responsible for ordering can then check the stock record.'),
    ], 'Keep the agreed space available so the missing product can return to its correct position.'
  ),
  guide(
    'schule-ganztag-reinigen', 'School cleaning around lessons and after-school activities', 'Education',
    'In many schools, rooms stay in use long after the final bell.', 'schule', '/reinigung/schulreinigung',
    [
      detail('Bring room bookings together', 'Compare the timetable with childcare, music lessons and sports club bookings. A team can often start in a free wing while a few rooms elsewhere remain occupied.'),
      detail('Confirm access and storage', 'Caretakers and cleaners need to know when doors are locked and where supplies are kept. Where possible, plan routes that avoid occupied areas.'),
      detail('Flag exceptions early', 'A parents’ evening or exam may shift individual tasks. Give the room name, date and expected time it will become available so the team can amend the schedule.'),
    ], 'When bookings change, circulate a single current timetable with a clearly visible revision date.'
  ),
  guide(
    'unterhaltsreinigung-intervalle', 'Finding the right frequency for routine cleaning', 'Building cleaning',
    'Actual room use sets the pace. A single weekly schedule can cover several different cleaning intervals.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Observe how spaces are used', 'Over a typical week, note when and how many people use entrances, washrooms and shared kitchens. An empty office and a floor of busy meeting rooms have different needs.'),
      detail('Distinguish between tasks', 'Daily spot cleaning, regular mopping and occasional detailed cleaning are different jobs. Give each its own frequency even when they take place in the same room.'),
      detail('Review after the first few weeks', 'Compare the agreed intervals with feedback from the people using the building. Public holidays and changes in office attendance can make a week less representative.'),
    ], 'Put the next due date for occasional tasks on the weekly schedule as well.'
  ),
  guide(
    'bauabnahme-vorbereiten', 'Scheduling a builder’s clean before handover', 'Construction and handover',
    'The right time to clean is after the last dust-producing work and before the new occupants take over.', 'bau', '/reinigung/bau-und-sonderreinigung',
    [
      detail('Check progress room by room', 'A finished bathroom may be kept closed while sawing continues in the corridor. Mark rooms ready for cleaning on the plan and agree who has authority to release them.'),
      detail('Keep a list of finishes', 'Freshly sealed floors, coated glass and natural stone need appropriate care. Include material names and manufacturers’ instructions in the site briefing.'),
      detail('Inspect the result together', 'On a clean surface it is easier to tell remaining residue from existing damage. Record open items at handover and identify the room in each case.'),
    ], 'Set a separate date to follow up on any finishing work the trades still need to do.'
  ),
  guide(
    'zimmerwechsel-im-hotel', 'Coordinating room changeovers with reception', 'Hotels',
    'Checked out, still occupied or needed for an early arrival? Each room’s status determines what happens next.', 'hotel', '/reinigung/hotelreinigung',
    [
      detail('Start with rooms released by reception', 'Reception confirms which rooms are free and which are needed for early arrivals. An up-to-date list makes it easier to change the order when a guest checks out late.'),
      detail('Keep room standards to hand', 'Furnishings, linen and guest amenities can vary by room category. A short set of instructions for each category helps staff covering a shift or working in the hotel for the first time.'),
      detail('Report issues from the room', 'Report a missing towel or damaged fitting to the person responsible. Record the completion of cleaning and the release of the room for guests as distinct steps.'),
    ], 'Agree on one reporting channel for reception, housekeeping and maintenance.'
  ),
  guide(
    'reinigungsergebnis-pruefen', 'Inspecting cleaning results together', 'Building cleaning',
    'A walk-round is easier to act on when you can match an observation to the agreed work and the change needed.', 'reinigung', '/reinigung',
    [
      detail('Bring the agreement', 'Should the team clean just the area around a door handle or the whole door? The list of agreed tasks and dates provides a reference for the inspection.'),
      detail('Pinpoint what you saw', '“There was debris by the second-floor lift on Monday after the evening clean” identifies the issue more clearly than a general comment about the corridor. Someone can then return to that spot.'),
      detail('Agree on the next step', 'Use after cleaning, unsuitable materials and a missed task each call for a different response. Agree who will follow up and when they will report back.'),
    ], 'When revising the plan, make a note of the arrangements that already work well.'
  ),
  guide(
    'grundreinigung-oder-unterhalt', 'When is a deep clean worthwhile?', 'Building cleaning',
    'Routine cleaning and a one-off intensive treatment serve different purposes.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Describe what has changed', 'A busy walkway may look dull or a floor may keep showing residue after routine cleaning. Photograph the area and note when it last had a more thorough treatment.'),
      detail('Check the finish and the available time', 'The method depends on the floor covering, its coating and when it will be used again. Some surfaces need time after treatment before furniture can go back.'),
      detail('Review routine care', 'After the deep clean, consider what caused the problem. A more effective entrance mat or a change in cleaning frequency may make daily care easier.'),
    ], 'Arrange deep cleaning with the caretaking team so rooms can be cleared and reopened at the right time.'
  ),
  guide(
    'geteilte-arbeitsplaetze', 'Cleaning shared desks', 'Office cleaning',
    'When people share workstations, the cleaning team needs clear instructions about personal belongings and equipment.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Clear the work surface', 'Agree which surfaces staff will clear before going home. A designated place for personal belongings makes it easier for the team to clean desks as agreed.'),
      detail('Agree how to handle equipment', 'Include monitors, keyboards and meeting equipment once you have agreed on the method and checked the manufacturer’s instructions. Tell the team which items they may move.'),
      detail('Include other shared spaces', 'In flexible offices, lockers, phone booths and room-booking screens also change users frequently. Decide which surfaces to include in the regular cleaning plan.'),
    ], 'Discuss the arrangements for shared desks with the people using them before the new schedule begins.'
  ),
  guide(
    'kita-ferienreinigung-planen', 'Deep cleaning a nursery during a closure', 'Education',
    'Empty group rooms give the team better access to floors and corners that are usually hard to reach.', 'kita', '/reinigung/kita-reinigung',
    [
      detail('Confirm which rooms are free', 'Part of the building may still provide emergency childcare during the holidays. Record available rooms, keys and expected return times in the plan.'),
      detail('Decide who looks after play materials', 'Books, building blocks and fabrics need different treatment. Nursery staff identify which items they will sort or wash themselves and which jobs the cleaning team will handle.'),
      detail('Plan the handover', 'Arrange a joint walk-round before the children return. This leaves time to put furniture back and discuss any outstanding work with the nursery manager.'),
    ], 'Label storage boxes with the group and room name so each team can find its materials again.'
  ),
  guide(
    'teppich-und-polsterpflege', 'Caring for carpets and upholstery at work', 'Building cleaning',
    'Reception seating and busy walkways often need attention sooner than less-used areas.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Record the material and stains', 'Where possible, note the upholstery fabric, carpet pile or manufacturer’s product name. For a stain, it helps to know what was spilled and whether anyone has already treated it.'),
      detail('Choose a suitable method', 'A test in an inconspicuous place helps check compatibility. Agree which seats, backrests, edges or carpeted areas the visit will cover.'),
      detail('Allow time to dry', 'Choose a time when the furniture and walkways can stay out of use after cleaning. In a lobby, it is often possible to open one section at a time.'),
    ], 'Before booking, check when the room needs to be ready for visitors again.'
  ),
  guide(
    'kuechengeraete-als-extra', 'Adding fridge or oven cleaning to a home visit', 'Household services',
    'Cleaning inside an appliance is a separate task that can be arranged alongside your usual visit.', 'haushalt', '/haushalt',
    [
      detail('Describe the appliance and the work', 'A small fridge with glass shelves has a different layout from a tall fridge-freezer. Say whether you would like drawers, trays or racks included.'),
      detail('Agree how to prepare', 'Decide who will remove the food, store it and return it afterwards. Have the appliance ready for the agreed work and follow its operating instructions.'),
      detail('Allow time alongside routine cleaning', 'If you would also like the usual bathroom and floor cleaning, allow extra time for the appliance. Agree on priorities in case the job takes longer than expected.'),
    ], 'Mention the appliance in your enquiry so the quote can include the work and its price.'
  ),
  guide(
    'buegelwaesche-einplanen', 'Including laundry and ironing in a home visit', 'Household services',
    'A short description of what is in the laundry basket is more useful for an estimate than its weight alone.', 'haushalt', '/haushalt',
    [
      detail('Give the number and type of items', 'Folding towels, changing bedding and ironing shirts involve different tasks. Estimate how many items you have and explain which jobs you would like help with.'),
      detail('Have care instructions ready', 'Set delicate items aside and check which equipment and hanging space are available. If a label is missing, discuss how the item should be handled.'),
      detail('Set priorities for the visit', 'If the bathroom and floors also need cleaning that day, say which tasks you want done first. A larger load of laundry may be easier to handle in a separate visit.'),
    ], 'Choose a regular place for finished laundry so it is easy to find even if you are out during the visit.'
  ),
  guide(
    'haushaltsangebot-verstehen', 'Reading a quote for household help', 'Household services',
    'The length and frequency of visits, together with any extras, help you turn a single price into a monthly budget.', 'haushalt', '/haushalt',
    [
      detail('Check what one visit covers', 'List the rooms and tasks included. If the price is hourly, check the agreed duration. If you pay per visit, look for a clear description of the work.'),
      detail('Count the visits in each month', 'A visit every two weeks usually gives you 26 visits over a year. Two fixed visits per calendar month gives you 24. Use the dates of the actual visits to work out a monthly budget.'),
      detail('Read the extras separately', 'Check for travel, materials and one-off tasks such as cleaning the inside of windows. Compare the total price including VAT for the same work.'),
    ], 'If you need help irregularly, ask for the cost of one-off and regular visits covering the same tasks.'
  ),
  guide(
    'schichtuebergabe-im-markt', 'A short shift handover for shelf teams', 'Shelf services',
    'Four details are often enough for the next shift to find an outstanding task straight away.', 'regalservice', '/regalservice',
    [
      detail('Identify the location and item', 'Give the aisle, shelf bay and item number. If several displays look alike, add a landmark such as “at the entrance to the drinks aisle”.'),
      detail('Describe the current situation', 'Is the delivery still due, is a price label missing or is a carton damaged? Record what you observed. A guess about the cause is often difficult to verify afterwards.'),
      detail('State the next step', 'Note who has already been informed and what the next shift is waiting for. They can then continue when the next delivery arrives without investigating the same issue again.'),
    ], 'Keep outstanding items in one agreed place so everyone works from the same list.'
  ),
  guide(
    'hotellobby-veranstaltungen', 'Preparing a hotel lobby and meeting rooms between events', 'Hotels',
    'Even a short gap can be useful when the events and service teams have agreed how to hand over the space.', 'hotel', '/reinigung/hotelreinigung',
    [
      detail('Time the changeover precisely', 'The full gap between bookings is rarely available for cleaning. Ask when crockery and equipment will be cleared and when the new seating layout will be set up.'),
      detail('Agree on the order of work', 'Surfaces, entrance doors and nearby washrooms may become accessible at different times. An agreed sequence helps each team carry on without getting in another’s way.'),
      detail('Use a single point for sign-off', 'One person confirms to the event manager which rooms and adjoining areas are ready. For outstanding items, include the location and the next opportunity for access.'),
    ], 'Include the routes between the lobby, meeting room and cloakroom. Guests experience them as one continuous space.'
  ),
  guide(
    'ressourcenschonend-reinigen', 'Using water and cleaning products efficiently', 'Sustainability',
    'Small decisions about the surface, material and level of cleaning needed can save resources.', 'nachhaltigkeit', '/reinigung',
    [
      detail('Assess what needs cleaning', 'Not every surface needs the same treatment on every visit. An unused office and a busy washroom in the same building can follow different routines.'),
      detail('Measure cleaning products correctly', 'Follow the manufacturer’s directions for the surface you are cleaning. Too much product can leave a residue that takes another pass to remove.'),
      detail('Prepare equipment and routes', 'Use suitable cloths and keep work areas separate. Planning routes and preparing equipment ahead of time can avoid extra trips and repeated work.'),
    ], 'When planning a visit, mention delicate surfaces and products that have already worked well in the building.'
  ),
];
