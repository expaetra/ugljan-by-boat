// ALL business facts live here. Owner changes a price? Change it HERE only.
export const site = {
  name: "Ugljan by Boat",
  phone: "+385955339809", 
  whatsapp: "385955339809",
  viber: "+385955339809",
  instagram: "https://instagram.com/_ugljan_by_boat_",
  facebook: "https://www.facebook.com/profile.php?id=61564517060868",
taxi: {
    pricePerNm: 20,
    waitingPerHour: 20,
    area: "Islands and villages across the Zadar archipelago - Ugljan, Pašman, Iž, Dugi otok, Rava - plus Zadar's beaches, the old town, and marinas along the coast.",
    discountNote: "Longer distances? Ask about our discount for more miles.",  
  },

  email: "contact@ugljanbyboat.com",

  rent: {
    seasons: { high: "High season", low: "Low season" },
    seasonNote: "High season: 15 July - 15 September",
    packages: [
      { name: "Boat rental - full day", high: 280, low: 230, note: "Self-drive · skipper optional (+€120)" },
      { name: "Boat rental - half day", high: 200, low: 170, note: "Self-drive · skipper optional (+€70)" },
      { name: "Excursion", high: 280, low: 230, note: "Guided full-day package · skipper included" },
      { name: "Sunset tour", high: 200, low: 200, note: "Fixed evening slot · skipper included" },
      { name: "Sunset tour premium", high: 260, low: 260, note: "The full experience · skipper included", premium: true },
    ],
    addons: [
      { name: "Skipper - full day", price: 120 },
      { name: "Skipper - half day", price: 70 },
      { name: "Waiting", price: 20, unit: "/hr" },
    ],
  },

  impressum: {
    company: "CaptainsClub, vl. Ante Ivas",
    oib: "36291474491",
    address: "Ugljan, Croatia",
  },
}