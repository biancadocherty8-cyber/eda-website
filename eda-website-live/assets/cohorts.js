/* Shared cohort table for booking-confirmed.html and add-delegates.html.
   One entry per Stripe Payment Link. The link's success URL is:
     https://exceptionaldentalacademy.com/booking-confirmed?c=<key>
   Keys: lowercase, letters/numbers/hyphens only.
   value: GST-inclusive price in AUD, used for the Meta Pixel Purchase event. */
window.EDA_COHORTS = {
  /* 2027 cohorts go here, for example:
  'aar-syd-mar27': {
    name:  'Advanced Aesthetic Rehabilitation',
    city:  'Sydney',
    venue: 'ACDP, Sydney',
    dates: 'Sat 13 & Sun 14 March 2027',
    value: 3500
  },
  */
};
