import{a as h,S as L}from"./assets/vendor-DdMkFUeo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const _="49650376-6654a0e8c93b5d9da070a04be",b="horizontal",w="true",$="photo",u=15;async function q(i,t){const o=`https://pixabay.com/api/?key=${_}&q=${i}&image_type=${$}&orientation=${b}&safesearch=${w}&page=${t}&per_page=${u}`;try{return await h.get(o)}catch(l){throw l}}const m=document.querySelector(".gallery"),g=document.querySelector(".load-button"),y=document.querySelector(".loader"),S=new L(".gallery a",{captionsData:"alt",captionDelay:250});function T(i){const t=i.map(({previewURL:o,largeImageURL:l,likes:e,views:a,comments:r,downloads:v})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${l}">
                <img class="gallery-image" src="${o}" />
            </a>
            <div class="gallery-image-panel">
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Likes</div>
                    <div class="gallery-image-panel_item-value">${e}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Views</div>
                    <div class="gallery-image-panel_item-value">${a}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Comments</div>
                    <div class="gallery-image-panel_item-value">${r}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Downloads</div>
                    <div class="gallery-image-panel_item-value">${v}</div>
                </div>
            </div>
        </li>
    `).join("");m.insertAdjacentHTML("beforeend",t),S.refresh()}function B(){m.innerHTML=""}function p(){y.style.display="block"}function d(){y.style.display="none"}function I(){g.style.display="block"}function s(){g.style.display="none"}function M(){const i=document.querySelector(".gallery-item:last-child");if(!i)return;const t=i.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:t-150,behavior:"smooth"})}const O=document.querySelector("#searchInput"),z=document.querySelector("#searchForm"),x=document.querySelector(".load-button");let n=1,c="";function f(i,t){q(i,t).then(o=>{const l=o.data.hits;if(l.length===0&&t===1){iziToast.info({title:"Немає результатів",message:"Спробуйте інший запит."}),s(),d();return}T(l),o.data.total>t*u?I():iziToast.info({title:"Більше зображень немає",message:"Ви переглянули всі результати."})}).catch(o=>{iziToast.error({title:"Помилка",message:"Не вдалося завантажити зображення."}),s()}).finally(()=>{d(),M()})}z.addEventListener("submit",i=>{i.preventDefault();const t=O.value.trim();if(t===""){iziToast.warning({title:"Увага",message:"Будь ласка, введіть пошуковий запит"});return}s(),B(),p(),c=t.replace(/\s+/g,"+"),n=1,f(c,n)});x.addEventListener("click",async()=>{s(),p(),n++,f(c,n)});
//# sourceMappingURL=index.js.map
