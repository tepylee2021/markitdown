# Website Starter

A professional website starter with animated transitions, scroll choreography, and a real-time 3D hero — built as a reference stack, not a template to copy verbatim.

## Stack

- **React 19 + TypeScript + Vite** — app shell and dev server
- **Framer Motion** — component-level animation, page/element transitions, gesture interactions (`src/components/Nav.tsx`, `Hero.tsx`, `Services.tsx`, `Contact.tsx`)
- **GSAP + ScrollTrigger** — scroll-driven reveal animations (`src/components/About.tsx`)
- **Lenis** — smooth/inertia scrolling, wired into GSAP's ticker (`src/lib/useLenis.ts`)
- **Three.js + React Three Fiber + drei** — the 3D hero scene: a distorted, pointer-reactive icosahedron with a floating particle field (`src/components/Scene3D.tsx`)

## Structure

```
src/
  components/
    Nav.tsx       # fixed nav, animated mobile menu
    Hero.tsx       # staggered intro copy + 3D canvas
    Scene3D.tsx     # R3F scene: mesh, lights, particles
    About.tsx      # GSAP ScrollTrigger reveals
    Services.tsx    # scroll-in cards with hover motion
    Contact.tsx      # animated form -> success state
    Footer.tsx
  lib/
    useLenis.ts     # smooth-scroll hook synced to GSAP
```

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build
npm run preview     # serve the production build locally
```

## Notes

- The 3D scene uses only local lighting (no external HDR/environment map fetch), so it works offline.
- Swap the color tokens in `src/index.css` (`--bg`, `--accent`, etc.) to re-theme the whole site.
- `About.tsx` shows the GSAP ScrollTrigger pattern; `Services.tsx`/`Contact.tsx` show the Framer Motion `whileInView`/`AnimatePresence` patterns — mix and match per section depending on how much control you need.
