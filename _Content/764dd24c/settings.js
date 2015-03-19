presID = '764dd24c';

/*
 * settings: General settings items for this presentation
 * {string} id 
 * {string} division - Swagelok distributor name
 * {string} client - Client name
 * {string} logo - Filename for logo image
 * {string} assetDir - Absolute path of presentation-specific folder, based on id
 * {boolean} hasCaseStudy 
 * 
 */
var settings = '[{ "id": "'+presID+'", "division":"Swagelok D&uuml;sseldorf", "client":"Tata", "logo":"logo.png", "assetDir":"/presentations/_Content/' + presID + '/", "hasCaseStudy":true }]';

var theseSettings = get_presentation_settings();
var presentationDirectory = theseSettings[0].assetDir;

/*
 * marketList: List of markets that are displayed within this presentation
 * {string} title - Market presentation title
 * {string} slug - Market slug
 * 
 */
var marketList = '[' +
    '{ "title": "Power", "slug": "power" },' +
    '{ "title": "Oil &amp; Gas", "slug": "oilGas" },' +
    '{ "title": "Alternative Fuels", "slug": "alternativeFuels" },' +
    '{ "title": "Chemical", "slug": "chemical" },' +
    '{ "title": "Semiconductor", "slug": "semiconductor" }' +
    ']';

/*
 * videoList: List of videos for display in the presentation
 * {string} page_element - DOM element where the video is displayed
 * {string} videofileMP4 - Absolute path to mp4 location
 * {string} posterfile - Absolute path to jpg location
 * {string} [subtitlefile] - Absolute path to vtt subtitle track (optional)
 * {string} [caption] - HTML caption text (optional)
 * 
 */
var videoList = '[' +
    '{ "page_element": "ceo-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"/presentations/_Content/videos/Swagelok Distrib Art 03-HD.mp4", "posterfile":"/presentations/_Content/videos/swagelok_video_artAnton.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":"Art Anton <br/>Swagelok President and CEO"},' +
    '{ "page_element": "introScreen-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"/presentations/_Content/videos/SWAGELOK_Ext_BrandEssence_01-21c.mp4", "posterfile":"/presentations/_Content/videos/swagelok_video_artAnton.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":"Art Anton <br/>Swagelok President and CEO"},' +
    '{ "page_element": "oneSwagelok-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"/presentations/_Content/videos/Swagelok Distrib Art v2 05-HD.mp4", "posterfile":"/presentations/_Content/videos/swagelok_video_artAnton.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":"Art Anton <br/>Swagelok President and CEO"},' +
    '{ "page_element": "distributor-video", "videofileWebm":"/presentations/_Content/videos/sample-webm.webm", "videofileMP4":"/presentations/_Content/videos/Swagelok Distrib Andreas 02-HD.mp4", "posterfile":"/presentations/_Content/videos/distributor_video_andreas.jpg", "subtitlefile":"/presentations/_Content/videos/distributor_video_andreas.vtt", "caption":"A Word from Andreas Rueb<br/>Swagelok D&uuml;sseldorf Managing Director"},' +
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

/*
 * layoutsList: List of pages that have changed from the default layout (text-only)
 * {string} page_id - The page slug of the page where the content is displayed
 * {string} page_layout - The non-standard layout for this page
 */
var layoutsList = '[' +
    '{"page_id":"technicalSupportSales", "page_layout":"text-image"},' +
    '{"page_id":"training", "page_layout":"text-image"},' +
    '{"page_id":"services", "page_layout":"text-image"},' +
    '{"page_id":"delivery", "page_layout":"text-image"},' +
    '{"page_id":"customSolutions", "page_layout":"text-image"}' +
    ']';

/*
 * content: Presentation-specific HTML content and page/element info for where to display it
 * {string} page_id - The page slug of the page where the content is displayed
 * {string} page_element - The DOM id for the element where the content is to be displayed
 * {string} html - HTML content
 */
