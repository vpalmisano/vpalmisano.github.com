import type CookieConsent from 'vanilla-cookieconsent'

export const cookieConsentConfig: CookieConsent.CookieConsentConfig = {
  guiOptions: {
    consentModal: {
        layout: "box inline",
        position: "bottom left",
        equalWeightButtons: true,
        flipButtons: false
    },
    preferencesModal: {
        layout: "box",
        position: "right",
        equalWeightButtons: true,
        flipButtons: false
    } 
  },

  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    analytics: {
      autoClear: {
        cookies: [{ name: /^_ga/ }, { name: '_gid' }],
      },
      services: {
        ga: {
          label: 'Google Analytics',
        },
      },
    },
  },

  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description:
            'This site uses cookies for analytics and performance monitoring.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
        },
        preferencesModal: {
          title: 'Manage cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie usage',
              description:
                'We use cookies to ensure the site works and, if you allow it, to measure traffic with Google Analytics. You can change your choices at any time via Cookie preferences in the footer.',
            },
            {
              title: 'Analytics',
              description:
                'These cookies help measure how visitors use the site. Data is used to improve content and experience.',
              linkedCategory: 'analytics',
            },
          ],
        },
      },
    },
  },
}
