import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

//Install Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration: ServiceWorkerRegistration) => {
                console.log('ServiceWorker registration successful with scope: ' + registration.scope);
            }, (err: Error) => {
                console.log('ServiceWorker registration failed: ' + err);
            });
    });
}