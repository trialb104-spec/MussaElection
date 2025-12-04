// --- 1. Interactive Priorities Logic (Updated for 7 Topics) ---
function showPriority(type, element) {
    document.querySelectorAll('.priority-btn').forEach(btn => {
        btn.classList.remove('active-priority', 'bg-green-100');
        btn.classList.add('bg-gray-50');
    });
    element.classList.remove('bg-gray-50');
    element.classList.add('active-priority', 'bg-green-100');
    
    const contentDiv = document.getElementById('priority-content');
    let content = "";
    
    // Content mapped from the Accordion Section
    switch(type) {
        case 'investment': 
            content = "💵 إنشاء صندوق دعم الاتحاد، وإعادة تشغيل الأصول غير المستغلة لتحويلها إلى مصادر دخل حقيقية."; 
            break;
        case 'digital': 
            content = "📱 تطبيق إلكتروني شامل للأعضاء (App) لدفع الاشتراكات، وحجز الخدمات، مع بوابات دخول ذكية."; 
            break;
        case 'social': 
            content = "🏘️ إنشاء حضانة أطفال بسعر رمزي، توفير شركة نقل خاصة للأعضاء، وتطوير المطاعم ومراقبة الجودة."; 
            break;
        case 'sports': 
            content = "🟫 تأسيس شركة كرة القدم باستقلال مالي، وتطوير قطاع الناشئين ليكون المصدر الرئيسي للفريق الأول."; 
            break;
        case 'health': 
            content = "❤️ تعاقدات طبية حصرية بخصومات حقيقية مع كبرى المستشفيات، وتطوير العيادة بالتعاون مع وزارة الصحة."; 
            break;
        case 'financial': 
            content = "📈 زيادة الإيرادات عبر المعارض وتأجير الساحات، مع خفض التكاليف بمراجعة دقيقة للعقود ووقف الهدر."; 
            break;
        case 'complaints': 
            content = "📩 تفعيل لجنة الحكماء كجهة مستقلة لاستقبال شكاوى ومقترحات الأعضاء وضمان وصول صوتهم للإدارة."; 
            break;
    }
    contentDiv.style.opacity = 0;
    setTimeout(() => {
        contentDiv.innerHTML = content;
        contentDiv.style.opacity = 1;
        contentDiv.style.backgroundColor = '#f0fdf4';
        contentDiv.style.borderColor = '#006633';
    }, 200);
}

// --- 2. Scanning System Logic ---
let isScanning = false;
const initialStatus = "طريقنا واحد...و رقمنا واحد - اضغط للفحص";
const scanMessages = [
    "جاري التأكد: من قيمة العضو (أولوية قصوى)",
    "تحليل: مبدأ الشفافية والحوكمة",
    "ربط: صوتك بالقرار (اكتمل 60%)",
    "إعادة ضبط: منظومة النادي المستدام",
    "قريباً جداً: الإعلان عن موعد المنصة الرقمية"
];

function startScanning() {
    if (isScanning) return;
    isScanning = true;
    const scanButton = document.getElementById('scan-button');
    const statusBar = document.getElementById('status-display');
    const progressBar = document.getElementById('progress-bar');
    
    scanButton.disabled = true;
    scanButton.textContent = 'جاري الفحص... يرجى الانتظار';
    statusBar.textContent = scanMessages[0];
    progressBar.style.animation = 'scan-animation 1.5s infinite linear';
    progressBar.style.width = '100%';

    let messageIndex = 0;
    const scanInterval = setInterval(() => {
        messageIndex++;
        if (messageIndex < scanMessages.length) {
            statusBar.textContent = scanMessages[messageIndex];
        } else {
            clearInterval(scanInterval);
        }
    }, 800);

    setTimeout(() => {
        progressBar.style.animation = 'none';
        progressBar.style.width = '100%';
        statusBar.style.backgroundColor = '#FFD700';
        statusBar.style.color = '#004d26';
        statusBar.style.fontWeight = 'bold';
        statusBar.style.textShadow = 'none';
        statusBar.textContent = '✔️ صوتك أمانة: المنصة ستنطلق قريباً جداً!';
        scanButton.textContent = 'تم التحديث بنجاح! 🚀';
        setTimeout(() => {
            isScanning = false;
            scanButton.disabled = false;
            scanButton.textContent = 'بدء فحص النظام 📡';
            statusBar.textContent = initialStatus;
            statusBar.style.backgroundColor = 'black';
            statusBar.style.color = '#38a169'; 
            statusBar.style.fontWeight = 'normal';
            progressBar.style.animation = 'none';
            progressBar.style.width = '100%';
        }, 4000); 
    }, 4000); 
}

