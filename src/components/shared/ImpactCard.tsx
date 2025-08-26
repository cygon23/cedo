import { ReactNode } from "react";

interface ImpactCardProps {
  icon: ReactNode;
  number: string;
  label: string;
  description: string;
}

const ImpactCard = ({ icon, number, label, description }: ImpactCardProps) => {
  return (
    <div className='text-center p-6 bg-card rounded-xl shadow-soft hover-lift animate-fade-in'>
      <div className='w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4'>
        <div className='text-white'>{icon}</div>
      </div>
      <div className='text-3xl font-bold text-primary mb-1'>{number}</div>
      <div className='text-lg font-semibold text-foreground mb-2'>{label}</div>
      <div className='text-sm text-muted-foreground'>{description}</div>
    </div>
  );
};

export default ImpactCard;
