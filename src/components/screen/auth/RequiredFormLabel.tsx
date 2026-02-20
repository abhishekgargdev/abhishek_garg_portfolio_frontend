import { FormLabel } from '@/components/ui/form';

interface RequiredFormLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function RequiredFormLabel({ children, className }: RequiredFormLabelProps) {
  return (
    <FormLabel className={className}>
      {children}
      <span className="ml-1 text-red-500" aria-hidden="true">
        *
      </span>
    </FormLabel>
  );
}
