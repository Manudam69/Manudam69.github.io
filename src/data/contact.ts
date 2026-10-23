import type { useTranslations } from "@i18n/utils";

type Translate = ReturnType<typeof useTranslations>;

export const getContactList = (t: Translate) => [
  {
    src: "/icons/email.svg",
    alt: t("contact.email"),
    href: "mailto:manueldavid@live.com.mx",
    children: "manueldavid@live.com.mx",
  },
  {
    src: "/icons/phone.svg",
    alt: t("contact.phone"),
    href: "tel:+524491998245",
    children: "+52 449 199 8245",
  },
  {
    src: "/icons/linkedin.svg",
    alt: t("contact.linkedin"),
    href: "https://www.linkedin.com/in/manuelalonsom/",
    children: "LinkedIn",
    target: "_blank",
  },
  {
    src: "/icons/github.png",
    alt: t("contact.github"),
    href: "https://github.com/Manudam69",
    children: "GitHub",
    target: "_blank",
  },
];
