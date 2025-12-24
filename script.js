/**
 * ==========================================
 * 1. ELECTION COMMITTEE DATA & SEARCH LOGIC
 * ==========================================
 */

// Full dataset of Committee Ranges
// Format: { c: Committee Number, s: Start Membership ID, e: End Membership ID }
const committeeData = [
    { c: 1, s: 6, e: 6088 },
    { c: 2, s: 6090, e: 8171 },
    { c: 3, s: 8175, e: 9776 },
    { c: 4, s: 9778, e: 11390 },
    { c: 5, s: 11392, e: 12977 },
    { c: 6, s: 12979, e: 14625 },
    { c: 7, s: 14628, e: 16114 },
    { c: 8, s: 16120, e: 17319 },
    { c: 9, s: 17320, e: 18448 },
    { c: 10, s: 18449, e: 19509 },
    { c: 11, s: 19510, e: 20555 },
    { c: 12, s: 20556, e: 21518 },
    { c: 13, s: 21519, e: 22487 },
    { c: 14, s: 22488, e: 23393 },
    { c: 15, s: 23394, e: 24302 },
    { c: 16, s: 24305, e: 25233 },
    { c: 17, s: 25234, e: 26115 },
    { c: 18, s: 26116, e: 27005 },
    { c: 19, s: 27006, e: 27920 },
    { c: 20, s: 27921, e: 28817 },
    { c: 21, s: 28818, e: 29728 },
    { c: 22, s: 29729, e: 30663 },
    { c: 23, s: 30664, e: 31554 },
    { c: 24, s: 31555, e: 32506 },
    { c: 25, s: 32507, e: 33468 },
    { c: 26, s: 33473, e: 34397 },
    { c: 27, s: 34398, e: 35367 },
    { c: 28, s: 35368, e: 36256 },
    { c: 29, s: 36257, e: 37143 },
    { c: 30, s: 37144, e: 38087 },
    { c: 31, s: 38088, e: 38956 },
    { c: 32, s: 38957, e: 39867 },
    { c: 33, s: 39868, e: 40981 },
    { c: 34, s: 40982, e: 42020 },
    { c: 35, s: 42021, e: 43088 },
    { c: 36, s: 43089, e: 44199 },
    { c: 37, s: 44200, e: 45328 },
    { c: 38, s: 45329, e: 46363 },
    { c: 39, s: 46364, e: 47399 },
    { c: 40, s: 47400, e: 48446 },
    { c: 41, s: 48447, e: 49483 },
    { c: 42, s: 49484, e: 50479 },
    { c: 43, s: 50480, e: 51640 },
    { c: 44, s: 51641, e: 52935 },
    { c: 45, s: 52936, e: 55537 }
];

// Handle "Enter" key press in input
function handleEnter(e) {
    if (e.key === 'Enter') {
        findCommittee();
    }
}

// Main Search Function (Updated with Toast)
function findCommittee() {
    const input = document.getElementById('membership-input');
    const val = parseInt(input.value);
    const modal = document.getElementById('committee-modal');
    const resultText = document.getElementById('result-committee-number');
    
    // Validation: Check if empty or not a number
    if (!val || isNaN(val)) {
        showToast("من فضلك أدخل رقم عضوية صحيح");
        return;
    }

    // Logic: Find the range
    const found = committeeData.find(item => val >= item.s && val <= item.e);

    if (found) {
        // 1. Update Modal Content
        resultText.textContent = `(${found.c})`;
        
        // 2. Show Modal (Remove hidden, add flex)
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    } else {
        // Number not found in ranges
        showToast("عفواً، هذا الرقم غير مدرج في الكشوف الانتخابية الحالية");
    }
}

