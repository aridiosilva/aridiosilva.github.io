(() => {
  "use strict";
  const measurementId = "G-MXMJ7Z3LS7";
  const storageKey = "aridiosilva_analytics_consent";
  const translations = {
    en: { title: "Audience measurement", text: "With your permission, this site uses Google Analytics 4 to measure page views, traffic sources, approximate country, device type, downloads, and outbound clicks. Advertising personalization is disabled.", accept: "Accept analytics", reject: "Reject", preferences: "Analytics preferences" },
    pt: { title: "Medição de audiência", text: "Com sua autorização, este site usa o Google Analytics 4 para medir visualizações, origens do tráfego, país aproximado, tipo de dispositivo, downloads e cliques de saída. A personalização de anúncios permanece desativada.", accept: "Aceitar análise", reject: "Recusar", preferences: "Preferências de análise" },
    es: { title: "Medición de audiencia", text: "Con su permiso, este sitio utiliza Google Analytics 4 para medir visitas, fuentes de tráfico, país aproximado, tipo de dispositivo, descargas y clics salientes. La personalización de anuncios está desactivada.", accept: "Aceptar análisis", reject: "Rechazar", preferences: "Preferencias de análisis" },
    fr: { title: "Mesure d’audience", text: "Avec votre accord, ce site utilise Google Analytics 4 pour mesurer les pages vues, les sources de trafic, le pays approximatif, le type d’appareil, les téléchargements et les clics sortants. La personnalisation publicitaire est désactivée.", accept: "Accepter l’analyse", reject: "Refuser", preferences: "Préférences d’analyse" },
    de: { title: "Reichweitenmessung", text: "Mit Ihrer Zustimmung verwendet diese Website Google Analytics 4, um Seitenaufrufe, Zugriffsquellen, ungefähres Land, Gerätetyp, Downloads und ausgehende Klicks zu messen. Personalisierte Werbung ist deaktiviert.", accept: "Analyse akzeptieren", reject: "Ablehnen", preferences: "Analyse-Einstellungen" }
  };
  let analyticsLoaded = false;
  let banner;
  let preferencesButton;

  function currentCopy() {
    const language = (document.documentElement.lang || navigator.language || "en").toLowerCase().split("-")[0];
    return translations[language] || translations.en;
  }
  function readChoice() { try { return localStorage.getItem(storageKey); } catch (_error) { return null; } }
  function saveChoice(choice) { try { localStorage.setItem(storageKey, choice); } catch (_error) {} }

  function loadAnalytics() {
    if (analyticsLoaded) return;
    analyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { allow_google_signals: false, allow_ad_personalization_signals: false });
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
    script.referrerPolicy = "strict-origin-when-cross-origin";
    document.head.appendChild(script);
  }

  function applyChoice(choice) {
    saveChoice(choice);
    banner.hidden = true;
    preferencesButton.hidden = false;
    if (choice === "granted") loadAnalytics();
  }
  function updateLanguage() {
    const copy = currentCopy();
    banner.querySelector(".analytics-consent__title").textContent = copy.title;
    banner.querySelector(".analytics-consent__text").textContent = copy.text;
    banner.querySelector(".analytics-consent__button--accept").textContent = copy.accept;
    banner.querySelector(".analytics-consent__button--reject").textContent = copy.reject;
    preferencesButton.textContent = copy.preferences;
  }
  function buildInterface() {
    banner = document.createElement("section");
    banner.className = "analytics-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-modal", "false");
    banner.setAttribute("aria-labelledby", "analytics-consent-title");
    banner.innerHTML = '<h2 class="analytics-consent__title" id="analytics-consent-title"></h2><p class="analytics-consent__text"></p><div class="analytics-consent__actions"><button class="analytics-consent__button analytics-consent__button--accept" type="button"></button><button class="analytics-consent__button analytics-consent__button--reject" type="button"></button></div>';
    preferencesButton = document.createElement("button");
    preferencesButton.className = "analytics-preferences";
    preferencesButton.type = "button";
    preferencesButton.hidden = true;
    document.body.append(banner, preferencesButton);
    updateLanguage();
    banner.querySelector(".analytics-consent__button--accept").addEventListener("click", () => applyChoice("granted"));
    banner.querySelector(".analytics-consent__button--reject").addEventListener("click", () => applyChoice("denied"));
    preferencesButton.addEventListener("click", () => { updateLanguage(); banner.hidden = false; preferencesButton.hidden = true; banner.querySelector(".analytics-consent__button--accept").focus(); });
    new MutationObserver(updateLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    const choice = readChoice();
    if (choice === "granted") { banner.hidden = true; preferencesButton.hidden = false; loadAnalytics(); }
    else if (choice === "denied") { banner.hidden = true; preferencesButton.hidden = false; }
    else { banner.hidden = false; }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildInterface, { once: true });
  else buildInterface();
})();
