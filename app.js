// Bu arşivdeki fotoğraflar Gökçe albümünden alındı; tarih, konum ve kişi bilgileri Fotoğraflar uygulamasındaki bilgilerden işlendi.
const memories = [
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/IMG_0707.jpeg', title: 'Adnan Menderes’te', date: '18 Ekim 2026 · 03:06:14', place: 'Adnan Menderes Havalimanı · Gaziemir, Türkiye', people: 'Gökçe + Atlas + 2 kişi daha', story: '2 aya gelcem zatende', detail: 'her geldiğimde beni alıp lahmacun sunumu yapan ve her gittiğimde havalimanında iç hatlara giden sarı kafa iyiki arkadaşımsın' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/IMG_0676.jpeg', title: 'daha çok araba yıkıyacağız', date: '15 Ekim 2026 · 21:59', place: 'Bahçeli Evler Yıkama', people: 'Kişi bilgisi yok', story: 'daha çok araba yıkıyacağız', detail: 'bir gün pembe köpük sözüm var ama her araba yıkamamız ayrı bi güzel pembe köpük işin bahanesi' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/IMG_0674.jpeg', title: 'iki otistik', date: '15 Ekim 2026 · 01:30:28', place: 'çeşme altı', people: 'Gökçe + bir kişi daha', story: 'iki otistik', detail: 'bu sanırım harbiden favori fotomuz oldu benim' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/IMG_0673.jpeg', title: 'bulanık iki otistik', date: '15 Ekim 2026 · 01:30:13', place: 'çeşme altı', people: 'Gökçe + Atlas', story: 'bulanık iki otistik' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/IMG_0672.jpeg', title: 'daha fazla otistik foto', date: '15 Ekim 2026 · 01:30:01', place: 'çeşme altı', people: 'Gökçe + bir kişi daha', story: 'daha fazla otistik foto' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/IMG_0671.jpeg', title: 'dahada fazla otistik foto', date: '15 Ekim 2026 · 01:29:45', place: 'çeşme altı', people: 'Gökçe', story: 'dahada fazla otistik foto' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/280fa1fb-48e0-4e22-b25f-2701b491fa47.jpeg', title: 'Finlandiya işi', date: '17 Haziran 2026 · 08:19', place: 'Ankara', people: 'Atlas', story: 'baba finlandiyada tabi', detail: 'baba finlandiyaya gitmeden önce bu yerden oturum izni aldı buda onun fotosu' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/IMG_8261.mp4', type: 'video', title: 'Güzelbahçe’de kısa bir video', date: '7 Mayıs 2026 · 23:15:31', place: 'Güzelbahçe – Kahramandere Mh.', people: 'Kişi bilgisi yok', story: 'takipteyiz herzaman', detail: 'bu video kafamı cam tavandan çıkartmadan 2 dakika önce çekilmiştir' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/IMG_7069.jpeg', title: 'ilk spontane karşıyaka günü', date: '3 Temmuz 2025 · 20:20:19', place: 'İzmir Körfezi', people: 'Atlas + Gökçe', story: 'ilk spontane karşıyaka günü', detail: 'efsane bi gün kelimeler kifayesiz' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/IMG_3673.jpeg', title: 'gb pabloda bi gün', date: '18 Ekim 2023 · 20:40:33', place: 'Konum bilgisi yok', people: 'Gökçe, Furkan + bir kişi daha', story: 'gb pabloda bi gün', detail: 'Furkan fotoyu bi tık sikmiş ama yinede koydum fotomuz yok adam akıllı' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/IMG_3152.jpeg', title: 'sitelerde parkta bi gece', date: '26 Ağustos 2023 · 00:03:17', place: 'Siteler', people: 'Gökçe + Atlas', story: 'sitelerde parkta bi gece', detail: 'burda fıskiyelere deli gibi ıslandığımızı hatırlıyorum buda core memorydir' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/IMG_0547.jpeg', title: 'bulduğum en eski foto', date: '21 Ocak 2023 · 20:20:26', place: 'Balçova – Bahçelerarası Mh.', people: 'Gökçe', story: 'bulduğum en eski foto', detail: 'eshot ifşa hani başka ne diyebilirimki' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/IMG_0546.jpeg', title: 'gökçe ifşa', date: '21 Ocak 2023 · 20:20:25', place: 'Balçova – Bahçelerarası Mh.', people: 'Gökçe', story: 'gökçe ifşa' }
];

