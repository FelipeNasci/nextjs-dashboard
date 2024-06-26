import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/edit-form';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const [customers, invoice] = await Promise.all([
    fetchCustomers(),
    fetchInvoiceById(params.id),
  ]);

  if (!invoice) return notFound();

  const breadcrumbs = [
    { label: 'Invoices', href: '/dashboard/invoices' },
    {
      label: 'Edit Invoice',
      href: `/dashboard/invoices/${params.id}/edit`,
      active: true,
    },
  ];

  return (
    <main>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Form customers={customers} invoice={invoice} />
    </main>
  );
}
