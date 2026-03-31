@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
  --gold-500: #c49a2e;
  --gold-400: #d4a843;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  color: #1a2332;
  background: #ffffff;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 { font-family: var(--font-display); }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.animate-fade-up { animation: fadeUp 0.7s ease-out forwards; }
.animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
.opacity-0 { opacity: 0; }

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
.delay-600 { animation-delay: 0.6s; }

::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: #f0f4f8; }
::-webkit-scrollbar-thumb { background: #486581; border-radius: 3px; }

*:focus-visible { outline: 2px solid #c49a2e; outline-offset: 2px; }

.gold-line {
  display: block;
  width: 44px;
  height: 2px;
  background: var(--gold-500);
}

.bg-mesh {
  background-color: #102a43;
  background-image:
    radial-gradient(at 15% 85%, rgba(196,154,46,0.10) 0px, transparent 50%),
    radial-gradient(at 85% 15%, rgba(255,255,255,0.03) 0px, transparent 50%);
}

.card-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 56px rgba(16,42,67,0.13);
}