const playlist = [
  { title: 'We Are the People', artist: 'Empire of the Sun', videoId: 'r02mYOlfcCw', url: 'https://music.youtube.com/watch?v=r02mYOlfcCw', cover: 'https://i.ytimg.com/vi/r02mYOlfcCw/hqdefault.jpg', lyricsNote: 'Şarkı detayı iyi ama dimi' },
  { title: 'Araf', artist: 'mor ve ötesi', videoId: 'dtOVR1Da9E0', url: 'https://music.youtube.com/watch?v=dtOVR1Da9E0', cover: 'https://i.ytimg.com/vi/dtOVR1Da9E0/hqdefault.jpg', lyricsNote: 'İki uç arasında asılı kalan o tanıdık his.' },
  { title: 'Wicked Game', artist: 'Chris Isaak', videoId: 'rslMMY64BVg', url: 'https://music.youtube.com/watch?v=rslMMY64BVg', cover: 'https://i.ytimg.com/vi/rslMMY64BVg/hqdefault.jpg', lyricsNote: 'Karanlık bir geceye yakışan yavaş bir hikâye.' },
  { title: 'Re', artist: 'mor ve ötesi', videoId: 'OsQk-oYw_1s', url: 'https://music.youtube.com/watch?v=OsQk-oYw_1s', cover: 'https://i.ytimg.com/vi/OsQk-oYw_1s/hqdefault.jpg', lyricsNote: 'Birlikte açılan eski bir şarkı gibi.' },
  { title: 'Mayın Tarlası', artist: 'Şebnem Ferah', videoId: 'xu1TZkxYDiE', url: 'https://music.youtube.com/watch?v=xu1TZkxYDiE', cover: 'https://i.ytimg.com/vi/xu1TZkxYDiE/hqdefault.jpg', lyricsNote: 'Dikkatli adımlarla, ama yine de yan yana.' }
];

const quiz = [
  { question: 'Atlas ilk tanışmada nasıl biri?', answers: ['Antipatik', 'Sempatik', 'Sosyal', 'Asosyal'], correct: 3, note: 'Doğru cevap. İlk izlenim arşive kaydedildi.' },
  { question: 'Güzel bahçedeki fav manzaramız neresi?', answers: ['Tigo', 'Senin evinin önündeki sahil', 'GB Star', 'Yelki sahil'], correct: 1, note: 'Evet, o manzaranın yeri ayrı.' },
  { question: "Spontane bir Karşıyaka'ya ne dersin?", answers: ['Hayır', 'Evet'], correct: 1, note: 'İşte beklediğim cevap.' }
];

const wrongReactions = [
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/wrong-1.png', text: 'Seni bi bulsam…' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/wrong-2.png', text: 'Kırmızı surat devrede.' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/wrong-3.png', text: 'Bakışlar hiç iyiye gitmiyor.' },
  { image: 'https://our-little-moments.deep-hippo-2019.chatgpt.site/images/wrong-4.png', text: 'Zort zort… bir daha düşün.' }
];

const $ = (selector) => document.querySelector(selector);
const questionArea = $('#questionArea');
const questionCounter = $('#questionCounter');
const progressBar = $('#progressBar');
const quizFeedback = $('#quizFeedback');
const quizRating = $('#quizRating');
const gallery = $('#memories');
let questionIndex = 0;
let unlocked = false;
let currentTrack = 0;
let dateChosen = false;
let calendarViewDate = new Date();
let selectedCalendarDate = '';
let rewardStage = 0;
let rewardOpened = false;
let rewardAdvanceTimer = null;
let musicUnlocked = false;
let questionTransitionTimer = null;
let finaleCountdownTimer = null;
let finaleSlideTimer = null;
let finaleChangeTimer = null;
let finaleZoomTimer = null;
let finaleIndex = 0;
let wrongReactionHideTimer = null;
let ratingFeedbackTimer = null;
let toastHideTimer = null;
const FINALE_SLIDE_MS = 15000;

function dismissWelcome() {
  const splash = $('#welcomeSplash');
  if (!splash) return;
  document.body.classList.remove('is-splashing');
  splash.classList.add('is-hidden');
  setTimeout(() => splash.remove(), 900);
  setTimeout(() => $('#quiz').scrollIntoView({ behavior: 'smooth', block: 'start' }), 180);
}

document.body.classList.add('is-splashing');
$('#welcomeStart')?.addEventListener('click', dismissWelcome);

function transitionQuestion(render) {
  clearTimeout(questionTransitionTimer);
  const enter = () => {
    render();
    questionArea.classList.remove('is-leaving');
    questionArea.classList.add('is-entering');
    questionTransitionTimer = setTimeout(() => questionArea.classList.remove('is-entering'), 760);
  };
  if (!questionArea.children.length) {
    enter();
    return;
  }
  questionArea.classList.remove('is-entering');
  questionArea.classList.add('is-leaving');
  questionTransitionTimer = setTimeout(enter, 220);
}

function renderQuestion() {
  const item = quiz[questionIndex];
  document.body.classList.toggle('is-question-two', questionIndex === 1);
  transitionQuestion(() => {
    questionCounter.textContent = `SORU ${String(questionIndex + 1).padStart(2, '0')} / ${String(quiz.length).padStart(2, '0')}`;
    progressBar.style.width = `${((questionIndex + 1) / quiz.length) * 100}%`;
    questionArea.innerHTML = `<h3>${item.question}</h3><div class="answer-list">${item.answers.map((answer, i) => `<button class="answer-button" data-answer="${i}" style="--answer-index:${i}" type="button">${String.fromCharCode(65 + i)}. ${answer}</button>`).join('')}</div>`;
    quizFeedback.textContent = '';
    questionArea.querySelectorAll('.answer-button').forEach((button) => button.addEventListener('click', handleAnswer));
  });
}

