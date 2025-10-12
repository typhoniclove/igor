// ------------------------------
// MUSIC
// ------------------------------
const tracks = [
{
    title: "Laura Shigihara - Zombies On Your Lawn", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Zombies%20On%20Your%20Lawn%20(Instrumental)%20-%20Plants%20Vs.%20Zombies.mp3"
    }
    ,
    { title: "Robot 64 - Hub World", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Hub%20World.mp3"
    }
    ,
    { title: "Robot 64 - Enjoy Your Stay", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Robot%2064%20OST%20-%20Enjoy%20Your%20Stay.mp3"
    }
    ,
    { title: "PilotRedSun - Fat Cat", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Pilotredsun-%20Fat%20Cat.mp3"
    }
    ,
    { title: "Lease - Takeshi Abo", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Takeshi%20Abo%20-%20Lease%20(spongebob%20style).mp3"
    }
    ,
    {  title: "datfootdive - why me", src: "https://file.garden/Z9LL5mKyLkNH164u/site/why-me.mp3"
    }
    ,
    { title: "Tekken 4 - Kitsch", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Tekken%204%20OST%20-%20Kitsch%20(Beach%20Stage).mp3"
    }
    ,
    { title: "Bomberman Hero - Redial", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Bomberman%20Hero_%20Redial%20HD.mp3"
    }
    ,
    { title: "Accelio - Midnight Noir", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Midnight%20Noir.mp3"
    }
    ,
    { title: "Vagabounce - Homestuck", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Vagabounce%20-%20Homestuck%20%5BVol.%202%5D.mp3"
    }
    ,
    { title: "Gardener - Homestuck", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Homestuck%20-%20Gardener.mp3"
    }
    ,
    { title: "SpongeBob SuperSponge - Industrial Fields and Oil Rig", src: "https://file.garden/Z9LL5mKyLkNH164u/site/SpongeBob%20SuperSponge%20OST%20Remastered_%20Industrial%20Fields%20and%20Oil%20Rig.mp3"
    }
    ,
    { title: "Darkwood Dub - Dnevnik", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Darkwood%20Dub%20-%20Dnevnik.mp3"
    }
    ,
    { title: "Darkwood Dub - Šećer", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Darkwood%20Dub%20-%20Secer.mp3"
    }
    ,
    { title: "datfootdive - harvest the hurt", src: "https://file.garden/Z9LL5mKyLkNH164u/site/harvest-the-hurt.mp3"
    }
    ,
    { title: "Nintendo DSi Music - Camera (Album)", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Nintendo%20DSi%20Music%20-%20Camera%20(Album).mp3"
    }
    ,
    { title: "Tovatronica - Hub World", src: "https://file.garden/Z9LL5mKyLkNH164u/site/Tovatronica%20-%20Hub%20World.mp3"
    }
];

let currentTrack = 0;
const player = document.getElementById('music-player');
const playPauseBtn = document.getElementById('play-pause');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const songInfo = document.getElementById('song-info');
const volumeBar = document.getElementById('volumeBar');

function updateSongInfo() {
  songInfo.textContent = `Now playing track ${currentTrack + 1} of ${tracks.length}: ${tracks[currentTrack].title}`;
}

function playTrack(index) {
  currentTrack = (index + tracks.length) % tracks.length;
  player.src = tracks[currentTrack].src;
  updateSongInfo();
  player.play();
  playPauseBtn.textContent = "⏸";
}

playPauseBtn.addEventListener('click', () => {
  if (player.paused) {
    player.play();
    playPauseBtn.textContent = "⏸";
  } else {
    player.pause();
    playPauseBtn.textContent = "⏯";
  }
});

nextBtn.addEventListener('click', () => playTrack(currentTrack + 1));
prevBtn.addEventListener('click', () => playTrack(currentTrack - 1));
player.addEventListener('ended', () => playTrack(currentTrack + 1));

volumeBar.addEventListener('input', () => {
  player.volume = volumeBar.value;
});

updateSongInfo();


// ------------------------------
// BUBBLE
// ------------------------------
const clickSound = document.getElementById('click-sound');
clickSound.volume = 0.3;

const bubbleImg = "https://file.garden/Z7_GXKMzaAXvDQIE/bubble.png";

