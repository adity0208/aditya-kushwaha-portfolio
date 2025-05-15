import type { FC, ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillBadgeProps {
  skillName: string;
  icon: ReactNode;
}

const SkillBadge: FC<SkillBadgeProps> = ({ skillName, icon }) => {
  return (
    <Card className="bg-card hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4 flex flex-col items-center justify-center text-center aspect-square">
        <div className="mb-2 text-primary">{icon}</div>
        <p className="text-sm font-medium text-foreground">{skillName}</p>
      </CardContent>
    </Card>
  );
};

export default SkillBadge;
