import strips from './strips.json';
import tapes from './tapes.json';
import helix from './helix.json';
import springs from './springs.json';
import studs from './studs.json';
import pyramids from './pyramids.json';
import rods from './rods.json';
import devtaDivs from './devta-divs.json';
import Yantras from './yantras.json';
import Compass from './compass.json';
import gemstones from './gemstones.json';
import energyvastu from './energyvastu.json';
import oils from './oils.json';
import bracelets from './bracelets.json';
import pendants from './pendant.json';
import VastuRemedies from './vastu-remedies.json';
import Locket from './lockets.json';
// const category = pendants.map(item => item.category);
// const subcategory = pendants.map(item => item.subcategory);

// console.log(category);
// console.log(subcategory);

const productsData = [
  ...strips,
  ...tapes,
  ...helix,
  ...springs,
  ...studs,
  ...pyramids,
  ...rods,
  ...devtaDivs,
  ...Yantras,
  ...Compass,
  ...energyvastu,
  ...oils,
  ...gemstones,
  ...VastuRemedies,
  ...Locket,
  ...bracelets,
  ...pendants
];

export default productsData;