function handleAnswer(event) {
  const selected = Number(event.currentTarget.dataset.answer);
  const item = quiz[questionIndex];
  const buttons = [...questionArea.querySelectorAll('.answer-button')];
  buttons.forEach((button) => { button.disabled = true; });
  if (selected === item.correct) {
    event.currentTarget.classList.add('correct');
    quizFeedback.textContent = item.note;
    if (questionIndex === 0) document.body.classList.add('is-colorful');
    createConfetti();
    if (questionIndex < quiz.length - 1) {
      setTimeout(() => showReward(questionIndex + 1), 450);
    } else {
      setTimeout(renderDateStep, 700);
    }
  } else {
    event.currentTarget.classList.add('wrong');
    quizFeedback.textContent = 'Bir daha dene — bu anıların bir ipucu daha var.';
    showWrongReaction();
  }
}

function showWrongReaction() {
  const reaction = wrongReactions[Math.floor(Math.random() * wrongReactions.length)];
  const overlay = $('#wrongReaction');
  // The quiz card has a transform for its question transition. A fixed child
  // of a transformed element is no longer viewport-fixed, so keep this scene
  // directly under body to guarantee a real full-screen layer.
  if (overlay.parentElement !== document.body) document.body.append(overlay);
  clearTimeout(wrongReactionHideTimer);
  $('#wrongReactionImage').src = reaction.image;
  $('#wrongReactionText').textContent = reaction.text;
  overlay.hidden = false;
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.remove('is-closing', 'is-visible');
  requestAnimationFrame(() => {
    overlay.classList.add('is-visible');
    setTimeout(() => $('#wrongReactionClose').focus(), 180);
  });
}

function hideWrongReaction() {
  const overlay = $('#wrongReaction');
  clearTimeout(wrongReactionHideTimer);
  overlay.classList.remove('is-visible');
  overlay.classList.add('is-closing');
  overlay.setAttribute('aria-hidden', 'true');
  wrongReactionHideTimer = setTimeout(() => {
    overlay.hidden = true;
    overlay.classList.remove('is-closing');
    wrongReactionHideTimer = null;
  }, 560);
}

function closeWrongReaction() {
  questionArea.querySelectorAll('.answer-button').forEach((button) => { button.disabled = false; button.classList.remove('wrong'); });
  hideWrongReaction();
}

function showReward(stage) {
  clearTimeout(rewardAdvanceTimer);
  rewardStage = stage;
  rewardOpened = false;
  // The album atmosphere belongs to the music reward only. The first gift
  // stays colorful and silent until the music gift is opened.
  $('#rewardModal').classList.remove('is-album-reward');
  $('#rewardModal').classList.toggle('is-theme-reward', stage === 1);
  $('#rewardModal').style.removeProperty('--reward-cover');
  $('#rewardTitle').textContent = stage === 1 ? 'Havalı tema' : 'İkinci hediyen burada.';
  $('#rewardMessage').textContent = 'Açmak için hediyeye dokun.';
  $('#giftButton').textContent = '🎁';
  $('#giftButton').classList.remove('is-open', 'is-celebrating');
  $('#rewardReveal').hidden = true;
  $('#rewardReveal').setAttribute('aria-hidden', 'true');
  $('#rewardReveal').classList.remove('is-visible');
  requestAnimationFrame(() => $('#giftButton').classList.add('is-celebrating'));
  $('#rewardModal').classList.add('is-open');
  $('#rewardModal').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  $('#giftButton').focus();
}

function openReward() {
  if (!rewardStage || rewardOpened) return;
  rewardOpened = true;
  $('#giftButton').classList.add('is-open');
  if (rewardStage === 1) {
    $('#rewardTitle').textContent = 'Havalı tema açıldı!';
    $('#rewardMessage').textContent = 'Aferin len';
    $('#rewardBadgePrimary').textContent = '✨ HAVALI TEMA';
    $('#rewardBadgeSecondary').textContent = 'TEMA AKTİF';
    $('#rewardRevealTitle').textContent = 'Anılar şimdi daha havalı.';
    $('#rewardRevealCopy').textContent = 'İlk hediye açıldı. Tema artık biraz daha senin gibi.';
  } else {
    $('#rewardTitle').textContent = 'Müzik açıldı!';
    $('#rewardMessage').textContent = 'Aferim, bu şarkıyla daha fazla akar.';
    $('#rewardBadgePrimary').textContent = '🎵 MÜZİK';
    $('#rewardBadgeSecondary').textContent = 'WE ARE THE PEOPLE';
    $('#rewardRevealTitle').textContent = 'Şarkı girişten başlıyor.';
    $('#rewardRevealCopy').textContent = 'Arka plan da YouTube Music albüm kapağıyla değişiyor.';
    $('#rewardModal').classList.add('is-album-reward');
    $('#rewardModal').style.setProperty('--reward-cover', `url("${playlist[0].cover}")`);
    musicUnlocked = true;
    userRequestedMusic = true;
    $('#musicDock').classList.remove('is-music-locked');
    $('#musicDock').style.display = 'flex';
    $('#miniMusic').disabled = false;
    $('#miniMusic').setAttribute('aria-label', 'Müziği aç veya kapat');
    loadTrack(0, true);
  }
  const reveal = $('#rewardReveal');
  reveal.hidden = false;
  reveal.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => reveal.classList.add('is-visible'));
  rewardAdvanceTimer = setTimeout(continueAfterReward, 2600);
}

