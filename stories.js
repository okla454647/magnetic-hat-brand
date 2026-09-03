const OWNVER_STORIES={
mama:{word:"MAMA",tone:"woman",label:"想念 / MISS",quote:"「離家後才發現，最常想起的還是她。」",lead:"我以前以為，長大就是不再需要誰。真正離開家以後才明白，有些牽掛不會因為距離變淡，只會藏進每天最普通的時刻裡。",body:["剛搬出去的那幾個月，我最期待的不是週末，也不是放假，而是手機亮起來時，看見她問：「今天有沒有吃飯？」以前住在一起時，我總嫌這句話重複。離開後，它卻成了最讓人安心的一句話。","MAMA 不是一個稱呼而已。它代表那個永遠替我留一盞燈、明知道我會說沒事，仍然願意再多問一句的人。","我把這四個字戴在身上，不是為了告訴別人我有多想家，而是提醒自己：忙著往前走的時候，也別忘了回頭抱抱一直在原地等我的人。"],meaning:"MAMA 代表無條件的牽掛，以及離開以後才懂得珍惜的愛。",author:"匿名故事",date:"STORY 01"},
again:{word:"AGAIN",tone:"man",label:"重來 / BEGIN AGAIN",quote:"「提醒自己，再試一次。」",lead:"AGAIN 不是假裝失敗沒有發生。它是承認自己跌倒過，卻仍願意替下一個版本的自己，再留一次機會。",body:["那段時間，我做什麼都不太順。原本相信的方向突然停了，別人的進度看起來都比我快。我開始懷疑，自己是不是根本不適合繼續。","有一天，我在紙上寫下 AGAIN。沒有長篇大論，也沒有保證一定會成功。只是很單純地告訴自己：今天不需要贏，只需要再做一次。","後來我才知道，重新開始並不丟臉。每一次 AGAIN，都不是回到原點，而是帶著上一次留下的經驗，走向一個更清楚的自己。"],meaning:"AGAIN 代表允許自己重來；失敗可以留下痕跡，但不必成為結局。",author:"OWNVER COMMUNITY",date:"STORY 02"},
"1997":{word:"1997",tone:"man",label:"起點 / ORIGIN",quote:"「一切開始的年份，也是我重新認識自己的起點。」",lead:"年份看起來只是一串數字，但有時候，它裝著一個人走過的全部時間，也提醒我們：還可以重新選擇接下來要成為誰。",body:["1997 是我出生的年份。以前我把年齡當成倒數，總覺得到了某個歲數，就應該有固定的工作、固定的生活，以及一個已經確定的答案。","可是越往前走，我越發現，人生沒有大家想像中的標準版本。有人很早找到方向，有人走了很遠才願意承認，那條路並不屬於自己。","我留下 1997，不是沉浸在過去。它提醒我：我從哪裡開始，不代表我只能走到哪裡。只要願意改變，每一天都能成為新的起點。"],meaning:"1997 代表來處，也代表不被來處限制；記得起點，繼續長成新的版本。",author:"匿名故事",date:"STORY 03"},
home:{word:"HOME",tone:"woman",label:"歸屬 / BELONG",quote:"「有你的地方，就是我想回去的家。」",lead:"HOME 從來不只是一棟房子。有時候，它是一個人、一段關係，或是一個終於能讓你放下防備的地方。",body:["我搬過幾次家，也換過幾座城市。行李越來越會整理，對告別也越來越熟練，但我始終說不清楚，哪裡才算真正的家。","直到有一天，我拖著很累的身體回去。對方沒有追問，也沒有要我立刻振作，只是替我留了一個位置，告訴我：「回來就好。」","那一刻我才懂，HOME 不是地圖上的地址，而是你不需要表現得很好，也依然被接住的地方。我想把它戴著，記住自己擁有一個能回去的方向。"],meaning:"HOME 代表安全感與歸屬；不是身在何處，而是在哪裡可以安心成為自己。",author:"匿名故事",date:"STORY 04"},
stay:{word:"STAY",tone:"woman",label:"陪伴 / REMAIN",quote:"「有些離別，不是結束，而是另一種陪伴。」",lead:"我們無法要求所有重要的人事物永遠留下，但曾經被好好陪伴過的自己，會把那份溫柔繼續帶往以後。",body:["我一直不太擅長告別。總覺得只要不說出口，某段關係、某個時期，就還沒有真正結束。可是時間仍會往前，熟悉的人可能離開，習慣的生活也會改變。","STAY 最初像一句挽留。後來它慢慢變成另一種理解：留下，不一定是留在身邊。有人留在你的選擇裡，有段記憶留在你面對世界的方式裡。","我把 STAY 戴在身上，不是拒絕往前走，而是承認那些陪我走過的人，已經成為現在的我。真正重要的，不會因為看不見就消失。"],meaning:"STAY 代表記憶留下的力量；接受離別，同時珍惜仍存在於自己身上的陪伴。",author:"Written by Wayne",date:"STORY 05"}
};
let storyLanguage="zh";
const escapeHtml=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));
document.querySelectorAll(".story-lang").forEach(button=>button.addEventListener("click",()=>{storyLanguage=storyLanguage==="zh"?"en":"zh";document.documentElement.lang=storyLanguage==="zh"?"zh-Hant":"en";button.textContent=storyLanguage==="zh"?"繁中｜EN":"中文｜EN";document.querySelectorAll("[data-zh][data-en]").forEach(el=>el.textContent=el.dataset[storyLanguage]);}));
async function getStory(){const params=new URLSearchParams(location.search);const slug=params.get("story");if(slug&&OWNVER_STORIES[slug])return OWNVER_STORIES[slug];const id=params.get("id");if(!id||!window.supabase)return null;try{const client=supabase.createClient("https://ghroutexxxybybxtllpu.supabase.co","sb_publishable_kKI5_UiC7G0PpZABaxaBew_LIR_xmGo");const{data}=await client.from("ownver_stories").select("id,word,summary,cover_path,video_path,created_at").eq("id",id).eq("published",true).single();if(!data)return null;const media=path=>path?`https://ghroutexxxybybxtllpu.supabase.co/storage/v1/object/public/ownver-media/${path}`:"";return{word:data.word,tone:"man",label:"COMMUNITY STORY",quote:`「${data.summary}」`,lead:data.summary,body:["這是一段由 OWNVER 社群留下的故事。幾個簡短的字，記錄了一個值得被記住的版本。","完整文字與影像將依照故事當事人的公開授權呈現。"],meaning:`${data.word} 代表一段由故事主人親自選擇、願意帶在身上的意義。`,author:"OWNVER COMMUNITY",date:"COMMUNITY STORY",coverUrl:media(data.cover_path),videoUrl:media(data.video_path)}}catch(e){return null}}
function renderStory(story){const root=document.querySelector("#storyRoot");if(!root)return;if(!story){root.innerHTML='<section class="story-not-found"><div><p class="eyebrow">OWNVER STORY</p><h1>找不到這則故事</h1><p>這段內容可能尚未公開，或連結已經失效。</p><a class="button sand" href="stories.html">回到所有故事</a></div></section>';return}document.title=`${story.word}｜OWNVER STORY`;const customStyle=story.coverUrl?` style="background-image:linear-gradient(90deg,#0000,#0008),url('${escapeHtml(story.coverUrl)}')"`:"";root.innerHTML=`<section class="story-detail-hero"><div class="story-detail-image ${story.tone}"${customStyle}></div><div class="story-detail-title"><p class="eyebrow">${escapeHtml(story.label)}</p><h1>${escapeHtml(story.word)}</h1><p class="quote">${escapeHtml(story.quote)}</p><div class="story-meta"><span>${escapeHtml(story.date)}</span><span>${escapeHtml(story.author)}</span></div></div></section><article class="story-body"><p class="lead">${escapeHtml(story.lead)}</p><div class="body-copy">${story.body.map(p=>`<p>${escapeHtml(p)}</p>`).join("")}</div><div class="story-meaning"><b>THE MEANING<br>皮革上的意義</b><p>${escapeHtml(story.meaning)}</p></div>${story.videoUrl?`<video controls playsinline preload="metadata" poster="${escapeHtml(story.coverUrl)}" style="width:100%;background:#000" src="${escapeHtml(story.videoUrl)}"></video>`:""}<div class="story-actions"><a class="outline" href="stories.html">← 所有故事</a><button class="button sand" id="shareStory">分享這則故事 ↗</button></div></article><section class="story-next"><div><p class="eyebrow">YOUR WORDS. YOUR VERSION.</p><h2>下一個故事，也可以是你的。</h2><p>選擇 3–8 個字，把重要的話戴在身上。</p></div><a class="button sand" href="index.html#customize">MAKE IT YOURS</a></section>`;document.querySelector("#shareStory").onclick=async()=>{try{if(navigator.share)await navigator.share({title:`OWNVER — ${story.word}`,text:story.quote,url:location.href});else{await navigator.clipboard.writeText(location.href);alert("故事連結已複製")}}catch(e){}}}
if(document.querySelector("#storyRoot"))getStory().then(renderStory);

async function hydrateArchiveMedia(){
  const grid=document.querySelector(".story-grid");
  if(!grid||!window.supabase)return;
  try{
    const client=supabase.createClient("https://ghroutexxxybybxtllpu.supabase.co","sb_publishable_kKI5_UiC7G0PpZABaxaBew_LIR_xmGo");
    const{data}=await client.from("ownver_stories").select("word,cover_path").eq("published",true).not("cover_path","is",null);
    if(!data?.length)return;
    const covers=new Map(data.map(item=>[item.word.toUpperCase(),`https://ghroutexxxybybxtllpu.supabase.co/storage/v1/object/public/ownver-media/${item.cover_path}`]));
    grid.querySelectorAll(".archive-card").forEach(card=>{
      const word=card.querySelector("h3")?.textContent.trim().toUpperCase();
      const cover=covers.get(word);
      const media=card.querySelector(".archive-card-media");
      if(!cover||!media)return;
      media.classList.remove("empty-media");
      media.innerHTML="";
      media.style.backgroundImage=`linear-gradient(#0000,#0006),url('${cover}')`;
    });
  }catch(error){console.warn("OWNVER archive media unavailable",error)}
}
hydrateArchiveMedia();
