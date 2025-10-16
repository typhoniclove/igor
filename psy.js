const mainContent = document.getElementById('main-content');

const pages = {
  home: `
    <h1>Welcome!</h1>
    <p>I made this site for my own personal use, because I find this method of studying to be the easiest and most efficient for me, due to taking physical notes with a pencil hurting my arm, and my computer being too messy to organize and keep a track of everything. XD</p>
    <p>Although I only made this for myself, I thought sharing this might be helpful for someone out there! But I have to mention that this site does not support the English language. I don't plan on doing a translation either. Not for now, at least. So if you're really desparate, use a translator if absolutely needed, but my notes are probably not the best to study from. :P</p>
    <hr>
    <p>For anyone wondering, I'm studying psychology, and I hope to be a kids psychologist one day! Or just do something with my degree, at the very least, lol! I'm very passionate about psychology, and I do not want to waste this opportunity!</p>
    <p>Anyhow, if you'd like to return back to my site, <a href="index.html">click here</a></p>
  `,
  psihologija: `
    <h1>Psihologija</h1>
     <div class="lesson">
    <div class="lesson-header" onclick="toggleLesson(this)">
      <span>Lesson 1 - Uvod u psihologiju</span>
      <span class="arrow">▼</span>
    </div>
    <div class="lesson-content">
      <p>Placeholder text</p>
    </div>
  </div>
  `,
bioloska: `
  <h1>Biološka psihologija</h1>
  <div class="lesson">
    <div class="lesson-header" onclick="toggleLesson(this)">
      <span>Lesson 1 - Uvod u biološku psihologiju</span>
      <span class="arrow">▼</span>
    </div>
    <div class="lesson-content">
      <p>Placeholder text</p>
    </div>
  </div>
`,
kognitivna: `
  <h1>Kognitivna psihologija</h1>

  <div class="lesson">
    <div class="lesson-header" onclick="toggleLesson(this)">
      <span>Lesson 1 - Uvod u kognitivnu psihologiju</span>
      <span class="arrow">▼</span>
    </div>
    <div class="lesson-content">
      <p>Placeholder text</p>
    </div>
  </div>
`,
  kreativnost: `
    <h1>Kreativnost i psihologija</h1>
    <div class="lesson">
    <div class="lesson-header" onclick="toggleLesson(this)">
      <span>Lesson 1 - Uvod u kreativnu psihologiju</span>
      <span class="arrow">▼</span>
    </div>
    <div class="lesson-content">
      <p>Placeholder text</p>
    </div>
  </div>
  `,
  engleski: `
    <h1>Engleski jezik</h1>
    <p>Placeholder text</p>
  `
};

function loadPage(page) {
  mainContent.innerHTML = pages[page] || `<p>Page not found.</p>`;
}


window.onload = () => loadPage('home');


function toggleLesson(header) {
  const content = header.nextElementSibling;
  const arrow = header.querySelector('.arrow');
  content.classList.toggle('open');
  arrow.textContent = content.classList.contains('open') ? '▲' : '▼';
}