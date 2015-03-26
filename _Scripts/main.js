/*
 * pagelist: HTML details for core static pages in the presentation
 * {string} pageSlug - unique text ID {preferred for readability}
 * {number} id - unique number ID {should be phased out}
 * {string} title - page title
 * {string} filename - page template to use for layout
 * {string} layout - layout to use {should be phased out in favor of additional filename options}
 * {string} parent - parent id {currently using id, should be moved to pageSlug}
 * {string} background - filename of the body background image 
 * {string} [headline] - page h1 tag (optional - uses title if not provided)
 * {string} [htmlContent] - page HTML to be inserted into #page-content (optional)
 * {string} [menu] - filename of the menu (_Content/images/menu) and icon (_Content/images/icons) images used in navigation (optional)
 * {string} [menuTitle] - text to be displayed in navigation (optional - uses headline if not provided)
 * 
 */

//var pagelist = '{' +
//    '"pages": [ ' +
//    '{ "pageSlug":"", "id": 0, "title": "Presentation Lists", "filename": "index", "layout": "home", "parent":"0", "background":"home2" },' +
//    '{ "pageSlug":"introScreen", "id": 1, "title": "Intro Screen", "filename": "index", "layout": "splash", "parent":"1", "background":"home2" },' +
//    '{ "pageSlug":"mainMenu", "id": 2, "title": "Main Menu", "filename": "mainMenu", "layout": "menu", "parent":"1", "background":"main-menu" },' +
//    '{ "pageSlug":"capabilities", "id": 3, "title": "Capabilities", "filename": "capabilities/index", "layout": "landing", "parent":"0", "background":"main-menu", "htmlContent":"<p>Our unique business model gives customers the ability to work with a global network of local distributors that offer a wide range of services and the quality products for which we’re known.</p>" },' +
//    '{ "pageSlug":"products", "id": 4, "title": "Products", "filename": "products/index", "layout": "landing", "parent":"0", "background":"products", "htmlContent":"<p>We manufacture and deliver a wide array of the highest quality valves, fittings, gauges, tubing and other fluid system products and solutions. The breadth of our product offering is always growing. We stock standard parts at 225 locations worldwide and provide products designed for your unique needs."},' +
//    '{ "pageSlug":"markets", "id": 5, "title": "Markets", "filename": "markets/index", "layout" : "landing", "parent":"0", "background":"markets2", "htmlContent":"<p>Swagelok is a global developer and provider of high-quality and reliable fluid system solutions including products, assemblies and services for the oil and gas, power, petrochemical, alternative fuels, and semiconductor industries. Select a market to learn more about how we can help you develop solutions to your toughest challenges."},' +
//    '{ "pageSlug":"mission", "id": 6, "title": "Your Business Partner", "filename": "capabilities/detail", "layout": "mission", "parent":"3", "background":"capabilities2", "menu":"ca-mission", "headline":"Your Business Partner", "htmlContent":"<p>Helping you grow means leveraging the core values on which our company was founded and built: Customer Focus, Quality, Integrity, Respect for the Individual, Innovation, And Continuous Improvement. Our values have value, to our associates, our distributors and their associates, our customers, and their customers.</p>"},' +
//    '{ "pageSlug":"oneSwagelok", "id": 7, "title": "Your Global Partner", "menuTitle":"Your Global Partner", "filename": "capabilities/submenu", "layout": "text-video", "parent":"3", "background":"capabilities2", "menu":"ca-partner", "headline":"One Swagelok", "htmlContent":"<p>We’ve always been known for our quality products. Recently, in response to growing customer needs, we’ve improved and increased our expertise and range of global services. We now provide customers with local relationships through our distributors and augment them with advanced services and the backing of a global organization. <p>These services relate not only to logistics and coordination among different regions of the world, but also to advanced training and design in systems and processes; expertise in materials science; fabrication of assemblies; and custom product design. <p>As “One Swagelok”&mdash;one interconnected global organization&mdash;we are developing products and services that are intended to lighten the burden of our customers" },' +
//    '{ "pageSlug":"technicalSupportSales", "id":8, "title": "Technical Sales Support", "filename": "capabilities/detail", "layout": "text-only", "parent":"3", "background":"capabilities2", "menu":"ca-support" },' +
//    '{ "pageSlug":"services", "id": 9, "title": "Services", "filename": "capabilities/detail", "layout": "text-only", "parent":"3", "background":"capabilities2", "menu":"ca-services"},' +
//    '{ "pageSlug":"delivery", "id": 10, "title": "Delivery", "filename": "capabilities/detail", "layout": "text-only", "parent":"3", "background":"capabilities2", "menu":"ca-delivery" },' +
//    '{ "pageSlug":"training", "id": 11, "title": "Training", "filename": "capabilities/detail", "layout": "text-only", "parent":"3", "background":"capabilities2", "menu":"ca-training" },' +
//    '{ "pageSlug":"customSolutions", "id": 12, "title": "Custom Solutions", "filename": "capabilities/detail", "layout": "text-only", "parent":"3", "background":"capabilities2", "menu":"ca-custom" },' +
//    '{ "pageSlug":"applications", "id": 13, "title": "Applications", "filename": "capabilities/slides", "layout": "case-study", "parent":"3", "background":"capabilities2", "menu":"ca-applications" },' +
//    '{ "pageSlug":"power", "id": 14, "title": "Power", "filename": "markets/detail","layout": "market", "parent":"5", "background":"power", "menu":"ma-power" },' +
//    '{ "pageSlug":"powerDetail", "id": 15, "title": "Power - Detail", "filename": "products/slides", "layout": "market", "parent":"14", "background":"power-blur", "menu":"pr-leak" },' +
//    '{ "pageSlug":"oilGas", "id": 16, "title": "Oil &amp; Gas","filename": "markets/detail","layout": "market", "parent":"5", "background":"main-menu", "menu":"ma-oil" },' +
//    '{ "pageSlug":"alternativeFuels", "id": 17, "title": "Alternative Fuels","filename": "markets/detail","layout": "market", "parent":"5", "background":"main-menu", "menu":"ma-alternative" },' +
//    '{ "pageSlug":"fittings", "id": 18, "title": "Fittings", "filename": "products/detail", "layout":"product", "parent":"4", "background":"products", "menu":"pr-fittings", "headline":"High-Performance Fittings &amp; Adapters", "htmlContent":"<p>When the world’s most respected companies want to make lasting connections, they turn to Swagelok. From high-purity fittings designed to minimize particle generation and entrapment to high-strength fittings engineered to hold high pressure, Swagelok products deliver dependable, leak-free performance. <p>For more than 65 years, we’ve been solving tough challenges in the oil and gas, chemical processing, power generation, alternative energy, aerospace, and defense industries, establishing a reputation for high quality and high performance. <p>Whether you need fittings for corrosive environments or extreme temperatures, fittings to maintain vacuum or withstand high pressure, or a proven partner who understands your industry&mdash;you’ll be well connected with Swagelok." },' +
//    '{ "pageSlug":"tubeFittings", "id": 19, "title": "Fittings", "filename": "products/product", "layout":"product", "parent":"18", "background":"fi-fittings", "menu":"tube-fittings", "headline":"Tube Fittings & Tube Adapters", "htmlContent":"<p>Swagelok tube fittings and adapters are easy to install and can be disassembled and reassembled many times while retaining their leak-tight seal. Subjected to burn tests, shock impact tests, external pressure tests, finite element analysis, and more, our tube fittings perform beyond all expectations. <p>Available in a variety of materials and configurations, Swagelok tube fittings and adapters deliver robust tube grip, vibration resistance, and leak-free performance. These attributes are critical to the oil and gas, power, chemical and refining, alternative fuels, and semiconductor industries. Our selection of tube fittings and adapters includes: <ul> <li>Elbows</li> <li>Caps and Plugs</li> <li>Chromatograph and Column End</li> <li>Straights </li> <li>Tees</li> <li>Union Crosses</li> <li>High Pressure</li> <li>Medium Pressure</li> <li>Accessories</li> </ul>"},' +
//    '{ "pageSlug":"biopharmaceuticalFittings", "id": 20, "title": "Fittings", "filename": "products/product", "layout":"product", "parent":"18", "background":"fi-biopharm", "menu":"biopharma", "headline":"Biopharmaceutical Fittings & Adapters", "htmlContent":"<p>Swagelok’s biopharmaceutical fittings and adapters are engineered to solve purity problems inherent in conventional sanitary clamp fittings. Through enhanced drainability and cleanability as well as the virtual elimination of gasket extrusion and fluid holdup, our fittings and adapters limit entrapment areas that can harbor bacteria. <p>Ideal for sanitary processing applications, Swagelok biopharmaceutical products meet ASME-BPE and 3-A sanitary standards. Our selection includes: <ul> <li>TS Series Sanitary Clamps</li> <li>TS Series Sanitary Clamp Caps</li> <li>TS Series Sanitary Clamp Ferrules</li> </ul>"},' +
//    '{ "pageSlug":"dialectricFittings", "id": 21, "title": "Fittings", "filename": "products/product", "layout":"product", "parent":"18", "background":"fi-dielectric", "menu":"dielectric", "headline":"Dielectric Fittings & Adapters", "htmlContent":"<p>Engineered to isolate monitoring instruments from the effects of electrical currents, dielectric fittings work to interrupt cathodic current flow while allowing full fluid flow. These fittings feature molded thermoplastic insulation with excellent electrical, chemical, and ultraviolet resistance as well as low water absorption. This helps maintain dielectric strength and integrity over a wide range of operating conditions. <p>Gaugeable tube fittings and tapered pipe thread end connections provide direct connections to tubing or piping systems. Our selection includes: <ul> <li>Tube Fitting, Dielectric Union, 12 mm Tube OD</li> <li>Tube Fitting, Dielectric Union, 3/8 in. Tube OD x 1/4 in. Male NPT</li> <li>Tube Fitting, Dielectric Union, 1/4 in. Tube OD</li> <li>Tube Fitting, Dielectric Male Connector, 3/8 in. Tube OD x 1/4 in. Male NPT</li> <li>Tube Fitting, Dielectric Union, 1/2 in. Tube OD </li> <li>Tube Fitting, Dielectric Union, 3/8 in. Tube OD</li> </ul>"},' +
//    '{ "pageSlug":"flangeFittings", "id": 22, "title": "Fittings", "filename": "products/product", "layout":"product", "parent":"18", "background":"fi-flange", "menu":"flange", "headline":"Flange to Swagelok Tube Fitting Pipe", "htmlContent":"<p>Flange adapters from Swagelok offer a threadless, weldless transition from flanged piping systems to tubing systems, with options designed to meet ASME, DIN, EN, and JIS standards. With a one-piece integrally machined forged body, flange adapters are available with Swagelok tube fitting end connections up to 50 mm and 2 inches. Choose from a range of sizes, pressure classes, and seal faces including flat face, raised face, RTJ, and tongue-and-groove. Our selection includes: <ul> <li>ANSI Flanges</li> <li>DIN Flanges</li> <li>Lap Joint Flanges</li> </ul>"},' +
//    '{ "pageSlug":"pipeFittings", "id": 23, "title": "Fittings", "filename": "products/product", "layout":"product", "parent":"18", "background":"fi-pipe-fittings", "menu":"pipe-fittings", "headline":"Pipe Fittings & Adapters", "htmlContent":"<p>Swagelok pipe fittings are precision manufactured for optimal sealing, minimal galling, and consistently tight-fitting installations. Featuring burr-free surfaces and smooth thread flanks, Swagelok pipe fittings and adapters are available in stainless steel, carbon steel, and brass. They range from 1/16- to 1-inch sizes to meet the demands of a wide variety of applications. Our selection includes: <ul> <li>Pipe Adapters</li> <li>Pipe Caps and Plugs</li> <li>Pipe Couplings</li> <li>Pipe Crosses</li> <li>Pipe Elbows</li> <li>Pipe Nipples</li> <li>Pipe Reducers</li> <li>Pipe Tees</li> </ul>"},' +
//    '{ "pageSlug":"vacuumFittings", "id": 24, "title": "Fittings", "filename": "products/product", "layout":"product", "parent":"18", "background":"fi-vacuum", "menu":"vacuum", "headline":"Vacuum Fittings & Adapters", "htmlContent":"<p>Swagelok vacuum fittings and adapters are engineered to deliver a reliable, repeatable seal that vacuum systems depend on to function properly in operations such as manufacturing, packaging, material handling, and assembly. Easy to install, high-quality Swagelok fittings and adapters are made of stainless steel with fluorocarbon FKM O-rings to offer an array of high-performance solutions for vacuum systems. <ul> <li>Ultra-Torr Straights</li> <li>Ultra-Torr Tees</li> <li>Spare Parts and Accessories</li> </ul>"},' +
//    '{ "pageSlug":"oringFittings", "id": 25, "title": "Fittings", "filename": "products/product", "layout":"product", "parent":"18", "background":"fi-vco-o-ring", "menu":"vco-o-ring", "headline":"VCO&reg; O-Ring Face Seal Fittings", "htmlContent":"<p>Designed for rapid assembly in pipe, tube, and welded systems, VCO&reg; O-ring face seal fittings from Swagelok offer high-integrity seals using a captive O-ring in the body component. Swagelok’s innovative fitting design is easy to install&mdash;even in limited spaces&mdash;with no axial clearance required. Featuring two ports for easy leak testing, VCO O-ring face seal fittings are ideal for everything from general industry to high-pressure, high-purity, and critical vacuum applications within a wide range of temperatures. Options include: <ul> <li>VCO&reg; O-Ring Bodies Elbow 90°</li> <li>VCO&reg; O-Ring Bodies Straight</li> <li>VCO&reg; O-Ring Bodies Tee Union</li> <li>VCO&reg; O-Ring Glands</li> <li>VCO&reg; O-Ring Nuts, Caps and Plugs</li> <li>Spare Parts and Accessories</li> </ul>"},' +
//    '{ "pageSlug":"metalFittings", "id": 26, "title": "Fittings", "filename": "products/product", "layout":"product", "parent":"18", "background":"fi-vcr-metal", "menu":"vcr-metal", "headline":"VCR&reg; Metal Gasket Face Seal & VCR Split-Nut Assemblies", "htmlContent":"<p>As the authentic VCR&reg; brand, Swagelok VCR metal gasket face seal and split-nut assemblies are the first of their kind and on the forefront of high-performance solutions to today’s high-purity challenges. Made of high-purity stainless steel with a precision manufactured gasket, our fittings offer a metal-to-metal seal that ensures leak-tight service for critical vacuum or positive pressure systems. <p>For highly engineered solutions that minimize entrapment areas, insist on original Swagelok VCR products. Our selection includes: <ul> <li>VCR&reg; Metal Gasket Bodies Cross Union</li> <li>VCR&reg; Metal Gasket Bodies Elbow 90°</li> <li>VCR&reg; Metal Gasket Bodies Straight </li> <li>VCR&reg; Metal Gasket Bodies Tee</li> <li>VCR&reg; Metal Gasket Gaskets</li> <li>VCR&reg; Metal Gasket Glands  </li> <li>VCR&reg; Metal Gasket Nuts, Caps, and Plugs  </li> <li>VCR&reg; Metal Gasket Welded Assemblies, Elbow, 90°  </li> <li>VCR&reg; Metal Gasket Welded Assemblies Straight</li> <li>VCR&reg; Metal Gasket Welded Assemblies Tee</li> <li>Spare Parts and Accessories</li> </ul>"},' +
//    '{ "pageSlug":"weldFittings", "id": 27, "title": "Fittings", "filename": "products/product", "layout":"product", "parent":"18", "background":"fi-weld", "menu":"weld", "headline":"Weld Fittings & Adapters", "htmlContent":"<p>Ultrahigh-purity, specially cleaned, and industrial weld fittings from Swagelok are engineered to make permanent, high-integrity connections. Made from a special grade of SAF 2507™ super duplex material, our weld fittings and adapters offer excellent corrosion resistance in chloride-containing environments. <p>From general industrial to ultrahigh-purity applications, count on high-integrity connections that last with weld fittings from Swagelok, available in a variety of materials, sizes, and shapes. Options include: <ul> <li>Micro-Fit&reg; High-Purity Tube Butt Weld Fittings</li> <li>Pipe Socket Weld Fittings</li> <li>Tube Butt Weld Automatic Fittings</li> <li>Tube Butt Weld Fittings</li> <li>Tube Socket Weld Automatic Fittings</li> <li>Tube Socket Weld Fittings</li> <li>Weld Adapter Fittings</li> </ul>"},' +
//    '{ "pageSlug":"lringFittings", "id": 28, "title": "Fittings", "filename": "products/product", "layout":"product", "parent":"18", "background":"fi-bco", "menu":"bco", "headline":"BType VCO&reg; L-Ring Face Seal Fittings", "htmlContent":"<p>Inspired by challenges in the pharmaceutical and biotechnology industries, VCO&reg; fittings from Swagelok feature an “L” ring instead of an “O” ring to reduce internal entrapment that can harbor bacteria. Offering enhanced cleanability and drainability, Btype VCO fittings are ideal for steam cleaning, research and development, sampling, or process feed lines as well as any other application that requires frequent assembly and disassembly. Options include: <ul> <li>VCO&reg; Bodies</li> <li>VCO&reg; Nuts</li> <li>VCO&reg; Glands</li> <li>Spare Parts and Accessories</li> </ul>"},' +
//    '{ "pageSlug":"tsFittings", "id": 29, "title": "Fittings", "filename": "products/product", "layout":"product", "parent":"18", "background":"fi-fittings", "menu":"ts-fittings", "headline":"TS Fittings", "htmlContent":"<p>TS Series biopharmaceutical fittings feature controlled gasket compression to virtually eliminate fluid holdup in conventional sanitary clamp fittings. Designed to meet ASME-BPE and 3-A sanitary standards, patented TS fittings feature boreline seals and metal-to-metal stops to improve drainability and cleanability. Leak-free performance throughout a range of pressure-temperature ratings makes TS fittings ideal wherever product purity and integrity are critical. Available in sizes from 1/2 to 4 inches, our selection includes: <ul> <li>TS Fittings</li></ul>"},' +
//    '{ "pageSlug":"businessModel", "id": 30, "title": "Expanding to make the world smaller.", "menu":"businessModel", "menuTitle":"Business Model", "filename": "capabilities/submenu", "layout": "text-video", "parent":"7", "background":"capabilities2", "htmlContent":"<p>We continue to refine our unique business model that puts local inventory close to the customer in regions throughout the world. We establish distributors as independent businesses, staffed with local people who are focused only on Swagelok products and building trust with customers. </p> <p>This model is our cornerstone and it sets us apart. </p> <p>Our distributors are closely connected with Swagelok and with each other. Anywhere in the world, you can get the same top-flight service from Swagelok. But if you design and specify in one location and your job site is another, distributors in both locations will work with you as one team. </p> <p>We are one interconnected global organization – “One Swagelok.” </p>" },' +
//    '{ "pageSlug":"marketsCustomers", "id": 31, "title": "More than parts&mdash;partnerships.", "menu":"marketsCustomers", "menuTitle":"Markets & Customers", "filename": "capabilities/submenu", "layout": "text-video", "parent":"7", "background":"capabilities2", "htmlContent":"<p>Our customers need more than a components supplier. They need our help across their operations. <p>Our technical experts work directly with the customer to see problems and challenges firsthand and anticipate what customer needs will be next year – or in three to five years. We aim to be ready with the right products, support, and applications knowledge. <p>Our materials science group works tirelessly to understand process and environmental conditions in oil fields. In the lab our engineers test new technologies for natural gas vehicles, semiconductor tools, and more. <p>We conduct research with national laboratories and serve on standards committees because it is our mission to know and to be ready on behalf of our customers." },' +
//    '{ "pageSlug":"engineering", "id": 32, "title": "In pursuit of answers.", "menu":"engineering", "menuTitle":"Engineering", "filename": "capabilities/submenu", "layout": "text-video", "parent":"7", "background":"capabilities2", "htmlContent":"<p>We’re a practical company. For us, innovation starts with a customer’s problem. </p> <p>Our engineers are motivated by in-person interactions with the customer. Understanding the issues. Talking them over. Weighing options. A customer challenge is what we rally around. </p> <p>At the same time, we’re focused on safety. It’s our job to protect our customers and their applications. All Swagelok engineers know this. Every day, it’s on their mind. </p> <p>We’re not a public company under pressure for short-term results. We’re focused on doing the right thing. </p> <p>When a new product hits the market, it must be bulletproof. </p>" },' +
//    '{ "pageSlug":"shopFloorCulture", "id": 33, "title": "In the right hands.", "menu":"shopFloorCulture", "menuTitle":"Culture, values & safety", "filename": "capabilities/submenu", "layout": "text-video", "parent":"7", "background":"capabilities2", "htmlContent":"<p>Anyone who spends any time in a Swagelok manufacturing facility comes away with a sense that here is something exceptional – cleanliness, orderliness, complete adherence to a set of quality and safety practices. </p> <p>On the Swagelok shop floor there are absolutes, and we believe that any deviation could have dire consequences for us and our customers. We achieve this through training, practice, policy, and most importantly culture. </p> <p>Swagelok associates are part owners, and share in the company’s success. </p> <p>Their ideas are heard, they recommend improvements, report things that seem just a little out of the ordinary and serve as the guardians of safety. </p> <p>That’s why Swagelok has experiences double-digit decreases in reported injury cases year after year and we’re now in the top quartile of our industry category. </p>" },' +
//    '{ "pageSlug":"quality", "id": 34, "title": "Zero Customer Disappointments", "menu":"quality", "menuTitle":"Quality", "filename": "capabilities/submenu", "layout": "text-video", "parent":"7", "background":"capabilities2", "htmlContent":"<p>There is a phrase that every Swagelok executive, engineer and shop floor associate knows – Zero Customer Disappointments. It is a way of life. </p> <p>We strive to ensure the customer has a perfect experience with every product and service, every time and that they deliver on the promise of safety and total peace of mind.</p> <p>That’s the standard we hold ourselves to. </p> <p>We’re at the point where “zero” is really possible, and we’re on a mission to make it happen.</p>" },' +
//    '{ "pageSlug":"manufacturing", "id": 35, "title": "Nonstop operation.", "menu":"manufacturing", "menuTitle":"Manufacturing", "filename": "capabilities/submenu", "layout": "text-video", "parent":"7", "background":"capabilities2", "htmlContent":"<p>We own the product manufacturing process from start to finish. This way we can control the maximum number of variables, ensuring product quality. </p> <p>We make some of our own cutting tools and we’re very deliberate about the machines we buy. Then, we are disciplined about routine service. And we run a predictive maintenance program that addresses repairs before there is a breakdown. </p> <p>Our machines must be in the very best operating condition, executing at the tightest tolerances. </p> <p>What is our motivation for such exactitude? It’s product quality. It’s zero customer disappointments. And it’s the safety of our machine operators.</p>" },' +
//    '{ "pageSlug":"globalSourcing", "id": 36, "title": "Suppliers we can count on.", "menu":"globalSourcing", "menuTitle":"Global Sourcing & Risk Mitigation", "filename": "capabilities/submenu", "layout": "text-video", "parent":"7", "background":"capabilities2", "htmlContent":"<p>Swagelok comes through to customers again and again partly due to the quality of our supply base. </p> <p>We look long and hard to find our suppliers and apply enormous amounts of scrutiny. We’re looking not just at the product and quality systems, but also their values and quality of leadership.</p> <p>With so much riding on our suppliers, we ask them to take extraordinary measures – in some cases, to keep their proprietary secrets in escrow – in others, to keep extra inventory on hand.</p> <p>We do everything we can to mitigate risk. That’s our promise to customers.</p>" },' +
//    '{ "pageSlug":"financialStewardship", "id": 37, "title": "A mission with momentum.", "menu":"financialStewardship", "menuTitle":"Financial Stewardship", "filename": "capabilities/submenu", "layout": "doubleVideoRight", "parent":"7", "background":"capabilities2", "htmlContent":"<p>With the close of 2014, Swagelok achieved its fourth consecutive year of record growth, with an average yearly growth rate of 7% since 2003. <p>We attribute this growth to our values-based approach to fiscal management – doing the right thing for the long term. Our mission is to serve our customers – not only this year, but for many years to come. <p>We are a privately held company and not under pressure to adjust our investments based on economic cycles or demands for short-term profits. Through good economic times and bad, we remain committed to four main areas: our associates; our properties and equipment; our technologies; and our products and services." },' +
//    '{ "pageSlug":"associates", "id": 38, "title": "One team of thousands.", "menu":"associates", "menuTitle":"Associates", "filename": "capabilities/submenu", "layout": "text-video", "parent":"7", "background":"capabilities2", "htmlContent":"<p>We strive for nothing less than an exceptional customer experience. And so much of that depends on our people&mdash;our distributors, corporate leaders, and associates worldwide. </p> <p>These are rare individuals with a passion for service. They are on a mission, going to extraordinary lengths with the customer in mind.</p> <p>For the majority of our customers, their most direct experience is through our distributors. They are backed by cross-functional teams in engineering, sales and fulfillment&mdash;about 3,600 distributor associates at 225 stocking locations in 70 countries. </p> <p>We’re one interconnected global organization&mdash;“One Swagelok”&mdash;engineered to perform for you, our valued customer.</p>" },' +
//    '{ "pageSlug":"socialResponsibility", "id": 39, "title": "Engineering a better world.", "menu":"socialResponsibility", "menuTitle":"Social Responsibility", "filename": "capabilities/submenu", "layout": "text-video", "parent":"7", "background":"capabilities2", "htmlContent":"<p>As a values-driven company, we are looking out not just for our own associates and customers, but also for the environment and the communities in which we live and work. </p> <p>We divert 60% of the waste that would otherwise go to landfills, including items such as paper, cardboard and scrap wood. We are capture up to 120 tons of food compost each year. </p> <p>To reduce energy consumption, we recently replaced roofs over our manufacturing plants, upgraded HVAC systems and compressors, and installed LED lighting in our parking lots.</p> <p>Our manufacturing processes produce a lot of metal cuttings mixed with oil, but we spin off the oil and use it in a second application. Then, we recycle the metal cuttings. Wherever possible, we try to use precious resources twice. </p> <p>At Swagelok, we are on a mission to make the world a better place and we’re safeguarding the environment. </p> <p>We also donate as much as $3.5 million each year to more than 100 local charities each year and have associates serving on more than 70 local nonprofit boards.  </p>" },' +
//    '{ "pageSlug":"chemical", "id": 53, "title": "Chemical","filename": "markets/detail","layout": "market", "parent":"5", "background":"main-menu", "menu":"ma-chemical" },' +
//    '{ "pageSlug":"semiconductor", "id": 54, "title": "Semiconductor","filename": "markets/detail","layout": "market", "parent":"5", "background":"main-menu", "menu":"ma-semiconductor" },' +
//    '{ "pageSlug":"valves", "id": 60, "title": "Valves", "filename": "products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-valves" },' +
//    '{ "pageSlug":"hoses", "id": 61, "title": "Hoses & Flexible Tubing", "filename": "products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-hoses" },' +
//    '{ "pageSlug":"regulators", "id": 62, "title": "Regulators", "filename": "products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-regulators" },' +
//    '{ "pageSlug":"quickConnects", "id": 63, "title": "Quick-connects", "filename": "products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-quickConnects" },' +
//    '{ "pageSlug":"measurementDevices", "id": 64, "title": "Measurement devices", "filename": "products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-measure" },' +
//    '{ "pageSlug":"tubing", "id": 65, "title": "Tubing & tools", "filename": "products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-tubingAccessories" },' +
//    '{ "pageSlug":"filters", "id": 66, "title": "Filters", "filename": "products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-filters" },' +
//    '{ "pageSlug":"sampleCylinders", "id": 67, "title": "Sample cylinders", "filename": "products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-sampleCylinder" },' +
//    '{ "pageSlug":"mpcModular", "id": 68, "title": "MPC modular systems", "filename": "products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-miniatureModular" },' +
//    '{ "pageSlug":"pre-engineered", "id": 69, "title": "Pre-Engineered Subsystems", "filename": "products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-PRESS" },' +
//    '{ "pageSlug":"welding", "id": 70, "title": "Welding systems", "filename": "products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-welding" },' +
//    '{ "pageSlug":"leakDetector", "id": 71, "title": "Leak detectors, lubricants & sealants", "filename": "products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-leak" }' +
//    ']}';


