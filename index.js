import{a as L,S as _,i as o}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const $="49650376-6654a0e8c93b5d9da070a04be",b="horizontal",w="true",q="photo",m=15;async function S(l,t){const i=`https://pixabay.com/api/?key=${$}&q=${l}&image_type=${q}&orientation=${b}&safesearch=${w}&page=${t}&per_page=${m}`;try{return await L.get(i)}catch(s){throw s}}const g=document.querySelector(".gallery"),p=document.querySelector(".load-button"),y=document.querySelector(".loader"),x=new _(".gallery a",{captionsData:"alt",captionDelay:250});function I(l){const t=l.map(({previewURL:i,largeImageURL:s,likes:e,views:a,comments:r,downloads:h})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img class="gallery-image" src="${i}" />
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
                    <div class="gallery-image-panel_item-value">${h}</div>
                </div>
            </div>
        </li>
    `).join("");g.insertAdjacentHTML("beforeend",t),x.refresh()}function B(){g.innerHTML=""}function f(){y.style.display="block"}function u(){y.style.display="none"}function M(){p.style.display="block"}function n(){p.style.display="none"}function O(){const l=document.querySelector(".gallery-item:last-child");if(!l)return;const t=l.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:t-150,behavior:"smooth"})}const T=document.querySelector("#searchInput"),A=document.querySelector("#searchForm"),D=document.querySelector(".load-button");let c=1,d="";function v(l,t){S(l,t).then(i=>{const s=i.data.hits;if(s.length===0&&t===1){o.info({title:"Немає результатів",message:"Спробуйте інший запит."}),n(),u();return}I(s),i.data.total>t*m?M():o.info({title:"Більше зображень немає",message:"Ви переглянули всі результати."})}).catch(i=>{if(n(),axios.isAxiosError(i))if(i.response){const s=i.response.status;s===403?o.error({title:"Доступ заборонено",message:"Можливо, ваш API ключ недійсний або вичерпано ліміт."}):s===404?o.warning({title:"Не знайдено",message:"Ресурс не існує. Спробуйте змінити запит."}):s>=500?o.error({title:"Серверна помилка",message:"Сервер не відповідає. Спробуйте пізніше."}):o.error({title:`Помилка ${s}`,message:i.response.statusText||"Невідома помилка"})}else i.request?o.error({title:"Немає відповіді від сервера",message:"Перевірте інтернет-з’єднання або спробуйте ще раз."}):o.error({title:"Налаштування запиту",message:"Щось пішло не так при налаштуванні запиту."});else o.error({title:"Неочікувана помилка",message:"Щось пішло не так. Спробуйте ще раз."})}).finally(()=>{u(),O()})}A.addEventListener("submit",l=>{l.preventDefault();const t=T.value.trim();if(t===""){o.warning({title:"Увага",message:"Будь ласка, введіть пошуковий запит"});return}n(),B(),f(),d=t.replace(/\s+/g,"+"),c=1,v(d,c)});D.addEventListener("click",async()=>{n(),f(),c++,v(d,c)});
//# sourceMappingURL=index.js.map
