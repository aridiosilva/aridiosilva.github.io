(function(){
  const root=document.documentElement, body=document.body, content=document.querySelector('.article-body');
  const dec=document.getElementById('articleFontDecrease'), inc=document.getElementById('articleFontIncrease'), easy=document.getElementById('articleEasyRead'), listen=document.getElementById('articleListen');
  let scale=1, speaking=false;
  try{scale=parseFloat(localStorage.getItem('article-scale'))||1;body.setAttribute('data-easy-read',localStorage.getItem('article-easy')==='true'?'true':'false')}catch(e){}
  function apply(){root.style.fontSize=(16*scale)+'px';listen.textContent=speaking?'⏹ Stop':'🔊 Listen';listen.setAttribute('aria-pressed',speaking?'true':'false');easy.setAttribute('aria-pressed',body.getAttribute('data-easy-read')==='true');try{localStorage.setItem('article-scale',scale);localStorage.setItem('article-easy',body.getAttribute('data-easy-read'))}catch(e){}}
  function stop(){if(window.speechSynthesis)window.speechSynthesis.cancel();speaking=false;apply()}
  dec.addEventListener('click',function(){scale=Math.max(.9,scale-.08);apply()}); inc.addEventListener('click',function(){scale=Math.min(1.4,scale+.08);apply()}); easy.addEventListener('click',function(){body.setAttribute('data-easy-read',body.getAttribute('data-easy-read')==='true'?'false':'true');apply()}); listen.addEventListener('click',function(){if(!window.speechSynthesis||!content)return;if(speaking){stop();return}const u=new SpeechSynthesisUtterance(content.innerText);u.lang='en-US';u.onend=stop;u.onerror=stop;speaking=true;apply();window.speechSynthesis.cancel();window.speechSynthesis.speak(u)}); apply();
}());

