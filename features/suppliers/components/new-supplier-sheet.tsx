import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';

import { SupplierForm } from '@/features/suppliers/components/supplier-form';
import { useNewSupplier } from '@/features/suppliers/hooks/use-new-supplier';
import { useCreateSupplier } from '@/features/suppliers/api/use-create-supplier';
import { useGetLocations } from '@/features/locations/api/use-get-locations';

// Assuming you have a schema for customer, replace this with the actual schema
const supplierSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  type: z.string().optional(),
  locationId: z.number(),
  inclusionType: z.enum(['Include', 'Exclude', 'Consider']),
  additionalParams: z.record(z.unknown()).optional(),
  icon: z.string().optional()
});

type FormValues = z.infer<typeof supplierSchema>;

export const NewSupplierSheet = () => {
  const { isOpen, onClose } = useNewSupplier();
  const createMutation = useCreateSupplier();

  // Placeholder for useLocation hook
  const locationQuery = useGetLocations();
  const locationMutation = { isPending: false }; // Replace with actual mutation
  // const onCreateLocation = (name: string) => {
  //   // Implement location creation logic
  // };
  const locationOptions = (locationQuery.data ?? []).map(
    (location: { name: any; id: any }) => ({
      label: location.name,
      value: location.id
    })
  );

  const isPending = createMutation.isPending || locationMutation.isPending;
  const isLoading = locationQuery.isLoading;

  const onSubmit = (values: FormValues) => {
    createMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      }
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 bg-white">
        <SheetHeader>
          <SheetTitle>New Customer</SheetTitle>
          <SheetDescription>Add a new customer</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center ">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <SupplierForm
            onSubmit={onSubmit}
            disabled={isPending}
            locationOptions={locationOptions}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};
