import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useCreatecustomconstraints } from '@/features/customconstraints/api/use-create-customconstraint';
import { CustomconstraintForm } from '@/features/customconstraints/components/customconstraint-form';
import { useNewcustomconstraint } from '@/features/customconstraints/hooks/use-new-customconstraint';
import { useGetGroups } from '@/features/groups/api/use-get-groups';
// Assuming you have a schema for customconstraint, replace this with the actual schema
const customconstraintSchema = z.object({
  leftHandSide: z.string().optional(),
  comparisonType: z.string().optional(),
  rightHandSide: z.string().optional(),
  constraintType: z.string().optional()
});

type FormValues = z.infer<typeof customconstraintSchema>;

export const NewcustomconstraintSheet = () => {
  const { isOpen, onClose } = useNewcustomconstraint();
  const createMutation = useCreatecustomconstraints();

 

  const isPending = createMutation.isPending 
  const isLoading = false

  const onSubmit = (values: FormValues) => {
    const formattedValues = {
      ...values,
    };
    createMutation.mutate(formattedValues, {
      onSuccess: () => {
        onClose();
      }
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 bg-white">
        <SheetHeader>
          <SheetTitle>New Custom Constraint</SheetTitle>
          <SheetDescription>Add a new Custom Constraint</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center ">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <CustomconstraintForm onSubmit={onSubmit} disabled={isPending}  />
        )}
      </SheetContent>
    </Sheet>
  );
};
