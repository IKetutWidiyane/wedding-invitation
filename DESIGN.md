# Wedding Invitation — Design System

## 1. Project Overview

Digital wedding invitation berbasis **React.js** dengan fokus pada:

* Elegant wedding aesthetic
* Romantic atmosphere
* Premium editorial design
* Smooth scrolling
* Scroll-based animations
* Wedding photography
* Subtle floral decoration
* Responsive mobile experience

Website harus terasa seperti **undangan pernikahan digital premium**, bukan website SaaS, portfolio, dashboard, atau template AI.

---

# 2. Technology Stack

Gunakan:

```text
React.js
Vite
JavaScript / TypeScript
Tailwind CSS
Framer Motion
Lenis
Lucide React
```

### Animation & Scrolling

```text
Lenis
Framer Motion
Intersection Observer
CSS transitions
```

---

# 3. Smooth Scrolling — Lenis

Gunakan **Lenis** sebagai smooth scrolling utama.

Tujuan:

* Scrolling terasa lembut
* Transisi antar section lebih premium
* Parallax terasa natural
* Scroll animation lebih synchronized
* Tidak menggunakan custom wheel scrolling sendiri

Install:

```bash
npm install lenis
```

---

## Lenis Configuration

Buat provider atau wrapper khusus.

Contoh struktur:

```text
src/
├── components/
│   └── smooth/
│       └── SmoothScroll.jsx
│
├── hooks/
│   └── useLenis.js
│
└── App.jsx
```

Konfigurasi Lenis harus terasa:

```text
smooth
natural
slow
elegant
```

Jangan membuat scrolling terlalu lambat.

Target feeling:

> Smooth luxury wedding website.

Bukan:

> Slow motion website.

---

## Recommended Lenis Behavior

Gunakan:

```text
lerp        → sekitar 0.08–0.12
duration    → natural
smoothWheel → enabled
```

Sesuaikan berdasarkan device.

Desktop dapat menggunakan smoothing lebih terasa.

Mobile jangan terlalu berat.

---

# 4. Scroll Architecture

Gunakan satu instance Lenis untuk seluruh website.

Flow:

```text
User Scroll
     ↓
   Lenis
     ↓
Smooth Scroll
     ↓
Scroll Position
     ↓
Framer Motion / Intersection Observer
     ↓
Section Animation
```

Jangan membuat setiap section memiliki instance Lenis sendiri.

---

# 5. Design Direction

Karakter utama:

```text
Elegant
Romantic
Warm
Editorial
Minimal
Timeless
Personal
```

Inspirasi visual:

* Luxury wedding invitation
* Fine-art wedding stationery
* Editorial photography
* Classical typography
* Botanical decoration
* Soft paper texture
* Elegant floral ornament

---

# 6. Avoid

Jangan gunakan:

```text
Neon
Cyan gradient
Purple gradient
Tech blue
Glassmorphism berlebihan
Cyberpunk
Dashboard UI
SaaS cards
Excessive shadows
Excessive rounded corners
AI-looking UI
Over-animation
```

Hindari warna biru sebagai warna utama.

Website harus memiliki nuansa:

```text
warm
earthy
romantic
luxury
```

---

# 7. Color Palette

## Primary

```text
Ivory        #F8F4EC
Warm White   #FFFDF8
Champagne    #D8C3A5
Gold         #B89B5E
Taupe        #8C7A67
Mocha        #5C493A
Dark Brown   #302820
```

## Accent

```text
Dusty Rose   #C99A91
Blush        #E6C7C1
Sage         #9CA58A
Olive        #777C62
```

### Usage

Background:

```css
#F8F4EC
```

Primary text:

```css
#302820
```

Secondary text:

```css
#8C7A67
```

Accent:

```css
#B89B5E
```

Gold digunakan secara terbatas sebagai detail premium.

---

# 8. Typography

## Display Font

Gunakan:

```text
Cormorant Garamond
```

Alternatif:

```text
Playfair Display
Bodoni Moda
DM Serif Display
```

## Body Font

Gunakan:

```text
DM Sans
```

Alternatif:

```text
Manrope
Inter
Montserrat
```

## Script Font

Gunakan hanya untuk aksen:

```text
Allura
Great Vibes
```

Jangan menggunakan script font untuk body text.

---

# 9. Typography Scale

## Desktop

```text
Hero Name       72–110px
Section Title   48–64px
Sub Heading     24–32px
Body            16–18px
Small Text      12–14px
```

