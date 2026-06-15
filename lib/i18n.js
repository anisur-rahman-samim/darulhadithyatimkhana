'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const LanguageContext = createContext(null);

export const dict = {
  // ---- Navigation ----
  nav_home: { bn: 'হোম', en: 'Home' },
  nav_about: { bn: 'পরিচিতি', en: 'About Us' },
  nav_teachers: { bn: 'শিক্ষকবৃন্দ', en: 'Teachers' },
  nav_gallery: { bn: 'গ্যালারি', en: 'Gallery' },
  nav_location: { bn: 'অবস্থান', en: 'Location' },
  nav_contact: { bn: 'যোগাযোগ', en: 'Contact' },
  nav_donate: { bn: 'দান করুন', en: 'Donate' },
  brand_name: { bn: 'দারুল হাদীছ সালাফিয়্যাহ, হাফিজিয়া ও এতিমখানা', en: 'Darul Hadith Salafiyyah, Hafiziyya & Yatimkhana' },
  brand_tag: { bn: 'হিফজুল কুরআন ও এতিম প্রতিপালন', en: 'Hifzul Quran & Orphan Care' },

  // ---- Hero ----
  hero_kicker: { bn: 'বিসমিল্লাহির রাহমানির রাহীম', en: 'In the name of Allah, the Most Merciful' },
  slide1_title: { bn: 'কুরআনের আলোয় গড়ে উঠছে আগামীর প্রজন্ম', en: 'Raising a generation in the light of the Quran' },
  slide1_text: { bn: 'হিফজুল কুরআন ও দ্বীনি শিক্ষার এক নির্ভরযোগ্য প্রতিষ্ঠান।', en: 'A trusted institution for Quran memorization and Islamic education.' },
  slide2_title: { bn: 'প্রতিটি এতিম শিশুর পাশে আপনি', en: 'Stand beside every orphan child' },
  slide2_text: { bn: 'অসহায় শিশুদের আশ্রয়, খাবার ও শিক্ষার দায়িত্ব আমরা একসাথে বহন করি।', en: 'Together we carry the shelter, food and education of helpless children.' },
  slide3_title: { bn: 'আপনার দান একটি শিশুর ভবিষ্যৎ', en: 'Your donation is a child\u2019s future' },
  slide3_text: { bn: 'সদকায়ে জারিয়ায় অংশ নিন — প্রতিদিনের তিলাওয়াতে আপনিও শামিল।', en: 'Join a continuous charity \u2014 share in their daily recitation.' },
  hero_cta_donate: { bn: 'এখনই দান করুন', en: 'Donate Now' },
  hero_cta_about: { bn: 'আমাদের সম্পর্কে জানুন', en: 'Learn About Us' },

  // ---- Intro ----
  intro_eyebrow: { bn: 'পরিচিতি', en: 'Introduction' },
  intro_title: { bn: 'দারুল হাদীছ সালাফিয়্যাহ, হাফিজিয়া ও এতিমখানা', en: 'Darul Hadith Salafiyyah, Hafiziyya & Yatimkhana' },
  intro_p1: { bn: 'দারুল হাদীছ সালাফিয়্যাহ, হাফিজিয়া ও এতিমখানা একটি অরাজনৈতিক, অলাভজনক দ্বীনি প্রতিষ্ঠান। এখানে মক্তব, নাজেরা ও হিফজ বিভাগে শিশুদের পবিত্র কুরআন শিক্ষা দেওয়া হয়।', en: 'Darul Hadith Salafiyyah, Hafiziyya & Yatimkhana is a non-political, non-profit religious institution. Children study Maktab, Nazera and Hifz (memorization) of the Holy Quran here.' },
  intro_p2: { bn: 'এতিম ও অসহায় শিশুদের আমরা আশ্রয় দিই এবং সহীহ আকীদাহভিত্তিক দ্বীনি ও নৈতিক শিক্ষা প্রদান করি। আবাসিক, অনাবাসিক ও ডে-কেয়ার সুবিধায় ভর্তির ব্যবস্থা রয়েছে।', en: 'We shelter orphan and helpless children and provide authentic, faith-based religious and moral education. Admission is available on residential, non-residential and day-care basis.' },
  stat_students: { bn: 'এতিম শিক্ষার্থী', en: 'Orphan Students' },
  stat_huffaz: { bn: 'সম্পন্ন হাফেজ', en: 'Completed Huffaz' },
  stat_years: { bn: 'বছরের পথচলা (স্থাপিত ২০২২)', en: 'Years of Service (Est. 2022)' },

  // ---- Objectives ----
  obj_eyebrow: { bn: 'আমাদের উদ্দেশ্য', en: 'Our Objective' },
  obj_title: { bn: 'যে লক্ষ্যে আমাদের পথচলা', en: 'The goals we serve' },
  obj1_title: { bn: 'কুরআন হিফজ করানো', en: 'Quran Memorization' },
  obj1_text: { bn: 'অভিজ্ঞ হাফেজ শিক্ষকের তত্ত্বাবধানে সহীহ তাজবীদসহ পূর্ণ কুরআন হিফজ।', en: 'Complete Quran memorization with proper Tajweed under experienced Hafiz teachers.' },
  obj2_title: { bn: 'এতিম শিশুদের লালন-পালন', en: 'Caring for Orphans' },
  obj2_text: { bn: 'এতিম শিশুদের আবাসন, খাবার, পোশাক ও স্বাস্থ্যসেবার সম্পূর্ণ দায়িত্ব গ্রহণ।', en: 'Full responsibility for orphans\u2019 housing, food, clothing and healthcare.' },
  obj3_title: { bn: 'দ্বীনি ও নৈতিক শিক্ষা', en: 'Religious & Moral Education' },
  obj3_text: { bn: 'কুরআন ও সহীহ সুন্নাহর আলোকে আদর্শ চরিত্র ও নৈতিকতা গঠন।', en: 'Building noble character and morals in the light of the Quran and authentic Sunnah.' },

  // ---- Donation highlight (home) ----
  donate_hl_kicker: { bn: 'সদকায়ে জারিয়া', en: 'Continuous Charity' },
  donate_hl_title: { bn: 'আপনার দান একটি শিশুর ভবিষ্যৎ', en: 'Your donation is a child\u2019s future' },
  donate_hl_text: { bn: 'একটি এতিম শিশুর এক মাসের খাবার, পোশাক ও শিক্ষার দায়িত্ব নিতে পারেন আপনি। আপনার সামান্য অবদান বদলে দিতে পারে একটি জীবন।', en: 'You can sponsor a month of food, clothing and education for an orphan. A small contribution can change a whole life.' },

  // ---- Namaz ----
  namaz_eyebrow: { bn: 'নামাজের সময়সূচি', en: 'Prayer Times' },
  namaz_title: { bn: 'আজকের নামাজের সময়', en: 'Today\u2019s Prayer Times' },
  namaz_loc: { bn: 'অবস্থান', en: 'Location' },
  namaz_method: { bn: 'সহীহ (সালাফি) হিসাব অনুসারে', en: 'Based on authentic (Salafi) calculation' },
  namaz_loading: { bn: 'সময় লোড হচ্ছে...', en: 'Loading times...' },
  namaz_allow: { bn: 'সঠিক সময়ের জন্য লোকেশন অনুমতি দিন (ডিফল্ট: ঢাকা)', en: 'Allow location for accurate times (default: Dhaka)' },
  prayer_fajr: { bn: 'ফজর', en: 'Fajr' },
  prayer_sunrise: { bn: 'সূর্যোদয়', en: 'Sunrise' },
  prayer_dhuhr: { bn: 'যোহর', en: 'Dhuhr' },
  prayer_asr: { bn: 'আসর', en: 'Asr' },
  prayer_maghrib: { bn: 'মাগরিব', en: 'Maghrib' },
  prayer_isha: { bn: 'ইশা', en: 'Isha' },
  next_prayer: { bn: 'পরবর্তী নামাজ', en: 'Next Prayer' },

  // ---- Teachers ----
  teachers_eyebrow: { bn: 'শিক্ষকবৃন্দ', en: 'Our Teachers' },
  teachers_title: { bn: 'যাঁদের হাতে গড়ে ওঠে হাফেজ', en: 'The hands that shape our Huffaz' },
  teachers_sub: { bn: 'অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকমণ্ডলী', en: 'Experienced and devoted teaching staff' },
  t_qualification: { bn: 'যোগ্যতা', en: 'Qualification' },
  t_experience: { bn: 'অভিজ্ঞতা', en: 'Experience' },
  t_responsibility: { bn: 'দায়িত্ব', en: 'Responsibility' },

  // ---- Messages ----
  msg_eyebrow: { bn: 'কর্তৃপক্ষের বাণী', en: 'Message from Leadership' },
  msg_title: { bn: 'আমাদের কথা', en: 'A Word to You' },
  msg_chairman_role: { bn: 'সভাপতি', en: 'Chairman' },
  msg_director_role: { bn: 'পরিচালক', en: 'Director' },

  // ---- About page ----
  about_hero_title: { bn: 'আমাদের পরিচিতি', en: 'About Us' },
  about_hero_sub: { bn: 'কুরআন ও এতিম সেবায় নিবেদিত একটি প্রতিষ্ঠান', en: 'An institution devoted to the Quran and to orphans' },
  about_history_title: { bn: 'মাদ্রাসার ইতিহাস', en: 'Our History' },
  about_history_p1: { bn: '২০২২ সালে রঞ্জয়পুর, বড়বাড়িয়া, নবাবগঞ্জ, দিনাজপুরে অল্প কয়েকজন শিক্ষার্থী নিয়ে দারুল হাদীছ সালাফিয়্যাহ, হাফিজিয়া ও এতিমখানার যাত্রা শুরু হয়। আজ এটি এলাকার একটি আস্থাভাজন দ্বীনি প্রতিষ্ঠানে পরিণত হয়েছে।', en: 'Founded in 2022 at Ranjaypur, Borobariya, Nawabganj, Dinajpur, Darul Hadith Salafiyyah started with a few students and has grown into a trusted religious institution in the region.' },
  about_history_p2: { bn: 'এলাকাবাসী ও দানশীল ব্যক্তিদের সহযোগিতায় প্রতি বছর নতুন হাফেজ তৈরি হচ্ছে, আলহামদুলিল্লাহ।', en: 'With the support of the community and generous donors, new Huffaz graduate every year, Alhamdulillah.' },
  about_mission_title: { bn: 'আমাদের লক্ষ্য', en: 'Our Mission' },
  about_mission_text: { bn: 'প্রতিটি এতিম শিশুকে আশ্রয় ও সহীহ দ্বীনি শিক্ষা দিয়ে একজন আদর্শ হাফেজে কুরআন হিসেবে গড়ে তোলা।', en: 'To shelter every orphan child and raise them, through authentic Islamic education, into a true Hafiz of the Quran.' },
  about_vision_title: { bn: 'আমাদের স্বপ্ন', en: 'Our Vision' },
  about_vision_text: { bn: 'এমন একটি সমাজ যেখানে কোনো এতিম শিশু শিক্ষা ও স্নেহ থেকে বঞ্চিত থাকবে না।', en: 'A society where no orphan child is deprived of education and affection.' },
  about_system_title: { bn: 'শিক্ষা ব্যবস্থা', en: 'Educational System' },
  about_system_text: { bn: 'আমাদের প্রতিষ্ঠানে মক্তব, নাজেরা ও হিফজুল কুরআন তিনটি বিভাগ পরিচালিত হয়। আবাসিক, অনাবাসিক ও ডে-কেয়ার সুবিধায় আরবি ও বাংলা শিক্ষার ব্যবস্থা রয়েছে। সহীহ তাজবীদসহ পূর্ণ কুরআন মুখস্থকরণ আমাদের মূল কার্যক্রম।', en: 'Our institution runs three departments: Maktab, Nazera, and Hifzul Quran. Instruction in Arabic and Bengali is available on residential, non-residential and day-care basis. Complete Quran memorization with proper Tajweed is our core program.' },
  about_no_admission: { bn: 'বিশেষ দ্রষ্টব্য: এই ওয়েবসাইটে কোনো অনলাইন ভর্তি ফরম নেই। ভর্তি সংক্রান্ত তথ্যের জন্য সরাসরি মাদ্রাসায় যোগাযোগ করুন।', en: 'Please note: There is no online admission form on this website. For admission-related information, please contact the madrasa directly.' },

  // ---- Donation page ----
  donate_hero_title: { bn: 'দান ও সহযোগিতা', en: 'Donation & Support' },
  donate_hero_sub: { bn: 'আপনার সদকা একটি এতিমের মুখে হাসি ফোটাতে পারে', en: 'Your charity can bring a smile to an orphan\u2019s face' },
  donate_instruction_title: { bn: 'যেভাবে দান করবেন', en: 'How to Donate' },
  donate_instruction: { bn: 'নিচের যেকোনো মাধ্যমে দান পাঠাতে পারেন। দান পাঠানোর পর অনুগ্রহ করে আমাদের ফোন নম্বরে জানিয়ে দিন, যেন আমরা আপনার জন্য দোয়া করতে পারি ও রসিদ প্রদান করতে পারি।', en: 'You may donate through any of the methods below. After sending, please inform us at our phone number so we can pray for you and issue a receipt.' },
  donate_mobile: { bn: 'মোবাইল ব্যাংকিং', en: 'Mobile Banking' },
  donate_send_money: { bn: 'Send Money / Payment', en: 'Send Money / Payment' },
  donate_bank: { bn: 'ব্যাংক হিসাব', en: 'Bank Account' },
  bank_name: { bn: 'ব্যাংকের নাম', en: 'Bank Name' },
  bank_acc_name: { bn: 'হিসাবের নাম', en: 'Account Name' },
  bank_acc_no: { bn: 'হিসাব নম্বর', en: 'Account Number' },
  bank_branch: { bn: 'শাখা', en: 'Branch' },
  bank_routing: { bn: 'শাখা কোড', en: 'Branch Code' },
  donate_qr: { bn: 'QR কোড স্ক্যান করুন', en: 'Scan QR Code' },
  donate_qr_note: { bn: 'যেকোনো মোবাইল ব্যাংকিং অ্যাপ দিয়ে স্ক্যান করুন', en: 'Scan with any mobile banking app' },
  copy: { bn: 'কপি', en: 'Copy' },
  copied: { bn: 'কপি হয়েছে', en: 'Copied' },

  // ---- Gallery ----
  gallery_hero_title: { bn: 'ছবিঘর', en: 'Gallery' },
  gallery_hero_sub: { bn: 'আমাদের প্রতিদিনের মুহূর্তগুলো', en: 'Moments from our everyday life' },
  cat_all: { bn: 'সব', en: 'All' },
  cat_students: { bn: 'শিক্ষার্থী', en: 'Students' },
  cat_classes: { bn: 'ক্লাস', en: 'Classes' },
  cat_events: { bn: 'অনুষ্ঠান', en: 'Events' },
  cat_building: { bn: 'মাদ্রাসা ভবন', en: 'Building' },
  gallery_close: { bn: 'বন্ধ করুন', en: 'Close' },

  // ---- Location ----
  loc_hero_title: { bn: 'আমাদের অবস্থান', en: 'Our Location' },
  loc_hero_sub: { bn: 'মাদ্রাসায় আসার পথনির্দেশ', en: 'How to reach the madrasa' },
  loc_address_title: { bn: 'ঠিকানা', en: 'Address' },
  loc_address: { bn: 'দারুল হাদীছ সালাফিয়্যাহ, হাফিজিয়া ও এতিমখানা, রঞ্জয়পুর, বড়বাড়িয়া, নবাবগঞ্জ, দিনাজপুর, বাংলাদেশ।', en: 'Darul Hadith Salafiyyah, Hafiziyya & Yatimkhana, Ranjaypur, Borobariya, Nawabganj, Dinajpur, Bangladesh.' },
  loc_directions: { bn: 'গুগল ম্যাপে দেখুন', en: 'View on Google Maps' },

  // ---- Contact ----
  contact_hero_title: { bn: 'যোগাযোগ', en: 'Contact Us' },
  contact_hero_sub: { bn: 'যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন', en: 'Reach out to us for anything you need' },
  contact_address: { bn: 'ঠিকানা', en: 'Address' },
  contact_phone: { bn: 'ফোন', en: 'Phone' },
  contact_email: { bn: 'ইমেইল', en: 'Email' },
  contact_form_title: { bn: 'বার্তা পাঠান', en: 'Send a Message' },
  form_name: { bn: 'আপনার নাম', en: 'Your Name' },
  form_phone: { bn: 'ফোন নম্বর', en: 'Phone Number' },
  form_message: { bn: 'আপনার বার্তা', en: 'Your Message' },
  form_submit: { bn: 'বার্তা পাঠান', en: 'Send Message' },
  form_success: { bn: 'জাজাকাল্লাহু খাইরান! আপনার বার্তা পাঠানো হয়েছে।', en: 'JazakAllahu Khairan! Your message has been sent.' },
  form_required: { bn: 'অনুগ্রহ করে সব ঘর পূরণ করুন।', en: 'Please fill in all fields.' },

  // ---- Footer ----
  footer_quote: { bn: '\u201cতোমাদের মধ্যে সর্বোত্তম সে-ই, যে নিজে কুরআন শেখে এবং অন্যকে শেখায়।\u201d', en: '\u201cThe best among you are those who learn the Quran and teach it.\u201d' },
  footer_quote_src: { bn: '— সহীহ বুখারী', en: '— Sahih al-Bukhari' },
  footer_quicklinks: { bn: 'দ্রুত লিংক', en: 'Quick Links' },
  footer_contact: { bn: 'যোগাযোগ', en: 'Contact' },
  footer_donate_text: { bn: 'একটি এতিমের পাশে দাঁড়ান', en: 'Stand beside an orphan' },
  footer_rights: { bn: 'সর্বস্বত্ব সংরক্ষিত।', en: 'All rights reserved.' },
  footer_built: { bn: 'আল্লাহর সন্তুষ্টির উদ্দেশ্যে নির্মিত', en: 'Built seeking the pleasure of Allah' },

  // ---- Misc ----
  read_more: { bn: 'বিস্তারিত', en: 'Read more' },
  lang_label: { bn: 'EN', en: 'বাং' },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('bn');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('dhy_lang') : null;
    if (saved === 'en' || saved === 'bn') setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'bn' ? 'en' : 'bn';
      if (typeof window !== 'undefined') localStorage.setItem('dhy_lang', next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key) => {
      const entry = dict[key];
      if (!entry) return key;
      return entry[lang] ?? entry.bn ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
