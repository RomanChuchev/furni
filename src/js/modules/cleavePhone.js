import Cleave from "cleave.js";
import "cleave.js/dist/addons/cleave-phone.ru";

const cleaveHowTo = new Cleave(".how-to__phone", {
  phone: true,
  phoneRegionCode: "RU",
});

const cleavePopup = new Cleave(".input-popup", {
  phone: true,
  phoneRegionCode: "RU",
});
