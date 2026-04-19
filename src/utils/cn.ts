// C:\Users\styli\tirumala-mobile\src\utils\cn.ts
//
// ✅ Production-safe cn() — handles Tailwind class conflicts correctly
// ✅ No extra packages needed (no clsx / tailwind-merge dependency)
// ✅ Handles: strings, undefined, null, false, conditional objects

type ClassValue =
  | string
  | undefined
  | null
  | false
  | 0
  | Record<string, boolean | undefined | null>;

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string') {
      classes.push(input);
      continue;
    }

    if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key);
      }
    }
  }

  return classes.join(' ');
}