 * CONFIG — إعدادات سريعة
 *****************************************/
const CONFIG = {
  logo: {
    url: "https://i.ibb.co/8LMqHNdF/image.png", // رابط صورة الشعار
    text: "",                         // نص بجانب الشعار (اختياري)
    position: "bottom-left",          // bottom-left | bottom-right | top-left | top-right
    sizePx: 100,                      // ارتفاع الشعار بالبكسل (سيتم تعديلها ديناميكياً)
    opacity: 0.92
  },
  channels: [
    {
      id: "bein",
      name: "Bein Sports 1",
      info: "BS1",
      tag: "رياضي",
      thumb: "كار7",
      servers: [
        { label: "سيرفر 1", url: "https://ac.yalla1shoot.club/albaplayer/sports-1/" },
        { label: "سيرفر 2", url: "https://ac.yalla1shoot.club/albaplayer/sports-1/?serv=2" },
      ]
    },
    {
      id: "bein",
      name: "Bein Sports 2",
      info: "BS2",
      tag: "رياضي",
      thumb: "كار7",
      servers: [
        { label: "سيرفر 1", url: "https://ac.yalla1shoot.club/albaplayer/sports-2/" },
        { label: "سيرفر 2", url: "https://ac.yalla1shoot.club/albaplayer/sports-2/?serv=2" },
        { label: "سيرفر 3", url: "https://ac.yalla1shoot.club/albaplayer/sports-2/?serv=3" },
      ]
    },
    {
      id: "bein",
      name: "Bein Sports 3",
      info: "BS3",
      tag: "رياضي",
      thumb: "كار7",
      servers: [
        { label: "سيرفر 1", url: "https://ac.yalla1shoot.club/albaplayer/sports-3/" },
        { label: "سيرفر 2", url: "https://ac.yalla1shoot.club/albaplayer/sports-3/?serv=2" },
      ]
    },
    {
      id: "bein",
      name: "Bein Sports 4",
      info: "BS4",
      tag: "رياضي",
      thumb: "كار7",
      servers: [
        { label: "سيرفر 1", url: "https://ac.yalla1shoot.club/albaplayer/sports-4/" },
        { label: "سيرفر 2", url: "https://ac.yalla1shoot.club/albaplayer/sports-4/?serv=2" },
      ]
    },
    {
      id: "bein",
      name: "Bein Sports 5",
      info: "BS5",
      tag: "رياضي",
      thumb: "كار7",
      servers: [
        { label: "سيرفر 1", url: "https://ac.yalla1shoot.club/albaplayer/sports-5/" },
        { label: "سيرفر 2", url: "https://ac.yalla1shoot.club/albaplayer/sports-5/?serv=2" },
      ]
    },
    {
      id: "match",
      name: "SSC EXTRA",
      info: "SSC",
      tag: "رياضي",
      thumb: "كار7",
      servers: [
        { label: "سيرفر 1", url: "https://ac.yalla1shoot.club/albaplayer/sports-b5/" },
        { label: "سيرفر 2", url: "https://ac.yalla1shoot.club/albaplayer/sports-b5/?serv=2" }
      ]
    },
    {
      id: "match",
      name: "SSC2 TV",
      info: "SSC2",
      tag: "رياضي",
      thumb: "كار7",
      servers: [
        { label: "سيرفر 1", url: "https://ac.yalla1shoot.club/albaplayer/sports-b2/" },
        { label: "سيرفر 2", url: "https://ac.yalla1shoot.club/albaplayer/sports-b2/?serv=2" }
      ]
    },
    {
      id: "match",
      name: "SSC3 TV",
      info: "SSC3",
      tag: "رياضي",
      thumb: "كار7",
      servers: [
        { label: "سيرفر 1", url: "https://ac.yalla1shoot.club/albaplayer/sports-b3/" },
        { label: "سيرفر 2", url: "https://ac.yalla1shoot.club/albaplayer/sports-b3/?serv=2" }
      ]
    },
    {
      id: "match",
      name: "SSC4 TV",
      info: "SSC4",
      tag: "رياضي",
      thumb: "كار7",
      servers: [
        { label: "سيرفر 1", url: "https://ac.yalla1shoot.club/albaplayer/sports-b4/" },
        { label: "سيرفر 2", url: "https://ac.yalla1shoot.club/albaplayer/sports-b4/?serv=2" }
      ]
    },
    {
      id: "yt-news",
      name: "TV الجزيرة",
      info: "JZTV",
      tag: "إخباري",
      thumb: "كار7",
      servers: [
        { label: "اليوتيوب", url: "https://www.youtube.com/embed/bNyUyrR0PHo?si=eaAqp9pYsmx_by-s" },
      ]
    },
    {
      id: "yt-news",
      name: "الجزيرة وثائقي",
      info: "JZ1TV",
      tag: "وثائقي",
      thumb: "كار7",
      servers: [
        { label: "اليوتيوب", url: "https://www.youtube.com/embed/TiPYdMXt_XI" },
      ]
    },
    {
      id: "yt-news",
      name: "ناتشونال جوغرافيك",
      info: "مربع",
      tag: "وثائقي",
      thumb: "كار7",
      servers: [
        { label: "بث مباشر", url: "https://adtv.ae/ar/live/National%20Geographic%20HD%20Channel?autoplay=true" },
      ]
    },
  ]
};

