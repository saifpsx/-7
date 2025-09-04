// CONFIG يحتوي روابط Base64 فقط
const CONFIG = [
  {
    "name": "Bein Sports 1",
    "servers": [
      { "label": "سيرفر 1", "url": "aHR0cHM6Ly9hYy55YWxsYTEtc2hvb3QuY2x1Yi9hbGJhcGxheXIvc3BvcnRzLTEv" },
      { "label": "سيرفر 2", "url": "aHR0cHM6Ly9hYy55YWxsYTEtc2hvb3QuY2x1Yi9hbGJhcGxheXIvc3BvcnRzLTEvP3NlcnY9Mg==" }
    ]
  }
];

// فك التشفير عند التشغيل
CONFIG.forEach(ch=>{
  ch.servers.forEach(s=>{
    s.realURL = atob(s.url); // URL حقيقية يتم وضعها عند التشغيل
  });
});
