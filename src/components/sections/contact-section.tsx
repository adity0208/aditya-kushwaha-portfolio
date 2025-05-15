import type { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Send } from 'lucide-react';

interface ContactSectionProps {
  id: string;
}

const ContactSection: FC<ContactSectionProps> = ({ id }) => {
  const email = 'adityakushwaha0208@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/aditya-kushwaha-b89a24247/';

  return (
    <section id={id} className="py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-12">
          Get In Touch
        </h2>
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Let's Connect!</CardTitle>
            <CardDescription>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                <a href={`mailto:${email}`}>
                  <Mail className="mr-2 h-5 w-5" /> Email Me
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-primary border-primary hover:bg-primary/10 w-full sm:w-auto">
                <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn Profile
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              Feel free to reach out via email or connect with me on LinkedIn. I look forward to hearing from you!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
