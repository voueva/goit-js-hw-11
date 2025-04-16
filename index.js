import{a as d,S as m,i as g}from"./assets/vendor-BBsfN11L.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const u="49650376-6654a0e8c93b5d9da070a04be",y="horizontal",p="true",f="photo";function v(l){const a=`https://pixabay.com/api/?key=${u}&q=${l}&image_type=${f}&orientation=${y}&safesearch=${p}`;return d.get(a)}const h=document.querySelector("#searchInput"),L=document.querySelector("#secrhButton"),s=document.querySelector(".gallery"),_=new m(".gallery a",{captionsData:"alt",captionDelay:250});L.addEventListener("click",()=>{const l=h.value.replace(" ","+");s.innerHTML="";for(let a=0;a<20;a++)s.innerHTML+=`
            <li class="gallery-item gallery-item-loader">
                <div class="loader"></div>
            </li>
        `;v(l).then(a=>{s.innerHTML="";const o=a.data.hits.map(({previewURL:r,largeImageURL:e,likes:i,views:t,comments:n,downloads:c})=>`
                    <li class="gallery-item">
                        <a class="gallery-link" href="${e}">
                            <img
                                class="gallery-image"
                                src="${r}"
                            />
                        </a>
                        <div class="gallery-image-panel">
                            <div class="gallery-image-panel_item">
                                <div class="gallery-image-panel_item-field">Likes</div>
                                <div class="gallery-image-panel_item-value">${i}</div>
                            </div>
                            <div class="gallery-image-panel_item">
                                <div class="gallery-image-panel_item-field">Views</div>
                                <div class="gallery-image-panel_item-value">${t}</div>
                            </div>
                            <div class="gallery-image-panel_item">
                                <div class="gallery-image-panel_item-field">Comments</div>
                                <div class="gallery-image-panel_item-value">${n}</div>
                            </div>
                            <div class="gallery-image-panel_item">
                                <div class="gallery-image-panel_item-field">Downloads</div>
                                <div class="gallery-image-panel_item-value">${c}</div>
                            </div>
                        </div>
                    </li>
                `).join("");s.insertAdjacentHTML("beforeend",o),_.refresh()}).catch(()=>{g.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})});
//# sourceMappingURL=index.js.map
