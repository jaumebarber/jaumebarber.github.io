(function() {
    const THEME_MAP = {
        'dark': 'black',
        'light': 'light'
    };
    
    function setTheme(preference) {
        if (!document.body) return;
        
        const themeName = THEME_MAP[preference];
        
        // Remove all possible theme classes
        Object.values(THEME_MAP).forEach(theme => {
            document.body.classList.remove(`theme-${theme}`);
        });
        
        // Add new theme class
        document.body.classList.add(`theme-${themeName}`);
        
        // Update HTML attribute for the sun/moon animation
        document.firstElementChild.setAttribute('data-theme', preference);
        
        // Update button aria-label
        const toggle = document.querySelector('#theme-toggle');
        if (toggle) {
            toggle.setAttribute('aria-label', preference);
        }
        
        // Save preference
        localStorage.setItem('theme-preference', preference);
    }

    function initializeTheme() {
        // Get saved preference or use system preference
        const savedPreference = localStorage.getItem('theme-preference');
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedPreference || systemPreference;
        
        setTheme(initialTheme);

        // Add click handler
        const toggle = document.querySelector('#theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                const current = localStorage.getItem('theme-preference') || initialTheme;
                setTheme(current === 'dark' ? 'light' : 'dark');
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTheme);
    } else {
        initializeTheme();
    }

    // Sync with system changes
    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', ({matches:isDark}) => {
            setTheme(isDark ? 'dark' : 'light');
        });
})();