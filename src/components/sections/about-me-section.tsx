import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Lightbulb, Users } from 'lucide-react';

interface AboutMeSectionProps {
  id: string;
}

const AboutMeSection: FC<AboutMeSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 flex justify-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Aditya Kushwaha"
              width={300}
              height={300}
              className="rounded-full shadow-xl border-4 border-primary/50"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="md:col-span-3">
            <Card className="shadow-lg">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Hello! I'm Aditya Kushwaha, a software engineering student with a deep-seated passion for technology and its potential to solve real-world problems. My journey into software development is driven by a curiosity to understand how things work and a desire to build innovative, user-centric solutions.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  I thrive on challenges and continuously seek opportunities to expand my skill set. My core expertise lies in Python, Java, and JavaScript, along with modern web technologies like React and Next.js. I'm particularly interested in the intersection of web development and Artificial Intelligence, aiming to create intelligent and impactful applications.
                </p>
                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Key Experiences & Achievements:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Top 95 Worldwide in the Hack2Skill AI for Impact Hackathon, showcasing my ability to develop AI-driven solutions on a global stage.</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Developed the "CareLinks" project during the GDG on Campus Hackathon, which was selected for the prototype phase, demonstrating teamwork and practical application development.</span>
                  </li>
                   <li className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Committed to lifelong learning and applying my skills to create scalable and personalized technology solutions.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
