import type { FC } from 'react';
import CertificationCard from '@/components/cards/certification-card';

interface CertificationsSectionProps {
  id: string;
}

const certificationsData = [
  { title: 'Postman API Fundamentals Student Expert', issuer: 'Postman' },
  { title: 'Introduction to programming fundamental using python', issuer: 'Infosys springboard' },
  { title: 'Programming Using Javascript', issuer: 'Infosys springboard' },
  { title: 'Programming Using Java', issuer: 'Infosys springboard' },
  { title: 'HTML and CSS certification', issuer: 'Infosys springboard' },
];

const CertificationsSection: FC<CertificationsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-12">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certificationsData.map((cert) => (
            <CertificationCard key={cert.title} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
