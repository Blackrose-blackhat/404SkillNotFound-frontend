// components/common/LayoutWrapper.tsx
"use client";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPanel = pathname.startsWith("/panel");

  return (
    <div className={`${isPanel ? "" : "pt-[100px]"} px-4`}>
      {children}
    </div>
  );
}