/*****************************************
 * عناصر DOM
 *****************************************/
const el = {
  channels: document.getElementById('channels'),
  servers: document.getElementById('servers'),
  playerBox: document.getElementById('playerBox'),
  loading: document.getElementById('loading'),
  title: document.getElementById('currentTitle'),
  search: document.getElementById('search'),
  toast: document.getElementById('toast'),
  toggleLogo: document.getElementById('toggleLogo'),
  logoOverlay: document.getElementById('logoOverlay'),
  logoImg: document.getElementById('logoImg'),
  logoText: document.getElementById('logoText'),
};

/*****************************************
 * أدوات عامة
 *****************************************/
const sleep = (ms)=> new Promise(r=>setTimeout(r, ms));
function showToast(msg){
  el.toast.textContent = msg; el.toast.classList.add('show');
  setTimeout(()=> el.toast.classList.remove('show'), 2200);
}

/*****************************************
 * إعداد الشعار مع تغيير الحجم حسب الشاشة
 *****************************************/
function setLogoFromConfig(){
  const {url,text,position,opacity} = CONFIG.logo;
  // الحجم ديناميكي حسب عرض الشاشة
  const sizePx = window.innerWidth <= 480 ? 50 : 100;
  CONFIG.logo.sizePx = sizePx;

  el.logoImg.src = url; 
  el.logoImg.style.height = sizePx + 'px'; 
  el.logoImg.style.opacity = opacity;

  el.logoText.textContent = text||''; 
  el.logoText.style.display = text ? 'inline' : 'none';

  // تموضع
  const map = {
    'bottom-left': {top:'', right:'', bottom:'14px', left:'14px'},
    'bottom-right':{top:'', right:'14px', bottom:'14px', left:''},
    'top-left':    {top:'14px', right:'', bottom:'', left:'14px'},
    'top-right':   {top:'14px', right:'14px', bottom:'', left:''},
  };
  const p = map[position] || map['bottom-left'];
  el.logoOverlay.style.top = p.top; 
  el.logoOverlay.style.right = p.right;
  el.logoOverlay.style.bottom = p.bottom; 
  el.logoOverlay.style.left = p.left;
}

// تحديث تلقائي عند تغيير حجم الشاشة
window.addEventListener('resize', setLogoFromConfig);

/*****************************************
 * كشف نوع المصدر من الرابط
 *****************************************/
