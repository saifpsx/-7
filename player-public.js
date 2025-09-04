// روابط مشفرة Base64
const CONFIG = {
  channels: [
    {
      name: "Bein Sports 1",
      servers: [
        { label: "Server 1", url: "aHR0cHM6Ly9hYy55YWxsYTFzaG9vdC5jbHViL2FsYmFwbGF5ZXIvc3BvcnRzLTEv" },
        { label: "Server 2", url: "aHR0cHM6Ly9hYy55YWxsYTFzaG9vdC5jbHViL2FsYmFwbGF5ZXIvc3BvcnRzLTEvP3NlcnZlcj0y" }
      ]
    },
    {
      name: "National Geographic",
      servers: [
        { label: "Live", url: "aHR0cHM6Ly9hZHR2LmFlL2FyL2xpdmUvTmF0aW9uYWwlMjBHZW9ncmFwaGljJTIwSEQ_YXV0b3BsYXk9dHJ1ZQ==" }
      ]
    }
  ]
};

function getRealURL(encoded){ return atob(encoded); }

CONFIG.channels.forEach(ch=>{
  ch.servers.forEach(s=>{ s.realURL=getRealURL(s.url); });
});

console.log("CONFIG للزوار جاهز", CONFIG);
