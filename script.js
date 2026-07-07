// =========================
// SCREENS
// =========================

const loading = document.getElementById("loading");
const title = document.getElementById("title");
const opening = document.getElementById("opening");
const choice = document.getElementById("choice");
const creepy = document.getElementById("creepy");
const letterIntro = document.getElementById("letterIntro");
const letter = document.getElementById("letter");
const ending = document.getElementById("ending");

const continueBtn = document.getElementById("continueBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const openEnvelopeBtn = document.getElementById("openEnvelopeBtn");
const envelope = document.getElementById("envelope");
const nextBtn = document.getElementById("nextBtn");

// NEW
const blackScreen = document.getElementById("blackScreen");
const jumpscareImg = document.getElementById("jumpscareImg");
const horror = document.getElementById("horror");
const bgm = document.getElementById("bgm");
// =========================
// LOADING
// =========================

const progress = document.getElementById("progress");
const loadingText = document.getElementById("loadingText");

const loadingMessages = [

    "Hulat lang dhai",
    "I'll miss u beh",
    "Ayaw ko limta kung masakses naka",
    "Available ko always to talk~",
    "YIIIEE GRADUATE YAN SHA",
    "Cleaning up the battlefield"

];

let loadDots = 1;

loadingText.textContent =
loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

const loadingDots = setInterval(() => {

    loadingText.textContent =
    loadingMessages[Math.floor(Math.random() * loadingMessages.length)] +
    ".".repeat(loadDots);

    loadDots++;

    if(loadDots > 3){

        loadDots = 1;

    }

},700);

let value = 0;

const loadBar = setInterval(()=>{

    value++;

    progress.style.width = value + "%";

    if(value >= 100){

        clearInterval(loadBar);
        clearInterval(loadingDots);

        loading.classList.remove("active");
title.classList.add("active");
    }

},20);

// =========================
// OPEN LETTER
// =========================

continueBtn.addEventListener("click",()=>{

    // Start background music after user interaction
    bgm.volume = 0.35;
    bgm.loop = true;
    bgm.currentTime = 0;
    bgm.play().catch(err => console.log(err));

    title.classList.remove("active");
    opening.classList.add("active");

    const openingText =
    document.getElementById("openingText");

    let dots = 1;

    const animate = setInterval(()=>{

        openingText.textContent =
        "Opening" + ".".repeat(dots);

        dots++;

        if(dots>3){

            dots=1;

        }

    },300);

    setTimeout(()=>{

        clearInterval(animate);

        opening.classList.remove("active");
        choice.classList.add("active");

    },1200);

});

// =========================
// YES
// =========================

yesBtn.addEventListener("click",()=>{

    choice.classList.remove("active");
    letterIntro.classList.add("active");

});

// =========================
// NO
// =========================

noBtn.addEventListener("click",()=>{

    choice.classList.remove("active");
creepy.classList.add("active");

bgm.pause();
bgm.currentTime = 0;

horror.volume = 0.35;
horror.currentTime = 0;
horror.loop = true;
horror.play().catch(() => {});
    // Start creepy background music
horror.currentTime = 0;
horror.volume = 0.35;
horror.loop = true;
horror.play().catch(() => {});

    const creepyText =
    document.getElementById("creepyText");

    creepyText.innerHTML = "...";

    setTimeout(()=>{

        creepyText.innerHTML =
        "That wasn't one of your options.";

    },1800);

    setTimeout(()=>{

        creepyText.innerHTML =
        "I don't think<br>that was the right choice.";

    },5000);

    setTimeout(()=>{

        creepyText.innerHTML =
        "Try again.";

    },8500);

    // JUMPSCARE
    setTimeout(()=>{

        blackScreen.style.display = "block";

    },10200);

    setTimeout(()=>{

        blackScreen.style.display = "none";

// Stop creepy ambience
horror.pause();
horror.currentTime = 0;

// Show jumpscare
jumpscareImg.style.display = "block";

    },10700);

    setTimeout(()=>{

        jumpscareImg.style.display = "none";

bgm.currentTime = 0;
bgm.play().catch(() => {});

creepy.classList.remove("active");
choice.classList.add("active");

noBtn.style.display = "none";

    },11500);

});

// =========================
// OPEN ENVELOPE
// =========================

openEnvelopeBtn.addEventListener("click",()=>{

    envelope.classList.add("open");

    openEnvelopeBtn.style.display = "none";

    setTimeout(()=>{

        letterIntro.classList.remove("active");
        letter.classList.add("active");

        startTyping();

    },700);

});

// =========================
// LETTER
// =========================

const letterContent =
document.getElementById("letterContent");

const message = `Dear Kyang,

To my uwian-buddy, and the first 
friend I had outside saakong 
circle— Keanna Shane. 

Tung first years pa ta grabe kag impact saakoa, na realize nako na this person may judge me pero she will not shame me. Kaya I got so comfortable opening up saimoha. Imohang responses were sometimes kalagot pero I felt so heard. You did not make me feel less in those vulnerable times, and I tell you this na how impactful tung nag talk ta about sa akong first love sa may gilid sa chowking, as if nag illegal transact ta didto, and gipahilak ko nimo, gipastorya maskin wala jud kay total context sa everything. Ikaw ang first nako giingnan kay naulaw ko sa akong mga friends na I was crying over a KID. From that day forward, I owed you a lot. Dahil lang sa pakikinig mo nun na feel nako oh dili man diay toh shameful akong gibati mao naka open up ko saakong friends because of that interaction. For that, and all the times gitiis ko nimo, labaw na sa internship kay kita jud sig uban ato, daghang salamat ug sorry kayo if sobra nako and kalit kalit ra mag luya. Pero kyang, I see you as a friend jud baya, someone na maskin dili na nako makita everyday is malipay ko if makita nako sa TV or sa newspaper or maskin sa social media nga, sumakses. Sakses ang planta ng dro—
Charez~ 

I love you Kyaaang, much obliged for your friendship and kindness. May God Bless you! CONGRATS GRADUATE!


- Ruru`; 

let index = 0;

function startTyping(){

    letterContent.innerHTML = "";

    nextBtn.style.display = "none";

    index = 0;

    const typing = setInterval(()=>{

        letterContent.innerHTML =
        message.substring(0,index).replace(/\n/g,"<br>");

        index++;

        if(index > message.length){

            clearInterval(typing);

            setTimeout(()=>{

                nextBtn.style.display = "block";

            },3000);

        }

    },25);

}

// =========================
// LETTER -> ENDING
// =========================

nextBtn.addEventListener("click",()=>{

    letter.classList.remove("active");
    ending.classList.add("active");

});