// --- 3. Share Campaign Logic (NEW) ---
function shareCampaign() {
    const shareData = {
        title: 'أحمد السيد موسى - طريقنا واحد',
        text: 'اقرأ البرنامج الانتخابي للمرشح أحمد السيد موسى',
        url: 'https://trialb104-spec.github.io/MussaElection/'
    };

    // Use native share API if available (mobile/modern browsers)
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Shared successfully'))
            .catch((err) => console.log('Error sharing:', err));
    } else {
        // Fallback to WhatsApp for desktop/older browsers
        const text = encodeURIComponent(shareData.text + " " + shareData.url);
        window.open(`https://wa.me/?text=${text}`, '_blank');
    }
}

// --- 4. QUIZ LOGIC (Batched 10 Questions) ---
const quizData = [
    { q: "في أي عام تأسس نادي الاتحاد لأول مرة؟", options: ["1906", "1910", "1912", "1914"], correct: 0 },
    { q: "في أي عام استقر الاسم الرسمي 'نادي الاتحاد السكندري' بعد الاندماجات؟", options: ["1908", "1912", "1914", "1920"], correct: 2 },
    { q: "ما هو اللقب الشهير الذي يُطلق على نادي الاتحاد؟", options: ["القلعة الخضراء", "سيد البلد – زعيم الثغر", "أسياد المتوسط", "أخضر الدلتا"], correct: 1 },
    { q: "ما هي ألوان نادي الاتحاد الرسمية؟", options: ["الأحمر والأبيض", "الأخضر والأبيض", "الأزرق والأبيض", "الأصفر والأسود"], correct: 1 },
    { q: "كم مرة فاز الاتحاد السكندري ببطولة كأس مصر؟", options: ["4 مرات", "5 مرات", "6 مرات", "7 مرات"], correct: 2 },
    { q: "ما الملعب الرئيسي الذي يخوض عليه الاتحاد مبارياته الرسمية؟", options: ["استاد برج العرب", "استاد الإسكندرية", "استاد القاهرة", "استاد المقاولون"], correct: 1 },
    { q: "أين كانت أول أرض يمارس عليها الاتحاد نشاطه عام 1906؟", options: ["الشاطبي", "رأس التين", "سموحة", "محطة الرمل"], correct: 1 },
    { q: "من هو النادي الذي اندمج مع الاتحاد عام 1912؟", options: ["نادي الأولمبي", "نادي الترام", "نادي الأبطال المتحدين", "نادي الفيكتوري"], correct: 2 },
    { q: "هل يعتبر الاتحاد السكندري من أقدم أندية مصر؟", options: ["نعم", "لا", "ربما", "غير معروف"], correct: 0 },
    { q: "في أي مدينة يقع نادي الاتحاد السكندري؟", options: ["القاهرة", "بورسعيد", "الإسكندرية", "السويس"], correct: 2 },
    { q: "ما هو شعار النادي من حيث الألوان؟", options: ["أخضر بخطوط بيضاء", "أبيض بخطوط حمراء", "أزرق بخطوط ذهبية", "أخضر وأسود"], correct: 0 },
    { q: "هل يشارك نادي الاتحاد في الدوري الممتاز لكرة القدم؟", options: ["نعم", "لا", "أحياناً", "انسحب"], correct: 0 },
    { q: "في أي منطقة يوجد المقر التاريخي للنادي؟", options: ["سيدي جابر", "محطة الرمل", "الشاطبي", "سموحة"], correct: 2 },
    { q: "ما هو النظام الذي اتُّبع في بدايات النادي؟", options: ["نادي خاص مغلق", "نادي شعبي مفتوح لأهالي الإسكندرية", "نادي عسكري", "نادي تابع لوزارة المعارف"], correct: 1 },
    { q: "أي من هذه الألعاب تُعتبر من أبرز ألعاب الاتحاد بخلاف كرة القدم؟", options: ["كمال الأجسام", "كرة السلة", "الجمباز", "التنس"], correct: 1 },
    { q: "ماذا يرمز اللون الأخضر في شعار النادي؟", options: ["البحر", "القوة", "الروح القتالية والانتماء", "التاريخ"], correct: 2 },
    { q: "في أي عام حصل الاتحاد على مقره في الشاطبي؟", options: ["1914", "1929", "1935", "1942"], correct: 1 },
    { q: "من هو الجمهور الملقّب بـ 'العياشة'؟", options: ["جمهور كرة السلة", "جمهور النادي المتحمس", "رابطة مشجعي الدرجة الأولى", "رابطة قدامى اللاعبين"], correct: 1 },
    { q: "ما هي الرياضة التي حقق فيها الاتحاد بطولات عربية وإفريقية متعددة؟", options: ["كرة اليد", "السباحة", "كرة السلة", "الكرة الطائرة"], correct: 2 },
    { q: "ما هي أكثر صفة يشتهر بها جمهور الاتحاد؟", options: ["الهدوء", "قلة الحضور", "الإخلاص والانتماء الشديد", "التشجيع الإلكتروني فقط"], correct: 2 },
    { q: "من هو النادي الذي نشأت معه أولى منافسات الاتحاد في بدايات القرن العشرين؟", options: ["نادي الترام", "نادي الأولمبي", "نادي السكة", "نادي فاروق"], correct: 0 },
    { q: "أي فرع يُعتبر الأقدم في تاريخ نادي الاتحاد؟", options: ["فرع سموحة", "فرع برج العرب", "فرع الشاطبي", "فرع المنتزه"], correct: 2 },
    { q: "ما هي الرياضة التي اشتهر بها الاتحاد وحقق فيها بطولات عربية؟", options: ["كرة اليد", "كرة السلة", "الكرة الطائرة", "الهوكي"], correct: 1 },
    { q: "أي من هذه الألقاب مرتبط بجمهور الاتحاد؟", options: ["ملوك الأرض", "القلعة الصفراء", "سيد البلد", "النسور الخضراء"], correct: 2 },
    { q: "ما هو أول مقر مؤقت استخدمه النادي عام 1906؟", options: ["منطقة الشاطبي", "منطقة رأس التين", "شارع فؤاد", "محطة الرمل"], correct: 1 },
    { q: "أين يقع الاستاد الذي يستضيف مباريات الاتحاد الرسمية؟", options: ["سموحة", "الشاطبي", "محرم بك", "الأزاريطة"], correct: 2 },
    { q: "أي من هذه الألعاب تُعد من الألعاب الجماهيرية داخل النادي؟", options: ["التنس", "السباحة", "كرة السلة", "الدراجات"], correct: 2 },
    { q: "ما سبب تميز الاتحاد بشعبية كبيرة في الإسكندرية؟", options: ["كثرة النجوم الأجانب", "جماهيريته التاريخية", "تأسيسه كفرع لوزارة الرياضة", "مشاركته الدائمة في البطولات القارية"], correct: 1 },
    { q: "أي من هذه البطولات لم يحققها نادي الاتحاد؟", options: ["كأس مصر", "الدوري المصري الممتاز", "بطولات عربية في السلة", "بطولة الجمهورية للشباب"], correct: 1 },
    { q: "من أشهر نجوم كرة السلة الذين لعبوا للاتحاد؟", options: ["إسماعيل أحمد", "محمد صلاح", "هيثم فاروق", "حازم إمام"], correct: 0 },
    { q: "ما العام الذي اعتُبر نقطة تحول في استقرار النادي إداريًا بعد الاندماجات؟", options: ["1906", "1914", "1920", "1930"], correct: 1 },
    { q: "ما هو اللون الأساسي لزي الفريق الأول لكرة القدم؟", options: ["الأبيض", "الأزرق", "الأخضر", "الأسود"], correct: 2 },
    { q: "من هو الخصم الذي يُعد من أبرز منافسي الاتحاد تاريخيًا؟", options: ["الأهلي", "الزمالك", "الأولمبي", "إنبي"], correct: 2 },
    { q: "ما هي الصفة المشتركة بين جماهير الاتحاد؟", options: ["الهدوء الشديد", "الحضور القليل", "الانتماء القوي والدعم المتواصل", "الاقتصار على متابعة الفريق تلفزيونيًا"], correct: 2 },
    { q: "أي من هذه الرياضات تعتبر من الألعاب الأساسية في النادي؟", options: ["الكاراتيه", "الفروسية", "الريشة الطائرة", "الرجبي"], correct: 0 },
    { q: "في أي منطقة يقع المبنى الاجتماعي الرئيسي للنادي؟", options: ["الإبراهيمية", "الشاطبي", "الأزاريطة", "أبو قير"], correct: 1 },
    { q: "ما هي أشهر أغنية لجمهور الاتحاد في المدرجات؟", options: ["يا أغلى اسم في الوجود", "أيوه أيوه الاتحاد", "شجع فريقك", "نادي النجوم"], correct: 1 },
    { q: "ماذا يمثل الاتحاد السكندري لمدينة الإسكندرية؟", options: ["نادٍ اجتماعي فقط", "مؤسسة تعليمية", "رمز رياضي وتاريخي للمدينة", "منشأة حكومية"], correct: 2 },
    { q: "أي من هؤلاء يُعد من الإداريين المؤثرين في تاريخ النادي؟", options: ["محمد علي", "محمد حيدر", "حسن الشاذلي", "عبد الحميد دمير"], correct: 3 },
    { q: "ما الذي يميز نادي الاتحاد عن باقي أندية الإسكندرية؟", options: ["الأصغر سنًا", "الأكثر جماهيرية وتاريخًا", "الأقل مشاركة في البطولات", "النادي المخصص للعبة واحدة"], correct: 1 },
    { q: "ما هو اللقب الشعبي للاعبي الاتحاد؟", options: ["رجال الأخضر", "الأسود الخضراء", "فرسان الساحل", "الملوك"], correct: 0 },
    { q: "أي من هذه الألعاب حقق فيها الاتحاد بطولات على مستوى مصر؟", options: ["كرة السلة", "السباحة", "التجديف", "النوكر"], correct: 0 },
    { q: "أي من الشخصيات التالية ارتبط اسمها بجمهور الاتحاد؟", options: ["عادل شكل", "محمد رمضان", "أبو تريكة", "شوبير"], correct: 0 },
    { q: "في أي حقبة ازدهر نشاط النادي بشكل كبير؟", options: ["السبعينيات والثمانينيات", "الأربعينيات فقط", "الخمسينيات فقط", "التسعينيات فقط"], correct: 0 },
    { q: "أي من الألعاب التالية لها قطاع قوي داخل النادي؟", options: ["المصارعة", "الجمباز", "كرة السلة", "الغطس"], correct: 2 },
    { q: "ما هي أكثر مباراة يتذكرها جمهور الاتحاد تاريخيًا؟", options: ["الفوز على الزمالك في الكأس", "الفوز على الأهلي في الدوري", "الفوز على الأولمبي بالديربي", "جميع ما سبق"], correct: 3 },
    { q: "أي من هذه الميزات يفتخر بها أعضاء النادي؟", options: ["قلة الأنشطة", "الانتماء العائلي للنادي", "غياب التاريخ", "عدم وجود ألعاب جماعية"], correct: 1 },
    { q: "ما الذي يميز الاتحاد عن أندية القاهرة؟", options: ["أقل حضور جماهيري", "يتمتع بجمهور شعبي أصيل", "لا يمتلك ألعابًا جماعية", "يعتمد على لاعبين أجانب فقط"], correct: 1 },
    { q: "ما هي أكثر لعبة تجذب جماهير الاتحاد إلى الصالة المغطاة؟", options: ["كرة اليد", "الكرة الطائرة", "كرة السلة", "الاسكواش"], correct: 2 },
    { q: "ماذا يعني لقب “زعيم الثغر”؟", options: ["زعيم أندية البحر الأحمر", "زعيم محافظة الإسكندرية", "زعيم أندية وجه قبلي", "زعيم أندية الصعيد"], correct: 1 }
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentMaxQuestions = 10; 

function startQuiz() {
    shuffledQuestions = [...quizData].sort(() => 0.5 - Math.random());
    currentQuestionIndex = 0;
    score = 0;
    currentMaxQuestions = 10; 

    document.getElementById('quiz-start-screen').classList.add('hidden');
    document.getElementById('quiz-result-screen').classList.add('hidden');
    document.getElementById('quiz-interface').classList.remove('hidden');
    document.getElementById('quiz-continue-modal').classList.add('hidden');
    
    showQuestion();
}

function showQuestion() {
    const questionData = shuffledQuestions[currentQuestionIndex];
    const qCounter = document.getElementById('question-counter');
    const qText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressBar = document.getElementById('quiz-progress-bar');
    const scoreDisplay = document.getElementById('score-display');

    qCounter.textContent = `سؤال ${currentQuestionIndex + 1} من ${currentMaxQuestions}`;
    scoreDisplay.textContent = `النقاط: ${score}`;
    
    const progressPercent = ((currentQuestionIndex % 10) / 10) * 100;
    progressBar.style.width = `${progressPercent}%`;

    qText.textContent = questionData.q;
    optionsContainer.innerHTML = '';

    questionData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index, btn, questionData.correct);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btn, correctIndex) {
    const buttons = document.querySelectorAll('.quiz-option-btn');
    buttons.forEach(b => b.disabled = true);

    if (selectedIndex === correctIndex) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
    }

    document.getElementById('score-display').textContent = `النقاط: ${score}`;

    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex === currentMaxQuestions) {
            if (currentMaxQuestions < 50) {
                showContinueModal();
            } else {
                showResult();
            }
        } else {
            showQuestion();
        }
    }, 1000);
}

