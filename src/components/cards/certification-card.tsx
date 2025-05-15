import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
}

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: FC<CertificationCardProps> = ({ certification }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Award className="h-8 w-8 text-accent flex-shrink-0" />
        <div>
          <CardTitle className="text-lg font-semibold text-primary">{certification.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground ml-12">
          Issued by: {certification.issuer}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
