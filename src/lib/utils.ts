import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isMobile() {
  return typeof window !== "undefined" && !window.matchMedia("(min-width: 1024px)").matches; 
}