/*
 * videoList: List of videos for display in the presentation
 * {string} page_element - DOM element where the video is displayed
 * {string} videofileMP4 - Absolute path to mp4 location
 * {string} posterfile - Absolute path to jpg location
 * {string} [subtitlefile] - Absolute path to vtt subtitle track (optional)
 * {string} [caption] - HTML caption text (optional)
 * 
 */
var coreVideoList = '[' +
    '{ "page_element": "ceo-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"/presentations/_Content/videos/Swagelok Distrib Art 03-HD.mp4", "posterfile":"/presentations/_Content/videos/swagelok_video_artAnton.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":"Art Anton <br/>Swagelok President and CEO"},' +
    '{ "page_element": "introScreen-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"/presentations/_Content/videos/SWAGELOK_Ext_BrandEssence_01-21c.mp4", "posterfile":"/presentations/_Content/videos/swagelok_video_artAnton.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":"Art Anton <br/>Swagelok President and CEO"},' +
    '{ "page_element": "oneSwagelok-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"/presentations/_Content/videos/Swagelok Distrib Art v2 05-HD.mp4", "posterfile":"/presentations/_Content/videos/swagelok_video_artAnton.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":"Art Anton <br/>Swagelok President and CEO"},' +
       '{ "page_element": "businessModel-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"", "posterfile":"/presentations/_Content/videos/businessModel.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":""},' +
    '{ "page_element": "marketsCustomers-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"", "posterfile":"/presentations/_Content/videos/marketsCustomers.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":""},' +
    '{ "page_element": "engineering-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"/presentations/_Content/videos/Swagelok Distrib DavePeace 04-HD.mp4", "posterfile":"/presentations/_Content/videos/engineering.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":"Dave Peace<br/>Swagelok Vice President, Engineering"},' +
    '{ "page_element": "shopFloorCulture-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"", "posterfile":"/presentations/_Content/videos/cultureValues.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":""},' +
    '{ "page_element": "quality-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"/presentations/_Content/videos/Swagelok Distrib TimRosengarten 03-HD.mp4", "posterfile":"/presentations/_Content/videos/quality.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":"Tim Rosengarten<br/>Swagelok Vice President, Continuous Improvement & Quality "},' +
    '{ "page_element": "manufacturing-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"", "posterfile":"/presentations/_Content/videos/manufacturing.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":""},' +
    '{ "page_element": "associates-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"", "posterfile":"/presentations/_Content/videos/associates.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":""},' +
    '{ "page_element": "socialResponsibility-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"", "posterfile":"/presentations/_Content/videos/socialResponsibility.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":""},' +
    '{ "page_element": "globalSourcing-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"", "posterfile":"/presentations/_Content/videos/globalSourcing.jpg", "subtitlefile":"/presentations/_Content/videos/distributor_video_andreas.vtt", "caption":""}' +
    ']';
   
