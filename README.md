# দারুল হাদীস ইয়াতিমখানা — Darul Hadith Yatimkhana

Islamic Hifz Madrasa & Yatimkhana website. Built with **Next.js 14 (App Router)** + **Tailwind CSS**.
Bilingual (বাংলা default / English), responsive, SEO-friendly.

## চালানোর নিয়ম (Run locally)

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## ফিচার (Features)
- হোম: হিরো স্লাইডার (অটো + ম্যানুয়াল), পরিচিতি, উদ্দেশ্য, দান হাইলাইট
- নামাজের সময়: লোকেশন অনুযায়ী অটো আপডেট (Aladhan API), হিজরি তারিখ
- শিক্ষক, সভাপতি ও পরিচালকের বাণী
- About, Gallery (lightbox + filter), Location (Google Map), Contact (form)
- Donation: bKash, Nagad, Bank, QR
- ভাষা টগল (বাংলা | English), localStorage-এ সংরক্ষিত

## যা পরিবর্তন করতে হবে (Customize — all dummy data)
Edit **`lib/data.js`**:
- Teachers, Chairman/Director messages & photos
- Donation numbers (bKash/Nagad), bank details, QR image
- Gallery images, contact info
- `mapEmbed` / `mapLink` → real Google Maps location

Edit **`lib/i18n.js`** for any text (bn/en).
Images use `picsum.photos` placeholders — replace `src` URLs with real photos
(put files in `/public` and use `/your-image.jpg`).

## নোট
- কোনো অনলাইন ভর্তি ফরম নেই (by design).
- Contact ফরম ডেমো only — backend/email এ যুক্ত করতে হবে।
- নামাজ হিসাব: Muslim World League (method 3), standard Asr — `components/NamazTime.jsx`-এ পরিবর্তনযোগ্য।
