
const WA_NUMBER = "917888019291";
const packages = [
  {
    "id": 1,
    "name": "Bali – The Ultimate Paradise",
    "dest": "Bali, Indonesia",
    "type": "international",
    "tags": [
      "couple",
      "family"
    ],
    "duration": "6N/7D",
    "price": 39999,
    "badge": "Best Seller",
    "badgeClass": "",
    "seats": "Only 4 seats left",
    "includes": [
      "Stay",
      "All Meals",
      "Sightseeing",
      "Transfers",
      "Guide"
    ],
    "stay": "4★ Beach Resort",
    "meals": "Breakfast + Dinner",
    "highlights": [
      "Tanah Lot Temple",
      "Ubud Rice Terraces",
      "Seminyak Beach",
      "Kecak Dance Show",
      "Bali Safari"
    ],
    "emoji": "🌴🏝",
    "color": "bali",
    "itinerary": [
      "Arrive Bali – Airport transfer, check-in, welcome dinner at beach resort",
      "Ubud Exploration – Rice terraces, Monkey Forest, traditional Balinese art village",
      "Sacred Sites – Tanah Lot, Uluwatu Temple, Kecak Fire Dance at sunset",
      "Water Activities – Snorkeling, white-water rafting, spa afternoon",
      "Beach Day – Seminyak Beach, shopping, farewell dinner",
      "Free morning, Bali Safari, airport transfer"
    ],
    "included": [
      "6 nights accommodation",
      "Daily breakfast & dinner",
      "All sightseeing as per itinerary",
      "AC vehicle transfers",
      "Professional English-speaking guide",
      "Travel insurance"
    ],
    "excluded": [
      "International flights",
      "Lunch",
      "Personal expenses",
      "Visa fees (approx.)"
    ]
  },
  {
    "id": 2,
    "name": "Dubai – City of Wonders",
    "dest": "Dubai, UAE",
    "type": "international",
    "tags": [
      "couple",
      "group"
    ],
    "duration": "5N/6D",
    "price": 54999,
    "badge": "Luxury",
    "badgeClass": "",
    "seats": "6 seats left",
    "includes": [
      "Stay",
      "Breakfast",
      "Sightseeing",
      "Transfers"
    ],
    "stay": "5★ Downtown Hotel",
    "meals": "Daily Breakfast",
    "highlights": [
      "Burj Khalifa",
      "Desert Safari",
      "Dubai Mall",
      "Palm Jumeirah",
      "Dhow Cruise"
    ],
    "emoji": "🏙✨",
    "color": "dubai",
    "itinerary": [
      "Arrive Dubai – Hotel check-in, Dubai Mall & Burj Khalifa evening",
      "City Tour – Old Dubai, Gold Souk, Spice Souk, Dubai Frame",
      "Desert Safari – Dune bashing, camel ride, BBQ dinner under stars",
      "Atlantis & Palm – Palm Jumeirah, Atlantis Aquaventure, Dhow Cruise",
      "Miracle Garden & Shopping – Souks, Mall of Emirates",
      "Departure after breakfast"
    ],
    "included": [
      "5 nights stay",
      "Daily breakfast",
      "Sightseeing tours",
      "Airport transfers"
    ],
    "excluded": [
      "Flights",
      "Visa charges",
      "Lunches/dinners",
      "Personal expenses"
    ]
  },
  {
    "id": 3,
    "name": "Kerala Backwaters Bliss",
    "dest": "Kerala",
    "type": "domestic",
    "tags": [
      "family"
    ],
    "duration": "4N/5D",
    "price": 18999,
    "badge": "Trending",
    "badgeClass": "",
    "seats": "8 seats left",
    "includes": [
      "Stay",
      "Breakfast",
      "Sightseeing",
      "Houseboat"
    ],
    "stay": "3★ Resort + Houseboat",
    "meals": "Breakfast + Dinner",
    "highlights": [
      "Munnar Tea Gardens",
      "Thekkady",
      "Alleppey Houseboat",
      "Kochi Fort"
    ],
    "emoji": "🌿🚣",
    "color": "kerala",
    "itinerary": [
      "Arrive Kochi – drive to Munnar, spice gardens en route",
      "Munnar sightseeing – tea plantations, Echo Point, Mattupetty Dam",
      "Thekkady – Periyar Wildlife Sanctuary, spice market, cultural show",
      "Alleppey houseboat stay with all meals",
      "Checkout and departure via Kochi"
    ],
    "included": [
      "4 nights stay",
      "Breakfast",
      "One houseboat night",
      "Local transfers"
    ],
    "excluded": [
      "Flights/train",
      "Lunches",
      "Optional activities",
      "Personal expenses"
    ]
  },
  {
    "id": 4,
    "name": "Royal Rajasthan Heritage",
    "dest": "Rajasthan",
    "type": "domestic",
    "tags": [
      "family",
      "group"
    ],
    "duration": "7N/8D",
    "price": 25999,
    "badge": "Popular",
    "badgeClass": "pkg-badge-hot",
    "seats": "5 seats left",
    "includes": [
      "Stay",
      "Breakfast",
      "Sightseeing",
      "Guide"
    ],
    "stay": "Heritage Hotels",
    "meals": "Daily Breakfast",
    "highlights": [
      "Jaipur Forts",
      "Jaisalmer Desert",
      "Udaipur Lake",
      "Jodhpur Blue City"
    ],
    "emoji": "🏰🐪",
    "color": "rajasthan",
    "itinerary": [
      "Jaipur arrival and local sightseeing",
      "Amer Fort, City Palace, Jantar Mantar",
      "Drive to Jodhpur and blue city walk",
      "Jaisalmer fort and desert camp",
      "Udaipur lake city sightseeing",
      "Kumbhalgarh / optional activities",
      "Departure"
    ],
    "included": [
      "7 nights stay",
      "Breakfast",
      "Transfers",
      "Guided sightseeing"
    ],
    "excluded": [
      "Flights",
      "Entry tickets",
      "Lunch/dinner",
      "Tips"
    ]
  },
  {
    "id": 5,
    "name": "Goa Beach Holiday",
    "dest": "Goa",
    "type": "domestic",
    "tags": [
      "couple",
      "family",
      "group"
    ],
    "duration": "3N/4D",
    "price": 12999,
    "badge": "Hot Deal",
    "badgeClass": "pkg-badge-hot",
    "seats": "12 seats left",
    "includes": [
      "Stay",
      "Breakfast",
      "Transfers",
      "Sightseeing"
    ],
    "stay": "Beach Resort",
    "meals": "Daily Breakfast",
    "highlights": [
      "Baga Beach",
      "South Goa",
      "Cruise",
      "Old Goa"
    ],
    "emoji": "🏖🍹",
    "color": "goa",
    "itinerary": [
      "Arrival and beach resort check-in",
      "North Goa sightseeing and beaches",
      "South Goa and churches / cruise",
      "Checkout and departure"
    ],
    "included": [
      "3 nights stay",
      "Breakfast",
      "Sightseeing",
      "Airport transfers"
    ],
    "excluded": [
      "Flights",
      "Lunch/dinners",
      "Water sports",
      "Personal expenses"
    ]
  },
  {
    "id": 6,
    "name": "Delhi–Agra–Jaipur Golden Triangle",
    "dest": "Delhi & Agra & Jaipur",
    "type": "domestic",
    "tags": [
      "family",
      "couple"
    ],
    "duration": "5N/6D",
    "price": 16999,
    "badge": "",
    "badgeClass": "",
    "seats": "5 seats left",
    "includes": [
      "Stay",
      "Breakfast",
      "Sightseeing",
      "Transfers",
      "Guide"
    ],
    "stay": "3★ City Hotels",
    "meals": "Daily Breakfast",
    "highlights": [
      "Taj Mahal",
      "Red Fort",
      "Amber Fort",
      "Qutub Minar",
      "India Gate"
    ],
    "emoji": "🕌🏛",
    "color": "delhi",
    "itinerary": [
      "Arrive Delhi – India Gate, Qutub Minar, Lodhi Garden",
      "Delhi highlights – Red Fort, Jama Masjid, Chandni Chowk",
      "Drive to Agra – Taj Mahal at sunset, Agra Fort, Mehtab Bagh",
      "Fatehpur Sikri – drive to Jaipur",
      "Jaipur – Amber Fort, City Palace, Jantar Mantar",
      "Departure"
    ],
    "included": [
      "5 nights hotels",
      "Daily breakfast",
      "All sightseeing",
      "AC vehicle",
      "English guide"
    ],
    "excluded": [
      "Flights",
      "Taj Mahal entry fee",
      "Lunches & dinners",
      "Tips"
    ]
  }
];
const testimonials = [
  {
    "name": "Priya Sharma",
    "init": "PS",
    "trip": "Bali Family Package",
    "stars": 5,
    "text": "Sanket Travels made our Bali trip absolutely magical! Every single detail was taken care of — from the airport pickup to the farewell dinner. Our kids are still talking about it."
  },
  {
    "name": "Rahul & Meera Patel",
    "init": "RM",
    "trip": "Dubai Couple Getaway",
    "stars": 5,
    "text": "We celebrated our 5th anniversary in Dubai thanks to Sanket Travels. The hotel was stunning, the desert safari was unforgettable, and the team was always just a call away."
  },
  {
    "name": "Vikram Singh",
    "init": "VS",
    "trip": "Rajasthan Heritage Tour",
    "stars": 5,
    "text": "A group of 16 of us traveled Rajasthan with Sanket and it was flawless. The heritage hotels, camel safari and Udaipur lake cruise were pure gold."
  },
  {
    "name": "Ananya Joshi",
    "init": "AJ",
    "trip": "Kerala Backwaters",
    "stars": 5,
    "text": "The houseboat experience in Alleppey was out of a dream. Sanket Travels arranged everything perfectly — the food was delicious and the views were breathtaking."
  },
  {
    "name": "Deepak & Family",
    "init": "DF",
    "trip": "Golden Triangle Tour",
    "stars": 4,
    "text": "We saw the Taj Mahal at sunrise — something I will never forget. Sanket Travels organized everything beautifully. Loved every moment."
  },
  {
    "name": "Kavya Reddy",
    "init": "KR",
    "trip": "Goa Beach Package",
    "stars": 5,
    "text": "Goa with Sanket Travels was the best girls’ trip ever! The resort was perfect, the itinerary was well-paced, and we had so much fun."
  }
];
const faqs = [
  {
    "q": "How do I book a package?",
    "a": "Click Book Now on any package or send a WhatsApp enquiry. The site also opens a booking flow with package selection."
  },
  {
    "q": "What is the advance payment required?",
    "a": "The demo flow supports advance booking and full payment selection. For live payment, connect a payment gateway."
  },
  {
    "q": "Are the prices per person?",
    "a": "Yes, all prices displayed are per person based on double occupancy sharing unless stated otherwise."
  },
  {
    "q": "What is included in the packages?",
    "a": "Each package clearly lists inclusions and exclusions like stay, meals, sightseeing and transfers."
  },
  {
    "q": "Can I customize a package?",
    "a": "Yes. Use the enquiry form to share your budget, destination and travel dates."
  },
  {
    "q": "What is the cancellation policy?",
    "a": "The booking modal includes a summary flow. You can add your final cancellation policy text before launch."
  },
  {
    "q": "Is travel insurance included?",
    "a": "Some packages include it; the package detail modal shows package-wise inclusions."
  },
  {
    "q": "Can you arrange visa assistance?",
    "a": "Yes for international trips. Add a backend workflow if you want to automate document collection."
  }
];

