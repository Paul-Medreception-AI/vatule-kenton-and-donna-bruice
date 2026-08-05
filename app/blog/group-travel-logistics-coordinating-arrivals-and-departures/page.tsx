import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Group Travel Logistics: Coordinating Arrivals and Departures | Vatule - Kenton and Donna Bruice',
  description: 'Expert guidance on coordinating group travel logistics for medical tourism. Learn practical strategies for managing arrivals, departures, and seamless travel coordination for your medical journey.',
  keywords: 'group travel logistics, medical tourism coordination, travel arrivals departures, group medical travel, travel planning, medical trip coordination',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Travel Planning
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Group Travel Logistics: Coordinating Arrivals and Departures
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Bruice Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Imagine coordinating the arrival of twelve family members from three different countries, all converging on a destination for an important medical procedure. The flights are staggered across two days, luggage requirements vary, and everyone needs ground transportation to the same medical facility. For many families pursuing medical tourism or specialized care abroad, this scenario isn't hypothetical—it's the reality of managing group travel logistics.
            </p>
            <p className="mb-6">
              When medical care requires travel, especially for complex procedures or extended treatments, families often choose to travel together for support. However, coordinating multiple travelers' schedules, flights, accommodations, and ground transportation can quickly become overwhelming. Poor coordination can lead to missed connections, unnecessary stress during an already challenging time, and even complications with medical appointments. Understanding how to effectively manage group travel logistics isn't just about convenience—it's about ensuring that everyone arrives safely, on time, and ready to focus on what matters most: health and healing.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding the Complexity of Group Medical Travel
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Group travel for medical purposes presents unique challenges that differ significantly from leisure travel. Unlike vacation trips where flexibility is built into the itinerary, medical travel operates on fixed schedules determined by appointment times, pre-operative consultations, and procedure dates. This rigidity means that arrival and departure times must be precisely coordinated.
            </p>
            <p className="mb-6">
              Additionally, group members often have varying needs and constraints. The patient may require special assistance or medical clearance for travel. Support family members might be arriving from different locations with different budget considerations. Some may need to return home earlier for work or family obligations, while others plan to stay throughout the entire recovery period.
            </p>
            <p className="mb-6">
              Research in medical tourism management indicates that logistical complications are among the top stressors reported by international patients. A 2023 study published in the Journal of Travel Medicine found that 43% of medical travelers experienced at least one significant travel-related challenge, with coordination issues being the most common complaint. These challenges can impact not only the travel experience but also patient outcomes, as stress and exhaustion from poorly managed logistics can affect recovery.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Creating a Comprehensive Travel Coordination Plan
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The foundation of successful group travel logistics is a detailed coordination plan created well in advance of departure. This plan should serve as a single source of truth for all travelers and should be accessible to everyone in the group.
            </p>
            <p className="mb-6">
              Start by designating a travel coordinator—typically one organized family member or friend who takes primary responsibility for communication and logistics. This person becomes the central hub for all travel information, reducing confusion and ensuring consistent communication with medical facilities, hotels, and transportation providers.
            </p>
            <p className="mb-6">
              Your coordination plan should include a master timeline that maps out every significant event from the first departure to the last return home. This timeline should note:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Each traveler's departure city, flight numbers, and arrival times</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Ground transportation arrangements and meeting points</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Accommodation check-in times and room assignments</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>All medical appointments, consultations, and procedures</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Return departure times and any necessary pre-flight medical clearances</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Emergency contacts and backup plans for each phase of travel</span>
              </li>
            </ul>
            <p className="mb-6">
              Build in buffer time throughout your schedule. If the medical appointment is at 10 AM, don't schedule the last family member's arrival for 9 AM. Plan for arrivals at least 24 hours before critical medical appointments whenever possible, allowing for flight delays, time zone adjustment, and unexpected complications.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Poor coordination can lead to missed connections and unnecessary stress during an already challenging time. Understanding how to effectively manage group travel logistics ensures everyone arrives safely, on time, and ready to focus on health and healing."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Strategic Flight Booking and Arrival Coordination
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When booking flights for multiple travelers, you'll face a fundamental choice: coordinate everyone on the same flights, or allow flexibility with staggered arrivals. Each approach has advantages depending on your group's circumstances.
            </p>
            <p className="mb-6">
              Synchronized arrivals—where everyone travels on the same or closely timed flights—simplify ground transportation and eliminate the need for multiple airport pickups. This approach works particularly well when all travelers are departing from the same region and have similar budget constraints. It also creates a sense of team unity from the journey's beginning, which can be emotionally supportive for the patient.
            </p>
            <p className="mb-6">
              However, staggered arrivals offer important advantages in many situations. They provide flexibility for family members with work constraints or different budget levels. They also allow for a "relay team" approach, where some support persons arrive early with the patient while others come later for the procedure or recovery phase, and early arrivals depart as later arrivals take over support duties.
            </p>
            <p className="mb-6">
              Regardless of your approach, book all flights as early as possible. International medical travel often requires bookings 2-3 months in advance to secure the best rates and ensure availability. When booking, consider:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Medical necessity documentation for potential patient accommodations</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Travel insurance that covers medical-related trip changes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Flexible ticket options for the patient's return flight, as recovery timelines can vary</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Direct flights when possible to minimize connection stress and delays</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Adequate connection time (minimum 2-3 hours for international connections)</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ground Transportation and Local Coordination
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Once everyone lands, efficient ground transportation becomes critical. The complexity increases exponentially with each arriving traveler, making advance planning essential.
            </p>
            <p className="mb-6">
              For synchronized arrivals, pre-arrange group transportation such as a van or small bus. Many medical tourism facilitators and destination medical centers offer transportation services specifically designed for patient groups. These services often include meet-and-greet at the airport, assistance with luggage, and direct transport to your accommodation or medical facility.
            </p>
            <p className="mb-6">
              For staggered arrivals, create a clear protocol for each person. Will early arrivals pick up later arrivals? Will each person take individual taxis or rideshares? Establish a communication system so the coordinator knows when each person successfully arrives and reaches the accommodation. Simple group messaging apps work well for this purpose, allowing everyone to track who has arrived and providing real-time updates if delays occur.
            </p>
            <p className="mb-6">
              Consider the patient's specific needs when planning transportation. If the patient has mobility limitations or will require wheelchair assistance, communicate this clearly to transportation providers in advance. After procedures, the patient may need extra space, reclining seating, or frequent stops—all factors to discuss with your ground transportation provider beforehand.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Managing Accommodations for Multiple Travelers
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Accommodation coordination for medical travel groups requires balancing proximity to medical facilities, comfort needs, and budget considerations. The ideal solution often involves securing accommodations in the same building or complex, allowing family members to support each other while maintaining some privacy.
            </p>
            <p className="mb-6">
              Many destinations frequented by medical tourists offer medical lodging specifically designed for patients and families. These facilities typically provide amenities like kitchenettes for special dietary needs, comfortable common areas for family gatherings, and proximity to medical centers. They also often have experience with staggered check-ins and extended stays, making coordination easier.
            </p>
            <p className="mb-6">
              When booking accommodations, clarify check-in procedures for late arrivals. If family members are arriving at midnight, ensure 24-hour reception or a secure key pickup system. Communicate room assignments clearly in your master timeline so everyone knows exactly where they're staying upon arrival.
            </p>
            <p className="mb-6">
              Budget considerations may lead to some family members choosing different accommodation tiers. This is perfectly acceptable—what matters most is that everyone knows the plan and has clear directions to both their accommodation and central meeting points.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Coordinating Departures and Return Travel
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Departure coordination requires even more precision than arrivals, particularly for the patient. Medical clearance for air travel after procedures is non-negotiable and must be obtained from the treating physician before booking return flights.
            </p>
            <p className="mb-6">
              Different procedures require different recovery periods before air travel. Some minor procedures may allow travel within days, while major surgeries might require weeks of recovery before the patient is cleared to fly. Always book the patient's return flight with full flexibility or wait to book until you receive medical clearance for travel.
            </p>
            <p className="mb-6">
              For support family members, departures can often be more flexible. The relay approach mentioned earlier works particularly well for departures—early support persons may leave once the patient is stable, while others remain through the recovery period. This staged departure reduces costs and allows those with time constraints to fulfill their support role without extended time away from home.
            </p>
            <p className="mb-6">
              Create a departure checklist for each traveler that includes medical clearances, documentation of treatment for customs/immigration purposes, prescriptions and medication supplies for the journey home, follow-up appointment scheduling, and contact information for post-treatment questions.
            </p>
          </div>

          {/* Section 7 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Communication Systems and Contingency Planning
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Effective communication systems are the backbone of successful group travel coordination. Establish your communication protocols before anyone departs, ensuring all travelers have:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>The travel coordinator's contact information (including international numbers)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Access to a shared group messaging platform that works internationally</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Emergency contact numbers for medical facilities, accommodations, and local emergency services</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Copies of the master timeline and all confirmation numbers</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Information about local SIM cards or international phone plans</span>
              </li>
            </ul>
            <p className="mb-6">
              No matter how well you plan, unexpected situations will arise. Flight delays, lost luggage, medical complications, and schedule changes are all possibilities. For each major component of your plan, develop a contingency strategy. What happens if someone misses their flight? What if the procedure is delayed? Who makes decisions if the coordinator becomes ill? Having these conversations beforehand reduces panic and confusion when challenges occur.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 border-t border-[var(--color-border)] pt-8">
            <p className="mb-6">
              Coordinating group travel for medical purposes is complex, but with thorough planning, clear communication, and attention to detail, it's entirely manageable. The investment of time in creating comprehensive coordination plans pays dividends in reduced stress, better support for the patient, and smoother execution of what is already a challenging journey.
            </p>
            <p className="mb-6">
              Remember that you don't have to manage this alone. Many medical tourism facilitators, healthcare concierge services, and experienced medical travel coordinators can provide professional assistance with logistics planning. If coordinating group travel feels overwhelming, seeking professional guidance can ensure nothing is overlooked and that your focus remains where it belongs—on health, healing, and supporting one another through the medical journey.
            </p>
            <p>
              If you're planning medical travel and need guidance on coordinating group logistics, our team at Vatule understands the unique challenges you face. We're here to help you navigate the planning process and ensure your journey is as smooth and stress-free as possible.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Written by the Vatule - Kenton and Donna Bruice Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to providing comprehensive patient education and compassionate care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Packing Essentials for Medical Travel
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  A comprehensive guide to what you need to pack when traveling for medical procedures, including documents, medications, and comfort items.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Planning Your Medical Travel Timeline
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how to create a realistic timeline for your medical journey, from initial consultation through recovery and return travel.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Staying Connected: Communication While Traveling
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Essential tips for maintaining communication with family, healthcare providers, and support networks during international medical travel.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>

    </main>
  )
}