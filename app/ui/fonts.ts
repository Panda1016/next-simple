import { Inter, Lusitana } from "next/font/google";

// Using the available weights 400 and 700
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