let selectedPkgId = 1;
let bookingStep = 1;
let selectedPay = "Advance Payment (25%)";

const $ = (sel, parent = document) => parent.querySelector(sel);
const $$ = (sel, parent = document) => [...parent.querySelectorAll(sel)];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function waLink(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

function updateWhatsAppLinks() {
  const defaultText = "Hello Sanket Travels, I would like to inquire about a travel package.";
  $("#whatsappFloat").href = waLink(defaultText);
  $("#enquiryWhatsApp").href = waLink("Hello Sanket Travels, I want to inquire about a trip package.");
}

function renderPackages(filter = "all") {
  const grid = $("#packagesGrid");
  const filtered = packages.filter(p => filter === "all" || p.type === filter || p.tags.includes(filter));
  grid.innerHTML = filtered.map(p => `
    <article class="pkg-card fade-in visible" data-id="${p.id}">
      <div class="pkg-card-img">
        <div class="img-placeholder ${p.color}">${p.emoji}</div>
        ${p.badge ? `<span class="pkg-badge ${p.badgeClass || ""}">${p.badge}</span>` : ""}
        ${p.seats ? `<span class="pkg-seats">${p.seats}</span>` : ""}
      </div>
      <div class="pkg-card-body">
        <div class="pkg-dest">${p.dest}</div>
        <div class="pkg-name">${p.name}</div>
        <div class="pkg-meta">
          <div class="pkg-meta-item">📅 ${p.duration}</div>
          <div class="pkg-meta-item">🏨 ${p.stay}</div>
        </div>
        <div class="pkg-includes">${p.includes.map(i => `<span class="pkg-tag">${i}</span>`).join("")}</div>
        <div class="pkg-footer">
          <div class="pkg-price"><span>Per person from</span><strong>₹${p.price.toLocaleString("en-IN")}</strong></div>
          <div class="pkg-actions">
            <button class="btn-sm btn-ghost" type="button" data-detail="${p.id}">Details</button>
            <button class="btn-sm btn-gold" type="button" data-book="${p.id}">Book Now</button>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  $$("[data-detail]", grid).forEach(btn => btn.addEventListener("click", () => openPkgDetail(Number(btn.dataset.detail))));
  $$("[data-book]", grid).forEach(btn => btn.addEventListener("click", () => openBookingModal(Number(btn.dataset.book))));
}

function renderTestimonials() {
  $("#testimonialsGrid").innerHTML = testimonials.map(t => `
    <article class="testi-card">
      <div class="testi-stars">${"⭐".repeat(t.stars)}</div>
      <p class="testi-text">${t.text}</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.init}</div>
        <div><div class="testi-name">${t.name}</div><div class="testi-trip">${t.trip}</div></div>
      </div>
    </article>
  `).join("");
}

function renderFAQ() {
  $("#faqGrid").innerHTML = faqs.map((f, i) => `
    <div class="faq-item" id="faq${i}">
      <div class="faq-q" data-faq="${i}">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>
  `).join("");
  $$("[data-faq]").forEach(el => el.addEventListener("click", () => toggleFAQ(Number(el.dataset.faq))));
}

function toggleFAQ(i) {
  document.getElementById(`faq${i}`).classList.toggle("open");
}

function showNotif(icon, title, msg, warn = false) {
  const n = $("#notif");
  $("#notifIcon").textContent = icon;
  $("#notifTitle").textContent = title;
  $("#notifMsg").textContent = msg;
  n.style.borderLeftColor = warn ? "var(--danger)" : "var(--success)";
  n.classList.add("show");
  clearTimeout(window.__notifTimer);
  window.__notifTimer = setTimeout(() => n.classList.remove("show"), 3500);
}

function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openBookingModal(pkgId = 1) {
  selectedPkgId = pkgId;
  bookingStep = 1;
  openModal("bookingModal");
  renderBookingStep();
}

function openBookingModalWithPkg(id) {
  openBookingModal(id);
}

function openPkgDetail(id) {
  const p = packages.find(x => x.id === id) || packages[0];
  $("#pkgDetailTitle").textContent = "Package Details";
  $("#pkgDetailBody").innerHTML = `
    <div class="pkg-detail-header">
      <div class="img-placeholder ${p.color}">${p.emoji}</div>
      <div class="pkg-detail-header-info">
        <h2>${p.name}</h2>
        <p>${p.dest} · ${p.duration} · From ₹${p.price.toLocaleString("en-IN")}</p>
      </div>
    </div>
    <div class="pkg-dest" style="margin-bottom:8px">${p.stay}</div>
    <p class="section-sub" style="margin-bottom:20px;max-width:none">${p.highlights.join(" • ")}</p>
    <div class="inc-exc-grid">
      <div class="inc-list">
        <h4 style="margin-bottom:10px;font-size:13px;font-weight:700;color:var(--success)">✓ Included</h4>
        <ul>${p.included.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="exc-list">
        <h4 style="margin-bottom:10px;font-size:13px;font-weight:700;color:var(--danger)">✗ Excluded</h4>
        <ul>${p.excluded.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
    </div>
    <div>
      <h3 style="font-family:'Cormorant Garamond',serif;font-size:24px;margin:22px 0 12px">Itinerary</h3>
      ${p.itinerary.map((day, idx) => `
        <div class="itinerary-day">
          <div class="itinerary-day-header" data-itin="${idx}">
            <span class="itinerary-day-num">${idx + 1}</span>
            <span>Day ${idx + 1}</span>
          </div>
          <div class="itinerary-day-body">${day}</div>
        </div>
      `).join("")}
    </div>
    <div style="display:flex;gap:12px;margin-top:18px;flex-wrap:wrap">
      <button class="btn-primary" id="detailBookBtn" type="button">✈ Book This Package</button>
      <button class="btn-outline" id="detailEnquiryBtn" type="button" style="border-color:var(--cream-dark);color:var(--muted)">💬 Enquire</button>
    </div>
  `;
  openModal("pkgDetailModal");
  $("#detailBookBtn").addEventListener("click", () => { closeModal("pkgDetailModal"); openBookingModal(id); });
  $("#detailEnquiryBtn").addEventListener("click", () => { closeModal("pkgDetailModal"); scrollToSection("enquiry"); });
  $$("[data-itin]", $("#pkgDetailBody")).forEach(x => x.addEventListener("click", () => x.parentElement.classList.toggle("open")));
}

function renderBookingStep() {
  const p = packages.find(x => x.id === selectedPkgId) || packages[0];
  const c = $("#bookingStepContent");
  $$("#bookingSteps .step").forEach(step => {
    const s = Number(step.dataset.step);
    step.classList.toggle("active", s === bookingStep);
    step.classList.toggle("done", s < bookingStep);
  });

  if (bookingStep === 1) {
    c.innerHTML = `
      <h3 style="font-family:'Cormorant Garamond',serif;font-size:24px;margin-bottom:18px">Choose Your Package</h3>
      <div class="packages-grid" style="grid-template-columns:1fr;gap:18px">
        ${packages.map(pkg => `
          <div class="pkg-card" style="box-shadow:none;border:1px solid var(--cream-dark);cursor:pointer;${pkg.id===selectedPkgId ? "outline:2px solid var(--gold);" : ""}" data-pick="${pkg.id}">
            <div class="pkg-card-body" style="padding:18px">
              <div style="display:flex;gap:14px;align-items:center">
                <div style="width:62px;height:52px;border-radius:10px;overflow:hidden;flex:0 0 auto"><div class="img-placeholder ${pkg.color}" style="height:52px;font-size:22px">${pkg.emoji}</div></div>
                <div style="flex:1">
                  <div style="font-weight:700">${pkg.name}</div>
                  <div style="font-size:13px;color:var(--muted)">${pkg.duration} · ${pkg.dest}</div>
                </div>
                <div style="text-align:right;font-weight:700;color:var(--gold-dark)">₹${pkg.price.toLocaleString("en-IN")}</div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
      <div style="display:flex;justify-content:flex-end;margin-top:16px">
        <button class="form-submit" type="button" id="nextFromSelect" style="width:auto;padding:14px 28px">Continue →</button>
      </div>
    `;
    $$("[data-pick]", c).forEach(el => el.addEventListener("click", () => { selectedPkgId = Number(el.dataset.pick); renderBookingStep(); }));
    $("#nextFromSelect").addEventListener("click", () => { bookingStep = 2; renderBookingStep(); });
    return;
  }

  if (bookingStep === 2) {
    c.innerHTML = `
      <h3 style="font-family:'Cormorant Garamond',serif;font-size:24px;margin-bottom:18px">Fill Your Details</h3>
      <div style="border:1px solid var(--cream-dark);border-radius:16px;overflow:hidden;margin-bottom:20px">
        <div style="background:var(--cream);padding:16px;display:flex;gap:12px;align-items:center">
          <div style="width:60px;height:50px;border-radius:8px;overflow:hidden"><div class="img-placeholder ${p.color}" style="height:50px;font-size:20px">${p.emoji}</div></div>
          <div><div style="font-weight:700">${p.name}</div><div style="font-size:13px;color:var(--muted)">${p.duration} · ${p.dest}</div></div>
          <div style="margin-left:auto;font-weight:700;color:var(--gold-dark)">₹${p.price.toLocaleString("en-IN")}/person</div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group"><label for="bName">Full Name *</label><input id="bName" placeholder="Your full name"></div>
        <div class="form-group"><label for="bPhone">Mobile Number *</label><input id="bPhone" placeholder="+91 78880 19291"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label for="bEmail">Email *</label><input id="bEmail" type="email" placeholder="you@email.com"></div>
        <div class="form-group"><label for="bCity">Departure City</label><input id="bCity" placeholder="Your city"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label for="bDate">Travel Date *</label><input id="bDate" type="date"></div>
        <div class="form-group"><label for="bRoom">Room Preference</label>
          <select id="bRoom"><option>Standard Double</option><option>Deluxe Double</option><option>Triple Sharing</option><option>Single Occupancy</option></select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group"><label for="bAdults">Adults</label><input id="bAdults" type="number" min="1" value="2"></div>
        <div class="form-group"><label for="bChildren">Children</label><input id="bChildren" type="number" min="0" value="0"></div>
      </div>
      <div class="form-group"><label for="bMeal">Meal Preference</label><select id="bMeal"><option>As per package</option><option>Vegetarian Only</option><option>Non-Vegetarian</option><option>Jain Food</option></select></div>
      <div class="form-group"><label for="bReq">Special Requests</label><textarea id="bReq" placeholder="Anniversaries, dietary needs, accessibility..."></textarea></div>
      <div class="form-check"><input type="checkbox" id="bTerms"><label for="bTerms">I agree to the Terms & Conditions and cancellation policy</label></div>
      <div style="display:flex;gap:12px">
        <button class="btn-sm btn-ghost" type="button" id="prevStepBtn" style="flex:1;padding:14px">← Back</button>
        <button class="form-submit" type="button" id="toReviewBtn" style="flex:2">Review Booking →</button>
      </div>
    `;
    $("#prevStepBtn").addEventListener("click", () => { bookingStep = 1; renderBookingStep(); });
    $("#toReviewBtn").addEventListener("click", () => {
      if (!$("#bName").value || !$("#bPhone").value || !$("#bDate").value) {
        showNotif("⚠️", "Required Fields", "Please fill name, phone and travel date.", true);
        return;
      }
      bookingStep = 3;
      renderBookingStep();
    });
    return;
  }

  if (bookingStep === 3) {
    const adults = Number($("#bAdults")?.value || 2);
    const children = Number($("#bChildren")?.value || 0);
    const total = p.price * adults;
    c.innerHTML = `
      <h3 style="font-family:'Cormorant Garamond',serif;font-size:24px;margin-bottom:18px">Booking Summary</h3>
      <div style="border:1px solid var(--cream-dark);border-radius:16px;overflow:hidden;margin-bottom:20px">
        <div style="background:var(--cream);padding:16px;display:flex;gap:12px;align-items:center">
          <div style="width:60px;height:50px;border-radius:8px;overflow:hidden"><div class="img-placeholder ${p.color}" style="height:50px;font-size:20px">${p.emoji}</div></div>
          <div><div style="font-weight:700">${p.name}</div><div style="font-size:13px;color:var(--muted)">${p.duration} · ${p.dest}</div></div>
        </div>
        <div style="padding:16px;display:grid;gap:10px">
          <div style="display:flex;justify-content:space-between;font-size:14px;border-bottom:1px solid var(--cream-dark);padding-bottom:10px"><span style="color:var(--muted)">Package Rate</span><span>₹${p.price.toLocaleString("en-IN")} × ${adults} adults</span></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;border-bottom:1px solid var(--cream-dark);padding-bottom:10px"><span style="color:var(--muted)">Children</span><span>${children}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;border-bottom:1px solid var(--cream-dark);padding-bottom:10px"><span style="color:var(--muted)">Travel Date</span><span>${$("#bDate")?.value || "To be confirmed"}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:14px"><span style="color:var(--muted)">Estimated Total</span><span>₹${total.toLocaleString("en-IN")}</span></div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group"><label for="bEmail2">Email for confirmation</label><input id="bEmail2" type="email" placeholder="you@email.com" value="${$("#bEmail")?.value || ""}"></div>
        <div class="form-group"><label for="bCity2">Departure city</label><input id="bCity2" placeholder="Your city" value="${$("#bCity")?.value || ""}"></div>
      </div>
      <div class="form-group"><label for="bNotes">Important notes</label><textarea id="bNotes" placeholder="Anything we should know?">${$("#bReq")?.value || ""}</textarea></div>
      <div style="display:flex;gap:12px">
        <button class="btn-sm btn-ghost" type="button" id="backToDetails" style="flex:1;padding:14px">← Back</button>
        <button class="form-submit" type="button" id="toPaymentBtn" style="flex:2">Proceed to Payment →</button>
      </div>
    `;
    $("#backToDetails").addEventListener("click", () => { bookingStep = 2; renderBookingStep(); });
    $("#toPaymentBtn").addEventListener("click", () => { bookingStep = 4; renderBookingStep(); });
    return;
  }

  if (bookingStep === 4) {
    c.innerHTML = `
      <h3 style="font-family:'Cormorant Garamond',serif;font-size:24px;margin-bottom:18px">Payment</h3>
      <div class="payment-options" style="margin-bottom:16px">
        <div class="pay-option selected" data-pay="Advance Payment (25%)">
          <div class="pay-option-icon">💳</div><div class="pay-option-label">Advance Pay</div><div class="pay-option-sub">Pay 25% to confirm</div>
        </div>
        <div class="pay-option" data-pay="Full Payment (100%)">
          <div class="pay-option-icon">🏆</div><div class="pay-option-label">Full Payment</div><div class="pay-option-sub">Pay 100% for discount</div>
        </div>
      </div>
      <div class="form-group"><label for="cardNumber">Card Number</label><input id="cardNumber" type="text" placeholder="4242 4242 4242 4242" maxlength="19"></div>
      <div class="card-row">
        <div class="form-group"><label for="cardName">Cardholder Name</label><input id="cardName" type="text" placeholder="Full name on card"></div>
        <div class="form-group"><label for="cardExp">Expiry</label><input id="cardExp" type="text" placeholder="MM/YY" maxlength="5"></div>
        <div class="form-group"><label for="cardCvv">CVV</label><input id="cardCvv" type="password" placeholder="•••" maxlength="3"></div>
      </div>
      <div class="secure-note"><span>🔒</span> Front-end payment demo only. Connect Razorpay/Stripe for live transactions.</div>
      <div style="display:flex;gap:12px">
        <button class="btn-sm btn-ghost" type="button" id="backToReview" style="flex:1;padding:14px">← Back</button>
        <button class="form-submit" type="button" id="confirmPay" style="flex:2">Pay Securely Now</button>
      </div>
    `;
    $$("[data-pay]", c).forEach(el => el.addEventListener("click", () => {
      $$(".pay-option", c).forEach(x => x.classList.remove("selected"));
      el.classList.add("selected");
      selectedPay = el.dataset.pay;
    }));
    $("#cardNumber").addEventListener("input", e => formatCard(e.target));
    $("#backToReview").addEventListener("click", () => { bookingStep = 3; renderBookingStep(); });
    $("#confirmPay").addEventListener("click", () => { bookingStep = 5; renderBookingStep(); });
    return;
  }

  if (bookingStep === 5) {
    const name = $("#bName")?.value || "Guest";
    const phone = $("#bPhone")?.value || "";
    c.innerHTML = `
      <div class="success-state">
        <div class="success-icon">🎉</div>
        <h2 class="success-title">Booking Confirmed!</h2>
        <p class="success-sub">Thanks, ${name}. Your ${p.name} booking is now marked as confirmed in this front-end flow.</p>
        <div style="margin-top:20px;font-size:14px;color:var(--muted);line-height:1.7">
          <strong>Package:</strong> ${p.name}<br>
          <strong>Destination:</strong> ${p.dest}<br>
          <strong>Payment Option:</strong> ${selectedPay}<br>
          <strong>Phone:</strong> ${phone}
        </div>
        <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:24px">
          <button class="btn-primary" type="button" id="newBookingBtn">Book Another Package</button>
          <a class="btn-dark" href="${waLink(`Hello Sanket Travels, my booking is confirmed.\nName: ${name}\nPackage: ${p.name}\nPhone: ${phone}`)}" target="_blank" rel="noopener" style="text-decoration:none">WhatsApp Confirmation</a>
        </div>
      </div>
    `;
    $("#newBookingBtn").addEventListener("click", () => { closeModal("bookingModal"); scrollToSection("packages"); });
  }
}

function formatCard(input) {
  const v = input.value.replace(/\D/g, "").slice(0, 16);
  input.value = v.replace(/(.{4})/g, "$1 ").trim();
}

function submitEnquiryForm() {
  const name = $("#enqName").value.trim();
  const phone = $("#enqPhone").value.trim();
  const dest = $("#enqDest").value;
  const month = $("#enqMonth").value;
  const travelers = $("#enqTravelers").value;
  const msg = $("#enqMsg").value.trim();
  if (!name || !phone) {
    showNotif("⚠️", "Required Fields", "Please enter your name and phone number.", true);
    return;
  }
  $("#enquiryForm").innerHTML = `
    <div class="success-state">
      <div class="success-icon">✅</div>
      <h2 class="success-title">Enquiry Received!</h2>
      <p class="success-sub">Thank you, ${name}! Our travel expert will contact you within 2 hours.</p>
      <div style="display:flex;justify-content:center;margin-top:20px">
        <a class="btn-dark" href="${waLink(`Hello Sanket Travels, I am ${name}.\nPhone: ${phone}\nDestination: ${dest || "Not decided yet"}\nMonth: ${month || "Not selected"}\nTravellers: ${travelers || "N/A"}\nMessage: ${msg || "No message"}`)}" target="_blank" rel="noopener" style="text-decoration:none">Chat on WhatsApp</a>
      </div>
    </div>
  `;
  $("#enquiryWhatsApp").href = waLink(`Hello Sanket Travels, I am ${name}.\nPhone: ${phone}\nDestination: ${dest || "Not decided yet"}\nMonth: ${month || "Not selected"}\nTravellers: ${travelers || "N/A"}\nMessage: ${msg || "No message"}`);
  showNotif("✅", "Enquiry Sent!", "We will contact you within 2 hours.");
}

function submitContactForm() {
  const name = $("#cName").value.trim();
  const email = $("#cEmail").value.trim();
  if (!name || !email) {
    showNotif("⚠️", "Required Fields", "Please enter your name and email.", true);
    return;
  }
  $("#contactForm").innerHTML = `
    <div class="success-state">
      <div class="success-icon">📧</div>
      <h2 class="success-title">Message Sent!</h2>
      <p class="success-sub">Thanks for reaching out, ${name}. We will reply to ${email} shortly.</p>
    </div>
  `;
  showNotif("✅", "Message Sent!", "We will get back to you soon.");
}

function processPayment() {
  const p = packages.find(x => x.id === selectedPkgId) || packages[0];
  showNotif("🎉", "Payment Successful!", "Your booking is confirmed.");
  $("#paymentSummary").innerHTML = `
    <span class="section-label" style="font-size:11px;margin-bottom:8px">Booking Summary</span>
    <div class="pay-pkg-name">${p.name}</div>
    <div class="pay-line"><span>Package selected</span><span>${p.duration}</span></div>
    <div class="pay-line"><span>Status</span><span>Confirmed</span></div>
    <div class="pay-total"><span>Next step</span><span>WhatsApp</span></div>
    <div class="secure-badges"><div class="secure-badge">✅ Confirmed</div><div class="secure-badge">💬 WhatsApp Ready</div></div>
  `;
}

function openNavMenu() {
  $("#mobileMenu").classList.toggle("open");
}

function wireGeneralClicks() {
  $$("[data-scroll]").forEach(btn => btn.addEventListener("click", () => scrollToSection(btn.dataset.scroll)));
  $$("a[href^='#']").forEach(a => {
    const href = a.getAttribute("href");
    if (href && document.querySelector(href)) {
      a.addEventListener("click", e => {
        e.preventDefault();
        scrollToSection(href.slice(1));
        $("#mobileMenu").classList.remove("open");
      });
    }
  });
  $$(".dest-card").forEach(card => card.addEventListener("click", () => scrollToSection(card.dataset.scroll || "packages")));
}

function setupObservers() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  $$(".fade-in,.slide-left,.slide-right").forEach(el => observer.observe(el));
}

function bindGlobalEvents() {
  $("#hamburger").addEventListener("click", openNavMenu);
  $("#bookNowNav").addEventListener("click", e => { e.preventDefault(); openBookingModal(1); });
  $("#mobileBookNow").addEventListener("click", e => { e.preventDefault(); openBookingModal(1); $("#mobileMenu").classList.remove("open"); });
  $("#ctaBook").addEventListener("click", () => openBookingModal(1));
  $("#payNowBtn").addEventListener("click", processPayment);
  $("#enquiryForm").addEventListener("submit", e => { e.preventDefault(); submitEnquiryForm(); });
  $("#contactForm").addEventListener("submit", e => { e.preventDefault(); submitContactForm(); });
  $$(".modal-overlay").forEach(modal => {
    modal.addEventListener("click", e => {
      if (e.target === modal) closeModal(modal.id);
    });
  });
  $$("[data-close='booking']").forEach(btn => btn.addEventListener("click", () => closeModal("bookingModal")));
  $$("[data-close='pkg']").forEach(btn => btn.addEventListener("click", () => closeModal("pkgDetailModal")));
}

function handleScrollNav() {
  const nav = $("#mainNav");
  if (window.scrollY > 60) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
}

document.addEventListener("DOMContentLoaded", () => {
  updateWhatsAppLinks();
  renderPackages();
  renderTestimonials();
  renderFAQ();
  wireGeneralClicks();
  bindGlobalEvents();
  setupObservers();
  handleScrollNav();
  showNotif("✅", "Site Ready", "Separated files loaded successfully.");
});

window.addEventListener("scroll", handleScrollNav);

window.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal("bookingModal");
    closeModal("pkgDetailModal");
    $("#mobileMenu").classList.remove("open");
  }
});
