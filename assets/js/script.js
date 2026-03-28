(() => {
  const WA_NUMBER = "917888019291";

  const packages = [
    {
      id: 1,
      name: "Bali – The Ultimate Paradise",
      dest: "Bali, Indonesia",
      type: "international",
      tags: ["couple", "family"],
      duration: "6N/7D",
      price: 39999,
      badge: "Best Seller",
      seats: "Only 4 seats left",
      emoji: "🌴🏝️",
      color: "art-bali",
      stay: "4★ Beach Resort",
      includes: ["Stay", "All Meals", "Sightseeing", "Transfers", "Guide"],
      highlights: ["Tanah Lot Temple", "Ubud Rice Terraces", "Seminyak Beach", "Kecak Dance Show", "Bali Safari"],
      itinerary: [
        "Arrive Bali – Airport transfer, hotel check-in and welcome dinner.",
        "Ubud – Rice terraces, Monkey Forest, and art village exploration.",
        "Tanah Lot & Uluwatu – Sunset temple visit and Kecak Fire Dance.",
        "Adventure day – Snorkeling, rafting, and spa time.",
        "Beach day – Seminyak, shopping and farewell dinner.",
        "Free morning, Bali Safari and airport transfer."
      ],
      included: ["6 nights accommodation", "Daily breakfast & dinner", "All sightseeing as per itinerary", "AC vehicle transfers", "English-speaking guide"],
      excluded: ["International flights", "Lunch", "Personal expenses", "Visa fees"]
    },
    {
      id: 2,
      name: "Dubai – City of Wonders",
      dest: "Dubai, UAE",
      type: "international",
      tags: ["couple", "group"],
      duration: "5N/6D",
      price: 54999,
      badge: "Luxury",
      seats: "6 seats left",
      emoji: "🏙️✨",
      color: "art-dubai",
      stay: "5★ Downtown Hotel",
      includes: ["Stay", "Breakfast", "Sightseeing", "Transfers"],
      highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah", "Dhow Cruise"],
      itinerary: [
        "Arrival and Burj Khalifa evening visit.",
        "City tour – Old Dubai, Gold Souk and Dubai Frame.",
        "Desert Safari with BBQ dinner under the stars.",
        "Palm Jumeirah, Atlantis and Dhow Cruise.",
        "Miracle Garden, shopping and leisure.",
        "Departure after breakfast."
      ],
      included: ["5 nights stay", "Daily breakfast", "Sightseeing tours", "Airport transfers"],
      excluded: ["Flights", "Visa charges", "Lunches/dinners", "Personal expenses"]
    },
    {
      id: 3,
      name: "Kerala Backwaters Bliss",
      dest: "Kerala",
      type: "domestic",
      tags: ["family"],
      duration: "4N/5D",
      price: 18999,
      badge: "Trending",
      seats: "8 seats left",
      emoji: "🌿🚣",
      color: "art-kerala",
      stay: "3★ Resort + Houseboat",
      includes: ["Stay", "Breakfast", "Sightseeing", "Houseboat"],
      highlights: ["Munnar Tea Gardens", "Thekkady", "Alleppey Houseboat", "Kochi Fort"],
      itinerary: [
        "Arrive Kochi and drive to Munnar.",
        "Munnar sightseeing – tea plantations and viewpoints.",
        "Thekkady – Wildlife sanctuary and cultural show.",
        "Alleppey houseboat stay with all meals.",
        "Checkout and departure via Kochi."
      ],
      included: ["4 nights stay", "Breakfast", "One houseboat night", "Local transfers"],
      excluded: ["Flights/train", "Lunches", "Optional activities", "Personal expenses"]
    },
    {
      id: 4,
      name: "Royal Rajasthan Heritage",
      dest: "Rajasthan",
      type: "domestic",
      tags: ["family", "group"],
      duration: "7N/8D",
      price: 25999,
      badge: "Popular",
      seats: "5 seats left",
      emoji: "🏰🐪",
      color: "art-rajasthan",
      stay: "Heritage Hotels",
      includes: ["Stay", "Breakfast", "Sightseeing", "Guide"],
      highlights: ["Jaipur Forts", "Jaisalmer Desert", "Udaipur Lake", "Jodhpur Blue City"],
      itinerary: [
        "Jaipur arrival and local sightseeing.",
        "Amer Fort, City Palace, Jantar Mantar.",
        "Drive to Jodhpur and blue city walk.",
        "Jaisalmer fort and desert camp.",
        "Udaipur lake city sightseeing.",
        "Optional activities and leisure.",
        "Departure."
      ],
      included: ["7 nights stay", "Breakfast", "Transfers", "Guided sightseeing"],
      excluded: ["Flights", "Entry tickets", "Lunch/dinner", "Tips"]
    },
    {
      id: 5,
      name: "Goa Beach Holiday",
      dest: "Goa",
      type: "domestic",
      tags: ["couple", "family", "group"],
      duration: "3N/4D",
      price: 12999,
      badge: "Hot Deal",
      seats: "12 seats left",
      emoji: "🏖️🍹",
      color: "art-goa",
      stay: "Beach Resort",
      includes: ["Stay", "Breakfast", "Transfers", "Sightseeing"],
      highlights: ["Baga Beach", "South Goa", "Cruise", "Old Goa"],
      itinerary: [
        "Arrival and resort check-in.",
        "North Goa sightseeing and beaches.",
        "South Goa and cruise / churches.",
        "Checkout and departure."
      ],
      included: ["3 nights stay", "Breakfast", "Sightseeing", "Airport transfers"],
      excluded: ["Flights", "Lunch/dinners", "Water sports", "Personal expenses"]
    },
    {
      id: 6,
      name: "Delhi–Agra–Jaipur Golden Triangle",
      dest: "Delhi & Agra & Jaipur",
      type: "domestic",
      tags: ["family", "couple"],
      duration: "5N/6D",
      price: 16999,
      badge: "",
      seats: "5 seats left",
      emoji: "🕌🏛️",
      color: "art-delhi",
      stay: "3★ City Hotels",
      includes: ["Stay", "Breakfast", "Sightseeing", "Transfers", "Guide"],
      highlights: ["Taj Mahal", "Red Fort", "Amber Fort", "Qutub Minar", "India Gate"],
      itinerary: [
        "Delhi arrival and city highlights.",
        "Old Delhi, Red Fort and Chandni Chowk.",
        "Drive to Agra and Taj Mahal sunset visit.",
        "Fatehpur Sikri drive to Jaipur.",
        "Amber Fort, City Palace and Jantar Mantar.",
        "Departure."
      ],
      included: ["5 nights hotels", "Daily breakfast", "All sightseeing", "AC vehicle", "English guide"],
      excluded: ["Flights", "Taj Mahal entry fee", "Lunches & dinners", "Tips"]
    }
  ];

  const testimonials = [
    { name: "Priya Sharma", init: "PS", trip: "Bali Family Package", stars: 5, text: "Everything was planned perfectly. The kids loved it and we had zero stress during the trip." },
    { name: "Rahul & Meera Patel", init: "RM", trip: "Dubai Couple Getaway", stars: 5, text: "The hotel, safari, and transfers were flawless. Very responsive and transparent." },
    { name: "Vikram Singh", init: "VS", trip: "Rajasthan Heritage Tour", stars: 5, text: "Big group, but every detail was handled with care. The trip went smoothly from start to finish." },
    { name: "Ananya Joshi", init: "AJ", trip: "Kerala Backwaters", stars: 5, text: "The houseboat stay was the highlight. Great itinerary pacing and excellent coordination." },
    { name: "Deepak & Family", init: "DF", trip: "Golden Triangle Tour", stars: 4, text: "The sunrise Taj Mahal visit was unforgettable. A beautifully organized family trip." },
    { name: "Kavya Reddy", init: "KR", trip: "Goa Beach Package", stars: 5, text: "Perfect for a fun trip. Resort selection and support were both excellent." }
  ];

  const faqs = [
    ["How do I book a package?", "Use the Book Now button on any package card or fill the booking form. You can also use WhatsApp inquiry anytime."],
    ["Are prices per person?", "Yes, the prices shown are per person unless clearly mentioned otherwise."],
    ["Can I customize the package?", "Yes. Share your destination, dates, budget and travelers count in the enquiry form."],
    ["What payment options are available?", "You can choose advance booking or full payment in the booking modal. For real online payment, connect a gateway like Razorpay."],
    ["Is travel insurance included?", "Some packages include insurance. The package detail modal shows included and excluded items."],
    ["Can you help with international visas?", "Yes, visa assistance can be added for international trips."]
  ];

  const q = (sel, parent = document) => parent.querySelector(sel);
  const qa = (sel, parent = document) => [...parent.querySelectorAll(sel)];
  const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

  let activeFilter = "all";
  let activePackageId = packages[0].id;
  let activePay = "Advance Payment (25%)";
  let activeStep = 1;

  function safe(el, cb) { if (el) cb(el); }

  function toast(type, title, message) {
    const el = q("#toast");
    if (!el) return;
    q("#toastIcon").textContent = type === "error" ? "⚠️" : "✅";
    q("#toastTitle").textContent = title;
    q("#toastMsg").textContent = message;
    el.className = `toast ${type} show`;
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => el.className = "toast", 3200);
  }

  function setupNav() {
    const nav = q("#navbar");
    const burger = q("#hamburger");
    const menu = q("#mobileMenu");
    if (nav) {
      const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    if (burger && menu) {
      burger.addEventListener("click", () => menu.classList.toggle("open"));
      qa("[data-close-menu]").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));
      document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !burger.contains(e.target)) menu.classList.remove("open");
      });
    }
  }

  function setupSmoothScroll() {
    qa("[data-scroll]").forEach(el => el.addEventListener("click", () => {
      const target = q(`#${el.dataset.scroll}`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
  }

  function renderPackages(grid, items, mode = "full") {
    if (!grid) return;
    grid.innerHTML = items.map(p => `
      <article class="card package-card" data-pkg="${p.id}">
        <div class="card-media ${p.color}">
          <span>${p.emoji}</span>
        </div>
        <div class="card-body">
          <div class="card-kicker">${p.dest}</div>
          <h3 class="card-title">${p.name}</h3>
          <div class="meta">
            <span class="pill">📅 ${p.duration}</span>
            <span class="pill">🏨 ${p.stay}</span>
            <span class="pill">⭐ ${p.badge || "Popular"}</span>
          </div>
          <p class="card-text">${p.highlights.join(" • ")}</p>
          <div class="card-actions mt-16">
            <button class="btn btn-soft" data-detail="${p.id}" type="button">Details</button>
            <button class="btn btn-dark" data-book="${p.id}" type="button">Book Now</button>
          </div>
        </div>
      </article>
    `).join("");

    qa("[data-detail]", grid).forEach(btn => btn.addEventListener("click", () => openPackageModal(Number(btn.dataset.detail))));
    qa("[data-book]", grid).forEach(btn => btn.addEventListener("click", () => openBookingModal(Number(btn.dataset.book))));
  }

  function renderTestimonials(grid) {
    if (!grid) return;
    grid.innerHTML = testimonials.map(t => `
      <article class="card">
        <div class="card-body">
          <div class="meta" style="margin-top:0">
            ${"⭐".repeat(t.stars)}
          </div>
          <p class="card-text" style="font-size:15px">${t.text}</p>
          <div class="meta" style="margin-bottom:0">
            <span class="pill">${t.init}</span>
            <span class="pill">${t.name}</span>
            <span class="pill">${t.trip}</span>
          </div>
        </div>
      </article>
    `).join("");
  }

  function renderFaqs(grid) {
    if (!grid) return;
    grid.innerHTML = faqs.map((f, i) => `
      <div class="acc-item">
        <button class="acc-q" type="button" data-acc="${i}">
          <span>${f[0]}</span>
          <span class="acc-toggle">+</span>
        </button>
        <div class="acc-a"><p class="muted">${f[1]}</p></div>
      </div>
    `).join("");
    qa("[data-acc]", grid).forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".acc-item");
        item.classList.toggle("open");
      });
    });
  }

  function renderHomeDestinations(grid) {
    if (!grid) return;
    const picks = packages.slice(0, 4);
    grid.innerHTML = picks.map(p => `
      <article class="card" data-book="${p.id}" style="cursor:pointer">
        <div class="card-media small ${p.color}">
          <span>${p.emoji}</span>
        </div>
        <div class="card-body">
          <div class="card-kicker">${p.dest}</div>
          <h3 class="card-title" style="font-size:22px">${p.name}</h3>
          <p class="card-text">${p.duration} · ${p.badge || "Handpicked"}</p>
        </div>
      </article>
    `).join("");
    qa("[data-book]", grid).forEach(btn => btn.addEventListener("click", () => openBookingModal(Number(btn.dataset.book))));
  }

  function getPackage(id) {
    return packages.find(p => p.id === id) || packages[0];
  }

  function openModal(id) {
    const modal = q(id);
    if (!modal) return;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal(id) {
    const modal = q(id);
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function fillPackageDetail(p) {
    const title = q("#packageModalTitle");
    const body = q("#packageModalBody");
    if (!title || !body) return;
    title.textContent = p.name;
    body.innerHTML = `
      <div class="split">
        <div>
          <div class="detail-media ${p.color}">
            <span>${p.emoji}</span>
          </div>
          <div class="detail-meta">
            <span class="pill">📍 ${p.dest}</span>
            <span class="pill">📅 ${p.duration}</span>
            <span class="pill">🏨 ${p.stay}</span>
          </div>
          <p class="card-text">${p.highlights.join(" • ")}</p>
          <div class="mt-16">
            <strong>Included</strong>
            <ul class="list">
              ${p.included.map(i => `<li>${i}</li>`).join("")}
            </ul>
          </div>
          <div class="mt-16">
            <strong>Excluded</strong>
            <ul class="list">
              ${p.excluded.map(i => `<li>${i}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div>
          <div class="note">Package info is editable. Change prices, inclusions, and itinerary before publishing.</div>
          <div class="mt-16">
            <strong>Itinerary</strong>
            <div class="copy-list">
              ${p.itinerary.map((day, idx) => `
                <div class="copy-item">
                  <div class="ico">${idx + 1}</div>
                  <div><strong>Day ${idx + 1}</strong><span>${day}</span></div>
                </div>
              `).join("")}
            </div>
          </div>
          <div class="inline-actions mt-24">
            <button class="btn btn-primary" type="button" id="detailBookBtn">Book This Package</button>
            <a class="btn btn-outline" style="border-color:#d1d5db;color:#111" href="${waLink(`Hello Sanket Travels, I want details for ${p.name}.`)}" target="_blank" rel="noopener">WhatsApp Enquiry</a>
          </div>
        </div>
      </div>
    `;
    q("#detailBookBtn")?.addEventListener("click", () => {
      closeModal("#packageModal");
      openBookingModal(p.id);
    });
  }

  function openPackageModal(id) {
    const p = getPackage(id);
    fillPackageDetail(p);
    openModal("#packageModal");
  }

  function renderBooking() {
    const p = getPackage(activePackageId);
    const step1 = q("#bookingStep1");
    const step2 = q("#bookingStep2");
    const step3 = q("#bookingStep3");
    const content = q("#bookingContent");
    const summary = q("#bookingSummary");
    if (!step1 || !step2 || !step3 || !content || !summary) return;

    [step1, step2, step3].forEach(el => el.classList.remove("active", "done"));
    if (activeStep === 1) step1.classList.add("active");
    if (activeStep === 2) { step1.classList.add("done"); step2.classList.add("active"); }
    if (activeStep === 3) { step1.classList.add("done"); step2.classList.add("done"); step3.classList.add("active"); }

    summary.innerHTML = `
      <h3>${p.name}</h3>
      <p class="muted" style="color:rgba(255,255,255,.68);margin:0 0 12px">${p.dest} · ${p.duration}</p>
      <div class="line"><span>Base price</span><span>₹${p.price.toLocaleString("en-IN")}</span></div>
      <div class="line"><span>Payment mode</span><span>${activePay}</span></div>
      <div class="line"><span>Travelers</span><span id="sumTravelers">—</span></div>
      <div class="line total"><span>Estimated total</span><span id="sumTotal">₹${p.price.toLocaleString("en-IN")}</span></div>
      <p class="muted" style="color:rgba(255,255,255,.62);line-height:1.6;margin-top:14px">This is a front-end booking flow. On final confirm, it opens WhatsApp with the booking summary so you can close the booking manually or connect a gateway later.</p>
    `;

    if (activeStep === 1) {
      content.innerHTML = `
        <div class="filterbar">
          ${packages.map(pkg => `<button type="button" class="filter ${pkg.id===activePackageId ? "active" : ""}" data-pick="${pkg.id}">${pkg.name.split(" – ")[0]}</button>`).join("")}
        </div>
        <div class="grid grid-2">
          ${packages.map(pkg => `
            <article class="card" style="cursor:pointer;border:2px solid ${pkg.id===activePackageId ? 'var(--gold)' : '#eef1f5'}" data-pick="${pkg.id}">
              <div class="card-media small ${pkg.color}"><span>${pkg.emoji}</span></div>
              <div class="card-body">
                <h3 class="card-title" style="font-size:22px">${pkg.name}</h3>
                <p class="card-text">${pkg.dest} · ${pkg.duration}</p>
                <div class="meta"><span class="pill">₹${pkg.price.toLocaleString("en-IN")}</span><span class="pill">${pkg.badge || "Popular"}</span></div>
              </div>
            </article>
          `).join("")}
        </div>
        <div class="inline-actions mt-24">
          <button class="btn btn-dark" type="button" id="bookingNext1">Continue</button>
          <button class="btn btn-soft" type="button" data-close="bookingModal">Cancel</button>
        </div>
      `;
      qa("[data-pick]", content).forEach(el => el.addEventListener("click", () => {
        activePackageId = Number(el.dataset.pick);
        renderBooking();
      }));
      q("#bookingNext1")?.addEventListener("click", () => {
        activeStep = 2;
        renderBooking();
      });
      return;
    }

    if (activeStep === 2) {
      content.innerHTML = `
        <div class="form-grid">
          <div class="field"><label>Full Name *</label><input id="bookName" placeholder="Your full name" required></div>
          <div class="field"><label>Phone Number *</label><input id="bookPhone" placeholder="+91 78880 19291" required></div>
          <div class="field"><label>Email *</label><input id="bookEmail" type="email" placeholder="you@email.com" required></div>
          <div class="field"><label>Departure City</label><input id="bookCity" placeholder="Your city"></div>
          <div class="field"><label>Travel Date *</label><input id="bookDate" type="date" required></div>
          <div class="field"><label>Travelers *</label><input id="bookTravelers" type="number" min="1" value="2" required></div>
        </div>
        <div class="field">
          <label>Special Requests</label>
          <textarea id="bookMsg" placeholder="Tell us about your dream trip..."></textarea>
        </div>
        <div class="inline-actions">
          <button class="btn btn-dark" type="button" id="bookingNext2">Continue</button>
          <button class="btn btn-soft" type="button" id="bookingPrev1">Back</button>
        </div>
      `;
      q("#bookingPrev1")?.addEventListener("click", () => {
        activeStep = 1;
        renderBooking();
      });
      q("#bookingNext2")?.addEventListener("click", () => {
        const required = ["bookName", "bookPhone", "bookEmail", "bookDate", "bookTravelers"];
        const values = Object.fromEntries(required.map(id => [id, q(`#${id}`)?.value?.trim() || ""]));
        if (!values.bookName || !values.bookPhone || !values.bookEmail || !values.bookDate || !values.bookTravelers) {
          toast("error", "Missing details", "Please fill all required fields.");
          return;
        }
        activeStep = 3;
        renderBooking();
      });
      return;
    }

    content.innerHTML = `
      <div class="field">
        <label>Choose payment mode</label>
        <div class="pay-options">
          <div class="pay-option ${activePay.includes("Advance") ? "active" : ""}" data-pay="Advance Payment (25%)">
            <strong>Advance Payment</strong>
            <span>Pay 25% now to hold your booking.</span>
          </div>
          <div class="pay-option ${activePay.includes("Full") ? "active" : ""}" data-pay="Full Payment (100%)">
            <strong>Full Payment</strong>
            <span>Pay full amount to confirm completely.</span>
          </div>
        </div>
      </div>
      <div class="note">For real card/UPI payments, connect Razorpay or Stripe later. This version is safe to publish and opens WhatsApp with the booking summary.</div>
      <div class="inline-actions mt-24">
        <button class="btn btn-primary" type="button" id="bookingSubmit">Confirm on WhatsApp</button>
        <button class="btn btn-soft" type="button" id="bookingPrev2">Back</button>
      </div>
    `;

    qa("[data-pay]", content).forEach(el => el.addEventListener("click", () => {
      activePay = el.dataset.pay;
      renderBooking();
    }));
    q("#bookingPrev2")?.addEventListener("click", () => {
      activeStep = 2;
      renderBooking();
    });

    q("#bookingSubmit")?.addEventListener("click", () => {
      const p = getPackage(activePackageId);
      const name = q("#bookName")?.value?.trim() || "";
      const phone = q("#bookPhone")?.value?.trim() || "";
      const email = q("#bookEmail")?.value?.trim() || "";
      const city = q("#bookCity")?.value?.trim() || "";
      const date = q("#bookDate")?.value?.trim() || "";
      const travelers = q("#bookTravelers")?.value?.trim() || "";
      const msg = q("#bookMsg")?.value?.trim() || "No additional request.";

      if (!name || !phone || !email || !date || !travelers) {
        toast("error", "Missing details", "Please fill all required fields before confirming.");
        return;
      }

      const text = [
        `Hello Sanket Travels, I want to book: ${p.name}`,
        `Destination: ${p.dest}`,
        `Package: ${p.duration}`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        city ? `City: ${city}` : null,
        `Travel Date: ${date}`,
        `Travelers: ${travelers}`,
        `Payment Mode: ${activePay}`,
        `Message: ${msg}`
      ].filter(Boolean).join("\n");

      window.open(waLink(text), "_blank", "noopener");
      toast("success", "WhatsApp opened", "Your booking summary has been prepared.");
      closeModal("#bookingModal");
    });
  }

  function openBookingModal(id) {
    activePackageId = id;
    activeStep = 1;
    activePay = "Advance Payment (25%)";
    openModal("#bookingModal");
    renderBooking();
  }

  function bindModalClose() {
    qa("[data-close]").forEach(btn => btn.addEventListener("click", () => closeModal(`#${btn.dataset.close}`)));
    qa("[data-close-modal]").forEach(btn => btn.addEventListener("click", () => closeModal(btn.dataset.closeModal)));
    qa(".modal").forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("open");
      });
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        qa(".modal.open").forEach(m => m.classList.remove("open"));
        document.body.style.overflow = "";
      }
    });
  }

  function setupPackageFilters() {
    const buttons = qa("[data-filter]");
    const grid = q("#packagesGrid");
    if (!buttons.length || !grid) return;
    buttons.forEach(btn => btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      const filtered = activeFilter === "all" ? packages : packages.filter(p => p.type === activeFilter || p.tags.includes(activeFilter));
      renderPackages(grid, filtered);
    }));
  }

  function setupSearch() {
    const input = q("#packageSearch");
    const grid = q("#packagesGrid");
    if (!input || !grid) return;
    input.addEventListener("input", () => {
      const term = input.value.trim().toLowerCase();
      const active = q("[data-filter].active")?.dataset.filter || "all";
      let items = active === "all" ? packages : packages.filter(p => p.type === active || p.tags.includes(active));
      if (term) items = items.filter(p => (p.name + " " + p.dest + " " + p.highlights.join(" ")).toLowerCase().includes(term));
      renderPackages(grid, items);
    });
  }

  function setupForms() {
    const enquiry = q("#enquiryForm");
    if (enquiry) {
      enquiry.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = q("#enqName")?.value.trim();
        const phone = q("#enqPhone")?.value.trim();
        const dest = q("#enqDest")?.value || "Not decided yet";
        const month = q("#enqMonth")?.value || "Not specified";
        const travelers = q("#enqTravelers")?.value || "Not specified";
        const msg = q("#enqMsg")?.value.trim() || "No message.";
        if (!name || !phone) {
          toast("error", "Missing details", "Name and phone number are required.");
          return;
        }
        const text = `Hello Sanket Travels, I need an enquiry.\nName: ${name}\nPhone: ${phone}\nDestination: ${dest}\nMonth: ${month}\nTravelers: ${travelers}\nMessage: ${msg}`;
        window.open(waLink(text), "_blank", "noopener");
        enquiry.reset();
        toast("success", "Enquiry sent", "WhatsApp enquiry prepared successfully.");
      });
    }
    const contact = q("#contactForm");
    if (contact) {
      contact.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = q("#contactName")?.value.trim();
        const phone = q("#contactPhone")?.value.trim();
        const msg = q("#contactMessage")?.value.trim();
        if (!name || !phone || !msg) {
          toast("error", "Missing details", "Please fill name, phone and message.");
          return;
        }
        const text = `Hello Sanket Travels, I am contacting you.\nName: ${name}\nPhone: ${phone}\nMessage: ${msg}`;
        window.open(waLink(text), "_blank", "noopener");
        contact.reset();
        toast("success", "Contact opened", "Your message is ready on WhatsApp.");
      });
    }
  }

  function setupBookButtons() {
    qa("[data-booking-open]").forEach(btn => {
      btn.addEventListener("click", () => openBookingModal(Number(btn.dataset.bookingOpen)));
    });
  }

  function initPages() {
    const homeGrid = q("#featuredPackagesGrid");
    const packagesGrid = q("#packagesGrid");
    const testimonialsGrid = q("#testimonialsGrid");
    const faqGrid = q("#faqGrid");
    const destGrid = q("#destinationsGrid");
    const galleryGrid = q("#galleryGrid");
    renderPackages(packagesGrid, packagesGrid ? packages : packages.slice(0, 4));
    renderHomeDestinations(homeGrid);
    renderTestimonials(testimonialsGrid);
    renderFaqs(faqGrid);
    if (destGrid) {
      destGrid.innerHTML = packages.slice(0, 6).map(p => `
        <article class="card" data-book="${p.id}" style="cursor:pointer">
          <div class="card-media ${p.color}">
            <span>${p.emoji}</span>
          </div>
          <div class="card-body">
            <div class="card-kicker">${p.dest}</div>
            <h3 class="card-title" style="font-size:22px">${p.name}</h3>
            <p class="card-text">${p.duration} · ${p.stay}</p>
          </div>
        </article>
      `).join("");
      qa("[data-book]", destGrid).forEach(btn => btn.addEventListener("click", () => openBookingModal(Number(btn.dataset.book))));
    }
    if (galleryGrid) {
      const galleryItems = [
        [1, "Bali Family Tour", "6N/7D · December 2024", "art-bali", "🌴🏝️"],
        [2, "Dubai Couple Trip", "5N/6D · Anniversary special", "art-dubai", "🏙️✨"],
        [3, "Kerala Backwaters", "4N/5D · Houseboat stay", "art-kerala", "🌿🚣"],
        [4, "Royal Rajasthan", "7N/8D · Heritage trip", "art-rajasthan", "🏰🐪"],
        [5, "Goa Beach Holiday", "3N/4D · Friends getaway", "art-goa", "🏖️🍹"],
        [6, "Golden Triangle", "5N/6D · Family tour", "art-delhi", "🕌🏛️"]
      ];
      galleryGrid.innerHTML = galleryItems.map(x => `
        <article class="gallery-card">
          <div class="gallery-media ${x[3]}"><span>${x[4]}</span></div>
          <div class="gallery-caption">
            <strong>${x[1]}</strong>
            <span>${x[2]}</span>
          </div>
        </article>
      `).join("");
    }
  }

  function setupWhatsApp() {
    const float = q("#whatsappFloat");
    if (float) float.href = waLink("Hello Sanket Travels, I would like to inquire about your packages.");
    const enquiryBtn = q("#enquiryWhatsApp");
    if (enquiryBtn) enquiryBtn.href = waLink("Hello Sanket Travels, I would like to inquire about a travel package.");
  }

  function setupCTAs() {
    qa("[data-open-booking]").forEach(btn => btn.addEventListener("click", () => openBookingModal(Number(btn.dataset.openBooking))));
  }

  setupNav();
  setupSmoothScroll();
  setupPackageFilters();
  setupSearch();
  setupForms();
  setupWhatsApp();
  setupCTAs();
  bindModalClose();
  initPages();

  // Expose if needed
  window.SanketTravels = { openBookingModal, openPackageModal };
})();