function continueAfterReward() {
  clearTimeout(rewardAdvanceTimer);
  rewardAdvanceTimer = null;
  const completedStage = rewardStage;
  $('#rewardReveal').classList.remove('is-visible');
  $('#rewardReveal').setAttribute('aria-hidden', 'true');
  $('#rewardModal').classList.remove('is-open');
  $('#rewardModal').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  rewardStage = 0;
  questionIndex = completedStage;
  renderQuestion();
}

function renderDateStep() {
  document.body.classList.remove('is-question-two');
  transitionQuestion(() => {
    questionCounter.textContent = 'SON ADIM';
    progressBar.style.width = '100%';
    calendarViewDate = new Date();
    calendarViewDate.setDate(1);
    selectedCalendarDate = '';
    questionArea.innerHTML = '<div class="date-step"><h3>O zaman bir gün seç.</h3><p>Spontane Karşıyaka planı için takvim hazır.</p><div class="calendar-shell" aria-label="Tarih seçici"><div class="calendar-toolbar"><button class="calendar-nav" id="calendarPrev" type="button" aria-label="Önceki ay">←</button><strong id="calendarMonth"></strong><button class="calendar-nav" id="calendarNext" type="button" aria-label="Sonraki ay">→</button></div><div class="calendar-weekdays" aria-hidden="true"><span>Pzt</span><span>Sal</span><span>Çar</span><span>Per</span><span>Cum</span><span>Cmt</span><span>Paz</span></div><div class="calendar-days" id="calendarDays"></div></div><input id="spontaneDate" type="hidden" aria-describedby="dateMessage" /><p class="date-message" id="dateMessage" role="status" aria-hidden="true"></p></div>';
    quizFeedback.textContent = '';
    renderCalendarDays();
    $('#calendarPrev').addEventListener('click', () => { calendarViewDate.setMonth(calendarViewDate.getMonth() - 1); renderCalendarDays(); });
    $('#calendarNext').addEventListener('click', () => { calendarViewDate.setMonth(calendarViewDate.getMonth() + 1); renderCalendarDays(); });
    $('#calendarDays').addEventListener('click', (event) => {
      const button = event.target.closest('button[data-calendar-date]');
      if (!button || dateChosen) return;
      selectedCalendarDate = button.dataset.calendarDate;
      $('#spontaneDate').value = selectedCalendarDate;
      renderCalendarDays();
      handleDateSelection({ target: { value: selectedCalendarDate } });
    });
  });
}

function calendarDateValue(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function formatPickedDate(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(year, month - 1, day, 12));
}

function renderCalendarDays() {
  const monthLabel = $('#calendarMonth');
  const days = $('#calendarDays');
  if (!monthLabel || !days) return;
  const year = calendarViewDate.getFullYear();
  const month = calendarViewDate.getMonth();
  monthLabel.textContent = new Intl.DateTimeFormat('tr-TR', { month: 'long', year: 'numeric' }).format(calendarViewDate);
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = calendarDateValue(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  const cells = [];
  for (let i = 0; i < firstDay; i += 1) cells.push('<span class="calendar-empty" aria-hidden="true"></span>');
  for (let day = 1; day <= daysInMonth; day += 1) {
    const value = calendarDateValue(year, month, day);
    const classes = ['calendar-day'];
    if (value === today) classes.push('is-today');
    if (value === selectedCalendarDate) classes.push('is-selected');
    cells.push(`<button class="${classes.join(' ')}" type="button" data-calendar-date="${value}" aria-label="${formatPickedDate(value)}"${value === selectedCalendarDate ? ' aria-pressed="true"' : ''}>${day}</button>`);
  }
  days.innerHTML = cells.join('');
}

function handleDateSelection(event) {
  if (!event.target.value || dateChosen) return;
  dateChosen = true;
  const message = $('#dateMessage');
  message.innerHTML = '<strong>Eğer tarih seçersen spontanenin ne anlamı kaldı sapşik</strong>';
  message.style.setProperty('--date-cover', `url("${(playlist[currentTrack] || playlist[0]).cover}")`);
  if (message.parentElement !== document.body) document.body.append(message);
  message.classList.add('is-visible');
  message.setAttribute('aria-hidden', 'false');
  quizFeedback.textContent = '';
  transformQuizPrompt();
  setTimeout(startMemoryFinale, 5000);
}

function clearFinaleTimers() {
  clearInterval(finaleCountdownTimer);
  clearTimeout(finaleSlideTimer);
  clearTimeout(finaleChangeTimer);
  clearTimeout(finaleZoomTimer);
  finaleCountdownTimer = null;
  finaleSlideTimer = null;
  finaleChangeTimer = null;
  finaleZoomTimer = null;
}

function startMemoryFinale() {
  const finale = $('#memoryFinale');
  if (!finale || !dateChosen) return;
  const dateMessage = $('#dateMessage');
  if (dateMessage) {
    dateMessage.classList.remove('is-visible');
    dateMessage.setAttribute('aria-hidden', 'true');
  }
  questionArea.innerHTML = '';
  clearFinaleTimers();
  finaleIndex = 0;
  resetFinaleRating();
  renderFinaleDots();
  finale.hidden = false;
  finale.setAttribute('aria-hidden', 'false');
  finale.classList.remove('is-slideshow');
  finale.classList.remove('is-thanks');
  $('#finaleNote').classList.remove('is-visible');
  $('#finaleNote').hidden = true;
  $('#finaleCountdown').textContent = '3';
  $('#finaleProgress').style.transition = 'width 0s linear';
  $('#finaleProgress').style.width = '0%';
  const finaleTrack = playlist[currentTrack] || playlist[0];
  finale.style.setProperty('--finale-cover', `url("${finaleTrack.cover}")`);
  document.body.style.overflow = 'hidden';
  memories.forEach((memory) => {
    if (memory.type === 'video') return;
    const preload = new Image();
    preload.decoding = 'async';
    preload.src = memory.image;
  });
  document.body.classList.add('is-finale');
  requestAnimationFrame(() => finale.classList.add('is-visible'));
  let count = 3;
  finaleCountdownTimer = setInterval(() => {
    count -= 1;
    if (count > 0) {
      $('#finaleCountdown').textContent = String(count);
      return;
    }
    clearInterval(finaleCountdownTimer);
    finaleCountdownTimer = null;
    finale.classList.add('is-slideshow');
    showFinalePhoto(0);
  }, 1000);
}

function renderFinaleDots() {
  const dots = $('#finaleDots');
  if (!dots) return;
  dots.innerHTML = memories.map((memory, index) => `<button type="button" data-finale-index="${index}" aria-label="${memory.title}"></button>`).join('');
  dots.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => jumpToFinalePhoto(Number(button.dataset.finaleIndex))));
  updateFinaleDots();
}

