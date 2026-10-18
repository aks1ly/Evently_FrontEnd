
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';

export default defineConfig({
    plugins: [
        pugPlugin(undefined, {
            pagesUrl: "./pages/"
        })
    ],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                order: 'order.html',
                orderLocation: 'order-location.html',
                orderServices: "order-services.html",
                orderConfirmation: "order-confirmation.html"
            }
        }
    }
});
