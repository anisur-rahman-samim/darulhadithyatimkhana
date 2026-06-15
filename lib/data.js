// All data here is DUMMY / placeholder. Replace with real content & images.

// Hero slider — using picsum placeholder images (swap with real madrasa photos)
export const slides = [
  {
    img: '/images/students-group.png',
    titleKey: 'slide1_title',
    textKey: 'slide1_text',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1677587536653-0d02efbb70ee?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVyYW58ZW58MHx8MHx8fDA%3D',
    titleKey: 'slide2_title',
    textKey: 'slide2_text',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/thumbnails/071/886/088/small/ornate-holy-quran-on-a-wooden-stand-photo.jpg',
    titleKey: 'slide3_title',
    textKey: 'slide3_text',
  },
];

export const stats = [
  { value: '৮৫+', valueEn: '85+', labelKey: 'stat_students' },
  { value: '১২০+', valueEn: '120+', labelKey: 'stat_huffaz' },
  { value: '৪', valueEn: '4', labelKey: 'stat_years' },
];

export const teachers = [
  {
    id: 1,
    photo: 'https://picsum.photos/seed/teacher-one/600/600',
    name: { bn: 'হাফেজ মাওলানা আব্দুল্লাহ', en: 'Hafiz Maulana Abdullah' },
    qualification: { bn: 'হিফজুল কুরআন, দাওরায়ে হাদীস', en: 'Hifzul Quran, Dawra-e-Hadith' },
    experience: { bn: '১৫ বছরের অধ্যাপনা অভিজ্ঞতা', en: '15 years of teaching experience' },
    responsibility: { bn: 'প্রধান হিফজ শিক্ষক', en: 'Head Hifz Teacher' },
  },
  {
    id: 2,
    photo: 'https://picsum.photos/seed/teacher-two/600/600',
    name: { bn: 'হাফেজ মুহাম্মাদ ইউসুফ', en: 'Hafiz Muhammad Yusuf' },
    qualification: { bn: 'হিফজুল কুরআন, কিরাআত বিশারদ', en: 'Hifzul Quran, Qira\u2019at specialist' },
    experience: { bn: '১০ বছরের অধ্যাপনা অভিজ্ঞতা', en: '10 years of teaching experience' },
    responsibility: { bn: 'তাজবীদ ও কিরাআত শিক্ষক', en: 'Tajweed & Qira\u2019at Teacher' },
  },
  {
    id: 3,
    photo: 'https://picsum.photos/seed/teacher-three/600/600',
    name: { bn: 'মাওলানা ইব্রাহীম খলিল', en: 'Maulana Ibrahim Khalil' },
    qualification: { bn: 'দাওরায়ে হাদীস, আরবি সাহিত্য', en: 'Dawra-e-Hadith, Arabic Literature' },
    experience: { bn: '৮ বছরের অধ্যাপনা অভিজ্ঞতা', en: '8 years of teaching experience' },
    responsibility: { bn: 'দ্বীনিয়াত ও তত্ত্বাবধান', en: 'Islamic Studies & Supervision' },
  },
];

export const messages = [
  {
    id: 'chairman',
    photo: 'https://picsum.photos/seed/chairman-towhid/500/500',
    name: { bn: 'মোঃ তৌহিদুল ইসলাম (তৌহিদ)', en: 'Md. Towhidul Islam (Towhid)' },
    roleKey: 'msg_chairman_role',
    message: {
      bn: 'আলহামদুলিল্লাহ, আল্লাহ তা\u2019আলার অশেষ রহমতে আমরা এতিম শিশুদের কুরআন শিক্ষায় নিজেদের নিয়োজিত রাখতে পেরেছি। আপনাদের দোয়া ও সহযোগিতাই আমাদের পথচলার শক্তি। আসুন, একটি এতিম শিশুর ভবিষ্যৎ গড়তে আমরা সকলে এগিয়ে আসি।',
      en: 'Alhamdulillah, by the boundless mercy of Allah we have been able to dedicate ourselves to teaching the Quran to orphan children. Your prayers and support are the strength of our journey. Let us all step forward to build the future of an orphan child.',
    },
  },
  {
    id: 'director',
    photo: 'https://picsum.photos/seed/director-saiful/500/500',
    name: { bn: 'মোঃ সাইফুল ইসলাম', en: 'Md. Saiful Islam' },
    roleKey: 'msg_director_role',
    message: {
      bn: 'আমাদের লক্ষ্য কেবল কুরআন মুখস্থ করানো নয়, বরং প্রতিটি শিশুকে সহীহ আকীদাহ ও উত্তম চরিত্রের অধিকারী করে গড়ে তোলা। প্রতিটি শিক্ষার্থীকে আমরা নিজের সন্তানের মতো স্নেহ দিয়ে আগলে রাখি। আল্লাহ আমাদের কবুল করুন।',
      en: 'Our goal is not merely memorization, but to raise every child with sound belief and excellent character. We embrace every student with the affection of our own children. May Allah accept our efforts.',
    },
  },
];