function showContinueModal() {
    document.getElementById('quiz-continue-modal').classList.remove('hidden');
}

function continueQuiz() {
    document.getElementById('quiz-continue-modal').classList.add('hidden');
    currentMaxQuestions += 10;
    showQuestion();
}

function finishQuizEarly() {
    document.getElementById('quiz-continue-modal').classList.add('hidden');
    showResult();
}

function showResult() {
    document.getElementById('quiz-interface').classList.add('hidden');
    document.getElementById('quiz-result-screen').classList.remove('hidden');

    const finalScoreText = document.getElementById('final-score-text');
    const resultMsg = document.getElementById('result-message');
    const resultIcon = document.getElementById('result-icon');

    finalScoreText.textContent = `${score} / ${currentQuestionIndex}`;
    const percentage = (score / currentQuestionIndex) * 100;

    if (percentage >= 90) {
        resultIcon.textContent = "👑";
        resultMsg.textContent = "أنت مشجع أسطوري! تعرف كل تفصيلة في تاريخ زعيم الثغر.";
    } else if (percentage >= 70) {
        resultIcon.textContent = "👏";
        resultMsg.textContent = "ممتاز! معلوماتك قوية جداً عن النادي.";
    } else if (percentage >= 50) {
        resultIcon.textContent = "👍";
        resultMsg.textContent = "جيد، لكن محتاج تراجع التاريخ شوية.";
    } else {
        resultIcon.textContent = "😅";
        resultMsg.textContent = "شكلك لسه جديد في التشجيع، جرب تاني!";
    }
}

