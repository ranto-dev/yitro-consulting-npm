## 📁 Structure du projet

```
/src
  /locales
    en.json
    fr.json
  /components
    Header.tsx
    Hero.tsx
    AboutUs.tsx
  i18n.ts
  App.tsx
  main.tsx
```

---

## 📦 1. Installation (si pas encore fait)

```bash
npm install react-i18next i18next i18next-browser-languagedetector
```

---

## 📄 2. Fichiers de traduction

### `src/locales/fr.json`

```json
{
  "header": {
    "title": "Yitro Consulting",
    "language": "Langue"
  },
  "hero": {
    "headline": "Bienvenue chez Yitro Consulting",
    "subtext": "Nous vous aidons à transformer vos idées en solutions digitales."
  },
  "about": {
    "title": "À propos de nous",
    "description": "Yitro Consulting est une société innovante spécialisée dans le développement logiciel."
  }
}
```

### `src/locales/en.json`

```json
{
  "header": {
    "title": "Yitro Consulting",
    "language": "Language"
  },
  "hero": {
    "headline": "Welcome to Yitro Consulting",
    "subtext": "We help you turn your ideas into digital solutions."
  },
  "about": {
    "title": "About Us",
    "description": "Yitro Consulting is an innovative company specializing in software development."
  }
}
```

---

## ⚙️ 3. Configuration i18n (`src/i18n.ts`)

```ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en.json";
import translationFR from "./locales/fr.json";

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

---

## 🧩 4. Composants

### `src/components/Header.tsx`

```tsx
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="p-4 bg-gray-100 flex justify-between items-center">
      <h1 className="text-xl font-bold">{t("header.title")}</h1>
      <div>
        <span>{t("header.language")}: </span>
        <button onClick={() => i18n.changeLanguage("fr")} className="mx-1">
          FR
        </button>
        <button onClick={() => i18n.changeLanguage("en")} className="mx-1">
          EN
        </button>
      </div>
    </header>
  );
};

export default Header;
```

---

### `src/components/Hero.tsx`

```tsx
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="text-center p-10 bg-blue-50">
      <h2 className="text-3xl font-bold mb-2">{t("hero.headline")}</h2>
      <p className="text-lg">{t("hero.subtext")}</p>
    </section>
  );
};

export default Hero;
```

---

### `src/components/AboutUs.tsx`

```tsx
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="p-10">
      <h3 className="text-2xl font-semibold mb-2">{t("about.title")}</h3>
      <p>{t("about.description")}</p>
    </section>
  );
};

export default AboutUs;
```

---

## 🧩 5. App.tsx

```tsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import "./i18n";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
    </div>
  );
};

export default App;
```

---

## 🚀 6. main.tsx (React 18)

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## ✅ Résultat

- Tout est traduit en français par défaut.
- Tu peux **changer la langue dynamiquement** via les boutons FR/EN.
- La structure est propre et extensible à d'autres composants/pages.

---

Souhaites-tu que je te fournisse ce projet complet en **fichier ZIP** prêt à lancer ?

Yitro-Consulting turns your ambitions into digital reality.
Tailor-made solutions that boost your visibility, engage your
clients, and drive your sales. From audit to delivery, we
support every step of your digital transformation.
