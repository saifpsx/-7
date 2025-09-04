// هنا كل الروابط الأصلية (حقيقية)
const CHANNELS = [
  {
    name: "Bein Sports 1",
    servers: [
      { label: "سيرفر 1", url: "https://ac.yalla1shoot.club/albaplayer/sports-1/" },
      { label: "سيرفر 2", url: "https://ac.yalla1shoot.club/albaplayer/sports-1/?serv=2" }
    ]
  },
  {
    name: "SSC EXTRA",
    servers: [
      { label: "سيرفر 1", url: "https://ac.yalla1shoot.club/albaplayer/sports-b5/" },
    ]
  }
];

// تشفير الروابط تلقائياً (Base64)
const ENCODED_CHANNELS = CHANNELS.map(ch => ({
  name: ch.name,
  servers: ch.servers.map(s => ({
    label: s.label,
    url: btoa(s.url) // تحويل الرابط Base64
  }))
}));

// تصدير الملف المشفر → يمكن نسخه إلى player-public.js
console.log("نسخ هذا المحتوى إلى player-public.js:");
console.log("const CONFIG = " + JSON.stringify(ENCODED_CHANNELS, null, 2) + ";");