setInterval(createBubble, 1000);

function createBubble() {
  const bubble = document.createElement('img');
  bubble.src = bubbleImg;
  bubble.classList.add('bubble');

  const size = Math.random() * 60 + 20;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  bubble.style.left = `${Math.random() * 100}%`;

  const duration = Math.random() * 7 + 8;
  bubble.style.animationDuration = `${duration}s`;

  bubble.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
    bubble.remove();
  });

  document.body.appendChild(bubble);
  setTimeout(() => bubble.remove(), duration * 1000);
}





// ------------------------------
// PAGES
// ------------------------------
const mainContent = document.getElementById('main-content');


const pages = {
  home: `
    <div class="column left">
      <div class="nav-box box">
      <br>
      <br>
      <br>
      <br>
      <br>
        <h2>Navigation</h2>
        <a href="#" class="nav-link" data-page="home">Home</a>
        <a href="#" class="nav-link" data-page="interests">Interests</a>
        <a href="#" class="nav-link" data-page="shrines">Shrines</a>
        <a href="#" class="nav-link" data-page="art">Art</a>
        <a href="#" class="nav-link" data-page="blog">Blog</a>
        <a href="#" class="nav-link" data-page="friends">Friends</a>
        <a href="#" class="nav-link" data-page="extras">Extras</a>
      </div>
      <div class="updates-box box">
        <h2>Updates</h2>
    <br>
    <p><b>10/8/2025</b> - Completely revamped my website + Added a WHOLE bunch of new sections and content</p>
    <p><b>5/22/2025</b> - Switched to GitHub</p>
    <p><b>4/30/2025</b>  - Changed the layout + Updated the theme (AGAIN)</p>
    <p><b>2/25/2025</b>  - Changed the layout + Updated the theme (again)</p>
    <p><b>1/16/2025</b>  - Changed the layout + Updated the theme</p>
    <p><b>12/17/2024</b>  - Tweaked some stuff</p>
    <p><b>9/19/2024</b>  - Updated the theme</p>
    <p><b>6/18/2024</b> - Switched to Carrd again + New layout</p>
    <p><b>1/27/2024</b> - Switched to Rentry</p>
    <p><b>1/21/2024</b> - Carrd back up + Updated the theme</p>
    <p><b>1/4/2024</b> - Carrd taken offline</p>
    <p><b>10/3/2023</b> - Tweaked some stuff</p>
    <p><b>9/6/2023</b> - Updated the theme (for fall)</p>
    <p><b>8/31/2023</b> - Updated the theme</p>
    <p><b>8/16/2023</b> - Changed to my previous layout + Updated the theme</p>
    <p><b>7/4/2023</b> - Updated the theme</p>
    <p><b>5/29/2023</b> - Updated the theme (for summer)</p>
    <p><b>5/21/2023</b> - Completely switched the layout + Updated the theme</p>
    <p><b>4/21/2023</b> - Updated the theme + Removed 'Blog' section</p>
    <p><b>3/29/2023</b> - Updated the theme</p>
    <p><b>3/15/2023</b> - Updated the theme</p>
    <p><b>2/4/2023</b> - Revamped my entire Carrd + A bunch of new sections</p>
    <p><b>1/8/2023</b> - Updated the theme + Added a 'Blog' section</p>
    <p><b>12/13/2022</b> - Updated the theme (for holidays)</p>
    <p><b>12/11/2022</b> - Updated the theme</p>
    <p><b>11/25/2022</b> - Changed some images</p>
    <p><b>10/25/2022</b> - Updated the theme</p>
    <p><b>10/3/2022</b> - Added a 'Shrines' section</p>
    <p><b>9/7/2022</b> - Updated the theme</p>
    <p><b>7/29/2022</b> - Changed some images</p>
    <p><b>6/14/2022</b> - Updated the theme</p>
    <p><b>5/19/2022</b> - Tweaked some stuff</p>
    <p><b>2/5/2022</b> - Created my Carrd</p>
        <!-- Add remaining updates as needed -->
      </div>
    </div>

    <div class="column center">
      <h2>Welcome!</h2>
      <img src="site/divider2.gif" alt="Divider" width="300px">
      <div class="welcome-block">
        <h3>
          WELCOME TO THE INTERNET!!!<br>
          WELCOME TO MY WEBPAGE!!!<br>
          THE BEST PLACE THAT YOU'LL SEE!!!<br>
          THE BEST WEBSITE IN THE UNIVERSE!!!<br>
          THX 4 STOPPING BY 2 VISIT, U R A LEGEND!!!
        </h3>
        <img src="https://file.garden/Z9LL5mKyLkNH164u/site/jade.gif" alt="Jade GIF" width="100">
      </div>
      <br>
<p>Welcome to my personal corner of the web! :D Here, you can check out my personal content, 
and many other cool things stored within here!</p>
<br>
<p>
  This site was created as my own little space to personalise and play around with without using proper
  social media. I don't think social media is bad by any means, but the ways in which modern social media
   is designed makes me feel upset.
</p>
<br>
<p>
  Although I have years of experience with HTML/CSS, I'm still pretty rusty at it, so most things here are
  held together by glue and tape. This site was put together on a 1440 x 900 screen, so it might look wonky
  if you don't have a similar resolution.
</p>
  </div>

    <div class="column right">
      <div class="chat-box box">
        <iframe src="https://www5.cbox.ws/box/?boxid=958869&boxtag=2TkgOq" 
                width="100%" height="100%" allowtransparency="yes" allow="autoplay" 
                frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>
      </div>

      <iframe width="314" height="321" scrolling="no" 
        src="https://gifypet.neocities.org/pet/pet.html?name=Jade&dob=1759702698&gender=f&element=Air&pet=https%3A%2F%2Ffile.garden%2FZ7_GXKMzaAXvDQIE%2FJade.gif&map=https%3A%2F%2Ffile.garden%2FZ7_GXKMzaAXvDQIE%2Fbackground.png&background=https%3A%2F%2Ffile.garden%2FZ7_GXKMzaAXvDQIE%2Fbg2.png&tablecolor=%2340b800&textcolor=%2339a5ff"
        frameborder="0"></iframe>
    </div>
  `,
  interests: `
    <div class="int column left">
      <div class="int-nav-box box">
      <br><br><br><br><br>
        <h2>Navigation</h2>
        <a href="#" class="nav-link" data-page="home">Home</a>
        <a href="#" class="nav-link" data-page="interests">Interests</a>
        <a href="#" class="nav-link" data-page="shrines">Shrines</a>
        <a href="#" class="nav-link" data-page="art">Art</a>
        <a href="#" class="nav-link" data-page="blog">Blog</a>
        <a href="#" class="nav-link" data-page="friends">Friends</a>
        <a href="#" class="nav-link" data-page="extras">Extras</a>
      </div>
      <div class="intleftbot-box box">
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br>
        <h3>Characters I like!</h3>
        <img src="https://file.garden/Z7_GXKMzaAXvDQIE/Jade.gif" >
        <p><b>Jade Harley (Homestuck)</b> - I adore her SO much! I just love her character and personality 
        in general - how self sufficient, smart and whimsical she can be - and the whole aesthetic she had 
        going in the beginning of the comic, mixing gardening with technology, which kind of reminds me of
        one of my favorite aesthetic: Frutiger Aero! Just thinking about her makes me smile!</p>
        <br>
        <img src="https://file.garden/Z7_GXKMzaAXvDQIE/Spongebob" width="200">
        <p><b>Spongebob</b> - I've drifted away from this show when I was a young teenager, but
        now that I'm older, I always find myself coming back to some of my favorite episodes from
        time to time! I get that he can be insufferable when he's not well writen, but I still adore this
        silly sponge and his pet snail! Thank you, Stephen Hillenburg, for this show!</p>
        <br>
        <img src="https://file.garden/Z7_GXKMzaAXvDQIE/danae.gif" width="100">
        <p><b>Danaë (Amillusion)</b> - Danae is more of an obscure character - coming from a Yume Nikki
        fangame - she, alongside the game she comes from, are one of my favorite when it comes to YN fangames!
        Usually, in most of these games, the characters often have disturbing themes going on around them, but
        Danae is just a normal girl with an ordinary life. I really love how silly and cute she is, alongside her
        quirky dreams that express her artistic & whimsical side!</p>
        <br>
        <img src="https://file.garden/Z7_GXKMzaAXvDQIE/Ange" width="100">
        <p><b>Ange Ushiromiya (Umineko)</b> - If you haven't read Umineko yet, I absolutely recommend you
        to! Both visual novel and manga are great, but what I really enjoyed about this media was Ange
        herself, and how well writen she is. I can relate to her on so many levels & I've never felt so
        connected to a character before until I've met her... her outfit is also fire!</p>
        <br>
        <p><b>More characters will <i>probably</i> be added another time...!</b></p>
      </div>
    </div>

    <div class="int column center">
      <h2>Interests</h2>
      <img src="site/divider2.gif" alt="Divider" width="300px">
      <br>
      <p>My name is Igor, as some of you may already know, but I am also known by my full government
      assigned names deviousGiggler, yugiohlover3 and typhonicLove. If you're wondering, yes, I am slavic. I come from
      The Balkans, and I am someone who draws and codes for fun. 
      I like to create things that bring me joy! I really love music, and I'm always open up for music
      recommendations! :D
      <br><br>
      My angel number is 777, my favorite juice flavors are pineapple and elderberry flower, my favorite
      animals are cats, snails (both land & aquatic) and Japanese spider crabs, I love playing instruments 
      like my flute and synthesizer, I enjoy whimsy such as pirates, wizards, fairies, mermaids, etc...
      <br><br>
      I am also a big fan of retro and old-school stuff! Whether it's music, games, aesthetics, or
      just any kind of media!</p>
      <br>
      <p>Right now I am planning on making shrines to further extend information about some of my favorite
      interests, so stay tuned for that! If I do end up having the motivation to finish those projects, that
      is...</p>
    </div>

    <div class="int column right">
      <div class="intrighttop-box box">
      <br><br><br><br><br><br><br><br><br><br><br>
      <h3>Music genres/artists</h3>
      <p><b>Genres:</b> Eurobeat, Eurodance, Bubblegum Dance, Vaporfunk, Vaporwave, Synthwave, Acid Jazz,
      Jazzwave, Jungle, Drum n' Bass (Liquid, Drumfunk, Hardstep), Trance, Dubstep, Breakcore, Chiptune,
      8-bit, 16-bit, Ambient, Classical, Impressionist, Bossa Nova, Alternative Rock, Post-Punk, Indie Rock</p>
      <p><b>Artists:</b> Mr Bungle, The Garden, Block Out, E-PLAY, Darkwood Dub, Ekatarina Velika, 
      Cage The Elephant, Emezie Okorafor, Crush 40, Two Door Cinema Club, tv room, Kero Kero Bonito, 
      Jack Stauber, Lemon Demon, Graham Kartna, Vanilla, Waterflame, PilotRedSun, PengoSolvent, LTJ Bukem,
      Go 2, Ace (Eurobeat), Dave Rodgers</p>
      </div>
      <div class="intrightbot-box box">
      <h3>Game genres</h3>
      <p>Story Driven Games, Puzzles, Logic-based puzzles, Platformers, Exploration, Adventure, Visual Novels, 
      RPGMaker (including horror), Psychological Horror, Old Flash games, Metroidvania, Rhythm Games, Music Making
      games...</p></div>
    </div>
  `,
  shrines: `
   <div class="shr column center">
      <h2>Shrines</h2>
      <img src="site/divider2.gif" alt="Divider" width="300px">
      <br>
      <p>So... this is awkward...<br>
      There's nothing here yet! Check back again later?
      <br>
      <br>
      <br>
      <h2><span class="back-btn" onclick="goBack()">Go back</span></h2>
    </div>
  `,
    art: `
    <!-- Left column (Navigation + Bottom Box) -->
<div class="art column left">

  <div class="art-nav-box box">
  <br><br><br><br><br>
    <h2>Navigation</h2>
    <a href="#" class="nav-link" data-page="home">Home</a>
    <a href="#" class="nav-link" data-page="interests">Interests</a>
    <a href="#" class="nav-link" data-page="shrines">Shrines</a>
    <a href="#" class="nav-link" data-page="art">Art</a>
    <a href="#" class="nav-link" data-page="blog">Blog</a>
    <a href="#" class="nav-link" data-page="friends">Friends</a>
    <a href="#" class="nav-link" data-page="extras">Extras</a>
  </div>

  <div class="artleftbot-box box">
  <br><br>
    <h2>Years</h2>
    <div class="year-buttons">
      <button data-year="2020">2020</button>
      <button data-year="2021">2021</button>
      <button data-year="2022">2022</button>
      <button data-year="2023">2023</button>
      <button data-year="2024">2024</button>
      <button data-year="2025">2025</button>
    </div>
  </div>

</div>

<!-- Center column -->
<div class="art column center" id="art-gallery">
  <h2>Art</h2>
  <img src="site/divider2.gif" alt="Divider" width="300px">
  <p>I love drawing! Ever since I was a kid I've always spent most of my time drawing, and still do, even
  if I'm not really the best at it. Art just brings me comfort and a sense of calmness whenever I'm in a
  stressful situation, and I'm sure a lot of people can relate. :)
  <br><br>
  One of my favorite things to do is paint landscapes and do pixel art, especially in Microsoft Paint! I give my respect
  to anyone who's able to draw in that program. XD If I wasn't so used to it, I'd probably draw in better
  drawing programs instead, but it's just so satisfying to see the end results in a program that's honestly
  kind of difficult to draw in.
  <br><br>
  I also like to do pixel art occasionally, specifically the PC-98 kind of pixel art, because I find that
  artstyle and the aesthetic overall gorgeous! Most of the pixel art I do is, again, in Microsoft Paint, but
  if it comes to drawing humans, I switch to another program to make things easier for myself.
  <br><br>
  I've also tried Paint 3D recently! It's pretty fun, but trying to make actually detailed things makes the
  program reaaaallyyyyy laggy!!! T_T Which is why I dropped it quickly.
  <br><br>
  What I'm planning right now is to learn to shade better, and to draw humans more, because my anatomy is
  actually really terrible. I only know how to do like, atleast 3 poses without using thousands of references
  and tutorials. XD
  <br><br>
  Regardless, creativity isn't reserved only for artists, it's a form of pure psychology shaped by our
  environment, motivation, and other influences. I believe everyone is expressive and imaginative in their own 
  way. Even our mistakes can be seen as a form of creativity & that's why it's not a privilege, but something 
  everyone can learn! :)</p>
  <div id="gallery-images"></div>
</div>

<div id="lightbox">
  <img src="" alt="Full-size artwork">
</div>
    `,
blog: `
  <div class="blo column left">
    <div class="blo-nav-box box">
      <br><br><br><br><br><br><br>
      <h2>Navigation</h2>
      <a href="#" class="nav-link" data-page="home">Home</a>
      <a href="#" class="nav-link" data-page="interests">Interests</a>
      <a href="#" class="nav-link" data-page="shrines">Shrines</a>
      <a href="#" class="nav-link" data-page="art">Art</a>
      <a href="#" class="nav-link" data-page="blog">Blog</a>
      <a href="#" class="nav-link" data-page="friends">Friends</a>
      <a href="#" class="nav-link" data-page="extras">Extras</a>
    </div>
  </div>

  <div class="blo column right">
    <h2>Blog</h2>
    <img src="site/divider2.gif" alt="Divider" width="300px">
    <p><b>10/7/2025</b> - I've finally finished the revamp of my website and I'm SO happy with how it turned 
    out! But stiching and gluing all of this together with my rusty coding skills was a pain in the ass!
    I spent working on this for a whole week multiple hours per day, and I'm still not 100% finished with it... 
    T_T
    <br><br>
    Oh well, besides that, today was my 2nd day of college! I didn't get to go on the first day because I
    was feeling nauseous, but we aren't required to go anyways, so I didn't really care. The thing is, I have
    really terrible social anxiety, and having to travel alone by myself was honestly... not even the scariest
    part, it was actually pretty nice, but I started hyperventilating as the bus was pulling closer to the
    bus stop. Funny thing is, in middle of my panicked state, I just stopped and asked myself: "What am I
    even panicking over?" And I immediately calmed down. XD
    <br><br>
    If there is anyone else who's struggling like I am with these kinds of things, especially with college,
    please remember that everyone here is an adult, and one of the best advices I've gotten was from my mom,
    in which she told me that I'm here for myself, and not for others. The fear of being judged and viewed 
    poorly by others shouldn't be my main focus when going to college.
    <br><br>
    Obviously, that won't get rid of my anxiety entirely, but I think my first day of physically being there
    wasn't that bad. It was a bit awkward and I kind of embarrassed myself right at the end of the class, but
    honestly, I couldn't care less because all that I wanted to do was get home due to how fatigued I was. XD</p>
    <br><center>----------------------------------------------------------------------------------------------------------------------------</center><br>
    <p><b>10/6/2025</b> - Testing</p>
  </div>
  `,
    friends: `
      <div class="fri column left">
    <div class="fri-nav-box box">
      <br><br><br><br><br><br><br><br>
      <h2>Navigation</h2>
      <a href="#" class="nav-link" data-page="home">Home</a>
      <a href="#" class="nav-link" data-page="interests">Interests</a>
      <a href="#" class="nav-link" data-page="shrines">Shrines</a>
      <a href="#" class="nav-link" data-page="art">Art</a>
      <a href="#" class="nav-link" data-page="blog">Blog</a>
      <a href="#" class="nav-link" data-page="friends">Friends</a>
      <a href="#" class="nav-link" data-page="extras">Extras</a>
    </div>
  </div>

  <div class="fri column right">
<h2>Friends</h2>
  <img src="site/divider2.gif" alt="Divider" width="310px">
  <h3><a href="https://zethyer.carrd.co/" class="friend-link" style="color: #d79bffff;">Zet</a>
</h3>
<p>Zet's website reminds me of a constellation! Be sure to also check out her Toyhouse!</p>
  <h3><a href="https://leassummer.carrd.co/" class="friend-link" style="color: #ffc6e6ff;">Lea</a>
</h3>
<p>Lea's Carrd is perfectly accustomed to summer!</p>
  <h3><a href="https://toyhou.se/WindwheelAster" class="friend-link" style="color: #a1a6f1ff;">Aster</a>
</h3>
<p>Be sure to check out Aster since he does adorable art commissions!</p>
  <h3><a href="https://riqochet.nekoweb.org/" class="friend-link" style="color: #fffbdaff;">Riqo</a>
</h3>
<p>Riqo's detailed website inspired me to create my own. :) There is a lot of things to check out here!</p>
  <h3><a href="https://doppiostaples.carrd.co/" class="friend-link" style="color: #ff93abff;">Nini</a>
</h3>
<p>Be careful not to get captured by the aliens when visiting Nini!</p>
  <h3><a href="https://souromo.carrd.co/" class="friend-link" style="color: #ffa2d1ff;">Romo</a>
</h3>
<p>Romo has a super cutesy Carrd that reminds me of old girl games websites! :D</p>
  <h3><a href="https://venrain.neocities.org/" class="friend-link" style="color: #bba9fdff;">Ven</a>
</h3>
<p>Ven's website is themed around old internet aesthetics & is quite pleasing to look at!</p>
  </div>
  `,
    extras: `
   <div class="ext column center">
      <h2>Extras</h2>
      <img src="site/divider2.gif" alt="Divider" width="350px">
      <b><h2>Credits:</h2>
      <p><h3>Stamps:</h3></b>
      <a href="https://www.deviantart.com/w0rmsprite/art/jade-fan-1089134686">Jade fan stamp</a>
      <a href="https://www.deviantart.com/w0rmsprite/art/rose-fan-1089133662">Rose fan stamp</a>
      <a href="https://www.deviantart.com/tombstone/art/Becquerel-Stamp-213233660">Good dog stamp</a>
      <a href="https://www.deviantart.com/jebdamaster/art/Doodle-Stamp-1200044537">Doodle stamp</a>
      <a href="https://www.deviantart.com/zara-leventhal/art/I-Love-Rainbows-Stamp-272376650">Rainbow stamp</a>
      <a href="https://www.deviantart.com/zara-leventhal/art/I-Love-Clouds-Stamp-262246327">I love clouds stamp</a>
      <a href="https://www.deviantart.com/storksstamps/art/Sunflower-Shop-Stamp-1231682593">Sunflower shop stamp</a>
      <a href="https://www.deviantart.com/ittichy/art/I-Love-Rainy-Days-Stamp-801843933">Rainy days stamp</a>
      <a href="https://www.deviantart.com/xxxprincessizzyxxx/art/Spring-Daffs-Stamp-160481116">Daffodils = Spring stamp</a>
      <a href="https://www.deviantart.com/star-fettuccine/art/Basil-Stamp-1085039371">Basil stamp</a>
      <a href="https://www.deviantart.com/nyangsterstampsx3/art/Sweetheart-x-Spaceboy-Stamp-OMORI-1148388901">Sweetheart & Spaceboy stamp</a>
      <a href="https://www.deviantart.com/allivegotarerainbows/art/Spongebob-Stamp-349376808">Spongebob stamp</a>
      </p>
      <br>
      <p><h3>Home graphics:</h3>
      <a href="https://gifypet.neocities.org/">Gifypet</a></p>
      <a href="https://www.cbox.ws/">Cbox Live Chat</a></p>
      <a href="https://tenor.com/view/stars-ribbon-blue-decoration-gif-17552154">Blue divider (unknown source)</a></p>
      <a href="https://tenor.com/view/homestuck-jade-clap-clapping-excited-gif-27038093">Jade clapping gif</a></p>
      <br>
      <p><h3>Interests graphics:</h3>
      <a href="https://www.picmix.com/stamp/jade-harley-2690808">Jade dancing gif</a></p>
      <p>Spongebob hearts gif (Source unknown :c)</p>
      <a href="https://compoteteam.wixsite.com/teamcompote/amillusion">Danaë walking gif</a></p>
      <a href="https://mugen.fandom.com/wiki/Ange_Ushiromiya?file=Ange_idle_stance.gif">Ange Ushiromiya stance gif</a></p>
      <br>
      <h3>Fonts:</h3>
      <p>Spicy Rice</p>
      <p>Raleway</p>
      <p>Calibri</p>
      <br>
      <p>--------------------------------------------------------------</p>
      <br>
      <b><h2>QnA:</h2></b>
      <br>
      <p><b>Which program was this site created on?</b></p>
      <p>Visual Studio Code! It's simple to use, and I absolutely recommend it!</p>
      <br>
      <p><b>How long have you been coding for?</b></p>
      <p>I was taught in school back in 2021, but only the really basic things, which is why
      I started learning by myself around late spring of 2025.</p>
      <br>
      <p><b>How long did it take to make this site?</b></p>
      <p>About a week. I spent 2-3+ hours daily working on this... T_T</p>
      <br>
      <p><b>How do you host a site?</b></p>
      <p>I use GitHub because it's safe and free to use. Although, I'm sure there are better alternatives, such as 
      Neocities.</p>
      <br>
      <p><b>Can you tell me a fun fact?</b></p>
      <p>Snails have thousands of teeth and can regenerate part of their eyes if damaged. :)</p>
      <br>
      <p>--------------------------------------------------------------</p>
      <br>
      <h2><span class="back-btn" onclick="goBack()">Go back</span></h2>
    </div>
  `
};

