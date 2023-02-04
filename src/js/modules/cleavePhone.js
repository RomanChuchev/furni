import Cleave from "cleave.js";
import "cleave.js/dist/addons/cleave-phone.ru";

const cleave = new Cleave(".how-to__phone", {
  phone: true,
  phoneRegionCode: "RU",
});