// Close Modal Function
function closeCommitteeModal() {
    const modal = document.getElementById('committee-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    // Optional: Clear input on close
    document.getElementById('membership-input').value = '';
}

// --- NEW TOAST FUNCTIONS ---

function showToast(message) {
    const toast = document.getElementById('custom-toast');
    const text = document.getElementById('toast-message-text');
    
    // Set the message
    text.textContent = message;
    
    // Show animation (Remove hidden states)
    toast.classList.remove('opacity-0', '-translate-y-10', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    // Play a small vibration on mobile (Optional)
    if (navigator.vibrate) navigator.vibrate(200);

    // Auto hide after 4 seconds
    if (window.toastTimeout) clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => {
        hideToast();
    }, 4000);
}

function hideToast() {
    const toast = document.getElementById('custom-toast');
    // Hide animation
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', '-translate-y-10', 'pointer-events-none');
}


/**
 * ==========================================
 * 2. TAB SWITCHING LOGIC
 * ==========================================
 */
function switchTab(tabName) {
    // 1. Hide all content sections
    document.querySelectorAll('.tab-content-section').forEach(section => {
        section.classList.add('hidden');
    });

    // 2. Remove active state from all buttons
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.remove('active-tab');
    });

    // 3. Show specific content
    const contentId = 'content-' + tabName;
    const contentEl = document.getElementById(contentId);
    if(contentEl) {
        contentEl.classList.remove('hidden');
        // Reset animation to play again
        contentEl.style.animation = 'none';
        contentEl.offsetHeight; /* trigger reflow */
        contentEl.style.animation = 'fade-in-up 0.8s ease-out forwards';
    }

    // 4. Set active button
    const btnId = 'btn-' + tabName;
    const btnEl = document.getElementById(btnId);
    if(btnEl) {
        btnEl.classList.add('active-tab');
    }

    // 5. Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/**
 * ==========================================
 * 3. PROMO CODE & PRIORITIES
 * ==========================================
 */