var fileDepth = get_file_location();
var menuDepth = "";
if (fileDepth == "../../") {
    menuDepth = "../";
}

$(document).on("pagebeforecreate", function pagePrebuild() {

    PAGE_ID = sessionStorage.getItem('PAGE_ID');

    var pathname = window.location.pathname;

    if (typeof PAGE_ID == 'undefined' || PAGE_ID == '1' || PAGE_ID == '' || PAGE_ID == null || pathname == '/presentations/') {

        PAGE_ID = 1;
        setLinks(PAGE_ID, PAGE_ID);

        PRESENTATION_ID = getCookie('PRESENTATION_ID');

        if (typeof getParameterByName('p') != 'undefined' && getParameterByName('p') != '') {
            PRESENTATION_ID = getParameterByName('p');
            setCookie('PRESENTATION_ID', PRESENTATION_ID);
        }
    }

    PRESENTATION_ID = sessionStorage.getItem('PRESENTATION_ID');
    if (PRESENTATION_ID) {

        var path = '/presentations/_Content/' + PRESENTATION_ID + '/settings.js';

        $.getScript(path).done(function (script, textStatus) {
            $.getScript('/presentations/_Scripts/culture/en-us.js').done(function (script, textStatus) 
                { console.log('Culture loaded A');}).
                fail(function(jqxhr, settings, exception){
                console.log('Culture load A error:' + exception);
                });
            
        })
          .fail(function (jqxhr, settings, exception) {
              console.log("Settings script loading error:" + exception);
          });;
    }

    $('#page-container').css('display', 'none');

    $.ajaxPrefilter(function (options) {
        options.crossDomain = true;
    });
    $.ajaxSetup({ async: true });

    var pagelist = $.getJSON("/presentations/_Scripts/culture/en-us.json");

    console.log(JSON.parse(pagelist));

    var markets = getObjects(JSON.parse(pagelist), 'pageSlug', 'markets');
    var products = getObjects(JSON.parse(pagelist), 'pageSlug', 'products');
    var capabilities = getObjects(JSON.parse(pagelist), 'pageSlug', 'capabilities');

    get_child_pages(markets[0].id); // Markets
    get_child_pages(products[0].id); // Products
    get_child_pages(capabilities[0].id); // Capabilities

    load_page_elements(fileDepth);

    var pageDetails = getObjects(JSON.parse(pagelist), 'id', PAGE_ID);

    if(typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        localStorage.setItem('PAGE_ID', PAGE_ID);
        localStorage.setItem('pageSlug', pageDetails[0].pageSlug);
        localStorage.setItem('pageLayout', pageDetails[0].layout);
        localStorage.setItem('hasCaseStudy', false);

    } else {
        // Sorry! No Web Storage support..
        alert('Sorry! No Web Storage support...');
    }

});

