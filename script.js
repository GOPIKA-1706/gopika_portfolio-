(function(){
var r=document.documentElement;
try{var t=localStorage.getItem('theme');if(t)r.setAttribute('data-theme',t);}catch(e){}
document.getElementById('theme').addEventListener('click',function(){
var dark=getComputedStyle(r).getPropertyValue('--bg').trim()==='#0a0f1c';
var n=dark?'light':'dark';r.setAttribute('data-theme',n);
try{localStorage.setItem('theme',n);}catch(e){}
});
var bar=document.getElementById('progress');
function sc(){var h=r.scrollHeight-r.clientHeight;bar.style.transform='scaleX('+(h>0?Math.min(1,r.scrollTop/h):0)+')';}
window.addEventListener('scroll',sc,{passive:true});sc();
var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.1}):null;
document.querySelectorAll('.reveal').forEach(function(n){io?io.observe(n):n.classList.add('in');});
var links=document.querySelectorAll('#nav a');
if('IntersectionObserver' in window){
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id);});}});},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(function(s){so.observe(s);});}
document.querySelectorAll('.card').forEach(function(c){
c.addEventListener('pointermove',function(e){var b=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-b.left)+'px');c.style.setProperty('--my',(e.clientY-b.top)+'px');});
});
})();

(function(){
var f=document.getElementById('msgform'),st=document.getElementById('fstatus');
if(f)f.addEventListener('submit',function(e){
e.preventDefault();
if(!f.checkValidity()){st.textContent='Please fill in your name, a valid email and a message.';return;}
var n=document.getElementById('f-name').value.trim(),m=document.getElementById('f-email').value.trim(),t=document.getElementById('f-msg').value.trim();
var a=document.createElement('a');
a.href='mailto:gopika1706gopi@gmail.com?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+encodeURIComponent(t+'\n\nFrom: '+n+' ('+m+')');
document.body.appendChild(a);a.click();a.remove();
st.textContent='Opening your email app. If nothing opens, write to gopika1706gopi@gmail.com directly.';
});
var rb=document.querySelectorAll('.resume-btn');
if(window.__RESUME_B64){
rb.forEach(function(b){b.removeAttribute('download');b.setAttribute('href','#');b.hidden=true;});
if(window.claude&&window.claude.use){window.claude.use('downloads').then(function(dl){
if(!dl)return;
rb.forEach(function(b){b.hidden=false;b.addEventListener('click',function(e){
e.preventDefault();
var s=atob(window.__RESUME_B64),u=new Uint8Array(s.length);
for(var i=0;i<s.length;i++)u[i]=s.charCodeAt(i);
dl.save({filename:'Gopika_S_Resume.pdf',data:u}).catch(function(){});
});});
}).catch(function(){});}
}
})();