function copyPromoCode() {
    const promoText = document.getElementById('promo-text').textContent;
    const feedback = document.getElementById('copy-feedback');
    
    navigator.clipboard.writeText(promoText).then(() => {
        feedback.style.opacity = '1';
        feedback.textContent = 'تم نسخ الكود بنجاح! ✅';
        setTimeout(() => { feedback.style.opacity = '0'; }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        feedback.style.opacity = '1';
        feedback.style.color = 'red';
        feedback.textContent = 'فشل النسخ';
    });
}

function showPriority(type, element) {
    document.querySelectorAll('.priority-btn').forEach(btn => {
        btn.classList.remove('active-priority', 'bg-green-100');
        btn.classList.add('bg-gray-50');
    });
    element.classList.remove('bg-gray-50');
    element.classList.add('active-priority', 'bg-green-100');
    
    const contentDiv = document.getElementById('priority-content');
    let content = "";
    
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
            content = "❤️ تعاقدات طبية حصرية بخصومات حقيقية مع كبرى المستشفيات ."; 
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


/**
 * ==========================================
 * 4. SHARE CAMPAIGN
 * ==========================================
 */
function shareCampaign() {
    const shareData = {
        title: 'أحمد السيد موسى - طريقنا واحد',
        text: 'اقرأ البرنامج الانتخابي للمرشح أحمد السيد موسى',
        url: 'https://trialb104-spec.github.io/MussaElection/'
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Shared successfully'))
            .catch((err) => console.log('Error sharing:', err));
    } else {
        const text = encodeURIComponent(shareData.text + " " + shareData.url);
        window.open(`https://wa.me/?text=${text}`, '_blank');
    }
}


/**
 * ==========================================
 * 5. QUIZ LOGIC
 * ==========================================
 */
const quizData = [
    { q: "في أي عام تأسس نادي الاتحاد لأول مرة؟", options: ["1906", "1910", "1912", "1914"], correct: 0 },
    { q: "ما هو اللقب الشهير الذي يُطلق على نادي الاتحاد؟", options: ["القلعة الخضراء", "سيد البلد – زعيم الثغر", "أسياد المتوسط", "أخضر الدلتا"], correct: 1 },
    { q: "ما هي ألوان نادي الاتحاد الرسمية؟", options: ["الأحمر والأبيض", "الأخضر والأبيض", "الأزرق والأبيض", "الأصفر والأسود"], correct: 1 },
    { q: "كم مرة فاز الاتحاد السكندري ببطولة كأس مصر؟", options: ["4 مرات", "5 مرات", "6 مرات", "7 مرات"], correct: 2 },
    { q: "ما الملعب الرئيسي الذي يخوض عليه الاتحاد مبارياته الرسمية؟", options: ["استاد برج العرب", "استاد الإسكندرية", "استاد القاهرة", "استاد المقاولون"], correct: 1 },
    { q: "أين كانت أول أرض يمارس عليها الاتحاد نشاطه عام 1906؟", options: ["الشاطبي", "رأس التين", "سموحة", "محطة الرمل"], correct: 1 },
    { q: "في أي مدينة يقع نادي الاتحاد السكندري؟", options: ["القاهرة", "بورسعيد", "الإسكندرية", "السويس"], correct: 2 },
    { q: "هل يشارك نادي الاتحاد في الدوري الممتاز لكرة القدم؟", options: ["نعم", "لا", "أحياناً", "انسحب"], correct: 0 },
    { q: "في أي منطقة يوجد المقر التاريخي للنادي؟", options: ["سيدي جابر", "محطة الرمل", "الشاطبي", "سموحة"], correct: 2 },
    { q: "ماذا يرمز اللون الأخضر في شعار النادي؟", options: ["البحر", "القوة", "الروح القتالية والانتماء", "التاريخ"], correct: 2 },
    { q: "في أي عام حصل الاتحاد على مقره في الشاطبي؟", options: ["1914", "1929", "1935", "1942"], correct: 1 },
    { q: "ما هي الرياضة التي حقق فيها الاتحاد بطولات عربية وإفريقية متعددة؟", options: ["كرة اليد", "السباحة", "كرة السلة", "الكرة الطائرة"], correct: 2 },
    { q: "ما هي أكثر صفة يشتهر بها جمهور الاتحاد؟", options: ["الهدوء", "قلة الحضور", "الإخلاص والانتماء الشديد", "التشجيع الإلكتروني فقط"], correct: 2 },
    { q: "ما هو أول مقر مؤقت استخدمه النادي عام 1906؟", options: ["منطقة الشاطبي", "منطقة رأس التين", "شارع فؤاد", "محطة الرمل"], correct: 1 },
    { q: "من أشهر نجوم كرة السلة الذين لعبوا للاتحاد؟", options: ["إسماعيل أحمد", "محمد صلاح", "هيثم فاروق", "حازم إمام"], correct: 0 },
    { q: "ما هو اللون الأساسي لزي الفريق الأول لكرة القدم؟", options: ["الأبيض", "الأزرق", "الأخضر", "الأسود"], correct: 2 },
    { q: "ما هي أشهر أغنية لجمهور الاتحاد في المدرجات؟", options: ["يا أغلى اسم في الوجود", "أيوه أيوه الاتحاد", "شجع فريقك", "نادي النجوم"], correct: 1 },
    { q: "ماذا يمثل الاتحاد السكندري لمدينة الإسكندرية؟", options: ["نادٍ اجتماعي فقط", "مؤسسة تعليمية", "رمز رياضي وتاريخي للمدينة", "منشأة حكومية"], correct: 2 },
    { q: "من هو المسؤول التنفيذي الأعلى داخل نادي الأتحاد السكندري؟", options: ["أمين الصندوق", "مدير الأمن", "المدير التنفيذي للنادي", "مدير النشاط الرياضي"], correct: 2 },
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
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showResult();
        return;
    }

    const questionData = shuffledQuestions[currentQuestionIndex];
    const qCounter = document.getElementById('question-counter');
    const qText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressBar = document.getElementById('quiz-progress-bar');
    const scoreDisplay = document.getElementById('score-display');

    qCounter.textContent = `سؤال ${currentQuestionIndex + 1} من ${currentMaxQuestions}`;
    scoreDisplay.textContent = `النقاط: ${score}`;
    
    // Progress calculation based on batch of 10
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
    buttons.forEach(b => {
        b.disabled = true; 
        b.onclick = null; 
    });

    if (selectedIndex === correctIndex) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        if (buttons[correctIndex]) {
            buttons[correctIndex].classList.add('correct');
        }
    }

    document.getElementById('score-display').textContent = `النقاط: ${score}`;

    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex === currentMaxQuestions) {
            if (currentQuestionIndex < shuffledQuestions.length) {
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
    
    if ((currentMaxQuestions + 10) > shuffledQuestions.length) {
        currentMaxQuestions = shuffledQuestions.length;
    } else {
        currentMaxQuestions += 10;
    }
    
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
    
    let percentage = 0;
    if(currentQuestionIndex > 0) {
        percentage = (score / currentQuestionIndex) * 100;
    }

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


/**
 * ==========================================
 * 6. GLOBAL INITIALIZATION (Countdown, DOM, Lightbox)
 * ==========================================
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // Fade In Effect Fix
    const sections = document.querySelectorAll('.animate-fade-in-up');
    sections.forEach(section => {
        setTimeout(() => { section.style.opacity = '1'; }, 50);
    });

    // Accordion Logic
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

    // Countdown Timer Logic
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

    // Lightbox Logic
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