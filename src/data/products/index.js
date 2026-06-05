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
import VastuRemedies from './vastu-remedies.json';
import Locket from './lockets.json';
const titles = devtaDivs.map(item => item.title);

console.log(titles);

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
];

export default productsData;

  // {
  //   "id": "LOC006",
  //   "title": "सिद्ध महाकाली यंत्र (भोजपत्र)",
  //   "slug": "mahakali-yantra-bhojpatra",
  //   "category": "Lockets",
  //   "subcategory": "भोजपत्र यंत्र",
  //   "price": 2100,
  //   "discountPrice": 1500,
  //   "stock": true,
  //   "rating": 4.7,
  //   "reviews": 0,
  //   "featured": false,
  //   "bestSeller": false,
  //   "tags": [
  //     "yantra",
  //     "mahakali",
  //     "bhojpatra",
  //     "sidh yantra",
  //     "protection",
  //     "tantra nivaran",
  //     "mantra shakti",
  //     "written yantra"
  //   ],
  //   "images": [
  //     "/products/lockets/mahakali-yantra-bhojpatra.jpg"
  //   ],
  //   "shortDescription": "सिद्ध महाकाली यंत्र — भोजपत्र पर विधिवत अंकित व मंत्र शक्ति द्वारा सिद्ध, घर व व्यापार स्थल पर रखने हेतु।",
  //   "description": "<div class=\"product-description\"><h2>सिद्ध महाकाली यंत्र (भोजपत्र)</h2><p>यह सिद्ध महाकाली यंत्र भोजपत्र पर विधिवत रूप से अंकित किया गया है और मंत्र शक्ति द्वारा पूर्णतः सिद्ध किया गया है। भोजपत्र पर अंकित यंत्र अत्यंत शक्तिशाली माने जाते हैं। महाकाली जी की शक्ति से घर, दुकान या कार्यालय में नकारात्मक ऊर्जाओं का नाश होता है और सुरक्षा प्राप्त होती है।</p><h2>Key Features</h2><ul><li>भोजपत्र पर हस्तलिखित एवं विधिवत अंकित</li><li>मंत्र शक्ति द्वारा पूर्णतः सिद्ध</li><li>घर, दुकान व ऑफिस में रखने योग्य</li><li>महाकाली यंत्र की दिव्य शक्ति से युक्त</li><li>नकारात्मक ऊर्जाओं का निवारण</li></ul><h2>Benefits</h2><ul><li>घर एवं व्यापार स्थल पर नकारात्मक ऊर्जाओं का नाश</li><li>तांत्रिक बाधाओं एवं बुरी नज़र से सुरक्षा</li><li>शत्रुओं के षड्यंत्रों एवं बुरे प्रभावों से रक्षा</li><li>परिवार में सुख-शांति एवं सकारात्मकता</li><li>महाकाली जी का आशीर्वाद एवं कृपा</li></ul><h2>How to Use</h2><p>इस यंत्र को पूजा स्थान, तिजोरी या घर के मुख्य द्वार के ऊपर स्थापित करें। शुक्रवार को स्थापना करना शुभ माना जाता है। नियमित पूजन एवं धूप-दीप से इसकी शक्ति बनी रहती है।</p></div>",
  //   "benefits": [
  //     "Destroys negative energies in home and workplace",
  //     "Protection from tantric obstacles and evil eye",
  //     "Shields from enemies' conspiracies",
  //     "Peace, happiness and positivity in family",
  //     "Blessings and grace of Maa Mahakali"
  //   ]
  // },
  // {
  //   "id": "LOC007",
  //   "title": "सिद्ध लक्ष्मी बीसा यंत्र (मिनी)",
  //   "slug": "laxmi-bisa-yantra-mini",
  //   "category": "Lockets",
  //   "subcategory": "भोजपत्र यंत्र",
  //   "price": 1100,
  //   "discountPrice": 500,
  //   "stock": true,
  //   "rating": 4.7,
  //   "reviews": 0,
  //   "featured": false,
  //   "bestSeller": false,
  //   "tags": [
  //     "yantra",
  //     "laxmi bisa",
  //     "mini yantra",
  //     "cash bag",
  //     "tijori",
  //     "purse",
  //     "office",
  //     "dhan labh"
  //   ],
  //   "images": [
  //     "/products/lockets/laxmi-bisa-yantra.jpg"
  //   ],
  //   "shortDescription": "सिद्ध लक्ष्मी बीसा यंत्र (मिनी) — Cash bag, तिजोरी, पर्स व Office में रखने हेतु धन वृद्धि एवं समृद्धि यंत्र।",
  //   "description": "<div class=\"product-description\"><h2>सिद्ध लक्ष्मी बीसा यंत्र (मिनी)</h2><p>यह सिद्ध लक्ष्मी बीसा यंत्र का मिनी रूप है जिसे विशेष रूप से Cash bag, तिजोरी, पर्स एवं Office में रखने के लिए बनाया गया है। माँ लक्ष्मी की कृपा से धन वृद्धि, व्यापार में वृद्धि एवं आर्थिक समृद्धि प्राप्त होती है। यह यंत्र मंत्र शक्ति द्वारा विधिवत सिद्ध किया गया है।</p><h2>Key Features</h2><ul><li>मिनी साइज़ — पर्स, तिजोरी व कैश बैग में रखने योग्य</li><li>मंत्र शक्ति द्वारा विधिवत सिद्ध</li><li>लक्ष्मी बीसा यंत्र की दिव्य शक्ति</li><li>घर, दुकान व ऑफिस के लिए उपयुक्त</li><li>धन वृद्धि एवं आर्थिक समृद्धि हेतु</li></ul><h2>Benefits</h2><ul><li>धन वृद्धि एवं आर्थिक समृद्धि</li><li>व्यापार एवं व्यवसाय में सफलता</li><li>कर्ज से मुक्ति एवं धन की बचत</li><li>माँ लक्ष्मी की विशेष कृपा एवं आशीर्वाद</li><li>नौकरी एवं व्यापार में तरक्की</li></ul><h2>How to Use</h2><p>इस यंत्र को अपने पर्स, तिजोरी, कैश बैग या ऑफिस की दराज में रखें। शुक्रवार को स्थापित करना शुभ है। नियमित माँ लक्ष्मी का स्मरण करते हुए इसे सुरक्षित रखें।</p></div>",
  //   "benefits": [
  //     "Increases wealth and financial prosperity",
  //     "Success in business and profession",
  //     "Relief from debt and financial savings",
  //     "Special grace and blessings of Maa Laxmi",
  //     "Career and business growth"
  //   ]
  // },

  //   {
  //   "id": "LOC016",
  //   "title": "माँ सरस्वती सिद्ध यंत्र (भोजपत्र)",
  //   "slug": "saraswati-yantra-sidh-bhojpatra",
  //   "category": "Lockets",
  //   "subcategory": "भोजपत्र यंत्र",
  //   "price": 2100,
  //   "discountPrice": 1500,
  //   "stock": true,
  //   "rating": 4.7,
  //   "reviews": 0,
  //   "featured": false,
  //   "bestSeller": false,
  //   "tags": [
  //     "yantra",
  //     "saraswati",
  //     "bhojpatra",
  //     "vidya",
  //     "students",
  //     "education",
  //     "sidh yantra",
  //     "mantra shakti"
  //   ],
  //   "images": [
  //     "/products/lockets/saraswati-yantra-bhojpatra.jpg"
  //   ],
  //   "shortDescription": "माँ सरस्वती सिद्ध यंत्र — भोजपत्र पर विधिवत अंकित व मंत्र शक्ति द्वारा सिद्ध, विद्या एवं बुद्धि वृद्धि हेतु।",
  //   "description": "<div class=\"product-description\"><h2>माँ सरस्वती सिद्ध यंत्र (भोजपत्र)</h2><p>यह माँ सरस्वती का सिद्ध यंत्र भोजपत्र पर विधिवत रूप से अंकित किया गया है और मंत्र शक्ति द्वारा पूर्णतः सिद्ध किया गया है। यह यंत्र विद्यार्थियों, कलाकारों एवं ज्ञान-प्राप्ति के इच्छुक जातकों के लिए घर एवं अध्ययन कक्ष में रखने हेतु अत्यंत शुभ है।</p><h2>Key Features</h2><ul><li>भोजपत्र पर हस्तलिखित एवं विधिवत अंकित</li><li>मंत्र शक्ति द्वारा पूर्णतः सिद्ध</li><li>अध्ययन कक्ष एवं पूजा स्थान में रखने योग्य</li><li>विद्या एवं बुद्धि वृद्धि हेतु विशेष</li><li>माँ सरस्वती की दिव्य शक्ति से युक्त</li></ul><h2>Benefits</h2><ul><li>विद्या, बुद्धि एवं एकाग्रता में वृद्धि</li><li>परीक्षा एवं प्रतियोगिता में सफलता</li><li>कला एवं रचनात्मक क्षेत्रों में उत्कर्ष</li><li>घर में सकारात्मक ऊर्जा एवं ज्ञान का वातावरण</li><li>माँ सरस्वती की विशेष कृपा</li></ul><h2>How to Use</h2><p>इस यंत्र को अपने अध्ययन कक्ष में या पूजा स्थान पर स्थापित करें। बसंत पंचमी को स्थापित करना विशेष शुभ है। नियमित पूजन एवं धूप-दीप से इसकी शक्ति बनी रहती है।</p></div>",
  //   "benefits": [
  //     "Increases knowledge, intelligence and concentration",
  //     "Success in exams and competitions",
  //     "Excellence in arts and creative fields",
  //     "Creates positive energy and knowledge environment at home",
  //     "Special grace of Maa Saraswati"
  //   ]
  // },
  // {
  //   "id": "LOC017",
  //   "title": "सिद्ध माँ बगलामुखी यंत्र (भोजपत्र)",
  //   "slug": "baglamukhi-yantra-bhojpatra",
  //   "category": "Lockets",
  //   "subcategory": "भोजपत्र यंत्र",
  //   "price": 2100,
  //   "discountPrice": 1500,
  //   "stock": true,
  //   "rating": 4.8,
  //   "reviews": 0,
  //   "featured": false,
  //   "bestSeller": false,
  //   "tags": [
  //     "yantra",
  //     "baglamukhi",
  //     "bhojpatra",
  //     "shatru nash",
  //     "court case",
  //     "sidh yantra",
  //     "mantra shakti",
  //     "written yantra"
  //   ],
  //   "images": [
  //     "/products/lockets/baglamukhi-yantra-bhojpatra.jpg"
  //   ],
  //   "shortDescription": "सिद्ध माँ बगलामुखी यंत्र — भोजपत्र पर विधिवत अंकित व मंत्र शक्ति द्वारा सिद्ध, शत्रु नाश व कोर्ट केस हेतु।",
  //   "description": "<div class=\"product-description\"><h2>सिद्ध माँ बगलामुखी यंत्र (भोजपत्र)</h2><p>यह माँ बगलामुखी का सिद्ध यंत्र भोजपत्र पर विधिवत अंकित एवं मंत्र शक्ति द्वारा सिद्ध किया गया है। शत्रु नाश, कोर्ट-कचहरी की जीत एवं वाद-विवाद में सफलता के लिए यह यंत्र घर या व्यापार स्थल पर रखना अत्यंत लाभकारी है।</p><h2>Key Features</h2><ul><li>भोजपत्र पर हस्तलिखित एवं विधिवत अंकित</li><li>मंत्र शक्ति द्वारा पूर्णतः सिद्ध</li><li>घर एवं व्यापार स्थल पर रखने योग्य</li><li>शत्रु नाश एवं विजय के लिए विशेष</li><li>माँ बगलामुखी की दिव्य शक्ति</li></ul><h2>Benefits</h2><ul><li>शत्रुओं का नाश एवं उनकी बुद्धि स्तब्ध करना</li><li>कोर्ट-कचहरी के मामलों में विजय</li><li>झूठे आरोपों एवं षड्यंत्रों से सुरक्षा</li><li>वाद-विवाद में सफलता एवं तर्क-शक्ति में वृद्धि</li><li>माँ बगलामुखी की विशेष कृपा</li></ul><h2>How to Use</h2><p>इस यंत्र को पूजा स्थान, तिजोरी या घर के सुरक्षित स्थान पर रखें। पीले वस्त्र में लपेटकर रखना शुभ माना जाता है। नियमित बगलामुखी मंत्र का जाप करना लाभकारी है।</p></div>",
  //   "benefits": [
  //     "Destroys enemies and stalls their intellect",
  //     "Victory in court cases and legal matters",
  //     "Protection from false allegations and conspiracies",
  //     "Success in arguments and enhancement of reasoning power",
  //     "Special grace of Maa Baglamukhi"
  //   ]
  // },
  // {
  //   "id": "LOC018",
  //   "title": "सिद्ध व्यापार वृद्धि यंत्र (भोजपत्र)",
  //   "slug": "vyapar-vraddhi-yantra",
  //   "category": "Lockets",
  //   "subcategory": "भोजपत्र यंत्र",
  //   "price": 2100,
  //   "discountPrice": 1500,
  //   "stock": true,
  //   "rating": 4.8,
  //   "reviews": 0,
  //   "featured": true,
  //   "bestSeller": true,
  //   "tags": [
  //     "yantra",
  //     "vyapar vridhi",
  //     "business growth",
  //     "bhojpatra",
  //     "dhan labh",
  //     "sidh yantra",
  //     "mantra shakti",
  //     "trade yantra"
  //   ],
  //   "images": [
  //     "/products/lockets/vyapar-vradhi-yantra-bhojpatra.jpg"
  //   ],
  //   "shortDescription": "सिद्ध व्यापार वृद्धि यंत्र — भोजपत्र पर विधिवत अंकित व मंत्र शक्ति द्वारा सिद्ध, व्यापार वृद्धि एवं धन लाभ हेतु।",
  //   "description": "<div class=\"product-description\"><h2>सिद्ध व्यापार वृद्धि यंत्र (भोजपत्र)</h2><p>यह सिद्ध व्यापार वृद्धि यंत्र भोजपत्र पर विधिवत अंकित एवं मंत्र शक्ति द्वारा सिद्ध किया गया है। व्यापार में वृद्धि, ग्राहक संख्या में बढ़ोत्तरी, धन लाभ एवं व्यावसायिक सफलता के लिए इस यंत्र को दुकान, ऑफिस या गोदाम में रखना अत्यंत लाभकारी है।</p><h2>Key Features</h2><ul><li>भोजपत्र पर हस्तलिखित एवं विधिवत अंकित</li><li>मंत्र शक्ति द्वारा पूर्णतः सिद्ध</li><li>दुकान, ऑफिस एवं व्यापार स्थल पर रखने योग्य</li><li>व्यापार वृद्धि हेतु विशेष रूप से सिद्ध</li><li>ग्राहक वृद्धि एवं धन लाभ हेतु प्रभावशाली</li></ul><h2>Benefits</h2><ul><li>व्यापार एवं व्यवसाय में निरंतर वृद्धि</li><li>ग्राहक संख्या में वृद्धि एवं नए अवसरों की प्राप्ति</li><li>धन लाभ एवं आर्थिक समृद्धि</li><li>व्यापारिक प्रतिस्पर्धा में सफलता</li><li>व्यापार में आने वाली बाधाओं का नाश</li></ul><h2>How to Use</h2><p>इस यंत्र को अपनी दुकान या ऑफिस के पूजा स्थान पर या कैश काउंटर के पास रखें। गुरुवार को स्थापित करना शुभ माना जाता है। नियमित पूजन से इसकी शक्ति बनी रहती है।</p></div>",
  //   "benefits": [
  //     "Continuous growth in trade and business",
  //     "Increase in customer base and new opportunities",
  //     "Financial gains and economic prosperity",
  //     "Success in business competition",
  //     "Removes obstacles in business"
  //   ]
  // },
  // {
  //   "id": "LOC019",
  //   "title": "सिद्ध मंगल यंत्र (भोजपत्र)",
  //   "slug": "mangal-yantra-bhojpatra",
  //   "category": "Lockets",
  //   "subcategory": "भोजपत्र यंत्र",
  //   "price": 2100,
  //   "discountPrice": 1500,
  //   "stock": true,
  //   "rating": 4.7,
  //   "reviews": 0,
  //   "featured": false,
  //   "bestSeller": false,
  //   "tags": [
  //     "yantra",
  //     "mangal yantra",
  //     "bhojpatra",
  //     "mangal dosh",
  //     "manglik",
  //     "sidh yantra",
  //     "mantra shakti",
  //     "written yantra"
  //   ],
  //   "images": [
  //     "/products/lockets/mangal-yantra-bhojpatra.jpg"
  //   ],
  //   "shortDescription": "सिद्ध मंगल यंत्र — भोजपत्र पर अंकित व मंत्र शक्ति द्वारा सिद्ध, मंगल दोष निवारण एवं साहस वृद्धि हेतु।",
  //   "description": "<div class=\"product-description\"><h2>सिद्ध मंगल यंत्र (भोजपत्र)</h2><p>यह सिद्ध मंगल यंत्र भोजपत्र पर विधिवत अंकित एवं मंत्र शक्ति द्वारा सिद्ध किया गया है। मंगल दोष एवं मांगलिक दोष के निवारण के साथ-साथ साहस, पराक्रम एवं ऊर्जा में वृद्धि के लिए यह यंत्र घर या पूजा स्थान पर रखना लाभकारी है।</p><h2>Key Features</h2><ul><li>भोजपत्र पर हस्तलिखित एवं विधिवत अंकित</li><li>मंत्र शक्ति द्वारा पूर्णतः सिद्ध</li><li>मंगल दोष एवं मांगलिक दोष निवारण</li><li>घर, पूजा स्थान पर रखने योग्य</li><li>साहस एवं पराक्रम वृद्धि हेतु प्रभावशाली</li></ul><h2>Benefits</h2><ul><li>मंगल दोष एवं मांगलिक दोष का निवारण</li><li>विवाह में बाधाओं का नाश</li><li>साहस, आत्मविश्वास एवं शारीरिक ऊर्जा में वृद्धि</li><li>भूमि, संपत्ति एवं वाहन से संबंधित लाभ</li><li>मंगल देव की कृपा एवं आशीर्वाद</li></ul><h2>How to Use</h2><p>इस यंत्र को पूजा स्थान पर मंगलवार को स्थापित करें। हनुमान चालीसा का पाठ करते हुए स्थापना करना लाभकारी है।</p></div>",
  //   "benefits": [
  //     "Remedies Mangal dosha and Manglik dosha",
  //     "Removes obstacles in marriage",
  //     "Increases courage, self-confidence and physical energy",
  //     "Benefits related to land, property and vehicles",
  //     "Blessings and grace of Mangal Dev"
  //   ]
  // },
  // {
  //   "id": "LOC020",
  //   "title": "सिद्ध दुर्गा बीसा यंत्र (भोजपत्र)",
  //   "slug": "durga-bisa-yantra-bhojpatra",
  //   "category": "Lockets",
  //   "subcategory": "भोजपत्र यंत्र",
  //   "price": 2100,
  //   "discountPrice": 1500,
  //   "stock": true,
  //   "rating": 4.8,
  //   "reviews": 0,
  //   "featured": true,
  //   "bestSeller": false,
  //   "tags": [
  //     "yantra",
  //     "durga bisa",
  //     "bhojpatra",
  //     "protection",
  //     "shakti",
  //     "sidh yantra",
  //     "mantra shakti",
  //     "durga yantra"
  //   ],
  //   "images": [
  //     "/products/lockets/durga-bisa-yantra-bhojpatra.jpg"
  //   ],
  //   "shortDescription": "सिद्ध दुर्गा बीसा यंत्र — भोजपत्र पर अंकित व मंत्र शक्ति द्वारा सिद्ध, सर्वसुख, सुरक्षा एवं शक्ति प्राप्ति हेतु।",
  //   "description": "<div class=\"product-description\"><h2>सिद्ध दुर्गा बीसा यंत्र (भोजपत्र)</h2><p>यह सिद्ध दुर्गा बीसा यंत्र भोजपत्र पर विधिवत अंकित एवं मंत्र शक्ति द्वारा सिद्ध किया गया है। माँ दुर्गा की शक्ति से घर में सुख-शांति, सुरक्षा एवं सर्वसुख की प्राप्ति होती है। यह यंत्र नवरात्रि में स्थापित करना विशेष शुभ माना जाता है।</p><h2>Key Features</h2><ul><li>भोजपत्र पर हस्तलिखित एवं विधिवत अंकित</li><li>मंत्र शक्ति द्वारा पूर्णतः सिद्ध</li><li>दुर्गा बीसा यंत्र की दिव्य शक्ति</li><li>घर एवं व्यापार स्थल पर रखने योग्य</li><li>सर्वसुख एवं सुरक्षा हेतु विशेष</li></ul><h2>Benefits</h2><ul><li>घर में सुख, शांति एवं समृद्धि</li><li>नकारात्मक ऊर्जाओं एवं बुरी शक्तियों से सुरक्षा</li><li>परिवार के सदस्यों की रक्षा एवं स्वास्थ्य</li><li>मनोकामनाओं की पूर्ति एवं इच्छाशक्ति में वृद्धि</li><li>माँ दुर्गा की विशेष कृपा एवं आशीर्वाद</li></ul><h2>How to Use</h2><p>इस यंत्र को नवरात्रि या किसी शुभ तिथि को घर के पूजा स्थान पर स्थापित करें। दुर्गा सप्तशती या दुर्गा मंत्र का पाठ करना लाभकारी है।</p></div>",
  //   "benefits": [
  //     "Happiness, peace and prosperity in home",
  //     "Protection from negative energies and evil forces",
  //     "Protection and health of family members",
  //     "Fulfillment of wishes and increase in willpower",
  //     "Special grace and blessings of Maa Durga"
  //   ]
  // },
  // {
  //   "id": "LOC021",
  //   "title": "सिद्ध लक्ष्मी बीसा यंत्र (भोजपत्र)",
  //   "slug": "laxmi-bisa-yantra",
  //   "category": "Lockets",
  //   "subcategory": "भोजपत्र यंत्र",
  //   "price": 2100,
  //   "discountPrice": 1500,
  //   "stock": true,
  //   "rating": 4.8,
  //   "reviews": 0,
  //   "featured": true,
  //   "bestSeller": false,
  //   "tags": [
  //     "yantra",
  //     "laxmi bisa",
  //     "bhojpatra",
  //     "dhan labh",
  //     "office",
  //     "shop",
  //     "sidh yantra",
  //     "mantra shakti"
  //   ],
  //   "images": [
  //     "/products/lockets/sidh-laxmi-bisa-yantra.jpg"
  //   ],
  //   "shortDescription": "सिद्ध लक्ष्मी बीसा यंत्र — भोजपत्र पर अंकित, ऑफिस, दुकान व घर में रखने हेतु धन समृद्धि यंत्र।",
  //   "description": "<div class=\"product-description\"><h2>सिद्ध लक्ष्मी बीसा यंत्र (भोजपत्र)</h2><p>यह सिद्ध लक्ष्मी बीसा यंत्र भोजपत्र पर विधिवत अंकित एवं मंत्र शक्ति द्वारा सिद्ध किया गया है। ऑफिस, दुकान एवं घर में रखने के लिए यह यंत्र धन वृद्धि, व्यापार समृद्धि एवं माँ लक्ष्मी की कृपा प्राप्ति के लिए अत्यंत प्रभावशाली है।</p><h2>Key Features</h2><ul><li>भोजपत्र पर हस्तलिखित एवं विधिवत अंकित</li><li>मंत्र शक्ति द्वारा पूर्णतः सिद्ध</li><li>ऑफिस, दुकान एवं घर में रखने योग्य</li><li>लक्ष्मी बीसा यंत्र की दिव्य धन शक्ति</li><li>धन वृद्धि एवं व्यापार समृद्धि हेतु विशेष</li></ul><h2>Benefits</h2><ul><li>धन वृद्धि एवं आर्थिक समृद्धि में वृद्धि</li><li>व्यापार एवं व्यवसाय में निरंतर सफलता</li><li>माँ लक्ष्मी का आगमन एवं स्थायी निवास</li><li>कर्ज से मुक्ति एवं बचत में वृद्धि</li><li>नौकरी एवं व्यापार में तरक्की</li></ul><h2>How to Use</h2><p>इस यंत्र को अपनी दुकान, ऑफिस या घर के पूजा स्थान पर शुक्रवार को स्थापित करें। माँ लक्ष्मी की नियमित पूजा करते हुए इसे सुरक्षित रखें।</p></div>",
  //   "benefits": [
  //     "Increases wealth and financial prosperity",
  //     "Continuous success in business and profession",
  //     "Arrival and permanent residence of Maa Laxmi",
  //     "Relief from debt and increase in savings",
  //     "Career and business advancement"
  //   ]
  // },
  // {
  //   "id": "LOC022",
  //   "title": "सिद्ध हनुमान यंत्र (भोजपत्र)",
  //   "slug": "siddh-hanuman-yantra-bhojpatra",
  //   "category": "Lockets",
  //   "subcategory": "भोजपत्र यंत्र",
  //   "price": 2100,
  //   "discountPrice": 1500,
  //   "stock": true,
  //   "rating": 4.9,
  //   "reviews": 0,
  //   "featured": true,
  //   "bestSeller": true,
  //   "tags": [
  //     "yantra",
  //     "hanuman yantra",
  //     "bhojpatra",
  //     "protection",
  //     "bhoot pret",
  //     "shatru raksha",
  //     "sidh yantra",
  //     "mantra shakti"
  //   ],
  //   "images": [
  //     "/products/lockets/sidh-hanuman-yantra.jpg"
  //   ],
  //   "shortDescription": "सिद्ध हनुमान यंत्र — भोजपत्र पर अंकित व मंत्र शक्ति द्वारा सिद्ध, सुरक्षा, शक्ति एवं बाधा निवारण हेतु।",
  //   "description": "<div class=\"product-description\"><h2>सिद्ध हनुमान यंत्र (भोजपत्र)</h2><p>यह सिद्ध हनुमान यंत्र भोजपत्र पर विधिवत अंकित एवं मंत्र शक्ति द्वारा सिद्ध किया गया है। हनुमान जी की शक्ति से घर में सुरक्षा, भूत-प्रेत बाधा निवारण एवं शत्रुओं के षड्यंत्रों से रक्षा होती है। यह यंत्र शनि, राहु एवं मंगल के अशुभ प्रभावों का भी निवारण करता है।</p><h2>Key Features</h2><ul><li>भोजपत्र पर हस्तलिखित एवं विधिवत अंकित</li><li>मंत्र शक्ति द्वारा पूर्णतः सिद्ध</li><li>घर एवं व्यापार स्थल पर रखने योग्य</li><li>हनुमान जी की दिव्य शक्ति एवं सुरक्षा</li><li>भूत-प्रेत बाधा एवं तांत्रिक प्रयोग निवारण</li></ul><h2>Benefits</h2><ul><li>घर में सुरक्षा एवं सकारात्मक ऊर्जा</li><li>भूत-प्रेत बाधा एवं ऊपरी हवा से सुरक्षा</li><li>शत्रुओं एवं षड्यंत्रों से रक्षा</li><li>शनि, राहु एवं मंगल दोष का निवारण</li><li>हनुमान जी की विशेष कृपा एवं आशीर्वाद</li></ul><h2>How to Use</h2><p>इस यंत्र को मंगलवार या शनिवार को हनुमान जी का ध्यान करते हुए घर के पूजा स्थान या मुख्य द्वार के ऊपर स्थापित करें। हनुमान चालीसा का नियमित पाठ करना लाभकारी है।</p></div>",
  //   "benefits": [
  //     "Security and positive energy in home",
  //     "Protection from ghosts and negative spirits",
  //     "Protection from enemies and their conspiracies",
  //     "Remedies Shani, Rahu and Mangal dosha",
  //     "Special grace and blessings of Hanuman Ji"
  //   ]
  // },