// Load home page
mainContent.innerHTML = pages.home;


// nav
function attachNavEvents() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page;
      if (pages[page]) {
        mainContent.innerHTML = pages[page];
        attachNavEvents(); 
        if (page === "art") attachArtGalleryEvents(); // 👈 added this
      }
    });
  });
}



attachNavEvents();


function goBack() {
  mainContent.innerHTML = pages.home;
  attachNavEvents(); 
}


// Map each year to the images you have in the "art" folder
const galleryData = {
  "2020": ["art/1.png", "art/2.png", "art/3.png"],
  "2021": ["art/4.jpg", "art/5.png", "art/6.png"],

  "2022": ["art/7.png", "art/8.png", "art/9.png", "art/10.png", "art/11.png", "art/12.png", "art/13.png",
     "art/14.png", "art/15.png", "art/16.png"],

  "2023": ["artarchive/csm/1_23.png", "artarchive/csm/2_23.png", 
    "artarchive/pixel/1_23.gif", "artarchive/pixel/2_23.gif", "art/18.png", "art/19.jpg", 
    "artarchive/misc/2_23.png", "artarchive/misc/3_23.png", "artarchive/misc/1_23.png", 
    "artarchive/csm/4_23.png", "artarchive/ynfg/1_23.png"],

  "2024": ["artarchive/csm/4_24.png", "artarchive/oc/2_24.jpg", "artarchive/oc/3_24.png", 
    "artarchive/regret/1_24.png", "artarchive/oc/24_unknown.gif", "artarchive/oc/5_24.png", "artarchive/oc/7_24.png", 
    "artarchive/pixel/1_24.png", "art/21.png", "artarchive/oc/8_24.png",
    "artarchive/regret/2_24.png", "artarchive/umineko/1_24.png", "artarchive/pixel/2_24.gif", "art/22.png"],

  "2025": ["art/23.png", 
    "artarchive/ynfg/5_25.png", "artarchive/oc/10_25.png", "artarchive/oc/11_25.gif", 
    "artarchive/ynfg/6_25.gif", "artarchive/oc/13_25.gif", "artarchive/oc/12_25.png", "art/24.png", 
    "art/25.png", "art/26.png", "artarchive/oc/15_25.png", "artarchive/ynfg/7_25.png","artarchive/oc/16_25.gif", "artarchive/oc/18_25.png",
    "artarchive/umineko/1_25.png", "art/27.png", "artarchive/pixel/2025_unknown_2.gif",
    "artarchive/ynfg/8_25.png", "art/29.png", "art/30.png",
    "art/31.png", "artarchive/umineko/2_25.png", "artarchive/ynfg/12_25.png", 
    "artarchive/ynfg/11_25.png", "artarchive/ynfg/scrapped girl_25.png", "artarchive/pixel/2_25.png",
    "artarchive/forsaken/1_25.png",
    "artarchive/forsaken/4_25.png", "artarchive/forsaken/6_25.png", "artarchive/forsaken/9_25.png",
    "artarchive/misc/6_25.png", "artarchive/oc/21_25.png", "artarchive/oc/22_25.png", "artarchive/oc/23_25.png", 
    "artarchive/oc/24_25.png", "artarchive/pixel/1_25.gif", "art/32.png", "artarchive/forsaken/15_25.png",
    "artarchive/forsaken/16_25.png", "artarchive/misc/8_25.png", "artarchive/oc/25_25.png",
    "artarchive/oc/26_25.png", "artarchive/oc/27_25.png"]
};