$(document).ready(function pageReady() {

    $('body').removeClass('ui-overlay-a');

    $('div').removeClass('ui-page-theme-a');

    var panelmenu = $('#sectionMenu');

    panelmenu.on('panelbeforeopen', function () {
        $('#section-menu-button').hide();
        $('.row').css('opacity', '.3');
    });

    panelmenu.on('panelclose', function () {
        $('#section-menu-button').show();
        $('.row').css('opacity', '1');

    });

    set_content_area_size();
    $('#page-container').css('height', $(window).height()).show();

});

/** FUNCTIONS */


/**
 * Get child pages for Capabilities and Products sections, and display links to the pages
 * Utilized for main menu page, section landing page, and bottom nav within the section
 * @param section
 */
function get_child_pages(section) {

    var count = 0;

    var thisPage = get_page_details(PAGE_ID);

    var thisParent = get_page_details(thisPage.parent);

    var select = JSON.parse(pagelist);
    var items = select.pages;
    var fileDepth = get_file_location();
    $.each(items, function () {

        if (this.parent == section) {
            var parent = get_page_details(section);
            var title = parent.title.toLowerCase();

            var childId = this.id;
            var href = '#';

            if (this.pageSlug == 'fittings' || this.pageSlug == 'power' || title == 'capabilities') {
                href = '/presentations/' + this.filename + '.html';
            }

            var html = '<li class="col-xs-2 landing-menu-item"><a href="'+href+'" onclick="setLinks(' + childId + ', ' +sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false"><img src="' + fileDepth + 'Content/images/menu/' + this.menu + '.png"/><br/>' +this.title + '</a></div>';
            var element = title + '-child-pages-list';
            var listClass = title + '-bottom-menu-list';
            if (thisPage.pageSlug != 'mainMenu') {
                if (title == 'markets') {
                    $('.slidee').addClass('markets-bottom-menu-list');
                    listClass = '';
                }
            }
           

            $("." +element).append(html);
            if (thisParent.id == section || thisParent.parent == section) {
               
                var li = '<li class="'+listClass+' bottom-menu-list"><a href="'+href+'" onclick="setLinks(' + childId + ', ' + sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false"><img src="' + fileDepth + 'Content/images/menu/' + this.menu + '.png"/><br/>' + this.title + '</a></li>';
                $('.slidee').append(li);

                var viewport = $(window).width();
                var width = viewport / 6;
                $('.slidee li').css('width', width);
            }
        }
    });

 
    if (thisPage.pageSlug == 'mainMenu') {

        var width = $(window).width();
        var liWidth = (width * (5 / 6)) / 6.25;
        $('.slidee li').css('width', liWidth);
        $('.frame').css('height', '165px');
        $('.landing-menu-item:nth-child(7n+7)').css('clear', 'none');
        $('.frame').append('<span class="arrow glyphicon glyphicon-chevron-right" id="arrow-three"></span>');
    }
}

function get_custom_content(content) {

    var thisPage = localStorage.getItem('pageSlug');

    var thisLayout = localStorage.getItem('pageLayout');

    var customLayout = getObjects(JSON.parse(layoutsList), 'page_id', thisPage);

    if(customLayout[0] != undefined){
        set_page_layout(customLayout[0].page_layout);
    }
    else {
        set_page_layout(thisLayout);
    }

    var thisContent = getObjects(JSON.parse(content), 'page_id', thisPage);

    $.each(thisContent, function () {

        if (typeof this !== "undefined") {

            var elementId = this.page_element;

            if (this.html != undefined) {
                var html = this.html;
                $('#' + elementId).html(html);
            }

            if (this.src != undefined) {
                var src = this.src;
                $('#' +elementId).attr('src', src);
            }
        }
    });

    load_page_info(localStorage.getItem('PAGE_ID'));

    if (thisLayout == 'market' || thisLayout == 'case-study') {
        show_market_slides();
    }

    show_accordion_icons();

}

/**
 * Checks page header to determine the depth of the current page within the file structure
 * @returns {*}
 */
function get_file_location() {
    var filepath = $('link').first().attr('href');

    var path = filepath.split("Content/");

    return path[0];
}

/**
 * Given the current page container ID, checks the JSON containing generic page information and returns array of information relative to the existing page
 * Information includes: Page title, page parent, page layout, template filename, background image, navigation menu image
 * @param id
 * @returns {*}
 */
function get_page_details(id) {

    var select = JSON.parse(pagelist);

    return select.pages[id];
}

function get_page_layout(layouts) {

    var thisLayout = getObjects(JSON.parse(layouts), 'page_id', localStorage.getItem('pageSlug'));

    var page_layout = false;
    if (typeof thisLayout[0]!== "undefined") {
        page_layout = thisLayout[0].page_layout;
        localStorage.setItem('pageLayout', page_layout);
    }
    else {
        page_layout = localStorage.getItem('pageLayout');
    }

    return page_layout;
}

