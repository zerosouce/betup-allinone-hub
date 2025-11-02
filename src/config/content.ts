// กำหนดค่าเนื้อหาทั้งหมดของเว็บไซต์ - แก้ไขได้ง่ายโดยไม่ต้องแตะโค้ด

export const SITE_CONFIG = {
  siteName: "BETUP168",
  domain: "betup168.com",
  lineId: "@betup168",
  telegram: "@BETUP168",
  
  contact: {
    line: "@betup168",
    telegram: "@betup168",
    phone: "0XX-XXX-XXXX"
  }
};

export const HERO_CONTENT = {
  badge: "เว็บตรง 100% ไม่ผ่านเอเย่นต์",
  title: "BETUP168",
  subtitle: "คาสิโนออนไลน์ อันดับ 1",
  description: "ระบบฝากถอนออโต้ รวดเร็วภายใน 30 วินาที บริการตลอด 24 ชั่วโมง",
  
  buttons: {
    register: "สมัครสมาชิก",
    demo: "ทดลองเล่น"
  },
  
  features: [
    { icon: "Zap", text: "ฝากถอนออโต้ 24 ชม." },
    { icon: "Shield", text: "ปลอดภัย มั่นคง 100%" },
    { icon: "Gift", text: "โบนัสและโปรโมชั่นสุดคุ้ม" },
    { icon: "Headset", text: "บริการลูกค้า 24/7" }
  ]
};

export const GAME_CATEGORIES = [
  {
    id: "baccarat",
    icon: "Spade",
    title: "บาคาร่าออนไลน์",
    description: "เล่นบาคาร่าสดกับดีลเลอร์มืออาชีพ ทุกค่ายดัง",
    color: "from-primary/20 to-gold-dark/20"
  },
  {
    id: "slots",
    icon: "Cherry",
    title: "สล็อตออนไลน์",
    description: "สล็อตแตกง่าย แจ็คพอตใหญ่ จากค่ายดัง PG JOKER",
    color: "from-red/20 to-accent/20"
  },
  {
    id: "football",
    icon: "Trophy",
    title: "แทงบอลออนไลน์",
    description: "แทงบอลราคาดี ครบทุกลีก บอลเดี่ยว บอลสเต็ป",
    color: "from-primary/20 to-gold-dark/20"
  },
  {
    id: "lottery",
    icon: "Ticket",
    title: "หวยออนไลน์",
    description: "หวยไทย หวยหุ้น หวยลาว จ่ายเต็ม บาทละ 900",
    color: "from-red/20 to-accent/20"
  },
  {
    id: "fishing",
    icon: "Fish",
    title: "ยิงปลา",
    description: "เกมยิงปลา กราฟิกสวย แจกรางวัลใหญ่",
    color: "from-primary/20 to-gold-dark/20"
  },
  {
    id: "live-casino",
    icon: "Dices",
    title: "คาสิโนสด",
    description: "เสือมังกร รูเล็ต ไฮโล และอื่นๆ อีกมากมาย",
    color: "from-red/20 to-accent/20"
  }
];

export const PROMOTIONS = [
  {
    icon: "Gift",
    title: "โบนัสสมาชิกใหม่",
    description: "รับโบนัสสูงสุด 100% สำหรับสมาชิกใหม่",
    amount: "100%"
  },
  {
    icon: "Percent",
    title: "คืนยอดเสียทุกวัน",
    description: "รับคืนยอดเสียสูงสุด 10% ทุกวัน",
    amount: "10%"
  },
  {
    icon: "Star",
    title: "แจ็คพอตสล็อต",
    description: "ลุ้นแจ็คพอตใหญ่ทุกการหมุน",
    amount: "ล้านบาท"
  },
  {
    icon: "Coins",
    title: "โบนัสฝากรายวัน",
    description: "ฝากทุกครั้งรับโบนัสเพิ่ม 20%",
    amount: "20%"
  }
];

