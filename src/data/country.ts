export interface Country {
  code: string;
  dialCode: string;
  flag: string;
}

export const countries: Country[] = [
  { code: "BD", dialCode: "+880", flag: "🇧🇩" },
  { code: "IN", dialCode: "+91", flag: "🇮🇳" },
  { code: "US", dialCode: "+1", flag: "🇺🇸" },
  { code: "UK", dialCode: "+44", flag: "🇬🇧" },
];
