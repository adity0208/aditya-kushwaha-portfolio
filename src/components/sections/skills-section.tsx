import type { FC, ReactNode } from 'react';
import SkillBadge from '@/components/shared/skill-badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Code2, /* Generic Code, Python, JS */
  Palette, /* CSS */
  Server, /* Flask, Node.js */
  DatabaseZap, /* Firebase */
  GitFork, /* Git */
  Github, /* GitHub */
  MessageCircle, /* Twilio */
  Brain, /* AI/NLP */
  Puzzle, /* Problem-solving */
  Layers, /* Next.js */
  Combine, /* React */
  FileCode, /* HTML */
  Coffee, /* Java */
} from 'lucide-react';

interface SkillsSectionProps {
  id: string;
}

interface Skill {
  name: string;
  icon: ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const iconSize = "h-10 w-10 sm:h-12 sm:w-12";

const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', icon: <Coffee className={iconSize} /> },
      { name: 'Python', icon: <Code2 className={iconSize} /> }, // Using Code2 as more generic for Python than ToyBrick
      { name: 'JavaScript', icon: <Code2 className={iconSize} /> },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML', icon: <FileCode className={iconSize} /> },
      { name: 'CSS', icon: <Palette className={iconSize} /> },
      { name: 'React', icon: <Combine className={iconSize} /> },
      { name: 'Next.js', icon: <Layers className={iconSize} /> },
      { name: 'Node.js', icon: <Server className={iconSize} /> },
      { name: 'Flask', icon: <Server className={iconSize} /> },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: <GitFork className={iconSize} /> },
      { name: 'GitHub', icon: <Github className={iconSize} /> },
      { name: 'Firebase', icon: <DatabaseZap className={iconSize} /> },
      { name: 'Twilio API', icon: <MessageCircle className={iconSize} /> },
      { name: 'AI/NLP Tech', icon: <Brain className={iconSize} /> },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'Problem-solving', icon: <Puzzle className={iconSize} /> },
    ],
  },
];

const SkillsSection: FC<SkillsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-12">
          My Skills
        </h2>
        <div className="space-y-12">
          {skillsData.map((category) => (
            <Card key={category.title} className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center sm:text-left text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill.name} skillName={skill.name} icon={skill.icon} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