export const PROVIDERS = [
  { name: "SA Gaming", logo: "SA" },
  { name: "Sexy Baccarat", logo: "SEXY" },
  { name: "WM Casino", logo: "WM" },
  { name: "Pretty Gaming", logo: "PRETTY" },
  { name: "Dream Gaming", logo: "DREAM" },
  { name: "Evolution Gaming", logo: "EVO" },
  { name: "PG Soft", logo: "PG" },
  { name: "Joker Gaming", logo: "JOKER" },
  { name: "Pragmatic Play", logo: "PP" },
  { name: "Spadegaming", logo: "SPADE" },
  { name: "Ambbet", logo: "AMB" },
  { name: "Jili", logo: "JILI" }
];

export const FEATURES = [
  {
    icon: "Smartphone",
    title: "เล่นได้ทุกที่ ทุกเวลา",
    description: "รองรับทุกอุปกรณ์ iOS และ Android ไม่ต้องดาวน์โหลด"
  },
  {
    icon: "Zap",
    title: "ระบบออโต้รวดเร็ว",
    description: "ฝาก-ถอนออโต้ภายใน 30 วินาที ไม่มีขั้นต่ำ"
  },
  {
    icon: "Shield",
    title: "ความปลอดภัยสูงสุด",
    description: "ระบบรักษาความปลอดภัยระดับธนาคาร SSL 256 Bit"
  },
  {
    icon: "Headset",
    title: "บริการ 24 ชั่วโมง",
    description: "ทีมงานมืออาชีพพร้อมให้บริการตลอด 24/7"
  },
  {
    icon: "Percent",
    title: "โปรโมชั่นสุดคุ้ม",
    description: "โบนัสและโปรโมชั่นมากมาย อัพเดทใหม่ทุกวัน"
  },
  {
    icon: "Trophy",
    title: "ค่ายเกมครบครัน",
    description: "รวมค่ายดังทุกค่าย เกมส์เยอะที่สุด"
  }
];

export const CAROUSEL_SLIDES = [
  {
    title: "สมัครสมาชิกใหม่",
    subtitle: "รับโบนัส 100%",
    description: "สูงสุด 10,000 บาท",
    bgColor: "from-red/90 to-red-dark/90",
    imageKey: "presenter1"
  },
  {
    title: "ฝากถอนออโต้",
    subtitle: "รวดเร็วภายใน 30 วินาที",
    description: "บริการตลอด 24 ชั่วโมง",
    bgColor: "from-primary/90 to-gold-dark/90",
    imageKey: "presenter2"
  },
  {
    title: "แจ็คพอตสล็อต",
    subtitle: "แตกหนักทุกวัน",
    description: "ลุ้นรับรางวัลใหญ่",
    bgColor: "from-accent/90 to-destructive/90",
    imageKey: "presenter3"
  }
];

export const FOOTER_CONTENT = {
  about: {
    title: "เกี่ยวกับเรา",
    description: "BETUP168 คาสิโนออนไลน์ เว็บตรง อันดับ 1 ของไทย ให้บริการเกมคาสิโนครบวงจร บาคาร่า สล็อต แทงบอล หวย และอื่นๆ อีกมากมาย"
  },
  quickLinks: [
    { label: "หน้าหลัก", path: "/" },
    { label: "โปรโมชั่น", path: "/promotions" },
    { label: "ทดลองเล่น", path: "/demo" },
    { label: "ติดต่อเรา", path: "/contact" }
  ],
  gameLinks: [
    { label: "บาคาร่า", path: "/" },
    { label: "สล็อต", path: "/" },
    { label: "แทงบอล", path: "/" },
    { label: "หวย", path: "/" },
    { label: "ยิงปลา", path: "/" }
  ],
  copyright: `© ${new Date().getFullYear()} BETUP168.COM สงวนลิขสิทธิ์`,
  legal: "เว็บไซต์นี้ให้บริการเฉพาะผู้ที่มีอายุ 18 ปีขึ้นไปเท่านั้น"
};