function get_presentation_settings() {
    if (settings) {
        var presSettings = JSON.parse(settings);

        if (presSettings[0].hasCaseStudy == true) {
            localStorage.setItem('hasCaseStudy', true);

        }
    }
    else {
        console.log('ERROR: Presentations settings JSON feed');
    }
    $.each(presSettings, function () {

        $('#header-title').html(this.division);
        if (this.logo) {
            $('#client-logo').attr('src', this.assetDir + 'images/' + this.logo);
        }
        else {
            $('#client-logo').remove();
        }
        if (localStorage.getItem('hasCaseStudy') == 'true') {
            $('#case-study-link').attr('onclick', 'setLinks(13, ' +sessionStorage.getItem("PAGE_ID") + ')');
            $('#case-study-link').attr('href', '/presentations/capabilities/slides.html');
        }
    });

    return presSettings;
}

function get_video_details(videoList) {
    var livevideos = JSON.parse(coreVideoList);

    var pickVideo = false;

    if (localStorage.getItem('pageLayout') == 'text-video' || localStorage.getItem('pageLayout') == 'splash') {
        pickVideo = localStorage.getItem('pageSlug') + '-video';
    }
    else if (localStorage.getItem('pageLayout') == 'mission' ) {
        pickVideo = 'mission';
    }
    else if ( localStorage.getItem('pageLayout') == 'doubleVideoRight') {
        pickVideo = 'financialStewardship';
    }

    var element = false;

    $.each(livevideos, function () {

        if (pickVideo == 'mission') {
            if (this.page_element != 'ceo-video' && this.page_element != 'distributor-video') {
                return true;
            }
        }

        else if (pickVideo != false) {
           
            if (pickVideo != this.page_element) {
                return true;
            }
        }

        element = this.page_element;
        var posterImage = this.posterfile;
        var videoMP4 = this.videofileMP4;
        var videoWebm = this.videofileWebm;
        var subtitles = this.subtitlefile;
        var videoCaption = this.caption;

        $('#' +element + '-poster').attr('src', posterImage);
        $('#' + element + '-caption').html(videoCaption);

        var html = '<video id="' + element + '" class="video-js vjs-default-skin" controls preload="auto" data-setup=""><source id="' + element + '-mp4-path" src="" type="video/mp4" /><source id="' + element + '-webm-path" src="" type="video/webm" /><!--<track kind="subtitles" src="' + subtitles + '" srclang="en" label="English" default data-ajax="false">--><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p></video>';

        $('.' +element + '-modal-body').html(html);

        $('.' +element + '-video-js').data("setup", {
            "bigPlayButton": true,
            "controlBar": false,
            "type" : "video/mp4",
            "src": videoMP4
        });

        $('#' +element + '-mp4-path').attr('src', videoMP4);
        $('#' + element + '-webm-path').attr('src', videoWebm);

        videojs(element).ready(function () {

            // Store the video object
            var myPlayer = this, id = myPlayer.id();

            // Make up an aspect ratio
            var aspectRatio = 9 / 16;

            function resizeVideoJS() {
                var width = document.getElementById(id).parentElement.offsetWidth;
                myPlayer.width(width).height(width * aspectRatio);
            }

            var videoModal = $("#" +element + "-modal");

            videoModal.on('show.bs.modal', function () {

                var width = $(window).width();
                myPlayer.width(width).height($(window).height());

                $('.modal-dialog').css('margin', '0 !important');

                myPlayer.play();

                $(window).resize(function () {
                    resizeVideoJS();
                });

                $('#' + element + '_html5_api').on('click', function () {
                    videoModal.modal('hide');
                    show_animated_overlay();
                });

                $('#' +element + '_html5_api').on('tap', function () {
                    videoModal.modal('hide');
                    show_animated_overlay();
                });

            });

            videoModal.on('hidden.bs.modal', function () {
                myPlayer.pause();
            });

        });

    });

    console.log(element);
}

