"use client";
// next
import { usePathname, useRouter } from "next/navigation";
// helper functions
import { extractMainHost2 } from "@/services/validateWebsiteURL";

export default function Result() {
  const pathname = usePathname().replace("/result/", "");
  const validPath = `/result/${extractMainHost2(pathname)}`;
  const router = useRouter();
  router.push(validPath);
}
