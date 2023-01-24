const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// before install event handler
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// handler for button click
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
    return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// handler for app already installed
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