function detectType(url){
  const u = url.toLowerCase();
  if(u.includes('youtube.com/watch') || u.includes('youtu.be/') || u.includes('youtube.com/live/')) return 'youtube';
  if(u.endsWith('.m3u8') || u.includes('.m3u8?')) return 'hls';
  if(u.endsWith('.mpd')  || u.includes('.mpd?'))  return 'dash';
  if(u.match(/\.(mp4|webm|ogg)(\?|#|$)/)) return 'file';
  if(u.includes('player.twitch.tv') || u.startsWith('http')) return 'iframe';
  return 'unknown';
}

function toYouTubeEmbed(url){
  try{
    const u = new URL(url);
    if(u.hostname.includes('youtu.be')){
      const id = u.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
    }
    if(u.searchParams.get('v')){
      const id = u.searchParams.get('v');
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
    }
    const parts = u.pathname.split('/').filter(Boolean);
    const id = parts.pop();
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  }catch(e){ return url }
}

/*****************************************
 * تحميل المصدر في اللاعب
 *****************************************/
let hlsInstance = null; let dashPlayer = null;

async function loadSource({title, url}){
  el.loading.classList.add('active');
  if(hlsInstance){ hlsInstance.destroy(); hlsInstance = null }
  if(dashPlayer){ dashPlayer.reset(); dashPlayer = null }
  el.playerBox.querySelectorAll('video, iframe').forEach(n=> n.remove());

  const type = detectType(url);
  const overlay = el.logoOverlay;

  if(type === 'youtube' || type === 'iframe'){
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allow','autoplay; encrypted-media; picture-in-picture');
    iframe.setAttribute('allowfullscreen','');
    iframe.src = type==='youtube' ? toYouTubeEmbed(url) : url;
    el.playerBox.insertBefore(iframe, overlay);
  }
  else{
    const video = document.createElement('video');
    video.controls = true; video.autoplay = true; video.playsInline = true;
    el.playerBox.insertBefore(video, overlay);

    if(type === 'hls'){
      if(window.Hls && Hls.isSupported()){
        hlsInstance = new Hls({maxBufferLength:10});
        hlsInstance.loadSource(url); hlsInstance.attachMedia(video);
      }else if(video.canPlayType('application/vnd.apple.mpegurl')){
        video.src = url;
      }else{
        showToast('المتصفح لا يدعم HLS مباشرة. جرّب متصفحًا آخر.');
      }
    } else if(type === 'dash'){
      if(window.dashjs){
        dashPlayer = dashjs.MediaPlayer().create();
        dashPlayer.initialize(video, url, true);
      } else {
        showToast('لم يتم تحميل DASH.js');
      }
    } else if(type === 'file'){
      video.src = url;
    } else {
      video.src = url;
    }
  }

  el.title.textContent = title || 'بث مباشر';
  await sleep(400); el.loading.classList.remove('active');
}

/*****************************************
 * بناء الواجهة
 *****************************************/
function renderChannels(list){
  el.channels.innerHTML = '';
  list.forEach((ch, idx)=>{
    const item = document.createElement('div'); item.className = 'card';
    item.innerHTML = `
      <div class="thumb">${ch.thumb || (idx+1)}</div>
      <div>
        <div class="name">${ch.name}</div>
        <div class="muted">${ch.info || ''}</div>
      </div>
      <div class="badge">${ch.tag || 'عام'}</div>
    `;
    item.onclick = ()=> selectChannel(ch);
    el.channels.appendChild(item);
  });
}

function renderServers(servers){
  el.servers.innerHTML = '';
  servers.forEach((s, i)=>{
    const b = document.createElement('button'); b.className = 'server-btn'; b.textContent = s.label || `Server ${i+1}`;
    b.onclick = ()=> { setActiveServerBtn(i); loadSource({title: currentChannel.name, url: s.url}); };
    el.servers.appendChild(b);
  });
  setActiveServerBtn(0);
}

function setActiveServerBtn(index){
  el.servers.querySelectorAll('.server-btn').forEach((btn, i)=>{
    btn.classList.toggle('active', i===index);
  });
}

let currentChannel = null;
function selectChannel(ch){
  currentChannel = ch; renderServers(ch.servers || []);
  if(ch.servers && ch.servers[0]){
    loadSource({title: ch.name, url: ch.servers[0].url});
  }
}

/*****************************************
 * بحث فوري
 *****************************************/
el.search.addEventListener('input', ()=>{
  const q = el.search.value.trim().toLowerCase();
  const filtered = CONFIG.channels.filter(c=> (c.name + ' ' + (c.tag||'') + ' ' + (c.info||'')).toLowerCase().includes(q));
  renderChannels(filtered);
});

/*****************************************
 * بداية التشغيل
 *****************************************/
setLogoFromConfig();
renderChannels(CONFIG.channels);
if(CONFIG.channels[0]) selectChannel(CONFIG.channels[0]);
console.log('%c Blogger Live — UL Style ', 'background:#4f8cff;color:#fff;padding:6px 10px;border-radius:8px');