## Mobile

```text
Hero Name       48–64px
Section Title   36–44px
Sub Heading     20–24px
Body            15–16px
Small Text      11–13px
```

---

# 10. Page Structure

Website menggunakan single-page scrolling.

```text
src/
│
├── sections/
│   ├── Hero.jsx
│   ├── Couple.jsx
│   ├── Story.jsx
│   ├── Event.jsx
│   ├── Countdown.jsx
│   ├── Gallery.jsx
│   ├── Location.jsx
│   ├── RSVP.jsx
│   ├── Wishes.jsx
│   └── Closing.jsx
│
├── components/
│   ├── smooth/
│   │   └── SmoothScroll.jsx
│   │
│   ├── animation/
│   │   ├── Reveal.jsx
│   │   ├── ImageReveal.jsx
│   │   └── Parallax.jsx
│   │
│   ├── wedding/
│   │   ├── FloralDecoration.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── GoldButton.jsx
│   │   └── MusicPlayer.jsx
│   │
│   └── ui/
│
├── hooks/
│   └── useLenis.js
│
├── assets/
│   ├── images/
│   ├── flowers/
│   └── textures/
│
└── App.jsx
```

---

# 11. Hero / Opening

Hero adalah bagian paling penting.

Gunakan:

```text
100svh
```

Layout:

```text
┌──────────────────────────────┐
│                              │
│       THE WEDDING OF         │
│                              │
│          AYU & BAGUS         │
│                              │
│       12 DECEMBER 2026       │
│                              │
│       OPEN INVITATION        │
│                              │
│              ↓               │
└──────────────────────────────┘
```

Background:

* Wedding photograph
* Warm overlay
* Subtle grain
* Floral decoration

---

# 12. Hero Animation

Saat halaman pertama dibuka:

```text
Background
    ↓
Fade in

Floral decoration
    ↓
Slide + fade

"The Wedding Of"
    ↓
Fade up

Couple name
    ↓
Scale + fade

Date
    ↓
Fade up

Button
    ↓
Fade up
```

Gunakan durasi:

```text
0.6s – 1.2s
```

Animation easing:

```text
ease-out
```

Jangan gunakan bounce.

---

# 13. Opening Button

Style:

```text
transparent
1px champagne/gold border
warm brown text
```

Normal:

```text
background: transparent
```

Hover:

```text
background: #B89B5E
color: #FFFDF8
```

Transition:

```text
300ms
```

Button harus terlihat seperti bagian dari wedding stationery.

---

# 14. Couple Section

Layout desktop:

```text
             OUR STORY

       ┌─────────┐   ┌─────────┐
       │         │   │         │
       │  PHOTO  │   │  PHOTO  │
       │         │   │         │
       └─────────┘   └─────────┘

           AYU  ♡  BAGUS
```

Mobile:

```text
PHOTO

AYU
Putri ...

♡

PHOTO

BAGUS
Putra ...
```

Gunakan frame:

```text
1px champagne
```

---

# 15. Scroll Reveal System

Semua section tidak boleh langsung muncul sekaligus.

Gunakan reveal animation.

### Fade Up

```text
opacity:
0 → 1

transform:
translateY(30px) → translateY(0)
```

Duration:

```text
700ms
```

### Fade In

Untuk foto:

```text
opacity:
0 → 1
```

Duration:

```text
900ms
```

### Stagger

```text
Element 1 → 0ms
Element 2 → 100ms
Element 3 → 200ms
Element 4 → 300ms
```

---

# 16. Lenis + Framer Motion

Lenis bertanggung jawab terhadap:

```text
scroll behavior
```

Framer Motion bertanggung jawab terhadap:

```text
element animation
scroll reveal
stagger
parallax
transitions
```

Jangan menggunakan Framer Motion untuk menggantikan Lenis.

Keduanya memiliki fungsi berbeda.

---

# 17. Intersection Observer

Untuk elemen sederhana, gunakan Intersection Observer.

Contoh penggunaan:

```text
Section title
Paragraph
Event information
RSVP
Wishes
```

Ketika element masuk viewport:

```text
hidden
    ↓
visible
```

Trigger hanya sekali.

---

# 18. Parallax

Parallax hanya digunakan pada:

```text
Hero background
Large photography
Floral decoration
```

Tidak semua element.

Effect:

