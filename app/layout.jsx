import './globals.css';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://darulhadith-yatimkhana.org'),
  title: {
    default: 'দারুল হাদীছ সালাফিয়্যাহ, হাফিজিয়া ও এতিমখানা | Darul Hadith Salafiyyah',
    template: '%s | দারুল হাদীছ সালাফিয়্যাহ',
  },
  description:
    'দারুল হাদীছ সালাফিয়্যাহ, হাফিজিয়া ও এতিমখানা — রঞ্জয়পুর, বড়বাড়িয়া, নবাবগঞ্জ, দিনাজপুর। মক্তব, নাজেরা ও হিফজুল কুরআন বিভাগসহ এতিম শিশুদের দ্বীনি শিক্ষা ও প্রতিপালনের একটি অলাভজনক প্রতিষ্ঠান। স্থাপিতঃ ২০২২ ইং।',
  keywords: [
    'Yatimkhana', 'এতিমখানা', 'Hifz Madrasa', 'হিফজ মাদ্রাসা', 'Salafiyyah', 'সালাফিয়্যাহ',
    'Nawabganj', 'নবাবগঞ্জ', 'Dinajpur', 'দিনাজপুর', 'Quran', 'কুরআন',
    'Orphanage', 'Islamic education', 'দান', 'Donation', 'Darul Hadith',
  ],
  openGraph: {
    title: 'দারুল হাদীছ সালাফিয়্যাহ, হাফিজিয়া ও এতিমখানা',
    description: 'মক্তব, নাজেরা ও হিফজুল কুরআন — রঞ্জয়পুর, নবাবগঞ্জ, দিনাজপুর। এতিম শিশুদের দ্বীনি শিক্ষা ও প্রতিপালন।',
    type: 'website',
    locale: 'bn_BD',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#0a4d39',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
