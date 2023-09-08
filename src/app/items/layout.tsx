import { CategoryProvider } from "@/contexts/CategoryProvider";

export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CategoryProvider>{children}</CategoryProvider>;
}
