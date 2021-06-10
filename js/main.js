import './modules/create-offer.js';

const NEARBY_OFFERS_COUNT = 10;

const nearbyOffers = new Array(NEARBY_OFFERS_COUNT)
  .fill(null)
  .map(() => createOffer());

console.log(nearbyOffers);