var content = '[' +
    '{"page_id":"services", "page_element":"right-custom-content", "html":"<p>Quality, efficiency, and safety are the leading elements of our service portfolio. We deliver optimized support for our customers when selecting, ordering, using, and maintaining our fluid system components. Our objective is to guarantee the smooth and efficient functionality of all Swagelok components and Custom Solutions. <h3>Services-Portfolio</h3> <div class=\'panel-group\' id=\'accordion\' role=\'tablist\' aria-multiselectable=\'true\'> <div class=\'panel panel-default\'> <div class=\'panel-heading\' role=\'tab\' id=\'headingOne\'> <h4 class=\'panel-title\'> <a data-toggle=\'collapse\' data-parent=\'#accordion\' href=\'#collapseOne\' aria-expanded=\'true\' aria-controls=\'collapseOne\'> <span class=\'glyphicon glyphicon-minus\'></span> Solutions</a> </h4> </div> <div id=\'collapseOne\' class=\'panel-collapse collapse in\' role=\'tabpanel\' aria-labelledby=\'headingOne\'> <div class=\'panel-body\'> <ul> <li>Creating individual applications at highest Swagelok quality</li> <li>External workbench for our customers – one competent partner throughout the whole project lifecycle</li> <li>Reducing time and costs for planning, purchasing, and assembling </li> </ul> </div> </div> </div> <div class=\'panel \'> <div class=\'panel-heading\' role=\'tab\' id=\'headingTwo\'> <h4 class=\'panel-title\'></span> <a  data-toggle=\'collapse\' data-parent=\'#accordion\' href=\'#collapseTwo\' aria-expanded=\'false\' aria-controls=\'collapseTwo\'> <span class=\'glyphicon glyphicon-plus\'></span> eBusiness</a> </h4> </div> <div id=\'collapseTwo\' class=\'panel-collapse collapse\' role=\'tabpanel\' aria-labelledby=\'headingTwo\'> <div class=\'panel-body\'> <ul> <li>Swagelok eStore</li> <li>Customized eBusiness solutions that can reduce ordering time </li> <li>CAD templates and sales drawings – ability to download high-quality, original CAD drawings</li> </ul> </div> </div> </div> <div class=\'panel \'> <div class=\'panel-heading\' role=\'tab\' id=\'headingThree\'> <h4 class=\'panel-title\'><a  data-toggle=\'collapse\' data-parent=\'#accordion\' href=\'#collapseThree\' aria-expanded=\'false\' aria-controls=\'collapseThree\'> <span class=\'glyphicon glyphicon-plus\'></span> Product Selection Tool</a> </h4> </div> <div id=\'collapseThree\' class=\'panel-collapse collapse\' role=\'tabpanel\' aria-labelledby=\'headingThree\'> <div class=\'panel-body\'> <ul> <li>eDTR Tool (Electronic Desktop Technical Reference), our electronic Swagelok catalogue </li> <li>Available on USB flash drive or as an app</li> </ul> </div> </div> </div> <div class=\'panel \'> <div class=\'panel-heading\' role=\'tab\' id=\'headingFour\'> <h4 class=\'panel-title\'><a  data-toggle=\'collapse\' data-parent=\'#accordion\' href=\'#collapseFour\' aria-expanded=\'false\' aria-controls=\'collapseFour\'> <span class=\'glyphicon glyphicon-plus\'></span> Energy Management Services</a> </h4> </div> <div id=\'collapseFour\' class=\'panel-collapse collapse\' role=\'tabpanel\' aria-labelledby=\'headingFour\'> <div class=\'panel-body\'> <ul> <li>Identifying and analyzing leaks in a facility</li> <li>Providing a solution that helps target the problems </li> </ul> </div> </div> </div> <div class=\'panel \'> <div class=\'panel-heading\' role=\'tab\' id=\'headingFive\'> <h4 class=\'panel-title\'><a  data-toggle=\'collapse\' data-parent=\'#accordion\' href=\'#collapseFive\' aria-expanded=\'false\' aria-controls=\'collapseFive\'> <span class=\'glyphicon glyphicon-plus\'></span> Equipment and Tools</a> </h4> </div> <div id=\'collapseFive\' class=\'panel-collapse collapse\' role=\'tabpanel\' aria-labelledby=\'headingFive\'> <div class=\'panel-body\'> <h3>Product Delivery Services</h3> <ul> <li>Just-in-time delivery helps our customers reduce the time and cost of maintaining a reliable supply chain</li> <li>Emergency service</li> <li>Delivery 24/7</li> <li>In-house delivery service</li> </ul> <h3>Supply Chain Management</h3> <ul> <li>Consignment stock – weekly delivery</li> <li>VMI (Vendor-Managed Inventory)</li> <li>Barcode scanner for consignment stock at Siemens</li> <li>Custom Kitting – pre-packing of several components according to customer needs</li> </ul> <h3>Training</h3> <ul> <li>Training and Competence Center</li> <li>On-site training at customer facilities</li> </ul> </div> </div> </div> </div>"},' +
    '{"page_id":"services", "page_element":"page-title", "html":"<p>Services</p>"},' +
    '{"page_id":"services", "page_element":"left-custom-image", "src":"' + presentationDirectory + 'images/services.jpg"},' +
    '{"page_id":"technicalSupportSales", "page_element":"page-title", "html":"Swagelok Düsseldorf: Your Partner in Fluid System Solutions."},' +
    '{"page_id":"technicalSupportSales", "page_element":"right-custom-content", "html":"<p>Our goal is to build on our long-term partnerships with customers. Swagelok Düsseldorf stands for trust, loyalty, fairness, and team spirit. Our customers can count on us every day and every time. As knowledgeable consultants, we want to support customer business issues with our know-how and extensive experience in the area of fluid system technology. <p>Our sales approach is based on key account management rather than area management. We place great emphasis on professionalism and intensive, personal, on-site support. Knowing that different businesses have individual needs and requirements, we have built two outside sales teams related to the key MRO and OEM markets. Our specialized key account professionals are well known for their deep understanding of business needs in their designated sales areas. <p>Because of our solid expertise, we can support customers in reaching their goals, even in the most demanding situations. Our complete sales force is made up of outside and inside teams working together to deliver the best support during the entire selection and ordering process. The result is a perfect working solution that offers a real added value to our customers, whether it’s a small fluid system component or a complex Custom Solution project. <p>To be successful in the future, our main goal is to look for the right trend and aspire to be a “trendsetter” for our local businesses. To fulfill our vision, we need to be aware of overall customer business, directions, and major demands."},' +
    '{"page_id":"technicalSupportSales", "page_element":"left-custom-image", "src":"' + presentationDirectory + 'images/technicalSupport.jpg"},' +
    '{"page_id":"training", "page_element":"page-title", "html":"Think ahead. Share knowledge. Improve customer competency."},' +
    '{"page_id":"training", "page_element":"right-custom-content", "html":"<p>Professional training is an essential part of our quality approach toward our customers. We keep our fluid system expertise up to date and like to share our know-how with our customers through our Training and Competence Center. We offer hands-on training, combining theoretical knowledge with best practices experiences. <p>Improving the safety of people and the environment as well as increasing productivity are essential to us. We support our customers in developing their competencies and raising their sense of responsibility in working with fluid systems. That is why we are continuously improving our training programs to offer knowledge that helps our customers achieve their business goals and improve their overall understanding of fluid system technology. <h3>Training Programs</h3> <ul> <li>Swagelok Tube Fitting Safety Seminar</li> <li>Valve Selection Seminar</li> <li>Orbital Weld Seminar</li> <li>RHPS Seminar</li> <li>Sampling System Seminar</li> </ul>"},' +
    '{"page_id":"training", "page_element":"left-custom-image", "src":"' + presentationDirectory + 'images/training.jpg"},' +
    '{"page_id":"delivery", "page_element":"page-title", "html":"Delivery"},' +
    '{"page_id":"delivery", "page_element":"right-custom-content", "html":"<p>Product availability is important to the smooth operation of any business. Our goal is to offer our customers a high level of flexibility by ensuring that Swagelok products arrive at the right time and place, avoiding downtime or additional freight charges. Swagelok Düsseldorf manages a large local product inventory to ensure product availability to match customers’ needs. <p>Just-in-time delivery is not a problem for us. Our sales representative will personally ensure that products are available on time. We offer next-day delivery as well as weekly direct delivery through our own service. <p>For customers who like to have products available on-site, we offer consignment inventory filled up on a weekly basis to hold down costs and keep product availability high. We also manage the Swagelok inventory at our customers’ sites to guarantee availability."},' +
    '{"page_id":"delivery", "page_element":"left-custom-image", "src":"' + presentationDirectory + 'images/delivery.jpg"},' +
    '{"page_id":"customSolutions", "page_element":"page-title", "html":"Your idea + Swagelok products & expertise = Perfect solution."},' +
    '{"page_id":"customSolutions", "page_element":"right-custom-content", "html":"<p>We create innovative Swagelok Custom Solutions that help customers reduce their time and costs for planning, purchasing, and assembling. At our local Custom Solutions Center, we combine the experience of our sales engineers and CAD specialists with the know-how of our assembly team to meet the unique needs of individual applications. Whether the project is simple or complex, our team will deliver the best service to solve all assembly requirements. <p>We make it easy to coordinate entire projects with one partner, utilizing Swagelok Düsseldorf as an extended workbench. We set up our Custom Solutions department in a way that enables us to provide state-of-the-art system assemblies and ask the right questions to make each project successful. To match experience with custom solutions, we have two designated CS key account managers who coordinate CS projects with the customer and our inside CS team. We want to make Swagelok Düsseldorf top of mind when it comes to our customers’ individual applications. By providing world-class solutions backed by world-class processing and service, we can deliver the highest Swagelok quality to every application."},' +
    '{"page_id":"customSolutions", "page_element":"left-custom-image", "src":"' + presentationDirectory + 'images/customSolutions.jpg"}' +
    ']';

get_custom_content(content);

if (localStorage.getItem('pageLayout') == 'text-video' || localStorage.getItem('pageLayout') == 'mission' || localStorage.getItem('pageLayout') == 'splash') {
    get_video_details(videoList);
}

