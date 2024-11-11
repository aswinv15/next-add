import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useDeleteUnitconversion } from '@/features/unitconversions/api/use-delete-unitconversion';
import { useEditUnitconversion } from '@/features/unitconversions/api/use-edit-unitconversion';
import { useGetUnitconversion } from '@/features/unitconversions/api/use-get-unitconversion';
import { UnitconversionForm } from '@/features/unitconversions/components/unitconversion-form';
import { useOpenUnitconversion } from '@/features/unitconversions/hooks/use-open-unitconversions';
import { useGetProducts } from '@/features/products/api/use-get-products';

import { useConfirm } from '@/hooks/use-confirm';
// Import the actual unitconversion schema from your schema file

// Use the actual unitconversion schema, omitting the id field for editing
// const formSchema = unitconversionSchema.omit({ id: true });
const unitconversionSchema = z.object({
  productId: z.number().optional(),
  amountFrom:z
  .string()
  .transform((val) => (val ? parseInt(val) : 0)),
  unitFrom: z.string().optional(),
  amountTo: z
  .string()
  .transform((val) => (val ? parseInt(val) : 0)),
  unitTo: z.string().optional()
});

type FormValues = z.infer<typeof unitconversionSchema>;

export const EditUnitconversionSheet = () => {
  const { isOpen, onClose, id } = useOpenUnitconversion();

  const [ConfirmDialog, confirm] = useConfirm(
    'Are you sure?',
    'You are about to delete this unitconversion.'
  );

  const productQuery = useGetProducts();
  const productMutation = { isPending: false };

  const productOptions = (productQuery.data ?? []).map((product) => ({
    label: product.name,
    value: product.id
  }));

  const unitconversionQuery = useGetUnitconversion(id);
  const editMutation = useEditUnitconversion(id);
  const deleteMutation = useDeleteUnitconversion(id);

  const isPending =
    editMutation.isPending ||
    deleteMutation.isPending ||
    unitconversionQuery.isLoading;

  const isLoading = unitconversionQuery.isLoading;

  const onSubmit = (values: FormValues) => {
    editMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      }
    });
  };

  const onDelete = async () => {
    const ok = await confirm();

    if (ok) {
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
          onClose();
        }
      });
    }
  };

  const defaultValues = unitconversionQuery.data
    ? {
        productId: unitconversionQuery.data.productId,
        amountFrom: unitconversionQuery.data.amountFrom ?? undefined,
        unitFrom: unitconversionQuery.data.unitFrom ?? undefined,
        amountTo: unitconversionQuery.data.amountTo ?? undefined,
        unitTo: unitconversionQuery.data.unitTo ?? undefined
      }
    : {

      productId: 0,
      amountFrom: 0,
      unitFrom: '',
      amountTo: 0,
      unitTo: ''

      };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4 bg-white">
          <SheetHeader>
            <SheetTitle>Edit Unitconversion</SheetTitle>
            <SheetDescription>
              Edit an existing unitconversion
            </SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <UnitconversionForm
              id={Number(id) || undefined}
              defaultValues={defaultValues}
              onSubmit={onSubmit}
              onDelete={onDelete}
              disabled={isPending}
              productOptions={productOptions}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};
