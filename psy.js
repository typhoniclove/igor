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
  psihologijalekcija: `
  <h1>Psihologija</h1>




  <!-- PSIHOLOGIJA DRUGO PREDAVANJE -->

  <div class="lesson">
    <div class="lesson-header" onclick="toggleLesson(this)">
      <span>II PREDAVANJE: Metode i tehnike psihološkog istraživanja</span>
      <span class="arrow">▼</span>
    </div>
    <div class="lesson-content psihologija">
      <p><h3>Psihološko istraživanje</h3>
      - <b>Naučni empirijski proces prikupljanja analiziranja i tumačenja podataka o ponašanju, emocijama, mišljenju i doživljavanju ljudi, s ciljem da se razumeju zakonitosti psihičkog života i međuljudskih odnosa.</b><br>
      - Koristi metode i tehnike psihološkog istraživanja.
      <br><br>
      - Temelj psihologije kao nauke.<br>
      - Otkrivamo kaku ljudi misle, uče, rade, sarađuju, menjaju se, ...
      <br><br>
      - Sistematski pokušaj da se pomoću naučnih metoda <u>odgovori na psihološka pitanja.</u><br><br> Na primer:<br> 
      <i>"Zašto ljudi donose odluke na određeni način?"; <br>
      "Kako stres utiče na performanse zaposlenih?"; 
      <br>"Da li motivacija zavisi od nagrade?"; 
      <br>"Kako se formiraju timske uloge u organizacijama?"</i></p>
      <hr>
      <p><h3>Metode psihološkog istraživanja</h3>
      - Psihološko istraživanje, kao definicija je <u>opšti način organizovanja istraživanja nekog problema</u>, koji ima više faza:
      <br><br>
      <b>1) Formulisanje problema</b> Određivanje predmeta istraživanja - <i>"Šta je to što želim da istražim?"</i><br>
      <b>2) izrada plana istraživanja</b> - Faza pripreme - <i>"Ko, kako, gde, na kom uzorku, kojim tehnikama se vrši istraživanje?"</i><br>
      <b>3) Odabir tehnika</b> - Za prikupljanje i obradu podataka.</br>
      <b>4) Sprovođenje istraživanja</b> - Na osnovu prethodno sprovedenih faza.
      </p>
      <hr>
      <p><h3>Potela metoda u psihologiji</h3>
      <br><b>1. Subjektivne metode</b> - Zasnivaju se na subjektivnim podacima (doživljajima o kojima izveštavaju ispitanici.) 
      <br>1) <u>Introspekcija (Samoposmatranje)</u> 
      <br><br>
      <b>2. Objektivne metode</b> - Zasnivaju se na objektivnim podacima (Može da registruje / zabeleži svaki posmatrač koristeći čula ili aparate) 
      <br>1) <u>Posmatranje</u>
      <br>2) <u>Eksperiment</u></p>
      <hr>
      <p><h3>Introspekcija (Samoposmatranje)</h3>
      - <b>Samoposmatranje i samoizveštavanje o sopstvenim psihičkim doživljajima.</b> <p style="color: gray;">(Razmišljaš o tome šta osećaš ili kako se ponašaš - <u>posmatraš svoj unutrašnji svet.</u>)</p>
      <br>
      - Sadržaj misli, mašte, emocija, snova, … 
      - Veliki značaj u istoriji psihologije. 
      - Jedinstvena i nezamenljiva metoda jer se <u>jedino njom mogu dobiti podaci o doživljajima osobe</u> - njena najveća prednost.
      <hr>
      <h3>Posmatranje</h3>
      - <b>Plansko</b> (Unapred napravljen plan aktivnosti posmatranja),<br>
      - <b>Sistematsko</b> (prati se sve što je važno),<br>
      - <b>Sa ciljem određeno</b> (unapred se određuje predmet i svrha posmatranja),<br>
      - <b>Objektivno, kontrolisano</b> (vodi se računa o pojavama koje mogu uticati na predmet posmatranja)<br>
      - <b>Opažanje i  registrovanje izvesnih pojava, događaja i ponašanja ljudi</b> <p style="color: gray;">(Opažanje pažljivo posmatra i beleži - zapisuje - šta ljudi rade, kako se ponašaju i šta se dešava oko njih.)</p>
      <br><br>
      Prednost: Ispitivanje i analiziranje ispitanika i procesa koji su nedostupni introspekciji. To znači da je prednost posmatranja u tome što omogućava <u>istraživanje onih pojava i ponašanja koje ljudi ne mogu sami da opišu ili primete kod sebe</u>.
      <hr>
      <h3>Vrste posmatranja</h3>
      <b>1) Terensko posmatranje</b> - Pojave se posmatraju u prirodnim uslovima onako kako se spontano javljaju. 
      <br>- <u>Laboratorijsko posmatranje</u> - Pojave se posmatraju uz pomoć instrumenata, u laboratorijskim uslovima.
      <br><br>
      <b>2) Strukturisano posmatranje</b> - Plansko posmatranje u određenim vremenskim intervalima sa vođenjem zapisnika.
      <br> - <u>Nestrukturisano posmatranje.</u> 
      <br><br>
      <b>3) Posmatranje sa učešćem</b> - Posmatrač je aktivan učesnik u događajima koja su predmet posmatranja.
      <br>- <u>Posmatranje bez učešća</u> (Posmatrač je odvojen od predmeta posmatranja.) 
      <hr>
      <h3> Work in progress... </h3> 
      <p style="color: gray;">More notes to be added here!</p>

      </p>
    </div>
  </div>








<!-- PSIHOLOGIJA PRVO PREDAVANJE -->

  <div class="lesson">
    <div class="lesson-header" onclick="toggleLesson(this)">
      <span>I PREDAVANJE: Razvoj psihologije kao nauke</span>
      <span class="arrow">▼</span>
    </div>

   
    <div class="lesson-content psihologija">
      <h3>Šta čini psihologiju naukom?</h3>
      <p><b><i>Laici VS Psiholozi</b></i> - šta psihologiju čini naukom?</p>
      <p>1) Laici: Njihova "psihologija" često se zasniva na stereotipima.
      <br>Primer: <b>"Da li znaš šta trenutno mislim?"</b> ili <b>"Onaj ko ne gleda u oči sigurno laže."</b>
      <br><br>
      2) Psiholozi: Posmatraju psihologiju kao nauku, jer primenjuju naučne metode.
      <br>Primer: <b>Zašto se neko ponaša tako kako se ponaša? Kakav je neko kao čovek?</b></p>
      <hr>
      <p><h3><i>Psihologija</i></h3>
      - <b>Nauka o duši</b> (potiče od grčke reči psycha i logos)
      <br>- Psihologija izučava psihički život i ponašanje prvenstveno ljudi, ali i životinja.
      <br>- Sistematsko proučavanje psihičkog života ljudi i životinja na osnovu naučnog proučavanja objektivnog ponašanja i neposrednog iskustva. (Rot)
      <br>
      <br> Znači: Psihologija na organizovan, naučan način proučava šta se dešava u <u>unutrašnjem svetu ljudi i životinja</u> (njihov psihički život - misli, emocije, motivi...)</p>
      <hr>
      <br>
      1) Psihički procesi - Ono što se trenutno dešava u nama.
      <br>
      2) Psihičke osobine - Trajne crte ličnosti koje se razvijaju kroz iskustvo.
      <br>
      3) Manifestovanje u ponašanju - Način na koje se naši procesi i osobine <b>pokazuju spolja</b>, kroz ono što <b>radimo, govorimo i kako reagujemo</b>.
      <br><br>
      <hr>
      <p> - Psihologija proučava psihički život na 2 načina:
      <br>
      1) <b>Objektivno posmatranje</b> - ponašanje reagovanja, postupanja, ...
      <br>
      2) <b>Neposredno iskustvo</b> - koje imamo mi sami ili drugi ljudi o svojim doživljajima
      <br><br>
      Ukratko:
      <br>1) <u>Gledamo spoljašnje ponašanje.</u><br>
      2) <u>Slušamo unutrašnje doživljaje</u></p>
      <hr>
      <p><h3><i>Šta psihologiju čini naukom?</i></h3>
      - Psihologija izučava unutrašnji, psihički život čoveka i u njenoj osnovi su:
      <br><br>
      1) <b>Primena naučnih istraživanja;</b> (psiholozi ne nagađaju, već sprovode istraživanja i eksperimente da bi došli do dokaza.)
      <br><br>
      2) <b>Primena naučnog metoda u dolasku do naučnih činjenica;</b> (koriste naučni proces: postavljaju pitanje, prikupljaju podatke, analiziraju rezultate i donose zaključke.)
      <br><br>
      3) <b>Naučne činjenice treba da budu javne;</b> (rezultati moraju biti dostupni svima, kako bi drugi naučnici mogli da provere i potvrde (ili ospore) zaključke.)
      <br><br>
      4) <b>Naučne činjenice treba da budu objašnjene na što jednostavniji način.</b> (nauka treba da jasno objasni kako i zašto se nešto dešava, tako da to može svako da razume i proveri.)
      </p>
      <hr>
      <h3>Zadaci psihologije</h3>
      <p><b>1) Teorijski zadaci</b> - upoznavanje, opisivanje i objašnjavanje karakteristika i zakonitosti psihičkog života - davanje odgovora na tri pitanja:
      <br>
      1) Šta? = <i>opisivanje psihičkih pojava</i>
      <br>  
      2) Kako? = <i>kako se odvijaju psihičke pojave</i>
      <br>
      3) Zašto? = <i>otkrivanje uzroka psihičkih pojava</i>
      <br><br><br>
      <b>2) Praktični zadaci</b> - primena rezultata psiholoških istraživanja i teorijskih saznanja o psihičkom životu u cilju unapređenja različitih aspekta ljudskih delatnosti (vaspitnog procesa, mentalnog zdravlja, profesionalne aktivnosti, ...)
      <br><br><br>
      Ukratko:
      <br>Teorijski zadaci: <u>Razumeti psihički život.</u>
      <br>Praktični zadaci: : <u>Primeniti teoriju u praksi.</u></p>
      <hr>
      <h3>Istorijski razvoj psihologije - Kako je sve nastalo?</h3>
      <p>"<i>Psihologija ima dugu prošlost, ali kratku istoriju.</i>" <b>(Ebinghaus)</b>
      <br><br>
      Sledeći tekst govori o <u>prvim idejama u psihologiji i filozofiji</u> o ljudskoj psihi kroz istoriju:
      <br><br><br><br>

      <b>- Hipokrat</b> (5 vek p.n.e) = Tipologija temperamenta (kolerik, sangvinik, mlanholik i flegmatik)<br>Ideja: ljudi se razlikuju po karakteru i ponašanju zbog različitih "tempera".
      <br><br>

      <b>- Platon</b> (4 vek p.n.e) = Uverenje o dualizmu duše i tela (tela i duša su odvojeni)
      <br> - Analizira tipov duša kao osnov individualnih razlika.
      <br> - "Država" = Preteča profesionalne orijentacije.
      <br>"Država" je njegovo delo, preteča ideje o profesionalnoj orijentaciji (kako ljudi biraju zanimanja).
      <br><br>
      <b>- Aristostel</b> (4 vek p.n.e) = "Otac psihologije" = "O dušii" = "De Anima" = Prvo  psihološko delo.
      <br> - Introspektivni metod.
      <br> - Duša i telo su povezani i ne postoje jedno bez drugog.
      <br>
      Koristi introspektivni metod: posmatranje svojih misli i iskustava.
      </p>
      <hr>
      <br>
      - Kada se govori o osnivanju psihologije kao samostalne nauke spominju se:a
      <br><br>
      - <b>Vilhem Vunt</b> u Nemačkoj (Smatra se osnivačem osnova psihologije kao nauka.)
      <br>
      - <b>Frensis Galton</b> u Engleskoj
      <br>
      - <b>Vilijam Džejms</b> u SAD (Otac američke psihologije - Razvio je teoriju o emocijama.)
      <p style="color: gray;">Ovo ne mora da se pamti!</p>
      <hr>
      <h3>Psihološke škole i pravci</h3>
      <p>Psihologija se definiše na sledeće stavke:
      <br>
      <br><b>1) Strukturalizam</b> - Predstavnici: Vilhem Vunt i Edvard Tičener.
      <br><b>2) Funkcionalizam</b> - Predstavnici: Vilijam Džejms i Čarls Darvin.
      <br><b>3) Bihejviorizam</b> - Osnivač: Džon Votson.
      <br><b>4) Psihoanaliza</b> - Osnivač: Sigmund Frojd. 
      <br><b>5) Humanistička psihologija</b> - Predstavnici: Abraham Maslov, Karl Rodžers, i Gordon Olport.
      <br><br>
      - Čoveka na aktivnosti pokreću instikti:
      <br> "<b><i>Eros</i></b>" = Instikt života.
      <br> "<b><i>Tanatos</i></b>" = Instikt smrti.
      </p>
      <hr>
      <h3><i>Da ponovim:</i></h3>
      - Psihologija = sistem naučnih disciplina.
      <br><br>
      - <b>1) Teorijske grane psihologije:</b>
      <br>1. Opšta ili generalna psihologija.
      <br>2. Fiziološka psihologija.
      <br>3. Razvojna psihologija.
      <br>4. Socijalna psihologija. 
      <br>5. Psihologija ličnosti.
      <br><br>
      - <b>2) Primenje grane psihologije:</b>
      <br>1. Pedagoška psihologija.
      <br>2. Organizaciona pshiologija. 
      <br>3. Mentalna higijena.
      <br>4. Klinična psihologija.
      <hr>
      <h2>Excellent!</h2>
      <img src="https://file.garden/Z7_GXKMzaAXvDQIE/Jade.gif" width="100">
    </div>
  </div>
`,
bioloskalekcija: `
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
kognitivnalekcija: `
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
  kreativnostlekcija: `
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
  engleskilekcija: `
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
