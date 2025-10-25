/* const themeSwitch = document.getElementById('theme-switch');
const nextIcons = {
    light: document.querySelector('.icon-contrast'),
    dark: document.querySelector('.icon-moon'),
    contrast: document.querySelector('.icon-sun')
};
let themeMode = localStorage.getItem('themeMode') || 'light';

function hideAllIcons() {
    Object.values(nextIcons).forEach(icon => {
        if (icon) icon.style.display = 'none';
    });
}

function showIconForNextTheme(currentTheme) {
    hideAllIcons();
    const themes = ['light', 'dark', 'contrast'];
    const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    const icon = nextIcons[nextTheme];
    if (icon) icon.style.display = 'inline';
}

function applyTheme(mode) {
    document.documentElement.classList.remove('darkmode', 'high-contrast');
    document.documentElement.removeAttribute('data-theme');

    switch (mode) {
        case 'dark':
            document.documentElement.classList.add('darkmode');
            document.documentElement.setAttribute('data-theme', 'dark');
            break;
        case 'contrast':
            document.documentElement.classList.add('high-contrast');
            document.documentElement.setAttribute('data-theme', 'contrast');
            break;
        default:
            document.documentElement.setAttribute('data-theme', 'light');
    }

    localStorage.setItem('themeMode', mode);
    themeMode = mode;
    showIconForNextTheme(mode);
}

function cycleTheme() {
    const themes = ['light', 'dark', 'contrast'];
    const nextIndex = (themes.indexOf(themeMode) + 1) % themes.length;
    applyTheme(themes[nextIndex]);
}

applyTheme(themeMode);

if (themeSwitch) {
    themeSwitch.addEventListener('click', function (e) {
        e.preventDefault();
        cycleTheme();
    });
}
; */