function updateFinaleDots() {
  $('#finaleDots')?.querySelectorAll('button').forEach((button, index) => {
    const active = index === finaleIndex;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-current', active ? 'true' : 'false');
  });
  if ($('#finalePrev')) $('#finalePrev').disabled = finaleIndex === 0;
  if ($('#finaleNext')) $('#finaleNext').disabled = finaleIndex === memories.length - 1;
}

function updateFinalePhoto(index) {
  const memory = memories[index];
  const frame = document.querySelector('.finale-photo-wrap');
  const progress = $('#finaleProgress');
  const isVideo = memory.type === 'video';
  const finaleImage = $('#finaleImage');
  const finaleVideo = $('#finaleVideo');
  frame.classList.toggle('is-video', isVideo);
  frame.style.setProperty('--finale-photo-bg', isVideo ? 'none' : `url("${memory.image}")`);
  frame.classList.remove('is-zooming');
  clearTimeout(finaleZoomTimer);
  if (isVideo) {
    finaleImage.removeAttribute('src');
    finaleImage.alt = '';
    finaleVideo.src = memory.image;
    finaleVideo.setAttribute('aria-label', memory.title);
    finaleVideo.load();
    finaleVideo.play().catch(() => {});
  } else {
    finaleVideo.pause();
    finaleVideo.removeAttribute('src');
    finaleImage.src = memory.image;
    finaleImage.alt = memory.title;
    finaleImage.decoding = 'async';
    finaleImage.loading = 'eager';
  }
  $('#finaleNumber').textContent = `${String(index + 1).padStart(2, '0')} / ${String(memories.length).padStart(2, '0')}`;
  $('#finaleTitle').textContent = memory.story;
  $('#finalePlace').textContent = memory.place;
  $('#finaleDate').textContent = memory.date;
  $('#finaleStory').textContent = '';
  $('#finaleStory').hidden = true;
  updateFinaleDots();
  progress.style.transition = 'width 0s linear';
  progress.style.width = '100%';
  requestAnimationFrame(() => {
    progress.style.transition = `width ${FINALE_SLIDE_MS}ms linear`;
    progress.style.width = '0%';
  });
  finaleZoomTimer = setTimeout(() => {
    if (!isVideo) frame.classList.add('is-zooming');
    finaleZoomTimer = null;
  }, 340);
  clearTimeout(finaleSlideTimer);
  finaleSlideTimer = setTimeout(() => showFinalePhoto(index + 1, 1), FINALE_SLIDE_MS);
}

function showFinalePhoto(index, direction = 1, animate = true) {
  if (index >= memories.length) {
    finishMemoryFinale();
    return;
  }
  if (index < 0) index = 0;
  const frame = document.querySelector('.finale-photo-wrap');
  const hasImage = Boolean($('#finaleImage').getAttribute('src') || $('#finaleVideo').getAttribute('src'));
  finaleIndex = index;
  clearTimeout(finaleSlideTimer);
  clearTimeout(finaleChangeTimer);
  if (!animate || !hasImage) {
    updateFinalePhoto(index);
    return;
  }
  frame.style.setProperty('--slide-shift', direction < 0 ? '24px' : '-24px');
  frame.classList.add('is-changing');
  finaleChangeTimer = setTimeout(() => {
    updateFinalePhoto(index);
    frame.classList.remove('is-changing');
    finaleChangeTimer = null;
  }, 280);
}

