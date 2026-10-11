(() => {
  "use strict";

  const measurementId = "G-MXMJ7Z3LS7";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  // Privacy-preserving audience measurement: Google receives cookieless pings,
  // while analytics storage, advertising, and personalization remain disabled.
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500
  });
  window.gtag("set", "ads_data_redaction", true);
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  script.referrerPolicy = "strict-origin-when-cross-origin";
  document.head.appendChild(script);
})();