function load_page_elements(fileDepth) {
    var pageID = getParameterByName('pageId');

    //var menuDepth;

    //if (fileDepth == "../../") {
    //    menuDepth = "../";
    //}
    //else {
    //    menuDepth = "";
    //}

    var sidebarMenuHTML = '<ul><li class="capabilities-panel-item"><a href="/presentations/capabilities/index.html" onclick="setLinks(3, ' +sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false" class="panel-link-item">Capabilities</a></li><li class="products-panel-item"><a href="/presentations/products/index.html" onclick="setLinks(4, ' +sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false" class="panel-link-item">Products</a></li><li class="markets-panel-item"><a href="/presentations/markets/index.html" onclick="setLinks(5, ' + sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false" class="panel-link-item">Markets</a></li><li class="mainmenu-panel-item"><a href="/presentations/mainMenu.html" onclick="setLinks(2, ' +sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false" class="panel-link-item">Main Menu</a></li></ul>';
    $('#sectionMenu').html(sidebarMenuHTML);

    var headerRow = '<div id="header-left"><a href="/presentations/" onclick="setLinks(1, ' +sessionStorage.getItem("PAGE_ID") + ')" style="background: none !important; border: none !important" data-ajax="false"><img src="' +fileDepth + 'Content/images/swagelok-logo.jpg" id="header-logo"><h1 id="header-title"></h1></a><span id="submenu"></span></div><a href="#sectionMenu" id="section-menu-button" class="ui-btn-right"><img src="' +fileDepth + 'Content/images/icons-png/bars-white.png" height="23"/></a>';

    $("#header-row").html(headerRow);

    if (pageID == 1) {
        $('#view-content-link').attr('href', 'mainMenu.html?pageId=2');
    }

}

/**
 * Using the page ID, gather and display page layout and HTML content
 * @param id
 * @param fileDepth
 */
function load_page_info(id) {

    var parent;
    var background;

    var title;
    var headline;
    var content;

    var page = get_page_details(id);

    parent = page.parent;
    background = page.background;

    title = page.title;
    content = page.htmlContent;
    headline = page.headline;
    layout = page.layout;

    // Display page information
    $('#page-container').attr('data-pageid', id);
    $('body').css('background', 'url(/presentations/_Content/images/backgrounds/' + background + '.jpg)');
    $('body').css('background-size', 'cover').css('background-repeat', 'no-repeat');

    if (headline == undefined) {
         $('#page-title').html(title);
    }
    else {

        $('#page-title').html(headline);
    }

    if(content != undefined) {
        if (layout == 'text-video') {
            $('#left-custom-content').html(content);
        }
        if (layout == 'text-only') {
            $('#left-custom-content').html(content);
            $('#right-custom-content').html('');
        }
            else if (layout == 'mission' || layout == 'landing' || layout == 'doubleVideoRight') {
            $('#page-content').append(content);
        }
        else if (layout == 'product'){
            $('#page-content').html(content);
        }
    }
    else {
        $('#page-content').html(content);
    }

    if (parent != '0') {

        var thisParent = get_page_details(parent);
        var thisParentsParent = get_page_details(thisParent.parent);

                var submenu = '<span class="submenu-links"><a href="/presentations/' +thisParent.title.toLowerCase() + '/index.html" onclick="setLinks(' +thisParent.id + ', ' +sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false">&lt; ' +thisParent.title + '</a></span>';

        if (thisParentsParent.id == '5') { // Parent is Markets homepage
                    submenu = '<span class="submenu-links"><a href="/presentations/' +thisParentsParent.title.toLowerCase() + '/detail.html" onclick="setLinks(' +thisParent.id + ', ' +sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false">&lt; ' + thisParent.title + '</a></span>';
        }

        else if (thisParentsParent.id == '4') { // Parent is Products homepage
                    submenu = '<span class="submenu-links"><a href="/presentations/' + thisParentsParent.title.toLowerCase() + '/index.html" onclick="setLinks(' +thisParentsParent.id + ', ' + sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false">&lt; ' +thisParentsParent.title + '</a></span>';
        }

        else if (thisParent.id == '7') { // Parent is One Swagelok homepage
                    submenu = '<span class="submenu-links"><a href="/presentations/' +thisParentsParent.title.toLowerCase() + '/index.html" onclick="setLinks(' +thisParentsParent.id + ', ' + sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false">&lt; ' +thisParentsParent.title + '</a></span>';
        }

        else if (id == '2') {
            submenu = '<span class="submenu-links"><a href="/presentations/index.html" onclick="setLinks(' + thisParentsParent.id + ', ' + sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false">&lt; ' + thisParentsParent.title + '</a></span>';

        }
        else { $("#submenu").hide(); }

        $("#submenu").html(submenu);

        if (thisParent.id == '4' || thisParentsParent.id == '4') { // Parent or Grandparent is in Products category
                    var html = '<a href="" id="show-menu" class="show-menu-down">' +title + '</a>';
            $('#submenu').append(html);
            show_submenu(id);
        }

        if (thisParent.id == '7' || page.id == '7') { // Parent is One Swagelok page
            var displayTitle = page.title;
            if (thisParent.id == '7') {
                displayTitle = thisParent.title;
            }
            var html = '<a href="" id="show-menu" class="show-menu-down">' +displayTitle + '</a>';
            $('#submenu').append(html);
            show_submenu(id);

        }

    }

}

function set_content_area_size() {
    var height = $(document).height();
    var headerHeight = 145;
    var footerHeight = 75;

    var dotsHeight= $('.dots-row').height();

    
    var contentHeight = height -headerHeight -footerHeight;

    $('#main-content').css('height', contentHeight);
}

function set_page_layout(pageLayout) {

    // Set page layout
    $('#section-menu-button').show();
    $('#view-content-button').hide();
    // Home will be replaced by app functionality
    //if (pageLayout == 'home') {
    //    get_available_presentations();
    //    $('#section-menu-button').hide();
    //    $('#view-content-button').show();
    //}
    if (pageLayout == 'splash') {
        show_animated_overlay();

        //resize band based on page height
        var pageHeight = window.innerHeight;
        $(".full-width-band").css('height', pageHeight * .30);
        $(".full-width-band img").css('height', pageHeight * .30);

        $('#section-menu-button').hide();
    }
    if (pageLayout == 'menu') {
        show_animated_menu();

        //resize bands based on page height
        var pageHeight = window.innerHeight;
        $(".menu-header").css('height', pageHeight * .27).css('clear', 'both');
        $(".menu-list").css('height', pageHeight * .27).css('clear', 'both');
        $(".frame").css('height', pageHeight * .27);
        $("#section-menu-button").hide();
    }
    if(pageLayout == 'market' || pageLayout == 'case-study') {
        show_bottom_nav();
    }
    if (pageLayout == 'product') {
        show_bottom_nav();
    }
    if (pageLayout == 'mission') {
        show_bottom_nav();

        var baseContent = '<div class="col-xs-8 col-xs-offset-1"><h1 id="page-title">&nbsp;</h1><div id="page-content"></div></div>';
        var videoRow = '<div class="col-sm-4 col-xs-offset-1 distributor-video-cell">Video</div><div class="col-sm-4 col-sm-offset-1 ceo-video-cell">Video</div>';

        $('#left-column').remove();
        $('#right-column').remove();
        $('.row:first').append(baseContent);
        $('.row.secondary').append(videoRow);

        var distributorContainer = '<div id="distributor-video-container"> <!-- Button trigger modal --> <img id="distributor-video-poster" src="" width="100%" data-toggle="modal" data-target="#distributor-video-modal">  <p class="video-caption" id="distributor-video-caption"></p><!-- Modal --> <div class="modal fade" id="distributor-video-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="distributor-video-modal-body"> <video id="distributor_video" class="video-js vjs-default-skin" controls preload="auto" > <source id="distributor-video-mp4-path" src="" type="video/mp4" /><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p> </video> </div> </div> </div> </div> </div>';

        var ceoContainer = '<div id="ceo-video-container"> <!-- Button trigger modal --> <img id="ceo-video-poster" src="/presentations/_Content/videos/swagelok_video_artAnton.jpg" width="100%" data-toggle="modal" data-target="#ceo-video-modal"><p class="video-caption" id="ceo-video-caption">Art Anton <br>Swagelok President and CEO</p> <!-- Modal --> <div class="modal fade" id="ceo-video-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="ceo-video-modal-body"> <video id="ceo_video" class="video-js vjs-default-skin" controls preload="auto" > <source id="ceo-video-mp4-path" src="/presentations/_Content/videos/Swagelok Distrib Art 03-HD.mp4" type="video/mp4" /> <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p> </video> </div> </div> </div> </div> </div>';

        $('.distributor-video-cell').html(distributorContainer);
        $('.ceo-video-cell').html(ceoContainer);
    }
     if (pageLayout == 'doubleVideoRight') {
        show_bottom_nav();

        $('#right-column').removeClass('col-xs-6').addClass('col-xs-5');
        var baseContent = '<h1 id="page-title">&nbsp;</h1><div id="page-content"></div>';
        var videoRow = '<div class="col-sm-9 distributor-video-cell">Video</div><div class="col-sm-9 ceo-video-cell">Video</div>';

        $('#left-column').html(baseContent);
        $('#right-column').html(videoRow);

         // NOTE: Confirm that modal ID matches link data-target if having trouble seeing modal display
        var distributorContainer = '<div id="distributor-video-container"> <!-- Button trigger modal --> <img id="distributor-video-poster" src="/presentations/_Content/videos/financialStewardship-1.jpg" width="75%" data-toggle="modal" data-target="#distributor-video-modal">  <p class="video-caption" id="distributor-video-caption"></p><!-- Modal --> <div class="modal fade" id="-video-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="distributor-video-modal-body"> <video id="distributor_video" class="video-js vjs-default-skin" controls preload="auto" > <source id="distributor-video-mp4-path" src="/presentations/_Content/videos/swagelok_video_artAnton.mp4" type="video/mp4" /><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p> </video> </div> </div> </div> </div> </div>';

        var ceoContainer = '<div id="ceo-video-container"> <!-- Button trigger modal --> <img id="ceo-video-poster" src="/presentations/_Content/videos/swagelok_video_artAnton.jpg" width="75%" data-toggle="modal" data-target="#ceo-video-modal"><p class="video-caption" id="ceo-video-caption"     ></p> <!-- Modal --> <div class="modal fade" id="-video-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="ceo-video-modal-body"> <video id="ceo_video" class="video-js vjs-default-skin" controls preload="auto" > <source id="ceo-video-mp4-path" src="/presentations/_Content/videos/swagelok_video_artAnton.mp4" type="video/mp4" /> <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p> </video> </div> </div> </div> </div> </div>';

        $('.distributor-video-cell').html(distributorContainer);
        $('.ceo-video-cell').html(ceoContainer);
        }
    if (pageLayout == 'text-video') {
        show_bottom_nav();

        var pageSlug = localStorage.getItem('pageSlug');

        var baseContent = '<h1 id="page-title">&nbsp;</h1><div id="left-custom-content"></div>';
        $('#left-column').html(baseContent);

        $('#left-column').removeClass('col-xs-6').addClass('col-xs-5');
        $('#right-column').removeClass('col-xs-6').addClass('col-xs-5');
        $('#right-column').empty();
        $('#right-column').html('<div class="' + pageSlug + '-video-cell" id="video-spot"></div>');

        // NOTE: Hack to remove links until videos are ready   
//var modalLink = '';
//        if (pageSlug == 'quality' || pageSlug == 'oneSwagelok' || pageSlug == 'engineering') {
        modalLink = '#' +pageSlug + '-video-modal';
    //}
        // END NOTE:

        var videoContainer = '<div id="' +pageSlug + '-video-container"> <!-- Button trigger modal --> <img width="100%" id="' +pageSlug + '-video-poster" src="" data-toggle="modal" data-target="'+modalLink+'"> <p class="video-caption" id="' +pageSlug + '-video-caption"></p><!-- Modal --> <div class="modal fade" id="' +pageSlug + '-video-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="' +pageSlug + '-modal-body"> <video id="' +pageSlug + '-video" class="video-js vjs-default-skin" controls preload="auto" > <source id="' +pageSlug + '-video-mp4-path" src="" type="video/mp4" /> <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p> </video> </div> </div> </div> </div> </div>';

        $('.' +pageSlug + '-video-cell').html(videoContainer);

    }
    if (pageLayout == 'text-image') {
        $('#left-column').removeClass('col-xs-6').addClass('col-xs-4 col-xs-offset-1 col-lg-5 col-lg-offset-1');
        $('#right-column').removeClass('col-xs-6').addClass('col-xs-6 col-xs-offset-1 col-lg-5 col-lg-offset-1');
        $('#left-column h1').remove();
        var imageContainer = '<img src="" id="left-custom-image" />';
        $('#left-custom-content').html(imageContainer);

        show_bottom_nav();

    }
    if (pageLayout == 'text-only') {

        show_bottom_nav();

    }

    $('body').show();
}

function show_accordion_icons() {

    $('a[data-toggle]').click(function () {
        $('.collapse').on('shown.bs.collapse', function () {
            $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
        }).on('hidden.bs.collapse', function () {
            $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
        });
    });
}

/**
 * Controls the display of the overlay when the intro page is loaded.
 */
function show_animated_overlay() {
    var delayTime = 1000;

    var docHeight = $(document).height();
    var narrowHeight = docHeight * .25;
    var centerHeight = docHeight * .49;
        var docBottom = $(document).height() -narrowHeight;

    var body = $("body");

    body.append("<div id='overlay-top'></div>");
    body.append("<div id='overlay-center'></div>");
    body.append("<div id='overlay-bottom'></div>");

    $("#overlay-top")
        .height(narrowHeight)
        .css({
            'opacity': 1,
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'background-color': '#003a77',
            'width': '100%',
            'z-index': 5000
        });
    $("#overlay-center")
        .height(centerHeight)
        .css({
            'opacity': 1,
            'position': 'absolute',
            'top': narrowHeight,
            'left': 0,
            'background-color': '#003a77',
            'width': '100%',
            'z-index': 5000,
            'margin-top': 5,
            'margin-bottom': 5
        });
    $("#overlay-bottom")
        .height(narrowHeight)
        .css({
            'opacity': 1,
            'position': 'absolute',
            'top': docBottom,
            'left': 0,
            'background-color': '#003a77',
            'width': '100%',
            'z-index': 5000
        });

    $(".fly-in")
        .css({
            'position': 'absolute',
            'top': narrowHeight,
            'left': -3000,
            'width': '100%'
        });

    $('#overlay-center').delay(delayTime).animate({
        left: 3000
    }, 600);
    $('#overlay-top').delay(delayTime).animate({
        left: -3000
    }, 1000);
    $('#overlay-bottom').delay(delayTime).animate({
                left: - 3000
    }, 800);

    $('.fly-in').delay(delayTime).animate({
        left: 0
    }, 1500);

}

function show_animated_menu() {
    var delayTime = 500;

    $('.capabilities-row .menu-header').animate({
        left: 0
    }, 1000);

    $('.products-row .menu-header').animate({
        left: 0
    }, 1300);

    $('.markets-row .menu-header').animate({
        left: 0
    }, 1600);

    // Calculate width of header element
    // It is set as a percentage, but we need a px dimension
    var documentWidth = $(document).width();
    var columnWidth = documentWidth / 12;
    var newWidth = columnWidth * 2;

    $('.capabilities-row .menu-list').delay(delayTime).animate({
                    left : newWidth
    }, 800);

    $('.products-row .menu-list').delay(delayTime).animate({
        left: newWidth
    }, 1200);

    $('.markets-row .menu-list').delay(delayTime).animate({
        left: newWidth
    }, 1600);

    var capX =0;
    var prodX = 0;
    var liWidth = $('.landing-menu-item').outerWidth();
    if(capX == 0) {
        $('.arrow-left.capabilities').hide();
    }
    if(prodX==0) {
        $('.arrow-left.products').hide();
    }

    $('.slidee').each(function () {

        var slideeA = $(this);
        var slideeWidthA = $(slideeA).find('li').first().outerWidth();

        var menuItemsA = $(slideeA).find('li').length;
        var overallListWidthA = slideeWidthA * menuItemsA;

        if (overallListWidthA - (slideeWidthA * 6) + capX <= 0) {
            $(slideeA).parent().parent().find('.arrow-right').hide();
        }
        else {
            $(slideeA).parent().parent().find('.arrow-right').show();
        }

    });

    $('body').on('click', '.arrow-right.capabilities', function(){

        var slidee = $(this).parent().find('.slidee');

        capX -= $(slidee).find('li').first().outerWidth();

        var menuItems = $(slidee).find('li').length;
        var overallListWidth = liWidth*menuItems;

        if(overallListWidth - (liWidth*6) + capX <= 0) {
            $(this).hide();
        }
        else{
            $(this).show();
        }
        $(slidee).css('transform', 'translateX('+capX+'px)');
        $(this).parent().find('.arrow-left').show();

    });

    $('body').on('click', '.arrow-left.capabilities', function () {

        var slidee = $(this).parent().find('.slidee');

        capX += $(slidee).find('li').first().outerWidth();

        var menuItems = $(slidee).find('li').length;
        var overallListWidth = liWidth*menuItems;
        if(capX == 0){
            $('.arrow-left.capabilities').hide();
        }
        if(overallListWidth - (liWidth*6) + capX <= 0) {
            $(this).parent().find('.arrow-right').hide();  }
        else{
            $(this).parent().find('.arrow-right').show();
        }
        $(slidee).css('transform', 'translateX(' + capX + 'px)');

    });

    $('body').on('click', '.arrow-right.products', function () {

        var slidee = $(this).parent().find('.slidee');

        prodX -= $(slidee).find('li').first().outerWidth();

        var menuItems = $(slidee).find('li').length;
        var overallListWidth = liWidth * menuItems;

        if (overallListWidth - (liWidth * 6) + prodX <= liWidth) {
            $(this).hide();
        }
        else {
            $(this).show();
        }
        $(slidee).css('transform', 'translateX(' + prodX + 'px)');
        $(this).parent().find('.arrow-left').show();

    });

    $('body').on('click', '.arrow-left.products', function () {

        var slidee = $(this).parent().find('.slidee');

        prodX += $(slidee).find('li').first().outerWidth();

        var menuItems = $(slidee).find('li').length;
        var overallListWidth = liWidth * menuItems;
        if (prodX == 0) {
            $('.arrow-left.products').hide();
        }
        if (overallListWidth - (liWidth * 6) + prodX <= 0) {
            $(this).parent().find('.arrow-right').hide();
        }
        else {
            $(this).parent().find('.arrow-right').show();
        }
        $(slidee).css('transform', 'translateX(' + prodX + 'px)');

    });

}

function show_bottom_nav() {
    var delayTime = 300;

    var docHeight = $(document).height();
    var linkTop = docHeight * .95;

    var dotLocation = linkTop - docHeight * .1;

    $("#footer-menu-link")
        .css({
            'position': 'absolute',
            'top': linkTop + 'px',
            'text-align': 'center',
            'margin': 'auto',
            'height': docHeight * .05,
            'width': '100%',
            'z-index': 5000
        });

    $('.frame')
        .css({
            'height': docHeight * .27 + 'px'
    }).prepend('<div class="arrow-left"></div> <div class="arrow-right"></div>');


    $('.footer-title-up').on('click', function () {
        if ($('.frame').is(":visible")) {
            $('.row').css('opacity', '1');
            $('.footer-title').removeClass('footer-title-down').addClass('footer-title-up');
            $('.frame').hide(200);
        }
        else {
            $('.row').css('opacity', '.3');
            $('.footer-title').removeClass('footer-title-up').addClass('footer-title-down');
            $('.frame').show(200);
        }
    });

    var capX =0;
    var prodX = 0;
    var liWidth = $('.landing-menu-item').outerWidth();

    if(capX == 0) {
        $('.arrow-left.capabilities').hide();
    }
    if(prodX==0) {
        $('.arrow-left.products').hide();
    }

    $('.slidee').each(function () {

        var slideeA = $(this);
        var slideeWidthA = $(slideeA).find('li').first().outerWidth();

        var menuItemsA = $(slideeA).find('li').length;
        var overallListWidthA = slideeWidthA * menuItemsA;

        if (capX == 0) {
            $(slideeA).parent().parent().find('.arrow-left').hide();
        }

        if (overallListWidthA - (slideeWidthA * 6) + capX <= 0) {
            $(slideeA).parent().parent().find('.arrow-right').hide();
        }
        else {
            $(slideeA).parent().parent().find('.arrow-right').show();
        }

    });

    $('body').on('click', '.arrow-right', function () {

        var slidee = $(this).parent().find('.slidee');
        var slideeWidth = $(slidee).find('li').first().outerWidth();

        capX -= slideeWidth;

        var menuItems = $(slidee).find('li').length;
        var overallListWidth = slideeWidth * menuItems;

        if (overallListWidth - (slideeWidth * 6) + capX <= 0) {
            $(this).hide();
        }
        else {
            $(this).show();
        }
        $(slidee).css('transform', 'translateX(' + capX + 'px)');
        $(this).parent().find('.arrow-left').show();

    });

    $('body').on('click', '.arrow-left', function () {

        var slidee = $(this).parent().find('.slidee');
        var slideeWidth = $(slidee).find('li').first().outerWidth();

        capX += slideeWidth;

        var menuItems = $(slidee).find('li').length;
        var overallListWidth = slideeWidth * menuItems;
        if (capX == 0) {
            $(this).parent().find('.arrow-left').hide();
        }
        if (overallListWidth - (slideeWidth * 6) + capX <= 0) {
            $(this).parent().find('.arrow-right').hide();
        }
        else {
            $(this).parent().find('.arrow-right').show();
        }
        $(slidee).css('transform', 'translateX(' + capX + 'px)');

    });

    var center = $('#main-content').width() / 2 -($('.dot').width() * $('.dot').length);


    $(".dots-row")
        .css({
            'position': 'relative',
            'top': dotLocation *.75,
            'text-align': 'center',
            'margin': 'auto'
        });

}

function show_market_slides() {

    $('#dot-one').addClass('dot-active');

    var one = $('.market-panel').first();
    var two = one.next('.market-panel');
    var three = two.next('.market-panel');

    var width = $('.market-section').width();
    var offset = one.offset();

    var leftEdge = width -offset.left;

    one.css({
        'opacity': 1,
        'position': 'absolute',
            'left' : offset.left,
        'width': width,
        'z-index': 5000
    });

    two.css({
        'opacity': 1,
        'position': 'absolute',
        'left': width,
        'width': width,
        'z-index': 5000
    });
    three.css({
        'opacity': 1,
        'position': 'absolute',
        'left': width * 2,
        'width': width,
        'z-index': 5000
    });

    var sectionHeight = $(three).height() +20;

    $('.market-section').css('height', sectionHeight);

    $('.market-panel').on("swipeleft", function() {
        var id = $(this).attr('id');
        if (id != 'three') {
            $('.dot').removeClass('dot-active');
            $('#dot-' +id).addClass('dot-active');
            $('.market-panel').animate({
                    left: '-=' +leftEdge
            }, 800);
        }
    });

    $('.market-panel').on("swiperight", function () {

        var id = $(this).attr('id');
        if (id != 'one') {
            $('.dot').removeClass('dot-active');
            $('#dot-' +id).addClass('dot-active');

            $('.market-panel').animate({
                    left: '+=' +leftEdge
            }, 800);
        }

    });

    $('.dot, .arrow').on("click", function () {


        var thisSlide = this.id.split('-')[1];
        $('.dot, .arrow').removeClass('dot-active');


        if($(this).hasClass('dot')) {
            $(this).addClass('dot-active');
        }
        else {
            $('#dot-'+thisSlide).addClass('dot-active');
        }

        if (thisSlide == "one") {
            $('#one').animate({
                    left : offset.left
            }, 800);
            $('#two').animate({
                left: width
            }, 800);
            $('#three').animate({
                left: width * 2
            }, 800);
        }
        if (thisSlide == "two") {
            $('#two').animate({
                left: offset.left
            }, 800);
            $('#one').animate({
                left: offset.left - width
            }, 800);
            $('#three').animate({
                    left : width
            }, 800);
        }
        if (thisSlide == "three") {
            $('#three').animate({
                left: offset.left
            }, 800);
            $('#two').animate({
                    left: offset.left -width
            }, 800);
            $('#one').animate({
                left: offset.left - width * 2
            }, 800);
        }

    });

}

function show_submenu(id) {

    var page = get_page_details(id);
    var parent = get_page_details(page.parent);

    var select = JSON.parse(pagelist);
    var items = select.pages;

    var productDropdown = '<div id="submenu-content" class="submenu-products" style="display: none;"><ul>';
    var partnerDropdown = '<div id="submenu-content" class="submenu-capabilities" style="display: none;"><ul>';

    var productLandingList = '';

    $('.dots-row').empty();

    $.each(items, function () {
        if (this.parent == 18 && page.filename == 'products/product') {
            var activeClass = '';
            if (this.headline == page.headline) { activeClass = 'dot-active'; }
            $('.dots-row.product').append('<a href="product.html" onclick="setLinks(' + this.id + ', ' + sessionStorage.getItem("PAGE_ID") + ')"><span class="dot '+activeClass+'" id="' + this.pageSlug + '-dot"></span></a>');
        }
        else if (this.parent == 7 && page.filename == 'capabilities/submenu' || this.id == 7) {
            var activeClass = '';
            if (this.title == page.title) { activeClass = 'active'; }
            $('.dots-row.partner').append('<a href="submenu.html" onclick="setLinks(' + this.id + ', ' + sessionStorage.getItem("PAGE_ID") + ')"><span class="dot dot-' + activeClass + '" id="' + this.pageSlug + '-dot"></span></a>');
            partnerDropdown += '<li><a href="submenu.html" onclick="setLinks(' + this.id + ', ' + sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false" class="'+activeClass+'"><img src="' + fileDepth + 'Content/images/icons/' + this.menu + '-square.png" /><span>' + this.menuTitle + '<span></a></li>';
        }

        if (this.title == page.title) {

            if (this.parent != 4) {
                var activeClass = '';
                if (this.headline == page.headline) {
                    activeClass = 'active';
                }
                productDropdown += '<li><a href="product.html" onclick="setLinks(' + this.id + ', ' + sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false" class="' + activeClass + '"><img src="' + fileDepth + 'Content/images/icons/' + this.menu + '-square.png" /><span>' + this.headline + '<span></a></li>';
                productLandingList += '<div class="col-xs-6 col-md-4 product-landing-item"><a href="product.html" onclick="setLinks(' + this.id + ', ' + sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false"><img src="' + fileDepth + 'Content/images/icons/' + this.menu + '-square.png" /><span>' + this.headline + '<span></a></div>';
            }


        }


    });

    productDropdown += '</ul></div>';
    partnerDropdown += '</ul></div>';
    productLandingList += '</ul>';

    if (page.parent == 4 || parent.parent == 4) {

        $('#submenu').append(productDropdown);
    }
    if (page.parent == 4) {
        $('#product-landing-list').html(productLandingList);
    }
    else if (page.id == 7 || page.parent == 7) {
        $('#submenu').append(partnerDropdown);

    }

    $('#show-menu').on('click', function () {

        var buttonClass = parent.title.toLowerCase();

        if (page.id == 7 || page.parent == 7) {
            buttonClass = "capabilities";

        }

        if ($('#submenu-content').is(':visible')) {
            $('.row').css('opacity', '1');
            $('#submenu-content').slideToggle(200);
            $('.show-menu-up').removeClass('show-menu-up').addClass('show-menu-down').removeClass(buttonClass);

        }
        else {
            $('.row').css('opacity', '.1');
            $('#submenu-content').slideToggle(200);
            $('.show-menu-down').removeClass('show-menu-down').addClass('show-menu-up').addClass(buttonClass);
        }
    });

}


/** UTILITY FUNCTIONS */

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" +name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "": decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getObjects(obj, key, val) {
    var objects =[];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i]== 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
    } else if (i == key && obj[key]== val) {
            objects.push(obj);
        }
    }
    return objects;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() +(exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" +d.toUTCString();
    sessionStorage.setItem(cname, cvalue);
    document.cookie = cname + "=" +cvalue + "; " +expires + "; path=/presentation";
}