function jumpToFinalePhoto(index) {
  const finale = $('#memoryFinale');
  if (!finale || finale.hidden || !finale.classList.contains('is-slideshow')) return;
  if (index < 0 || index >= memories.length) return;
  const direction = index < finaleIndex ? -1 : 1;
  showFinalePhoto(index, direction, index !== finaleIndex);
}

function finishMemoryFinale() {
  clearFinaleTimers();
  stopFinaleVideo();
  const finale = $('#memoryFinale');
  const note = $('#finaleNote');
  $('#finaleProgress').style.width = '0%';
  finale.classList.remove('is-slideshow');
  finale.classList.add('is-thanks');
  note.hidden = false;
  requestAnimationFrame(() => note.classList.add('is-visible'));
  setTimeout(() => {
    note.classList.remove('is-visible');
    finale.classList.remove('is-visible');
    setTimeout(() => {
      note.hidden = true;
      finale.classList.remove('is-thanks');
      finale.hidden = true;
      finale.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-finale');
      document.body.style.overflow = '';
      unlockGallery();
    }, 1800);
  }, 15000);
}

function stopFinaleVideo() {
  const video = $('#finaleVideo');
  if (!video) return;
  video.pause();
  video.removeAttribute('src');
  video.load();
}

function resetFinaleRating() {
  clearTimeout(ratingFeedbackTimer);
  document.querySelectorAll('.rating-button').forEach((button) => button.classList.remove('is-selected'));
  const feedback = $('#ratingFeedback');
  if (feedback) {
    feedback.textContent = '';
    feedback.className = 'rating-feedback';
  }
}

function createRatingRain(kind) {
  const emojis = kind === 'angry'
    ? ['😡', '🤬', '😤', '😠']
    : ['🎉', '🥳', '🎊', '😄', '💛', '✨'];
  const amount = kind === 'angry' ? 26 : 34;
  for (let i = 0; i < amount; i += 1) {
    const emoji = document.createElement('i');
    emoji.className = `rating-rain rating-rain-${kind}`;
    emoji.textContent = emojis[i % emojis.length];
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.setProperty('--drift', `${(Math.random() - .5) * 220}px`);
    emoji.style.setProperty('--spin', `${(Math.random() - .5) * 720}deg`);
    emoji.style.animationDelay = `${Math.random() * 500}ms`;
    emoji.style.setProperty('--size', `${20 + Math.random() * 22}px`);
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 5600);
  }
}

function handleRating(value) {
  const feedback = $('#ratingFeedback');
  document.querySelectorAll('.rating-button').forEach((button) => {
    button.classList.toggle('is-selected', Number(button.dataset.rating) === value);
  });
  const result = value <= 3
    ? { text: 'siktir git amk', tone: 'angry' }
    : value <= 7
      ? { text: 'ne alaka aq', tone: 'confused' }
      : value <= 9
        ? { text: 'eywda nerden puan gitti', tone: 'good' }
        : { text: 'teşşekkürler efendim', tone: 'perfect' };
  if (!feedback) return;
  clearTimeout(ratingFeedbackTimer);
  feedback.textContent = result.text;
  feedback.className = `rating-feedback is-visible is-${result.tone}`;
  if (result.tone === 'angry') createRatingRain('angry');
  if (result.tone === 'perfect') createRatingRain('happy');
  ratingFeedbackTimer = setTimeout(() => {
    feedback.classList.remove('is-visible');
    ratingFeedbackTimer = null;
  }, 5000);
}

function transformQuizPrompt() {
  const prompt = $('#quizPrompt');
  if (!prompt || prompt.classList.contains('is-thanks')) return;
  prompt.classList.add('is-changing');
  setTimeout(() => {
    prompt.textContent = 'Teşşekkürler hep yanımda olduğun için';
    prompt.classList.remove('is-changing');
    prompt.classList.add('is-thanks');
  }, 480);
}

function renderGallery() {
  $('#photoGrid').innerHTML = memories.map((memory, index) => {
    const displayTitle = memory.story || memory.title;
    const media = memory.type === 'video'
      ? `<video class="photo-media" src="${memory.image}" muted playsinline preload="metadata" aria-label="${displayTitle}"></video>`
      : `<img class="photo-media" loading="lazy" src="${memory.image}" alt="${displayTitle}" />`;
    return `<article class="photo-card" data-memory="${index}" tabindex="0" role="button" aria-label="${displayTitle} anısını aç">${media}<div class="photo-overlay"><span class="photo-number">${String(index + 1).padStart(2, '0')} / ${String(memories.length).padStart(2, '0')}</span><h3>${displayTitle}</h3><p>${memory.place} · ${memory.date}</p></div></article>`;
  }).join('');
  document.querySelectorAll('.photo-card').forEach((card) => { card.addEventListener('click', () => openMemory(Number(card.dataset.memory))); card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openMemory(Number(card.dataset.memory)); } }); });
}

