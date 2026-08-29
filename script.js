// Progress + TOC
const progress = document.getElementById('progress');
const tocBar = document.getElementById('tocBar');
const tocPct = document.getElementById('tocPct');
const navLinks = [...document.querySelectorAll('[data-nav]')];
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')));

function onScroll(){
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  const p = isNaN(scrolled) ? 0 : scrolled;
  if(progress) progress.style.width = p + '%';
  if(tocBar) tocBar.style.width = p + '%';
  if(tocPct) tocPct.textContent = Math.round(p) + '%';
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// IntersectionObserver for active TOC
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navLinks.forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+e.target.id));
    }
  });
},{rootMargin:'-40% 0px -50% 0px', threshold:0});
sections.forEach(s=> s && io.observe(s));

// Tabs map
document.querySelectorAll('.tab').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.map-pane').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    const pane = document.querySelector(`[data-pane="${btn.dataset.tab}"]`);
    if(pane) pane.classList.add('active');
  });
});

// Copy buttons
function toast(msg){
  let t=document.getElementById('toast');
  if(!t){ t=document.createElement('div'); t.id='toast'; t.style.cssText='position:fixed;left:50%;bottom:18px;transform:translateX(-50%);background:#0f172a;color:#fff;padding:8px 12px;border-radius:999px;font:600 13px Inter;z-index:99;opacity:0;transition:.2s'; document.body.appendChild(t); }
  t.textContent=msg; t.style.opacity='1'; setTimeout(()=> t.style.opacity='0',1600);
}
document.querySelectorAll('[data-copy]').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const pre = btn.closest('.copybox, .prompt')?.querySelector('pre');
    const text = pre ? pre.innerText : '';
    try{ await navigator.clipboard.writeText(text); toast('Скопировано ✓'); btn.textContent='✓'; setTimeout(()=>btn.textContent='Копировать',1200);}catch{ toast('Копируй вручную');}
  });
});

// Builder
const bRole=document.getElementById('bRole'), bTask=document.getElementById('bTask'), bFormat=document.getElementById('bFormat'), bOut=document.getElementById('bOut'), bCopy=document.getElementById('bCopy');
function buildOut(){
  if(!bOut) return;
  bOut.textContent = `${bRole.value}. Задача: ${bTask.value}. Формат: ${bFormat.value}. Ограничения: до 200 слов, тон дружелюбный, без воды. Дай 1 пример.`;
}
[bRole,bTask,bFormat].forEach(el=> el && el.addEventListener('input', buildOut));
buildOut();
if(bCopy) bCopy.addEventListener('click', async()=>{ try{ await navigator.clipboard.writeText(bOut.textContent); toast('Промпт скопирован ✓')}catch{} });

// Roadmap accordion + switch
document.querySelectorAll('.day__head').forEach(h=>{
  h.addEventListener('click', ()=> h.parentElement.classList.toggle('open'));
});
document.querySelectorAll('[data-road]').forEach(b=>{
  b.addEventListener('click', ()=>{
    document.querySelectorAll('[data-road]').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    document.getElementById('road7').classList.toggle('hidden', b.dataset.road!=='7');
    document.getElementById('road30').classList.toggle('hidden', b.dataset.road!=='30');
  });
});

// Effort slider
const effort=document.getElementById('effort'), effortVal=document.getElementById('effortVal');
if(effort) effort.addEventListener('input', ()=> effortVal.textContent = effort.value + '% ⏱');

// Checklist progress
const checks=[...document.querySelectorAll('.check input[type="checkbox"]')], checkBar=document.getElementById('checkBar'), checkTxt=document.getElementById('checkTxt');
function updCheck(){
  const done=checks.filter(c=>c.checked).length;
  if(checkBar) checkBar.style.width = (done/checks.length*100)+'%';
  if(checkTxt) checkTxt.textContent = done + '/' + checks.length;
  if(done===checks.length) toast('Красава — база закрыта 🎉');
}
checks.forEach(c=> c.addEventListener('change', updCheck));
updCheck();

// Typed effect
const typedEl=document.getElementById('typed');
const phrases=['"Напиши пост про ИИ для ТГ, 130 слов, крючок + 3 тезиса"','"Объясни нейронки как будто мне 12 лет"','"Сделай план на 14 дней по 30 мин"'];
let pi=0, ci=0, del=false;
function typeLoop(){
  if(!typedEl) return;
  const cur=phrases[pi];
  if(!del){ typedEl.textContent = cur.slice(0, ++ci); if(ci===cur.length){ del=true; setTimeout(typeLoop,1400); return; } }
  else { typedEl.textContent = cur.slice(0, --ci); if(ci===0){ del=false; pi=(pi+1)%phrases.length; } }
  setTimeout(typeLoop, del? 22 : 36);
}
typeLoop();

// Buttons: print, share, copy link, toTop, year
document.getElementById('printBtn')?.addEventListener('click', ()=> window.print());
document.getElementById('shareBtn')?.addEventListener('click', async()=>{
  const data={title:document.title, text:'Гайд по ИИ для новичков', url:location.href};
  try{ if(navigator.share) await navigator.share(data); else throw 0; }catch{ try{await navigator.clipboard.writeText(location.href); toast('Ссылка скопирована');}catch{}}
});
document.getElementById('copyLinkBtn')?.addEventListener('click', async()=>{ try{await navigator.clipboard.writeText(location.href); toast('Ссылка скопирована ✓')}catch{}});
document.getElementById('toTop')?.addEventListener('click', (e)=>{ e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'});});
const y=document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

// FAB mobile toc
const fab=document.getElementById('fab'), mToc=document.getElementById('mobileToc');
if(fab && mToc){
  fab.addEventListener('click', ()=> mToc.classList.toggle('open'));
  mToc.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> mToc.classList.remove('open')));
  document.addEventListener('click', (e)=>{ if(!mToc.contains(e.target) && e.target!==fab) mToc.classList.remove('open'); });
}

// TG link placeholder — замени на свой
const tg=document.getElementById('tgLink');
if(tg && tg.getAttribute('href')==='#') tg.addEventListener('click', (e)=>{ e.preventDefault(); toast('Замени href на ссылку канала'); });