// --- 5. Main DOM Logic (Animations, Accordion, Countdown, Lightbox) ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Fix Fade In
    const sections = document.querySelectorAll('.animate-fade-in-up');
    sections.forEach(section => {
        setTimeout(() => { section.style.opacity = '1'; }, 50);
    });

    // Accordion
    const accordionHeaders = document.querySelectorAll('.block-card-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.accordion-item');
            const content = item.querySelector('.accordion-content');
            const arrow = item.querySelector('.arrow-icon');
            const isOpen = item.classList.contains('accordion-open');
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('accordion-open');
                    otherItem.querySelector('.accordion-content').style.maxHeight = 0;
                    otherItem.querySelector('.arrow-icon').style.transform = 'rotate(0deg)';
                }
            });
            if (isOpen) {
                item.classList.remove('accordion-open');
                content.style.maxHeight = 0;
                arrow.style.transform = 'rotate(0deg)';
            } else {
                item.classList.add('accordion-open');
                content.style.maxHeight = content.scrollHeight + "px";
                arrow.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Countdown Timer
    const electionDate = new Date("2025-12-26T00:00:00+02:00").getTime();
    const countdownElement = document.getElementById("countdown");
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = electionDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance > 0) {
            countdownElement.innerHTML = `
                <div class="text-center p-2 rounded-lg bg-white/10 shadow-md"><div class="countdown-number">${days}</div><div class="countdown-label">يوم</div></div>
                <div class="text-center p-2 rounded-lg bg-white/10 shadow-md"><div class="countdown-number">${hours}</div><div class="countdown-label">ساعة</div></div>
                <div class="text-center p-2 rounded-lg bg-white/10 shadow-md"><div class="countdown-number">${minutes}</div><div class="countdown-label">دقيقة</div></div>
                <div class="text-center p-2 rounded-lg bg-white/10 shadow-md"><div class="countdown-number">${seconds}</div><div class="countdown-label">ثانية</div></div>
            `;
        } else {
            countdownElement.innerHTML = `<div class="col-span-4 text-2xl font-extrabold text-accent bg-white/10 p-4 rounded-lg">انطلقت الانتخابات! صوتك الآن هو الحسم!</div>`;
        }
    };
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Lightbox
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const galleryImages = document.querySelectorAll('.photo-grid img');
    galleryImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            lightboxImage.src = img.src;
            lightboxModal.classList.remove('hidden');
            setTimeout(() => { lightboxModal.classList.add('lightbox-open'); }, 10);
        });
    });
    window.closeLightbox = function() {
        lightboxModal.classList.remove('lightbox-open');
        setTimeout(() => { lightboxModal.classList.add('hidden'); }, 300);
    }
});