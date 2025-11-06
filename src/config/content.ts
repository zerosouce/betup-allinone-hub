// ไฟล์สำหรับตั้งค่าเนื้อหาของเว็บไซต์ - แก้ไขได้ง่าย ๆ โดยไม่ต้องเขียนโค้ด

// ตั้งค่าขนาดโลโก้ (สามารถปรับได้ง่าย ๆ)
export const logoConfig = {
  // ขนาดโลโก้บนมือถือ (h-16 = 64px, h-20 = 80px, h-24 = 96px)
  mobile: "h-20", // แนะนำ: h-12 ถึง h-20
  
  // ขนาดโลโก้บนหน้าจอใหญ่ (h-24 = 96px, h-32 = 128px, h-40 = 160px)
  desktop: "h-40", // แนะนำ: h-24 ถึง h-40
};

export const promoCarouselConfig = {
  // ความสูงของ Slide (สามารถปรับได้)
  // หน่วยเป็น pixels - ปรับให้เหมาะกับภาพ
  height: {
    mobile: 200, // ความสูงบนมือถือ (px)
    tablet: 400, // ความสูงบน tablet (px)
    desktop: 400, // ความสูงบนหน้าจอใหญ่ (px)
  },

  // รูปภาพโปรโมชั่น
  slides: [
    {
      image: "/src/assets/promo-1.jpg",
      alt: "โปรโมชั่นโบนัส 100%",
    },
    {
      image: "/src/assets/promo-2.jpg",
      alt: "สมัครสมาชิกใหม่รับเครดิตฟรี",
    },
    {
      image: "/src/assets/promo-3.jpg",
      alt: "ฝากถอนออโต้ 30 วินาที",
    },
  ],

  // การตั้งค่าการเลื่อนอัตโนมัติ
  autoplay: {
    enabled: true,
    delay: 3000, // หน่วยเป็น milliseconds (3000 = 3 วินาที)
  },
};