export const donation = {
  bkash: { label: 'bKash', type: { bn: 'Personal', en: 'Personal' }, number: '01332084825' },
  nagad: { label: 'Nagad', type: { bn: 'Personal', en: 'Personal' }, number: '01332084825' },
  bank: {
    name: { bn: 'রুপালী ব্যাংক লিমিটেড', en: 'Rupali Bank Limited' },
    accName: { bn: 'রঞ্জয়পুর দারুল হাদীস সালাফিয়্যাহ হাফেজিয়া ও এতিমখানা', en: 'Ranjaypur Darul Hadith Salafiyyah Hafeziyya & Yatimkhana' },
    accNo: '৪৫৬৪০১০০১৬১৭৬',
    branch: { bn: 'দাউদপুর শাখা', en: 'Dawudpur Branch' },
    routing: '৪৫৬৪',
  },
  // Placeholder QR (replace with real bKash/bank QR image)
  qr: 'https://placehold.co/280x280/0f6b4f/ffffff?text=QR+Code',
};

export const galleryImages = [
  { id: 1, cat: 'students', src: '/images/students-group.png', alt: { bn: 'মাদ্রাসার শিক্ষার্থীরা', en: 'Madrasa students' } },
  { id: 2, cat: 'building', src: '/images/signboard.png', alt: { bn: 'মাদ্রাসার সাইনবোর্ড', en: 'Madrasa signboard' } },
  { id: 3, cat: 'building', src: '/images/calendar.jpeg', alt: { bn: 'মাদ্রাসা ক্যালেন্ডার ২০২৬', en: 'Madrasa Calendar 2026' } },
  { id: 4, cat: 'classes', src: 'https://picsum.photos/seed/islamic-quran-class/800/600', alt: { bn: 'কুরআন ক্লাস', en: 'Quran class' } },
  { id: 5, cat: 'building', src: 'https://picsum.photos/seed/islamic-masjid-facade/800/600', alt: { bn: 'মাদ্রাসা মসজিদ', en: 'Madrasa mosque' } },
  { id: 6, cat: 'events', src: 'https://picsum.photos/seed/islamic-ceremony/800/600', alt: { bn: 'বার্ষিক অনুষ্ঠান', en: 'Annual event' } },
  { id: 7, cat: 'students', src: 'https://picsum.photos/seed/islamic-student-recite/800/600', alt: { bn: 'তিলাওয়াত', en: 'Recitation' } },
  { id: 8, cat: 'classes', src: 'https://picsum.photos/seed/islamic-lesson-arabic/800/600', alt: { bn: 'পাঠদান', en: 'Lesson' } },
  { id: 9, cat: 'building', src: 'https://picsum.photos/seed/islamic-residence-block/800/600', alt: { bn: 'আবাসিক ভবন', en: 'Residential block' } },
  { id: 10, cat: 'events', src: 'https://picsum.photos/seed/islamic-dastarbandi/800/600', alt: { bn: 'দস্তারবন্দি', en: 'Graduation' } },
  { id: 11, cat: 'students', src: 'https://picsum.photos/seed/islamic-children-play/800/600', alt: { bn: 'শিক্ষার্থীদের মুহূর্ত', en: 'Students\' moments' } },
  { id: 12, cat: 'events', src: 'https://picsum.photos/seed/islamic-iftar-gathering/800/600', alt: { bn: 'ইফতার মাহফিল', en: 'Iftar gathering' } },
];

export const galleryCategories = ['all', 'students', 'classes', 'events', 'building'];

export const contactInfo = {
  phone: '+880 1332-084825',
  phone2: '+880 1352-028762',
  email: 'info@darulhadith-yatimkhana.org',
};

export const mapEmbed =
  'https://www.google.com/maps?q=Nawabganj,Dinajpur,Bangladesh&output=embed';
export const mapLink = 'https://www.google.com/maps/search/?api=1&query=Nawabganj,Dinajpur,Bangladesh';