function attachArtGalleryEvents() {
  const buttons = document.querySelectorAll(".year-buttons button");
  const gallery = document.getElementById("gallery-images");

  if (!buttons.length || !gallery) return; // stop if not on art page

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const year = btn.getAttribute("data-year");
      const images = galleryData[year];

      gallery.innerHTML = ""; // clear old images
      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.width = 200; // optional fixed size
        img.height = 200;
        img.style.display = "block";
        img.style.margin = "10px auto";
        gallery.appendChild(img);
      });
    });
  });
}


// Handle image clicks for full-size view
document.addEventListener("click", (e) => {
  if (e.target.matches("#gallery-images img")) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox.querySelector("img");
    lightboxImg.src = e.target.src; // show clicked image
    lightbox.style.display = "flex"; // show overlay
  }

  // Close the lightbox if you click outside the image
  if (e.target.id === "lightbox") {
    e.target.style.display = "none";
  }
});


function attachArtGalleryEvents() {
  const buttons = document.querySelectorAll(".year-buttons button");
  const gallery = document.getElementById("gallery-images");
  const placeholderText = document.querySelector("#art-gallery p"); // targets any <p> inside art gallery

  if (!buttons.length || !gallery) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Hide the <p> placeholder text
      if (placeholderText) placeholderText.style.display = "none";

      const year = btn.getAttribute("data-year");
      const images = galleryData[year];

      gallery.innerHTML = ""; // clear old images
      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.width = 200;
        img.height = 200;
        img.style.display = "block";
        img.style.margin = "10px auto";
        gallery.appendChild(img);
      });
    });
  });
}
