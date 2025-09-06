// 타이핑 애니메이션 반복 구현
document.addEventListener('DOMContentLoaded', function() {
    const text = '3시간 만에 시작하는 바이브코딩';
    const target = document.getElementById('typing-title');
    const typingSpeed = 120; // ms
    const pauseAfterTyping = 5000; // ms
    const pauseAfterDelete = 500; // ms

    function typeText(idx = 0) {
        if (idx <= text.length) {
            target.textContent = text.slice(0, idx);
            setTimeout(() => typeText(idx + 1), typingSpeed);
        } else {
            setTimeout(() => deleteText(text.length), pauseAfterTyping);
        }
    }

    function deleteText(idx) {
        if (idx >= 0) {
            target.textContent = text.slice(0, idx);
            setTimeout(() => deleteText(idx - 1), typingSpeed / 2);
        } else {
            setTimeout(() => typeText(0), pauseAfterDelete);
        }
    }

    typeText();
});
// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add simple fade-in animation to sections
const sections = document.querySelectorAll('.content-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

    // '튜토리얼 시작하기' 버튼 클릭 시 tutorial.html로 이동
    const startTutorialBtn = document.getElementById('start-tutorial-btn');
    if (startTutorialBtn) {
        startTutorialBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'tutorial.html';
        });
    }

// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('#primary-navigation');
const nav = document.querySelector('nav');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        primaryNav.classList.toggle('nav-open');
        nav.classList.toggle('nav-open');
    });
}