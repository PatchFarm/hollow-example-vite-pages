const app = document.querySelector<HTMLElement>("#app");

if (app) {
  app.innerHTML = `
    <h1>The Hollow: Vite on Cloudflare Pages</h1>
    <p>This site is built once, staged, and promoted to production by its pipeline.</p>
  `;
}