function setLinks(toPage, fromPage, exdays) {
    sessionStorage.setItem('PAGE_ID', toPage);
    sessionStorage.setItem('PREVIOUS_PAGE_ID', fromPage);
    var d = new Date();
    d.setTime(d.getTime() +(exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" +d.toUTCString();
    $('#main-container').pagecontainer("change", "submenu.html", {transition: "flip"});
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

//var bajb_backdetect = {
//    Version: '1.0.0', Description: 'Back Button Detection', Browser: { IE: !!(window.attachEvent && !window.opera), Safari: navigator.userAgent.indexOf('Apple') > -1, Opera: !!window.opera }, FrameLoaded: 0, FrameTry: 0, FrameTimeout: null, OnBack: function () { alert('Back Button Clicked') }, BAJBFrame: function () {
//        var BAJBOnBack = document.getElementById('BAJBOnBack'); if (bajb_backdetect.FrameLoaded > 1) { if (bajb_backdetect.FrameLoaded == 2) { bajb_backdetect.OnBack(); history.back() } } bajb_backdetect.FrameLoaded++; if (bajb_backdetect.FrameLoaded == 1) {
//            if (bajb_backdetect.Browser.IE) { bajb_backdetect.SetupFrames() } else { bajb_backdetect.FrameTimeout = setTimeout("bajb_backdetect.SetupFrames();", 700) }
//        }
//    }, SetupFrames: function () { clearTimeout(bajb_backdetect.FrameTimeout); var BBiFrame = document.getElementById('BAJBOnBack'); var checkVar = BBiFrame.src.substr(-11, 11); if (bajb_backdetect.FrameLoaded == 1 && checkVar != "HistoryLoad") { BBiFrame.src = "blank.html?HistoryLoad" } else { if (bajb_backdetect.FrameTry < 2 && checkVar != "HistoryLoad") { bajb_backdetect.FrameTry++; bajb_backdetect.FrameTimeout = setTimeout("bajb_backdetect.SetupFrames();", 700) } } }, SafariHash: 'false', Safari: function () {
//        if (bajb_backdetect.SafariHash == 'false') {
//            if (window.location.hash == '#b') {
//                bajb_backdetect.SafariHash = 'true'
//            } else { window.location.hash = '#b' } setTimeout("bajb_backdetect.Safari();", 100)
//        } else if (bajb_backdetect.SafariHash == 'true') {
//            if (window.location.hash == '') {
//                bajb_backdetect.SafariHash = 'back'; bajb_backdetect.OnBack(); history.back()
//            } else {
//                setTimeout("bajb_backdetect.Safari();", 100)
//            }
//        }
//    }, Initialise: function () {
//        if (bajb_backdetect.Browser.Safari) {
//            setTimeout("bajb_backdetect.Safari();", 600)
//        } else {
//            document.write('<iframe src="blank.html" style="display:none;" id="BAJBOnBack" onunload="alert(\'de\')" onload="bajb_backdetect.BAJBFrame();"></iframe>')
//        }
//    }
//}; bajb_backdetect.Initialise();

//bajb_backdetect.OnBack = function () {
//    setLinks(sessionStorage.getItem("PREVIOUS_PAGE_ID"), sessionStorage.getItem("PAGE_ID"));
//}


/** DEBUG FUNCTIONS */



/** LEGACY FUNCTIONS - no longer in user */

//function timerIncrement() {
//
//    var thisPage = localStorage.getItem('PAGE_ID');
//    var inactive = getParameterByName('inactive');
//    idleTime = idleTime + 1;
//    console.log("Idletime: " + idleTime);
//
//    if (thisPage == '1' && idleTime > 2 && !videoWasOpenedAtPageLoad) {
//        if (localStorage.inactive == 'true') {
//            $('#video-modal-link').click();
//            idleTime = 0;
//            videoWasOpenedAtPageLoad = true;
//        }
//    }
//    if (idleTime > 180) { // 3 minutes
//        if (thisPage != '1') {
//            var home = fileDepth + 'pages/index.html?pageId=1';
//            localStorage.setItem("inactive", "true");
//            window.location.href = home;
//        }
//        else {
//            $('#video-modal-link').click();
//            localStorage.setItem("inactive", "true");
//            idleTime = 0;
//        }
//    }
//}


///**
// * Get the ID of the current page container
// * @returns int;
// */
//function get_container_id() {
//
//    return $('#page-container').data('pageid');
//}

//function start_inactivity_timer() {
//
//    //Increment the idle time counter every minute.
//    var idleInterval = setInterval(timerIncrement, 1000); // 1 second
//
//    //Zero the idle timer on mouse movement.
//    $(this).mousemove(function () {
//        localStorage.setItem("inactive", "false");
//        idleTime = 0;
//    });
//    $(this).keypress(function () {
//        localStorage.setItem("inactive", "false");
//        idleTime = 0;
//    });
//    $(this).on("tap", function () {
//        localStorage.setItem("inactive", "false");
//        idleTime = 0;
//    })
//}

///**
// This function will be replaced by app-driven functionality to select available presentations
// */
////function get_available_presentations() {
//
//    var presentations = '[{ "id": "1", "company":"Bulls" },' +
//        '{ "id":2, "company":"Blackhawks"}' +
//        ']';
//
//    var livepresentations = JSON.parse(presentations);
//    $.each(livepresentations, function () {
//        var html = '<a href="pages/index.html?pageId=1" class="ui-btn" id="view-content-button" data-ajax="false">' + this.company + '</a>';
//        $('#presentations-list').append(html);
//
//    });
//
//}
//function get_video_settings() {
//
//    var livevideos = JSON.parse(videoList);
//    $.each(livevideos, function () {
//        var path = menuDepth + 'Content/videos';
//        if (this.custom == true) {
//            path = menuDepth + 'Content/pres' + presID + '/videos';
//        }
//        var html = '<li>' + this.title + ' - ' + path + '/' + this.filename + '</li>';
//        $('#video-list').append(html);
//    });
//
//    return livevideos;
//
//}


/**
 * Checks the presentation specific settings and displays links to all markets that have been setup to appear within this presentation
 * Utilized for main menu page, section landing page, and bottom nav within the section
 */
//function get_available_markets() {
//    var livemarkets = JSON.parse(marketList);
//    var thisPage = getObjects(JSON.parse(pagelist), 'pageSlug', localStorage.getItem('pageSlug'));

//    if (thisPage[0].pageSlug == 'mainMenu' || thisPage[0].pageSlug == 'markets' || thisPage[0].parent == '5') {
//        $.each(livemarkets, function () {
//            var obj = getObjects(JSON.parse(pagelist), 'pageSlug', this.slug);


//            var html = '<li class="col-xs-2 landing-menu-item" style="margin-top: 30px;"><a href="/presentations/' + obj[0].filename + '.html" onclick="setLinks(' + obj[0].id + ', ' + sessionStorage.getItem("PAGE_ID") + ')" data-ajax="false"><img src="' + fileDepth + 'Content/images/menu/' + obj[0].menu + '.png"/><br/> ' + this.title + '</a></li>';
//            $('.item-menu').append(html);


//            var viewport = $(window).width();
//            var width = viewport / 6;
//            $('.item-menu li').css('width', width*.8);
//        });
//    }
//}