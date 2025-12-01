// Interactive Priorities Logic
function showPriority(type, element) {
    // Remove active class from all buttons
    document.querySelectorAll('.priority-btn').forEach(btn => {
        btn.classList.remove('active-priority', 'bg-green-100');
        btn.classList.add('bg-gray-50');
    });
    
    // Add active class to clicked button
    element.classList.remove('bg-gray-50');
    element.classList.add('active-priority', 'bg-green-100');
    
    const contentDiv = document.getElementById('priority-content');
    let content = "";
    
    switch(type) {
        case 'sports':
            content = "⚽ تأسيس شركة كرة القدم لإدارة محترفة، وتطوير فرق الناشئين لتكون النواة الحقيقية للفريق الأول.";
            break;
        case 'family':
            content = "👨‍👩‍👧‍👦 إنشاء حضانة أطفال بأسعار رمزية، وتطوير منطقة العائلات لضمان الراحة والخصوصية.";
            break;
        case 'digital':
            content = "📱 تطبيق إلكتروني شامل (App) لحجز الملاعب، دفع الاشتراكات، ومتابعة أخبار النادي لحظة بلحظة.";
            break;
        case 'health':
            content = "🩺 تعاقدات طبية حصرية بخصومات حقيقية مع كبرى المستشفيات والصيدليات للأعضاء وأسرهم.";
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
        // Final State Reveal
        progressBar.style.animation = 'none';
        progressBar.style.width = '100%';
        
        statusBar.style.backgroundColor = '#FFD700';
        statusBar.style.color = '#004d26';
        statusBar.style.fontWeight = 'bold';
        statusBar.style.textShadow = 'none';
        statusBar.textContent = '✔️ صوتك أمانة: المنصة ستنطلق قريباً جداً!';

        scanButton.textContent = 'تم التحديث بنجاح! 🚀';
        
        setTimeout(() => {
            // Reset to initial state
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

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animate-fade-in-up');
    sections.forEach(section => {
        section.style.opacity = '0';
        setTimeout(() => {
            section.style.opacity = '1';
        }, 10);
    });

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

    // FIX: Set Countdown to Cairo Time (UTC+2)
    // 2025-12-26T00:00:00+02:00
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
                <div class="text-center p-2 rounded-lg bg-white/10 shadow-md">
                    <div class="countdown-number">${days}</div>
                    <div class="countdown-label">يوم</div>
                </div>
                <div class="text-center p-2 rounded-lg bg-white/10 shadow-md">
                    <div class="countdown-number">${hours}</div>
                    <div class="countdown-label">ساعة</div>
                </div>
                <div class="text-center p-2 rounded-lg bg-white/10 shadow-md">
                    <div class="countdown-number">${minutes}</div>
                    <div class="countdown-label">دقيقة</div>
                </div>
                <div class="text-center p-2 rounded-lg bg-white/10 shadow-md">
                    <div class="countdown-number">${seconds}</div>
                    <div class="countdown-label">ثانية</div>
                </div>
            `;
        } else {
            countdownElement.innerHTML = `<div class="col-span-4 text-2xl font-extrabold text-accent bg-white/10 p-4 rounded-lg">انطلقت الانتخابات! صوتك الآن هو الحسم!</div>`;
        }
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const galleryImages = document.querySelectorAll('.photo-grid img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            lightboxImage.src = img.src;
            lightboxModal.classList.remove('hidden');
            setTimeout(() => {
                lightboxModal.classList.add('lightbox-open');
            }, 10);
        });
    });
    
    window.closeLightbox = function() {
        lightboxModal.classList.remove('lightbox-open');
        setTimeout(() => {
            lightboxModal.classList.add('hidden');
        }, 300);
    }
    
    // Initialize status display text
    document.getElementById('status-display').textContent = initialStatus;
});
