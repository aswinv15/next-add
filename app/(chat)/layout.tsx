import { Navbar } from '@/components/custom/navbar';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