function unlockGallery() {
  unlocked = true;
  gallery.classList.remove('is-locked');
  document.querySelectorAll('.photo-card').forEach((card, index) => {
    card.style.setProperty('--card-delay', `${Math.min(index * 45, 520)}ms`);
    card.classList.remove('is-appearing');
    requestAnimationFrame(() => card.classList.add('is-appearing'));
  });
  quizFeedback.textContent = 'Anıların açıldı.';
  if (quizRating) {
    quizRating.hidden = false;
    requestAnimationFrame(() => quizRating.classList.add('is-visible'));
  }
  transformQuizPrompt();
  showToast('Arşiv açıldı — şimdi küçük anlara bakabilirsin.');
  createConfetti();
  setTimeout(() => $('#memories').scrollIntoView({ behavior: 'smooth', block: 'start' }), 450);
  if (musicUnlocked && !isPlaying) startMusic();
}

function openMemory(index) {
  if (!unlocked) return;
  const memory = memories[index];
  const modal = $('#memoryModal');
  const modalImage = $('#modalImage');
  const modalVideo = $('#modalVideo');
  const isVideo = memory.type === 'video';
  modal.classList.toggle('is-video', isVideo);
  if (isVideo) {
    modalImage.removeAttribute('src');
    modalImage.alt = '';
    modalVideo.src = memory.image;
    modalVideo.setAttribute('aria-label', memory.title);
    modalVideo.load();
    modalVideo.play().catch(() => {});
  } else {
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.load();
    modalImage.src = memory.image;
    modalImage.alt = memory.title;
  }
  $('#modalDate').textContent = memory.date;
  $('#modalPlace').textContent = memory.place;
  $('#modalPeople').textContent = memory.people || 'Kişi bilgisi yok';
  $('#modalTitle').textContent = memory.title;
  $('#modalStory').textContent = memory.detail || memory.story;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  $('#modalClose').focus();
}

function closeMemory() {
  const modal = $('#memoryModal');
  $('#modalVideo').pause();
  $('#modalVideo').removeAttribute('src');
  $('#modalVideo').load();
  modal.classList.remove('is-open', 'is-video');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

let youtubePlayer = null;
let youtubeReady = false;
let pendingPlay = false;
let isPlaying = false;
let embedBlocked = false;
let userRequestedMusic = false;

window.onYouTubeIframeAPIReady = () => {
  youtubeReady = true;
  youtubePlayer = new YT.Player('youtubePlayer', {
    height: '200',
    width: '200',
    videoId: playlist[currentTrack].videoId,
    playerVars: { autoplay: 0, controls: 0, playsinline: 1, rel: 0, modestbranding: 1, start: 0, origin: window.location.origin, widget_referrer: window.location.href },
    events: {
      onReady: () => {
        loadTrack(currentTrack, false);
        if (pendingPlay) { pendingPlay = false; loadTrack(currentTrack, true); }
      },
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.PLAYING) setPlaying(true);
        if (event.data === YT.PlayerState.PAUSED) setPlaying(false);
        if (event.data === YT.PlayerState.ENDED) { setPlaying(false); loadTrack((currentTrack + 1) % playlist.length, true); }
      },
      onError: () => { embedBlocked = true; setPlaying(false); if (userRequestedMusic) showToast('Bu parça site içinde oynatılamadı; adına tıklayarak YouTube’da açabilirsin.'); }
    }
  });
};

function loadTrack(index, shouldPlay = false) {
  currentTrack = (index + playlist.length) % playlist.length;
  const track = playlist[currentTrack];
  embedBlocked = false;
  $('#trackNumber').textContent = String(currentTrack + 1).padStart(2, '0');
  $('#trackTitle').textContent = track.title;
  $('#trackArtist').textContent = track.artist;
  $('#trackTitleLink').href = track.url;
  const lyricsTrackTitle = $('#lyricsTrackTitle');
  const lyricsTrackArtist = $('#lyricsTrackArtist');
  const lyricsTrackNumber = $('#lyricsTrackNumber');
  const lyricsOpen = $('#lyricsOpen');
  const lyricsNote = $('#lyricsNote');
  if (lyricsTrackTitle) lyricsTrackTitle.textContent = track.title;
  if (lyricsTrackArtist) lyricsTrackArtist.textContent = track.artist;
  if (lyricsTrackNumber) lyricsTrackNumber.textContent = String(currentTrack + 1).padStart(2, '0');
  if (lyricsOpen) lyricsOpen.href = track.url;
  if (lyricsNote) lyricsNote.textContent = track.lyricsNote;
  const trackArt = $('#trackArt');
  if (trackArt) trackArt.style.backgroundImage = `linear-gradient(rgba(0,0,0,.18), rgba(0,0,0,.18)), url("${track.cover}")`;
  pulseMusicTransition();
  updateAlbumBackdrop(track);
  if (!youtubeReady || !youtubePlayer) { if (shouldPlay) pendingPlay = true; return; }
  const loadOptions = { videoId: track.videoId, startSeconds: 0, suggestedQuality: 'default' };
  if (shouldPlay) youtubePlayer.loadVideoById(loadOptions);
  else youtubePlayer.cueVideoById(loadOptions);
}

function pulseMusicTransition() {
  const elements = [$('#trackArt'), $('#liveLyrics')].filter(Boolean);
  elements.forEach((element) => {
    element.classList.remove('is-track-changing');
    void element.offsetWidth;
    element.classList.add('is-track-changing');
  });
}

