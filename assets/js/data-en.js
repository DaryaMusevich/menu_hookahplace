/* English version of the menu.
   Same structure and order as data.js — RU and EN stay in sync. */
window.MENU_EN = {
  venue: {
    name: "HookahPlace",
    sub: "Original",
    tagline: "Harmony above all",
    city: "Noyabrsk",
    quote: "“Harmony above all” — a Japanese proverb.",
    intro: "We share this principle and try to make every guest feel calm and comfortable. Please treat a few house rules with respect — they help keep the harmony at HookahPlace.",
    hours: ["Sun–Thu 12:00 — 01:00", "Fri–Sat 12:00 — 03:00"],
    phones: [
      { label: "+7 961 559-04-97", href: "tel:+79615590497" },
      { label: "+7 349 633-48-88", href: "tel:+73496334888" }
    ],
    address: "31a Sovetskaya St., Noyabrsk",
    mapUrl: "https://yandex.ru/maps/?text=" + encodeURIComponent("Ноябрьск, Советская 31а"),
    instagram: "https://www.instagram.com/hookahplace.nsk?exln=MWV5M2VqMzFubWphcg==",
    site: "hookahplace.ru"
  },

  ui: {
    menu: "Menu",
    menuSub: "Tea · hookah · lemonades",
    quote: "“Harmony above all”",
    quoteBy: "— a Japanese proverb",
    share: "Share",
    composition: "Ingredients",
    rules: "House rules",
    rulesLead: "Please treat a few house rules with respect — they help keep the harmony at HookahPlace.",
    rulesHookah: "Hookah",
    rulesHouse: "In the venue",
    hookahLabel: "Hookah list",
    guestsCaption: "How many hookahs a group needs",
    hookahNote: "Each hookah is smoked for no more than 90 minutes after serving.",
    qrNote: "Point your camera —<br>the menu stays with you",
    footNote: "Prices in rubles. Ask your waiter about ingredients and availability. 18+",
    call: "Call",
    instagram: "Instagram",
    map: "Map",
    langLabel: "Menu language"
  },

  tips: {
    label: "Service",
    title: "Tips",
    text: "Thank you for appreciating our team's work. Tips go directly to our tea and hookah masters.",
    cta: "Leave a tip",
    url: "https://netmonet.co/tip/group/680420?o=4"
  },

  categories: [
    {
      id: "authors",
      num: "01",
      title: "Signature teas",
      short: "Signature",
      lead: "Seven drinks people come back for. Each one is brewed at 800 ml — enough for two.",
      kind: "items",
      accent: "tea",
      items: [
        {
          name: "Mulled wine", price: 800, vol: "800 ml",
          desc: "A bouquet of spices wrapped in alcohol-free wine. A layered taste where fruit and caramel sound like a quiet accent, never drowning each other out.",
          comp: "Cherry juice, alcohol-free red wine from Tempranillo grapes, 100% natural orange juice, green apple, cinnamon, anise, clove, cardamom.",
          tags: ["alcohol-free", "warming"]
        },
        {
          name: "Pomegranate & raspberry", price: 750, vol: "800 ml",
          desc: "A drink about the harmony of opposites: the coolness of raspberry and the warm depth of pomegranate. A soft tea note finishes the composition and leaves a calm aftertaste.",
          comp: "Pomegranate-raspberry base, garden frozen cranberries, lemon, fresh mint.",
          tags: ["alcohol-free"]
        },
        {
          name: "Lavender & kiwi", price: 750, vol: "800 ml",
          desc: "Herbs bring calm, kiwi brings a spark of flavour. Like a cool wind sliding over fields of blooming lavender.",
          comp: "Water, green apple, apple juice, green apple syrup, kiwi, Apple & Lavender tea, fresh mint.",
          tags: ["alcohol-free"]
        },
        {
          name: "Cherry pu-erh", price: 750, vol: "800 ml",
          variants: [{ vol: "800 ml", price: 750 }, { vol: "1.2 L", price: 1050 }],
          desc: "Chinese black pu-erh with woody notes and cherry freshness. The deep flavour unfolds slowly, like sunrise.",
          comp: "Cherry juice, water, strawberries, cranberries, pu-erh tea.",
          tags: ["alcohol-free"]
        },
        {
          name: "Apple pu-erh", price: 750, vol: "800 ml",
          variants: [{ vol: "800 ml", price: 750 }, { vol: "1.2 L", price: 1050 }],
          desc: "The deep aroma of pu-erh with fresh green notes of apple, mint and lime. A sip leaves the coolness of a morning garden.",
          comp: "Apple juice, water, green apple, lime, pu-erh tea, fresh mint.",
          tags: ["alcohol-free"]
        },
        {
          name: "Masala chai", price: 750, vol: "800 ml",
          desc: "The warm breath of black tea, warmed by milk and spices. Cardamom, clove and anise whisper of eastern bazaars where time runs slow. Dense, velvety, warming from within.",
          comp: "Cream 10%, milk 3.2%, coconut syrup, caramel syrup, Kenyan tea, cinnamon, anise, clove, cardamom, nutmeg.",
          tags: ["warming"]
        },
        {
          name: "Sea buckthorn", price: 750, vol: "800 ml",
          variants: [{ vol: "800 ml", price: 750 }, { vol: "1.2 L", price: 1050 }],
          desc: "The sunny amber of sea buckthorn and the sweetness of honey. A drink about a quiet winter, when sunlight settles softly on the snow.",
          comp: "Water, orange juice, sea buckthorn berries, honey, black tea.",
          tags: ["warming"]
        }
      ]
    },

    {
      id: "tea",
      num: "02",
      title: "Tea",
      short: "Tea",
      lead: "Five tea lists. Every tea is brewed at 800 ml — for a company or for a long evening.",
      kind: "groups",
      accent: "tea",
      groups: [
        { name: "Classics", price: 450, vol: "800 ml", notes: ["Black tea with thyme", "Earl Grey", "Kenya Pekoe"] },
        { name: "Pu-erh", price: 550, vol: "800 ml", notes: ["Palace", "Green Medal"] },
        { name: "Chinese", price: 550, vol: "800 ml", notes: ["Da Hong Pao", "Hua Long Zhu"] },
        { name: "Oolongs", price: 550, vol: "800 ml", notes: ["Grape", "GABA Alishan", "Melon", "Blood orange", "Milky", "Raspberry & herbs", "Tie Guan Yin Wang"] },
        { name: "Aromatic", price: 500, vol: "800 ml", notes: ["Cherry jam & cinnamon", "Cherry punch", "Count Orlov", "Catherine the Great", "Imperial", "Royal mango", "Optimist", "Peach paradise", "Soursop", "Sencha", "Taiga blend (black/green)", "Blackcurrant black", "Apple & lavender", "1001 Nights"] }
      ]
    },

    {
      id: "cocktails",
      num: "03",
      title: "Cocktails",
      short: "Cocktails",
      lead: "Alcohol-free mixes built on the principle of “quiet but precise”.",
      kind: "items",
      accent: "bar",
      items: [
        {
          name: "Mojito", price: 350, vol: "250 ml",
          desc: "A soft lime tartness, the coolness of mint — a drink that sounds quiet, like a morning breeze.",
          comp: "Sprite, “Rum” syrup, “Mojito” syrup, lime, fresh mint, ice.",
          tags: ["alcohol-free"]
        },
        {
          name: "Hooka Mix", price: 350, vol: "250 ml",
          desc: "Berry freshness with a soft tartness. A memory of a walk in a Japanese garden after rain.",
          comp: "Pomegranate juice, cherry juice, apple juice, lemon juice, ice.",
          tags: ["alcohol-free"]
        },
        {
          name: "Aperol Spritz", price: 390, vol: "250 ml",
          desc: "Citrus brightness and a light bitterness, alcohol-free. The taste of a celebration expressed in silence.",
          comp: "Tonic, alcohol-free sparkling wine, alcohol-free aperol, sugar syrup, ice.",
          tags: ["alcohol-free"]
        },
        {
          name: "Raspberry gin", price: 390, vol: "200 ml",
          desc: "Juniper freshness and the velvety taste of raspberry — like a memory of a walk in the forest.",
          comp: "Alcohol-free gin, ice, raspberry purée, raspberry syrup, lemon juice.",
          tags: ["alcohol-free"]
        },
        {
          name: "Tropics", price: 490, vol: "200 ml",
          desc: "Like a step onto a sunny island where the ocean gently embraces the shore.",
          comp: "Alcohol-free gin, alcohol-free sparkling wine, passion fruit purée, lime juice, vanilla syrup, ice.",
          tags: ["alcohol-free"]
        },
        {
          name: "Hugo", price: 590, vol: "300 ml",
          desc: "Refreshing and light, with a barely perceptible sparkle.",
          comp: "Alcohol-free sparkling wine, ice, elderflower syrup, lemon juice, fresh mint.",
          tags: ["alcohol-free"]
        }
      ]
    },

    {
      id: "milkshakes",
      num: "04",
      title: "Shakes & smoothies",
      short: "Shakes",
      lead: "One size — 400 ml. Thick, cold, homemade.",
      kind: "items",
      accent: "bar",
      items: [
        { name: "Berry smoothie", price: 350, vol: "400 ml", comp: "Peach juice, strawberry, cranberry.", tags: ["alcohol-free"] },
        { name: "Bubble gum smoothie", price: 390, vol: "400 ml", comp: "Peach juice, banana, strawberry.", tags: ["alcohol-free"] },
        { name: "Chupa-Chups milkshake", price: 390, vol: "400 ml", comp: "Milk, ice cream, banana, strawberry, whipped cream.", tags: ["alcohol-free"] },
        { name: "Kiwi & peach smoothie", price: 390, vol: "400 ml", comp: "Peach juice, kiwi.", tags: ["alcohol-free"] },
        { name: "Oreo & strawberry milkshake", price: 390, vol: "400 ml", comp: "Milk, ice cream, Oreo cookies, strawberry, whipped cream.", tags: ["alcohol-free"] }
      ]
    },

    {
      id: "lemonades",
      num: "05",
      title: "Lemonades",
      short: "Lemonades",
      lead: "Seven signature flavours. Two sizes: one for yourself, one for the table.",
      kind: "lemonades",
      accent: "bar",
      prices: [{ vol: "250 ml", price: 350 }, { vol: "1 L", price: 950 }],
      items: [
        { name: "Grape — pomegranate", tags: ["alcohol-free"] },
        { name: "Blackberry — pomegranate", tags: ["alcohol-free"] },
        { name: "Cactus — rennet apple", tags: ["alcohol-free"] },
        { name: "Hibiscus — cherry", tags: ["alcohol-free"] },
        { name: "Pineapple — lemongrass", tags: ["alcohol-free"] },
        { name: "Grapefruit — calamus", tags: ["alcohol-free"] },
        { name: "GABA — smoked pear", tags: ["alcohol-free"] }
      ]
    },

    {
      id: "hookah",
      num: "06",
      title: "Hookah",
      short: "Hookah",
      lead: "Hookah on a classic bowl. Tell the master about your preferences — if you can't decide or want to try something new, we'll help you choose.",
      kind: "hookah",
      accent: "night",
      items: [
        { name: "Classic", price: 1900, desc: "Balanced flavour, classic bowl, light draw." },
        { name: "Stronger", price: 2100, desc: "Troffimof’s / Bonche — for those who like it fuller.", tags: ["strong"] },
        { name: "Pomegranate / grapefruit", price: 2200, desc: "Two favourite flavours in one mix — fresh and citrusy.", tags: ["fruity"] }
      ],
      guests: [
        { range: "1–3 guests", count: 1 },
        { range: "4–5 guests", count: 2 },
        { range: "6–7 guests", count: 3 },
        { range: "8–9 guests", count: 4 }
      ]
    },

    {
      id: "snacks",
      num: "07",
      title: "Snacks",
      short: "Snacks",
      lead: "Nuts and dried fruit — the thing that keeps a conversation going.",
      kind: "items",
      accent: "tea",
      items: [
        { name: "Nut assortment", price: 320, vol: "220 g", comp: "Candied fruit, hazelnuts, cashews, roasted peanuts.", tags: ["vegan"] },
        { name: "Beer snacks", price: 300, vol: "165 g", comp: "Salted peanuts, roasted peanuts, pistachios.", tags: ["vegan"] },
        { name: "Cashews", price: 250, vol: "100 g", tags: ["vegan"] },
        { name: "Pistachios", price: 320, vol: "100 g", tags: ["vegan"] },
        { name: "Hazelnuts", price: 250, vol: "100 g", tags: ["vegan"] },
        { name: "Roasted peanuts", price: 120, vol: "100 g", tags: ["vegan"] },
        { name: "Salted peanuts", price: 120, vol: "100 g", tags: ["vegan"] },
        { name: "Candied fruit", price: 120, vol: "100 g", tags: ["vegan"] }
      ]
    }
  ],

  hookahRules: [
    "The number of hookahs and their cost apply to all guests, regardless of who smokes.",
    "Hookahs can be ordered at the same time or with a 15-minute interval, depending on the number of guests.",
    "Each hookah is smoked for no more than 90 minutes from the moment it is served: that is exactly how long the flavour stays rich. After 90 minutes the manager will offer to refresh the hookah or settle the bill.",
    "If you would like to move the hookah, ask the master — they will help you find a comfortable spot."
  ],

  houseRules: [
    "We welcome guests aged 18 and over. If necessary, the manager may ask for an ID confirming your age.",
    "We reserve the right to refuse service to guests under the influence of alcohol or prohibited substances.",
    "Please do not bring your own drinks — this is how we keep the space cosy and clean. Everything you need is on the menu. Food and snacks are welcome or can be delivered.",
    "Please refrain from smoking cigarettes indoors. IQOS and similar devices are allowed if they do not disturb other guests.",
    "If a hookah has been ordered but you decide to leave, its full cost remains. This is how we maintain quality and respect for the masters' work.",
    "Please do not move the furniture. The layout is designed for the comfort and harmony of the space.",
    "We reserve the right to refuse service without explanation. This measure is rare, but guest comfort is always our priority.",
    "In case of damage to property, the venue may request compensation according to the current price list.",
    "The premises are under video surveillance — for the safety and peace of mind of all guests."
  ]
};
