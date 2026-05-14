// MaClaw site main JS
document.addEventListener('DOMContentLoaded', () => {
    initCompanionTabs();
});

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
