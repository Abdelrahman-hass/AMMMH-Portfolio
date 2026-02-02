import { useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const DEFAULT_LANG = "en";

const getFromStorage = () => {
  if (typeof window === "undefined") return DEFAULT_LANG;
  return localStorage.getItem("lang") || DEFAULT_LANG;
};

const setToStorage = (lang) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("lang", lang);
};

const getNested = (obj, path) => {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
};

export const useI18n = () => {
  const [lang, setLang] = useState(getFromStorage);

  useEffect(() => {
    setToStorage(lang);
  }, [lang]);

  const t = useMemo(() => {
    return (key) => {
      const value = getNested(translations[lang], key);
      if (value !== undefined) return value;

      const fallback = getNested(translations[DEFAULT_LANG], key);
      if (process.env.NODE_ENV !== "production") {
        console.warn(`Missing translation key: ${key}`);
      }
      return fallback !== undefined ? fallback : key;
    };
  }, [lang]);

  return { lang, setLang, t };
};
