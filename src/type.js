"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 100,
})
  .pause(1000)
  .move(null, { to: "END" })
  .delete()
  .go();
