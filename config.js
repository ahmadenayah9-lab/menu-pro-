/* ================================================================
   MENU PRO V4 — إعدادات المطعم
   عدّل هذه القيم فقط، ثم ارفع الملف بجانب index.html
================================================================ */
window.MENU_CONFIG = {
  /* ---------- بيانات أساسية ---------- */
  restaurantName: "جمر وذهب",
  subtitle: "MENU PRO • Digital Restaurant",
  tagline: "نار هادئة… وطعم يعلق بالذاكرة",
  heroText: "منيو رقمي فاخر. اختر طلبك، ابنِ سلتك، وأرسله للمطعم مباشرة عبر واتساب بدون مكالمات.",
  address: "شارع الجامعة - عمّان",
  phone: "079 000 0000",
  whatsapp: "962790000000",
  instagram: "",              // مثال: "https://instagram.com/xxx"
  mapsUrl: "",                // رابط موقعك على خرائط جوجل
  currency: "JOD",

  /* ---------- أوقات العمل (24h) ---------- */
  openHour: 11,    // 11 ص
  closeHour: 1,    // 1 بعد منتصف الليل
  hoursText: "يومياً 11:00 ص — 1:00 ص",

  /* ---------- التوصيل ---------- */
  deliveryFee: 1.50,
  freeDeliveryOver: 15,       // توصيل مجاني فوق هذا المبلغ (0 = تعطيل)
  minOrder: 0,

  /* ---------- كوبونات خصم ---------- */
  coupons: { "GOLD10": 10, "JAMR15": 15 },

  /* ---------- إظهار / إخفاء الأقسام ---------- */
  show: {
    stats: false,        // شريط 4.9 / +500 طلب  ← مشلول
    whyUs: false,        // كروت لماذا نحن       ← مشلول
    steps: false,        // 1 اختر 2 أضف 3 أرسل  ← مشلول
    tableNumber: false,  // رقم الطاولة          ← مشلول
    offerBanner: true,   // بانر عرض اليوم
    ticker: true,        // الشريط المتحرك
    qr: true             // زر QR
  },

  /* ---------- عرض اليوم ---------- */
  offer: {
    title: "وجبة التوفير الذهبية",
    desc: "برجر كلاسيك + بطاطا مقرمشة + مشروب",
    oldPrice: 9.50,
    price: 7.50,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80"
  },

  /* ---------- الأقسام ---------- */
  categories: [
    { id: "all",     name: "الكل",       icon: "✦" },
    { id: "grill",   name: "المشاوي",    icon: "🔥" },
    { id: "burger",  name: "برجر",       icon: "🍔" },
    { id: "side",    name: "مقبلات",     icon: "🍟" },
    { id: "drink",   name: "مشروبات",    icon: "🥤" },
    { id: "dessert", name: "حلويات",     icon: "🍰" }
  ],

  /* ---------- الأصناف ----------
     badge: "الأكثر طلباً" | "جديد" | "" 
     spicy: true/false
     sizes / extras اختيارية
  ------------------------------- */
  items: [
    { id:1, cat:"grill", name:"مشاوي مشكل ذهبي", desc:"شيش طاووق، كباب، ريش غنم مع خبز صاج ومخللات", price:12.90, img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", badge:"الأكثر طلباً",
      sizes:[{n:"عادي",p:0},{n:"عائلي",p:8}], extras:[{n:"صلصة ثوم",p:0.5},{n:"خبز إضافي",p:0.5}] },

    { id:2, cat:"grill", name:"شيش طاووق فحم", desc:"صدور دجاج متبلة على الفحم مع أرز أو بطاطا", price:7.50, img:"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80", badge:"",
      extras:[{n:"إضافة أرز",p:1},{n:"صلصة حارة",p:0.5}] },

    { id:3, cat:"burger", name:"سمش برجر مضاعف", desc:"قطعتان لحم بقري، جبنة شيدر، صوص المطعم الخاص", price:6.90, img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80", badge:"الأكثر طلباً",
      extras:[{n:"جبنة إضافية",p:0.7},{n:"بيكون",p:1},{n:"حلقات بصل",p:0.8}] },

    { id:4, cat:"burger", name:"برجر دجاج كرسبي", desc:"دجاج مقرمش، خس، مايونيز حار، خبز بريوش", price:5.50, img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80", badge:"جديد", spicy:true },

    { id:5, cat:"side", name:"بطاطا ذهبية بالجبنة", desc:"بطاطا مقرمشة مع صوص الجبنة الحار", price:2.50, img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80", spicy:true },

    { id:6, cat:"side", name:"أجنحة بافلو", desc:"8 قطع أجنحة بصوص البافلو الأصلي", price:4.90, img:"https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&q=80", badge:"جديد", spicy:true },

    { id:7, cat:"drink", name:"ليموناضة بالنعناع", desc:"طازجة ومنعشة، تحضّر عند الطلب", price:1.90, img:"https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800&q=80" },

    { id:8, cat:"drink", name:"مشروبات غازية", desc:"كولا / سفن / فانتا — علبة 330 مل", price:0.75, img:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80" },

    { id:9, cat:"dessert", name:"كنافة ذهبية", desc:"كنافة نابلسية بالجبنة والقطر مع الفستق", price:3.50, img:"https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80", badge:"الأكثر طلباً" },

    { id:10, cat:"dessert", name:"براوني بالشوكولاتة", desc:"براوني ساخن مع آيس كريم فانيلا", price:3.90, img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80" }
  ]
};
