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

/**
 * Aggregated products data from all category-wise JSON files
 * Maintains compatibility with existing imports
 * Organized for scalability (500+ products, Vercel deployment)
 */
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
  ...gemstones,
];

export default productsData;