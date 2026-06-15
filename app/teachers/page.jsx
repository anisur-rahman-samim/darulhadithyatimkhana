'use client';

import PageHero from '@/components/PageHero';
import Teachers from '@/components/Teachers';
import Messages from '@/components/Messages';

export default function TeachersPage() {
  return (
    <>
      <PageHero titleKey="teachers_title" subKey="teachers_sub" />
      <Teachers withHeading={false} />
      <Messages />
    </>
  );
}
