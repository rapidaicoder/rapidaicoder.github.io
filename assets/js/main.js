// MaClaw site main JS
document.addEventListener('DOMContentLoaded', () => {
    initCompanionTabs();
    initDownloadTabs();
    initLangPreference();
    initNavToggle();
    initScrollReveal();
    initTagline();
});

function initNavToggle() {
    var header = document.querySelector('.site-header');
    var toggle = document.querySelector('.nav-toggle');
    if (!header || !toggle) return;

    toggle.addEventListener('click', function () {
        var open = header.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    header.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            header.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function initScrollReveal() {
    var sections = document.querySelectorAll('main > section');
    if (!sections.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    sections.forEach(function (section, index) {
        if (index === 0) return;
        section.classList.add('reveal');
        var rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            section.classList.add('is-revealed');
            return;
        }
        observer.observe(section);
    });
}

function initTagline() {
    var title = document.querySelector('#research .section-title');
    if (!title || title.querySelector('.tagline-word') || !('IntersectionObserver' in window)) return;

    var lang = document.documentElement.lang || 'en';
    var text = title.textContent;
    var parts;
    if (window.Intl && Intl.Segmenter) {
        parts = Array.from(new Intl.Segmenter(lang, { granularity: 'word' }).segment(text));
    } else {
        parts = text.split(/(\s+)/).map(function (segment) {
            return { segment: segment, isWordLike: segment.trim().length > 0 };
        });
    }

    title.textContent = '';
    parts.forEach(function (part) {
        if (!part.isWordLike) {
            title.appendChild(document.createTextNode(part.segment));
            return;
        }
        var word = document.createElement('span');
        word.className = 'tagline-word';
        word.textContent = part.segment;
        title.appendChild(word);
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-on');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.5 });

    title.querySelectorAll('.tagline-word').forEach(function (word) {
        observer.observe(word);
    });
}

function initLangPreference() {
    var storageKey = 'maclaw-lang';
    document.querySelectorAll('.lang-switcher a[data-lang]').forEach(function (link) {
        function remember() {
            try {
                localStorage.setItem(storageKey, link.getAttribute('data-lang'));
            } catch (err) {}
        }
        link.addEventListener('click', remember);
        link.addEventListener('auxclick', remember);
    });
}

function initCompanionTabs() {
    const tabs = document.querySelectorAll('.companion-tab');
    const panels = document.querySelectorAll('.companion-panel');
    if (!tabs.length || !panels.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            tabs.forEach(t => {
                const active = t === tab;
                t.classList.toggle('active', active);
                t.setAttribute('aria-selected', active ? 'true' : 'false');
            });

            panels.forEach(panel => {
                const active = panel.id === targetId;
                panel.classList.toggle('active', active);
                if (active) {
                    panel.removeAttribute('hidden');
                } else {
                    panel.setAttribute('hidden', '');
                }
            });
        });
    });
}

function initDownloadTabs() {
    const tabs = document.querySelectorAll('.download-tab');
    const panels = document.querySelectorAll('.download-panel');
    if (!tabs.length || !panels.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            tabs.forEach(t => {
                const active = t === tab;
                t.classList.toggle('active', active);
                t.setAttribute('aria-selected', active ? 'true' : 'false');
            });

            panels.forEach(panel => {
                const active = panel.id === targetId;
                panel.classList.toggle('active', active);
                if (active) {
                    panel.removeAttribute('hidden');
                } else {
                    panel.setAttribute('hidden', '');
                }
            });
        });
    });
}
