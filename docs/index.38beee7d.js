function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire7a00;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire7a00=i),i.register("g28y4",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("g28y4").register(JSON.parse('{"1bd3D":"index.38beee7d.js","gvA8k":"poop.e14d8687.png","kVNr9":"dragon.c99cbcc6.gif","aYzcD":"pixelDragon.025e698f.gif","igcxn":"chineseDragongif.102287f6.gif","fWJoa":"scheferDog.0efb53a4.gif","7LHDE":"Doge.7f75243b.gif","1Hhov":"Dog3.fb0f3be1.gif","3daju":"ShitzuDog.43dd1a6b.gif","3NDGj":"fish.02462154.gif","d4xLi":"valros.12bd6e79.gif","8r0xe":"whale.9276640f.gif"}'));var o;o=new URL(i("g28y4").resolve("gvA8k"),import.meta.url).toString();var a;a=new URL(i("g28y4").resolve("kVNr9"),import.meta.url).toString();var s;s=new URL(i("g28y4").resolve("aYzcD"),import.meta.url).toString();var l;l=new URL(i("g28y4").resolve("igcxn"),import.meta.url).toString();var g;g=new URL(i("g28y4").resolve("fWJoa"),import.meta.url).toString();var u;u=new URL(i("g28y4").resolve("7LHDE"),import.meta.url).toString();var d;d=new URL(i("g28y4").resolve("1Hhov"),import.meta.url).toString();var p;p=new URL(i("g28y4").resolve("3daju"),import.meta.url).toString();var h;h=new URL(i("g28y4").resolve("3NDGj"),import.meta.url).toString();var c;c=new URL(i("g28y4").resolve("d4xLi"),import.meta.url).toString();var m;m=new URL(i("g28y4").resolve("8r0xe"),import.meta.url).toString();const f=document.querySelector("img");document.getElementById("name").addEventListener("click",(function(){H.start(),f.src=H.whattype();let e="  creature: "+v.value,t="Name: "+y.value+e;document.querySelector("h2").innerHTML=t,document.getElementById("form").style.visibility="hidden"})),document.getElementById("happinesBtn").addEventListener("click",(function(){H.giveLove()})),document.getElementById("hungerBtn").addEventListener("click",(function(){H.feed()}));let y=document.querySelector("input");const v=document.querySelector("select"),H=new class{#e;#t;#n=0;#r=!1;#i;#o=0;happyBtn=document.getElementById("happinesBtn");hungerBtn=document.getElementById("hungerBtn");constructor(e,t){this.name=e,this.type=t}start(){this.#e=5,this.#t=5,document.getElementById("hunger").innerText=this.#e,document.getElementById("happines").innerText=this.#t,this.#n=0,document.querySelector("p").innerText=this.#n,this.#i=setInterval(this.#a.bind(this),2e3),this.#r=!0}isRunning(){return this.#r}stop(){clearInterval(this.#i),this.#r=!1}#a(){this.#n++,document.querySelector("p").innerText=this.#n,this.#e>=10?(alert("its dead Sorry"),this.happyBtn.disabled=!0,this.hungerBtn.disabled=!0,this.stop()):this.#t<=0?(this.happyBtn.disabled=!0,this.hungerBtn.disabled=!0,alert("its dead sorry"),this.stop()):(this.#t--,this.#e++,document.getElementById("hunger").innerText=this.#e,document.getElementById("happines").innerText=this.#t)}feed(){if(4==this.#o){const e=document.createElement("img");e.style.width="100px",e.style.height="150px";const t=document.getElementById("poop");let n=new URL(o);e.src=n.href,t.appendChild(e),this.#e>0&&this.#e--,this.#o=0,document.getElementById("hunger").innerText=this.#e}else this.#e>0?(this.#e--,this.#o++,document.getElementById("hunger").innerText=this.#e):(console.log("overfeed"),this.#t<10&&this.#t--,this.#o++,document.getElementById("happines").innerText=this.#t)}giveLove(){this.#t<10?this.#t++:this.#e<10&&this.#e++,document.getElementById("hunger").innerText=this.#e,document.getElementById("happines").innerText=this.#t}whattype(){return"air"==this.type?this.dragonType():"earth"==this.type?this.EarthType():this.WaterType()}dragonType(){var e=new Array;return e[0]=new URL(a),e[1]=new URL(s),e[2]=new URL(l),e[Math.floor(Math.random()*e.length)].href}EarthType(){var e=new Array;return e[0]=new URL(g),e[1]=new URL(u),e[2]=new URL(d),e[3]=new URL(p),e[Math.floor(Math.random()*e.length)].href}WaterType(){var e=new Array;return e[0]=new URL(h),e[1]=new URL(c),e[2]=new URL(m),e[Math.floor(Math.random()*e.length)].href}}(y.value,v.value);var E=document.getElementById("poop");poop.addEventListener("click",(function(){let e=E.querySelector("img");E.removeChild(e)}));
//# sourceMappingURL=index.38beee7d.js.map