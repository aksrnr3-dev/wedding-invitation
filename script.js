const $=(s,p=document)=>p.querySelector(s);const $$=(s,p=document)=>[...p.querySelectorAll(s)];

const reveal = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('on'); reveal.unobserve(e.target); } });
},{threshold:.12});
$$('.reveal').forEach(el=>reveal.observe(el));

const target = new Date('2026-12-06T14:30:00+09:00');
function updateCountdown(){
  const now=new Date(), diff=target-now;
  const el=$('#countdown');
  if(diff<=0){el.textContent='오늘, 저희 결혼합니다.';return;}
  const days=Math.ceil(diff/86400000);
  el.textContent=`신형 ♥ 여울의 결혼식이 ${days}일 남았습니다.`;
}
updateCountdown();

$$('.account-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const box=document.getElementById(btn.dataset.target);
    box.classList.toggle('open');
    btn.querySelector('span').textContent=box.classList.contains('open')?'－':'＋';
  });
});

const toast=(msg='복사되었습니다.')=>{
  const t=$('#toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),1500);
};

$$('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{
  await navigator.clipboard.writeText(btn.dataset.copy);toast('계좌번호가 복사되었습니다.');
}));

$('#copyUrlBtn').addEventListener('click',async()=>{
  await navigator.clipboard.writeText(location.href);toast('청첩장 주소가 복사되었습니다.');
});
$('#shareBtn').addEventListener('click',async()=>{
  const data={title:'신형 ♥ 여울, 결혼합니다',text:'2026년 12월 6일 오후 2시 30분 · 공덕 아펠가모 마리에홀',url:location.href};
  if(navigator.share){try{await navigator.share(data)}catch(e){}}
  else{await navigator.clipboard.writeText(location.href);toast('청첩장 주소가 복사되었습니다.');}
});

const gallery=$$('.gallery img'), modal=$('#modal'), modalImg=$('#modalImg'), count=$('.modal-count');
let current=0;
function show(i){current=(i+gallery.length)%gallery.length;modalImg.src=gallery[current].src;count.textContent=`${current+1} / ${gallery.length}`;}
$$('.g').forEach((b,i)=>b.addEventListener('click',()=>{show(i);modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}));
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
$('.modal-close').onclick=closeModal;$('.modal-prev').onclick=()=>show(current-1);$('.modal-next').onclick=()=>show(current+1);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return;if(e.key==='Escape')closeModal();if(e.key==='ArrowLeft')show(current-1);if(e.key==='ArrowRight')show(current+1);});

// Prevent long-press image save/menu on the invitation.
$$('img').forEach(img=>img.addEventListener('contextmenu',e=>e.preventDefault()));