function updateAlbumBackdrop(track) {
  if (!musicUnlocked) return;
  const backdrop = $('#albumBackdrop');
  if (!backdrop) return;
  const cover = track.cover || `https://i.ytimg.com/vi/${track.videoId}/hqdefault.jpg`;
  backdrop.style.backgroundImage = `url("${cover}")`;
  backdrop.classList.add('is-visible');
  document.body.classList.add('album-mode');
}
function startMusic() { loadTrack(currentTrack, true); }
function setPlaying(playing) { isPlaying = playing; $('#playButton').textContent = playing ? 'Ⅱ' : '▶'; $('#playButton').setAttribute('aria-label', playing ? 'Durdur' : 'Oynat'); $('#musicDock').classList.toggle('is-playing', playing); $('#miniMusic').classList.toggle('is-playing', playing); $('#liveLyrics')?.classList.toggle('is-live', playing); const liveState = $('#lyricsLiveState'); if (liveState) liveState.textContent = playing ? 'LIVE' : 'READY'; }
function updateMusicUI() { setPlaying(isPlaying); }
function toggleMusic() { userRequestedMusic = true; if (embedBlocked) { window.open(playlist[currentTrack].url, '_blank', 'noopener'); return; } if (!youtubeReady || !youtubePlayer) { pendingPlay = true; showToast('Müzik yükleniyor…'); return; } if (isPlaying) youtubePlayer.pauseVideo(); else youtubePlayer.playVideo(); }
$('#playButton').addEventListener('click', toggleMusic); $('#miniMusic').addEventListener('click', toggleMusic); $('#prevTrack').addEventListener('click', () => loadTrack(currentTrack - 1, true)); $('#nextTrack').addEventListener('click', () => loadTrack(currentTrack + 1, true));
$('#dockClose').addEventListener('click', () => { $('#musicDock').style.display = 'none'; $('#musicReopen').style.display = 'flex'; }); $('#musicReopen').addEventListener('click', () => { $('#musicDock').style.display = 'flex'; $('#musicReopen').style.display = 'none'; });

$('#giftButton').addEventListener('click', openReward); $('#wrongReactionClose').addEventListener('click', closeWrongReaction);
$('#fakeExit').addEventListener('click', () => showToast('Hop nereye Gökçe Hanım?', 'exit'));
$('#finalePrev').addEventListener('click', () => jumpToFinalePhoto(finaleIndex - 1));
$('#finaleNext').addEventListener('click', () => jumpToFinalePhoto(finaleIndex + 1));
document.querySelectorAll('.rating-button').forEach((button) => button.addEventListener('click', () => handleRating(Number(button.dataset.rating))));

function showToast(message, mode = 'default') { const toast = $('#toast'); if (!toast) return; clearTimeout(toastHideTimer); toast.textContent = message; toast.classList.toggle('is-exit-message', mode === 'exit'); toast.classList.add('is-visible'); toastHideTimer = setTimeout(() => { toast.classList.remove('is-visible'); if (mode === 'exit') toast.classList.remove('is-exit-message'); toastHideTimer = null; }, 2800); }
function createConfetti() { const emojis = ['🎉', '🎁', '✨', '🐥', '💛', '😂']; for (let i = 0; i < 26; i += 1) { const dot = document.createElement('i'); dot.className = 'emoji-confetti'; dot.textContent = emojis[i % emojis.length]; dot.style.left = `${40 + Math.random() * 20}%`; dot.style.top = `${34 + Math.random() * 14}%`; dot.style.setProperty('--drift', `${(Math.random() - .5) * 260}px`); dot.style.setProperty('--spin', `${(Math.random() - .5) * 720}deg`); dot.style.animationDelay = `${Math.random() * 180}ms`; document.body.appendChild(dot); setTimeout(() => dot.remove(), 1900); } }
const confettiStyle = document.createElement('style'); confettiStyle.textContent = '@keyframes confetti-fall{to{transform:translate(' + (Math.random() > .5 ? '' : '-') + '90px,240px) rotate(480deg);opacity:0}}'; document.head.appendChild(confettiStyle);

function initScrollReveals() {
  const targets = [...document.querySelectorAll('.ritual-steps, .quiz-card, .gallery-heading, .gallery-note, .lyrics-panel, .closing-card')];
  if (!targets.length) return;
  targets.forEach((target, index) => {
    target.classList.add('reveal-on-scroll');
    target.style.setProperty('--reveal-delay', `${Math.min(index * 45, 220)}ms`);
  });
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('is-in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in-view');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
  targets.forEach((target) => observer.observe(target));
}

$('#previewButton').addEventListener('click', () => $('#how-it-works').scrollIntoView({ behavior: 'smooth' }));
$('#modalClose').addEventListener('click', closeMemory); $('#memoryModal').addEventListener('click', (event) => { if (event.target.id === 'memoryModal') closeMemory(); }); document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMemory(); if (event.key === 'ArrowLeft') jumpToFinalePhoto(finaleIndex - 1); if (event.key === 'ArrowRight') jumpToFinalePhoto(finaleIndex + 1); });
renderQuestion(); renderGallery(); initScrollReveals(); loadTrack(0);
