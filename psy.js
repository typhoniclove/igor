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
      <span>I PREDAVANJE - Uvod u biološku psihologiju</span>
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
      <span>I PREDAVANJE - Uvod u kognitivnu psihologiju</span>
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
      <span>I PREDAVANJE: Uvod u kreativnu psihologiju</span>
      <span class="arrow">▼</span>
    </div>
    <div class="lesson-content kreativnost">
    <h3>Kada ste poslednji put bili kreativni?</h3>
      <p>- Pitanje traži da se setimo trenutka kada smo nešto uradili na nov, originalan način. Ne nužno umetnički, već bilo kakav izraz naše maštovitosti ili snalažljivosti.
      <br><br>
      Na primer:
      <br><br>
      - <b>Albert Ajnštajn</b> - Dobio je kompas, i zapitao se zašto igla uvek pokazuje na sever, iako je ništa ne dodiruje. To ga je toliko zaintrigiralo da je počeo da razmišlja o nevidljivim silama u prirodi, što je kasnije dovelo do njegovih naučnih otkrića.
      <br><br>
      - <b>Frida Kalo</b> - Nakon teške saobraćajne nesreće, bila je dugo prikovana za krevet, ali je tada počela da slika portrete sebe, zbog ogledala ispred nje, ali takođe i ono što je osećala.
      <br><br>
      - <b>Mihajl Čiksentmihajlji</b> - On je proučavao kreativnost i stanje "toka" (flow), to je ono kada si potpuno uronjen u neku aktivnost, zaboraviš na vreme, umor i sve oko sebe jer si u potpunosti fokusiran na ono što radiš.</p>
      <hr>
      <h3><i>Šta je kreativnost?</i></h3>
      <p>- <b>Kreativnost</b> je sposobnost da se <u>proizvedu</u> ideje, rešenja ili proizvodi koji su <u>istovremeno originalni i korisni</u>.
      <br>
      - Kreativnost <u>nije samo nešto novo</u>, već nešto novo što <u>ima smisla u određenom kontekstu</u>.
      <br><br>
      - <b>Originalnost</b> = Novina, neponovljivost, iznenađujuće rešenje...<br>
      - <b>Korisnost</b> = Primenljivost, funkcionalnost, relevantnost za situaciju...</p>
      <hr>
      <h3><i>Šta <u>nije</u> kreativnost?</i></h3>
      <p>- Nije isto što i <b>intelegencija</b>. Ljudi sa prosešnim IQ-om mogu biti vrlo kreativni i obrnuto.<br>
      - Nije <b>nepredvidiva genijalnost</b> rezervisana samo za umetnike ili "<i>lude naučnike</i>".<br>
      - Nije samo stvar <b>talenta</b>, već i <b>navike, procesa i vežbanja</b>.<br>
      - Nije uvek uočljiva ili velika. Može biti i u malim svakodnevnim stvarima. (<u>Mikrokreativnost</u>)
      <hr>
      <h3><b>Kreativnost nije dar za izabrane</b></h3>
      Kreativnost je <b>kognitivna, emocionalna i socijalna</b> sposobnost koju <u>svi</u> posedujemo i razvijamo.
      <hr>
      <h3>Psihološke definicije kreativnosti</h3>
      Standardna definicija kreativnosti / Runco i Jaeger (2012):<br>
      "<i><b>Kreativnost zahteva i originalnost i korisnost.</b></i>"
      <br><br>
      - Autori objedinjuju različite pristupe kreativnosti u jednu operativnu definiciju.
      <br><br>
      - <b>Originalnost</b> = Nova ideja koja se razlikuje od uobičajenih rešenja.<br>
      - <b>Korisnost (Adekvatnost)</b> = Ideja mora biti upotrebljiva, odgovarajuća kontekstu
      <br><br>
      - Definicja daje jasne kriterijume - može se proceniti da li je ideja nova i da li rešava neki problem. 
      <hr>
      <h3>Teorija investiranja u kreativnost</h3>
      "<b>Kreativni ljudi kupuju niske ideje i prodaju ih visoko.</b>"
      (<i>Investment theory of creativity</i>)
      <br><br>
      Ova metafora dolazi iz sveta ekonomije i opisuje kreativne ljudi kao one koji:
      <br><br>
      - Vide <b>potencijal u ideji</b> koja trenutno nije <u>popularna ili prihvaćena</u>.<br>
      - <b>Ulažu trud</b> da tu ideju razviju, prodaju je, učine je važnom.<br>
      - <b>Suprotstavljaju se konvenciji</b>, jer veruju u vrednost svoje ideje iako ona još nije prepoznata.
      <hr>
      Kreativnost se javlja na preseku šest faktora:<br><br>
      <b>1. Intelektualne sposobnosti</b> (Analitičko, sintetičko i praktično mišljenje.)<br>
      <b>2. Znanje</b> (Neophodna osnova, ali ne previše da bi se izbegao konformizam.)<br>
      <b>3. Stil mišljenja</b> (Preferencija za originalnost i samostalno razmišljanje.)<br>
      <b>4. Lične karakteristike</b> (Otvorenost, hrabrost, ustrajnost.)<br>
      <b>5. Motivacija</b> (Najčešće unutrašnja.)<br>
      <b>6. Okruženje</b> (Podsticajno ili sputavajuće.) <br>
      
      <br><br>Ova teorija je ne vidi kreativnost isključivo kao ličnu osobinu, već kao <u>interakciju sposobnosti, ličnosti i konteksta</u>. Naglašava ulogu izbora, rizika i truda.
      <br><br>
      Dakle:<br>
      - Sposobnosti -> Koliko znaš i umeš da razmišljaš;<br>
      - Ličnost -> Koliko si otvoren, hrabar, uporan;<br>
      - Kontekst -> Da li te okruženje podržava ili sputava.<br>
      <hr>
      <h3>Ključne karakteristike kreativnosti</h3>
      <b>1. Divergentno mišljenje</b><br><br>
       - Generisanje <u>više mogućih rešenja</u> za jedan problem.<br>
       - Suprotno <u>konvergentnom mišljenju</u> (Gde postoji jedno tačno rešenje.)<br>
       - Merenje kroz testove poput <u>Guilfordovog testa divergentnog mišljenja</u>.<br><br>

       - Primer: Koliko različitih načina postoji da iskoristimo ciglu?<br> Razmisli na trenutak, van okvira.
       <br><br>
       Moji odgovori: Kao stolicu, blokada u mislima, držac za knjigu, obojiti je i koristiti kao dekoraciju. :D
       <hr>
      <b>2. Fleksibilnost</b><br>
      <br>- <u>Najvažnija karakteristika.</u> Sposobnost promene perspektive i prilagođavanja.<br>
      - Oslobađanje od rigidnog, linearnog razmišljanja.<br><br>
      Šta ovo znači? Kad ne zapneš za jedno rešenje, već umeš da promeniš pristup.
      <br><br>
      - Primer: Ako te neko pita "<i>Kako možeš iskoristiti ciglu?</i>", neko će reći "<i>da sagradiš zid</i>", 
      ali <u>fleksibilna</u> osoba će reći "<i>kao držač za vrata</i>", "<i>kao uteg</i>"...
      <br><br>
      - Drugi primer: Kad ne možemo da nađemo običan ključ, koristimo šrafciger ili novčić.
      <hr>
      <b>3. Originalnost</b><br><br>
       - Proizvodi koje niko (ili gotovo niko) drugi ne bi smislio.<br>
       - Može biti radikalna (Potpuno nova) ili inkrementalna (Nadogradnja).<br>
       - Često merena statističkom retkoćom odgovora u testovima.
      <hr>
      <b>4. Spontanost i igra</b><br><br>
      - Mnogi kreativni procesi počinju kroz <u>eksperimentisanje bez cilja</u>.<br>
      - Igra i radoznalost omogućavaju "lutanje" koje vodi do uvida.<br><br>
      - <u>Igra sa rečima može dovesti do pesme ili slogana</u>
      <hr>
      Kreativnost nije mistična ili rezervisana samo za umetnost, ona je psihološki proces koji uključuje:<br>
      - Stvaranje nečeg novog (<u>Originalnost</u>),<br>
      - Što ima vrednost u datom kontekstu (<u>Korisnost</u>),<br>
      - Oslanja se na misaone veštine (<u>Divergencija, fleksibilnost</u>),<br>
      - Oblikuje se <u>kroz motivaciju</u>, znanje i okruženje.
      <hr>
      <h3><i>Može li greška biti kreativna?</i></h3>
      - <b>Može.</b> U kreativnosti, greške često vode do novih ideja.<br>
      - Kada nešto pogrešiš, možeš otkriti nešto neočekivano što bi inače propustio.<br>
      - Neke od najpoznatijih inovacija nastale su "greškom".

      <h3><i>Da li nešto može biti kreativno ako nije korisno?</i></h3>

      - <b>Može.</b> Kreativnost nije uvek praktična ili korisna.<br>
      - Bitno je da ideja, izraz ili delo budu originalni i novi, čak i ako nisu upotrebljivi, jer pokazuju <u>jedinstveno razmišljanje ili neuobičajen pristup</u>.

      <h3><i>Da li je kreativnost urođena ili naučena?</i></h3>
      - Kreativnost je <b>narođena, nije privilegija.</b><br>
      - Ali ako gledamo logički, ona može biti oba; neki ljudi prosto imaju neke prirodne talente, ali kreativnost se jača i oblikuje kroz iskustvo i učenje. 
      <hr>
      Kreativnost nije privilegija umetnika ili naučnika, ona je prisutna u <b>svima nama, svakog dana,</b> kada:<br><br>
      - Prelazimo prepreke,<br>
      - Razmišljamo van okvira,<br>
      - Igramo se s idejama,<br>
      - Kombinujemo poznato na nov način.<br>
      <hr>
      <h3>Kreativnost u nauci</h3>
      - Kreativnost u nauci često se manifestuje kroz <b>intuitivne uvide</b>, stvaranje <b>novih modela</b>, otkrivanje <b>veza između naizgled nepovezanih pojava</b>, kao i kroz <b>alternativne načine rešavanja problema</b>.
      <br><br>
      - Znači: Imati <u>iznenadne ideje</u>, praviti nove <u>modele/teorije</u>, spajati stvari koje <u>na prvi pogled nemaju veze</u> i pronalaziti nove načine da se <u>reše problemi</u>.
      <hr>
      <h3>Albert Ajnštajn</h3>
      - Kada je imao samo 16 godina, Albert Ajnštajn je sebi postavio jedno naizgled detinje, ali genijalno pitanje:<br><br>
      "<i>Šta bi se desilo kada bih mogao da jašem na zraku svetlosti?</i>"<br><br>
      - Umesto da uči fiziku iz knjiga, on je zamišljao <b>kao umetnik</b>, <u>ne kao matematičar</u>.<br>
      - U svojoj mašti video je sebe kako putuje kroz prostor paralelno sa zrakom svetlosti.<br>
      - Ako se kreće jednako brzo kao svetlost, pitao se, <b>da li bi svetlost oko njega "<i>zastala</i>"?</b><br>
      - Da li bi i dalje video talase svetlosti ili bi sve postalo zamrznuto?<br>
      - To pitanje, koje je počelo kao misaoni eksperiment, <b>postalo je osnova za Teoriju relativiteta</b> mnogo godina kasnije.
      <hr>
      <h3>Najpoznatije Ajnštajnove rečenice o kreativnosti</h3>
      "<i>Mašta je važnija od znanja. Znanje nam kaže šta jeste, a mašta pokazuje šta može biti.</i>"
       <br><br>
       "<i>Logika te vodi od tačke A do tačke B. Mašta te vodi svuda.</i>"
       <br><br>
       "<i>Ne mogu da učim ničega iz knjiga ako u glavi ne mogu da zamislim sliku onoga što učim.</i>"
       <h3>Kreativnost u umetnosti</h3>
       - Umetnost je tradicionalno povezivana sa kreativnošću, ali čak i u umetnosti, kreativnost ne znači samo "stvarati lepo" već <b>razmišljati drugačije, pomerati granice, izražavati ono što se teško izgovara</b>.
       <hr>
       <h3>Pablo Pikaso</h3>
       
       - Kada je imao samo devet godina, Pablo Pikaso je naslikao <a href="https://www.pablo-ruiz-picasso.net/images/works/261.jpg" target="_blank">Picador</a>, sliku toreadora na konju.<br>
       - Učitelji i roditelji su bili zapanjeni - dete je slikalo kao odrasli umetnik.<br>
       - Do svoje četrnaeste, Pikaso je vladao tehnikom realizma (senke, proporcije, anatomija), sve je bilo savršeno.<br>
       - Mogao je da naslika bilo šta i da to izgleda kao fotografija.<br>
       - Ali onda, neočekivano, <b>odustao je od savršenstva</b>.<br>
       - Počeo je da se "razgrađuje, da crta lica sa dva oka na istoj strani, ruke kao trouglove, svet iznutra, a ne spolja."<br>
       - Ljudi su se čudili, pitali su se zašto bi neko ko zna da slika kao majstor hteo da slika kao dete?<br><br>
       
       - "<i>Zato što da naučim da slikam kao Rafael trebalo mi je četiri godine, a ceo život da naučim da slikam kao dete</i>", govorio je.</h3>
       <hr>
       <h3>Tri poruke od Pikasa</h3>
        1. Kreativnost počinje kad se oslobodiš straha.<br>
        "<i>Inspiracija postoji, ali mora da te zatekne dok radiš."</i>
        <br><br>
        2. Greška je deo puta.<br>
        "<i>Akcija je osnova svakog uspeha. Počni i vidi gde te vodi."</i>
        <br><br>
        3. Umetnik vidi svet onakav kakav još ne postoji.<br>
        "<i>Svrha umetnosti je da opere prašinu svakodnevnog života s naših duša."</i>
        <hr>
        <h3>The Artist Is Present (MoMA) - Marina Abramovič</h3>
        <img src="https://www.moma.org/d/assets/W1siZiIsIjIwMTgvMTAvMzEvODJjNmRpcGExYl80MjY3OC5qcGciXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgOTAgLXJlc2l6ZSAyMDAweDIwMDBcdTAwM2UiXV0/42678.jpg?sha=f3a08b032397d6f6" width="500" />
        <br><br>
        - Marina je na stolicu u muzeju i <b>gledala ljude u oči</b>. Bez reči, bez dodira, samo prisustvo. <br>
        - Tri meseca, sedam sati dnevno, preko hiljadu ljudi.<br><br>

        - Ljudi su plakali. Neki su se smejali, drugi su se tresli. Jedan od njih bio je Ulay - njen bivši partner iz mladosti, čovek s kojim je nekad radila performanse o ljubavi i rastanku. 
        Kad su se njih dvoje pogledali - <u>nije bilo reči, samo suze</u>. Ta scena je obišla svet.<br><br>
        
        - To je bio trenutak u kom je Marina pokazala da <b>prisustvo, pažnja i ranjivost mogu biti moćniji od bilo kog spektakla</b>.
        <hr>
        <h3>Poruke koje iz nje možemo poneti</h3>
        1. Kreativnost traži ranjivost. <br>
        Umetnik mora da se otvori, ne da bi bio voljen, nego da bi bio stvaran.
        <br><br>
        2. Prisutnost je umetnost.<br>
        Biti tu ponekad je najveći čin stvaranja.
        <br><br>
        3. Kreativnost nije inspiracija, to je disciplina.<br>
        "<i>Inspiracija dolazi samo ako joj napraviš prostor. Tišina je moja laboratorija.</i>"
        <hr>
        <h3>Kreativnost u svakodnevnom ŽIVOTU</h3>
        - Najčešće zanemarena, ali izuzetno važna <b>kreativnost u svakodnevici</b> je fleksibilnost, snalažljivost i sposobnost da improvizujemo, prilagodimo i pronađemo nova rešenja u poznatim okolnostima.
        <br><br>
        - <b>Life hacks</b> - Neobična, ali efikasna rešenja (koristiti štipaljku da drži ekser dok ga zakucavaš)<br>
        - <b>Roditeljstvo</b> - Kako smiriti dete bez svađe.<br>
        - <b>Kuvanje bez recepta</b> - Pravljenje jela od onoga što imaš u frižideru.<br>
        - <b>Snalaženje</b> u putovanju - Rešavanje problema u hodu, improvizacija.
        <br><br>
        - Kreativnost je sposobnost da od poznatog sveta napravimo <b>nepoznato</b>, da ono što svi vide <b>povežemo na način na koji niko ranije nije povezao</b> i tako u stvarnost unesemo trag svoje <b>jedinstvenosti</b>.
        <br><br>
        Pikasov život je priča o tome da se kreativnost ne uči iz knjiga, već iz hrabrosti da budeš drugačiji.
        <br><br>
        Nije poštovao  "<i>pravila umetnosti</i>", on ih je stalno iznova izmišljao.
        <br><br>
        Danas ga pamtimo ne kao slikara, nego kao <b>simbol slobode</b> - slobode da <u>pogrešimo</u>, da <u>eksperimentišemo</u>, da <u>svet vidimo drugačije</u> i da u tome <u>pronađemo sebe</u>.
        <hr>
      <h2>Excellent!</h2>
      <img src="https://file.garden/Z7_GXKMzaAXvDQIE/Jade.gif" width="100">
      </p>
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