```text
Scroll
  ↓
Image bergerak sedikit lebih lambat
```

Gunakan range kecil:

```text
10px – 50px
```

Jangan sampai terasa seperti website 3D.

---

# 19. Floral Decoration

Gunakan SVG atau PNG transparan.

Contoh:

```text
flowers/
├── branch-left.svg
├── branch-right.svg
├── flower-small.svg
├── leaves.svg
└── ornament.svg
```

Animasi:

```text
opacity
translateY
rotate
```

Floating animation:

```text
5–8 seconds
```

Gerakan sangat kecil.

---

# 20. Story Timeline

Timeline:

```text
OUR STORY

2019
The First Meeting
        │
        │
2021
The Beginning
        │
        │
2025
The Proposal
        │
        │
2026
Forever Begins
```

Saat masuk viewport:

```text
line → grow
year → fade up
text → fade up
```

---

# 21. Wedding Event

Gunakan editorial layout.

```text
CEREMONY

12
DECEMBER
2026

09:00 WIB

Venue Name
Address

VIEW MAP
```

Reception:

```text
RECEPTION

12
DECEMBER
2026

18:00 WIB

Venue Name
Address

VIEW MAP
```

Jangan menggunakan card UI yang terlalu modern.

---

# 22. Countdown

Minimal:

```text
COUNTDOWN

124       08       32       15
DAYS     HOURS    MINUTES   SECONDS
```

Gunakan serif besar.

Tidak menggunakan digital-clock style.

---

# 23. Gallery

Gunakan editorial masonry.

Desktop:

```text
┌───────────────┬────────┐
│               │        │
│     IMAGE     │ IMAGE  │
│               │        │
├───────┬───────┴────────┤
│ IMAGE │      IMAGE      │
│       │                 │
└───────┴─────────────────┘
```

Mobile:

```text
IMAGE
IMAGE
IMAGE
IMAGE
```

Hover:

```text
scale(1.03)
```

Duration:

```text
700ms
```

---

# 24. Image Reveal

Untuk foto tertentu gunakan clip-path.

Initial:

```css
clip-path: inset(0 100% 0 0);
```

Final:

```css
clip-path: inset(0 0 0 0);
```

Duration:

```text
1000ms
```

Effect harus terasa seperti halaman editorial terbuka.

---

# 25. Location

Layout:

```text
WHERE WE CELEBRATE

┌───────────────────────┐
│                       │
│         MAP           │
│                       │
└───────────────────────┘

Venue Name
Full Address

[ OPEN GOOGLE MAPS ]
```

Button tetap mengikuti style gold/champagne.

---

# 26. RSVP

RSVP dibuat seperti kartu undangan.

```text
RSVP

We would be honored
to celebrate this special day
with you.

Name
────────────────────

Attendance

○ Will Attend
○ Unable to Attend

Message
────────────────────

SUBMIT RSVP
```

Gunakan underline input daripada card input besar.

---

# 27. Wishes / Guestbook

Layout:

```text
WISHES

"May your love grow stronger
with every passing year."

────────────

Name
Message

────────────

Name
Message
```

Gunakan:

```text
fade-up
stagger
```

---

# 28. Music Player

Fixed position:

```text
bottom: 24px
right: 24px
```

Button kecil berbentuk circle.

State:

```text
♫
```

Music aktif:

```text
subtle rotation
```

Jangan membuat music player besar.

---

# 29. Closing

Ending seperti surat.

```text
THANK YOU

For being part of
our special day.

With Love,

AYU & BAGUS

12 . 12 . 2026

❦
```

Gunakan whitespace besar.

---

# 30. Footer

Minimal:

```text
AYU & BAGUS

Made with love

© 2026
```

Tidak perlu footer seperti website perusahaan.

---

# 31. Responsive

## Desktop

```text
max-width: 1200px
```

Gunakan whitespace besar.

## Tablet

Kurangi:

```text
heading size
padding
gallery columns
```

## Mobile

Prioritas:

```text
Readable typography
Large photography
Easy interaction
Light animation
Fast loading
```

Hero:

```text
min-height: 100svh
```

Padding:

```text
20px – 24px
```

---

# 32. Mobile Animation

Mobile harus lebih ringan.

Kurangi:

```text
Parallax
Floating decoration
Large transforms
Complex clip-path
```

Tetap pertahankan:

```text
Fade
Fade-up
Stagger
Simple image reveal
```

---

