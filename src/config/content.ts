// ไฟล์สำหรับตั้งค่าเนื้อหาของเว็บไซต์ - แก้ไขได้ง่าย ๆ โดยไม่ต้องเขียนโค้ด

export const promoCarouselConfig = {
  // ความสูงของ Slide (สามารถปรับได้)
  // หน่วยเป็น pixels - แนะนำ: มือถือ 160-200, Tablet 240-320, Desktop 320-400
  height: {
    mobile: 160,    // ความสูงบนมือถือ (px)
    tablet: 240,    // ความสูงบน tablet (px)
    desktop: 320,   // ความสูงบนหน้าจอใหญ่ (px)
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