# 33. Performance

Prioritaskan:

```text
transform
opacity
```

Hindari animasi:

```text
width
height
top
left
box-shadow
```

Optimasi image:

```text
WebP
AVIF
lazy loading
responsive images
```

Hero image boleh eager-load karena merupakan visual utama.

---

# 34. Accessibility

Gunakan:

```text
semantic HTML
alt text
keyboard navigation
proper contrast
focus state
```

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Jika aktif:

```text
Disable Lenis smoothing
Disable parallax
Disable floating animation
Reduce transitions
```

Animasi tidak boleh mengganggu accessibility.

---

# 35. Component Architecture

```text
src/
│
├── components/
│   ├── animation/
│   │   ├── Reveal.jsx
│   │   ├── Stagger.jsx
│   │   ├── ImageReveal.jsx
│   │   └── Parallax.jsx
│   │
│   ├── smooth/
│   │   └── SmoothScroll.jsx
│   │
│   ├── wedding/
│   │   ├── FloralDecoration.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── GoldButton.jsx
│   │   └── MusicPlayer.jsx
│   │
│   └── ui/
│
├── sections/
│   ├── Hero.jsx
│   ├── Couple.jsx
│   ├── Story.jsx
│   ├── Event.jsx
│   ├── Countdown.jsx
│   ├── Gallery.jsx
│   ├── Location.jsx
│   ├── RSVP.jsx
│   ├── Wishes.jsx
│   └── Closing.jsx
│
├── hooks/
│   ├── useLenis.js
│   └── useInView.js
│
├── assets/
│   ├── images/
│   ├── flowers/
│   └── textures/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 36. Suggested Animation Flow

Keseluruhan halaman:

```text
OPEN
 │
 ├── Hero fade
 │
 ├── Floral reveal
 │
 └── Couple name reveal
        │
        ↓
      SCROLL
        │
        ↓
    Lenis Smooth
        │
        ↓
   Couple Section
        │
        ├── Photo reveal
        └── Text fade-up
        │
        ↓
    Story Timeline
        │
        ├── Line grow
        └── Stagger reveal
        │
        ↓
    Wedding Event
        │
        └── Fade-up
        │
        ↓
     Countdown
        │
        ↓
      Gallery
        │
        └── Image reveal
        │
        ↓
      Location
        │
        ↓
        RSVP
        │
        ↓
      Wishes
        │
        ↓
      Closing
```

---

# 37. UX Principle

Gunakan prinsip:

> Less UI, More Emotion.

Pengunjung harus merasakan:

```text
Opening
   ↓
Curiosity
   ↓
Story
   ↓
Emotion
   ↓
Wedding information
   ↓
Participation
   ↓
Closing
```

Bukan:

```text
Hero
↓
Card
↓
Card
↓
Card
↓
Button
↓
Card
```

---

# 38. Final Visual Direction

Bayangkan hasil akhirnya:

```text
                 ❦

          THE WEDDING OF

             AYU
               &
            BAGUS

        12 DECEMBER 2026

       OPEN INVITATION


              ↓


           OUR STORY

      A beautiful story
      of two people...


              ♡


        THE WEDDING

             12
          DECEMBER
             2026

           09:00 WIB

          Venue Name


              ↓


         OUR MOMENTS

       [ PHOTO ]
       [ PHOTO ]
       [ PHOTO ]


              ↓


             RSVP

      We would love
      to celebrate with you.


              ↓


           WISHES


              ❦

          WITH LOVE

         AYU & BAGUS
```

---

# 39. Golden Rule

Jika sebuah animasi membuat pengguna lebih memperhatikan **efek daripada pasangan**, hapus animasi tersebut.

Jika sebuah dekorasi membuat halaman terlihat terlalu ramai, hapus dekorasinya.

Jika sebuah komponen terlihat seperti UI aplikasi, sederhanakan.

Prioritas:

```text
COUPLE
  ↓
PHOTOGRAPHY
  ↓
STORY
  ↓
WEDDING
  ↓
EMOTION
  ↓
RSVP
```

Visual identity:

```text
Elegant
+
Romantic
+
Warm
+
Editorial
+
Timeless
+
Smooth
```

Technology:

```text
React
+
Lenis
+
Framer Motion
+
Tailwind CSS
```

**Final goal:**

> Website harus terasa seperti membuka sebuah wedding invitation premium yang hidup ketika pengguna melakukan scroll.
