presID = '875ee35d'

var fileDepth = get_file_location();
var menuDepth = '';
if (fileDepth == "../../") {
    menuDepth = "../";
}

var settings='[{ "id":"875ee35d", "division":"D&#252;sseldorf Test Company", "client":"D&#252;sseldorf Test Company", "assetDir":"/presentations/_content/764dd24c/", "hasCaseStudy":"true"}]';

var theseSettings = get_presentation_settings();

var presentationDirectory = theseSettings[0].assetDir;

if (theseSettings[0].hasCaseStudy == true) {
    localStorage.setItem('hasCaseStudy', true);
}

var marketList = '[{ "id": 0, "title": "Power", "slug": "power" }]';
var videoList='[' +
    '{ "page_element": "ceo-video", "videofile":"/presentations/_Content/videos/swagelok_video_artAnton.mp4", "posterfile":"/presentations/_Content/videos/swagelok_video_artAnton.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":"A Word from Art Anton<br/>Swagelok President and CEO"},' +
    '{ "page_element": "marketsCustomers-video", "videofile":"/presentations/_Content/videos/swagelok_video_artAnton.mp4", "posterfile":"/presentations/_Content/videos/swagelok_video_artAnton.jpg", "subtitlefile":"/presentations/_Content/videos/swagelok_video_artAnton.vtt", "caption":"Application Video from Art Anton<br/>Swagelok President and CEO"},' +
    '{ "page_element": "distributor-video", "videofile":"/presentations/_Content/videos/distributor_video_andreas.mp4", "posterfile":"/presentations/_Content/videos/distributor_video_andreas.jpg", "subtitlefile":"/presentations/_Content/videos/distributor_video_andreas.vtt", "caption":"A Word from Andreas<br/>Swagelok D&uuml;sseldorf Managing Director"},' +
    '{ "page_element": "services-video", "videofile":"/presentations/_Content/videos/distributor_video_andreas.mp4", "posterfile":"/presentations/_Content/videos/distributor_video_andreas.jpg", "subtitlefile":"/presentations/_Content/videos/distributor_video_andreas.vtt", "caption":"A Word from Andreas<br/>Swagelok D&uuml;sseldorf Managing Director"},' +
    '{"page_element":"caseStudy-video", "videofile":"/presentations/_content/videos/510f9ae1-36da-417d-a1ca-72108aaa3405/510f9ae1-36da-417d-a1ca-72108aaa3405.mp4", "posterfile":"/presentations/_content/videos/510f9ae1-36da-417d-a1ca-72108aaa3405/510f9ae1-36da-417d-a1ca-72108aaa3405.jpg", "caption":"andreas"}' +
    ']';

var layoutsList='[' +
    '{"page_id":"services", "page_layout":"text-video"},' +
    '{"page_id":"customSolutions", "page_layout":"text-only"}' +
    //'{"page_id":"mission", "page_layout":"text-image"}' +
    ']';

var content='[' +
    '{"page_id":"services", "page_element":"page-title", "html":"Case study"},' +
    '{"page_id":"services", "page_element":"left-custom-content", "html":"D&uuml;sseldorf Case study text"},' +
    '{"page_id":"customSolutions", "page_element":"page-title", "html":"We like cheese"},' +
    '{"page_id":"customSolutions", "page_element":"left-custom-content", "html":"<p>test"},' +
    '{"page_id":"customSolutions", "page_element":"right-custom-content", "html":"<p>test two"}' +
    //'{"page_id":"mission", "page_element":"page-title", "html":"This is our mission"},' +
    //'{"page_id":"mission", "page_element":"left-custom-image", "src":"/presentations/_Content/764dd24c.jpg"},' +
    //'{"page_id":"mission", "page_element":"right-custom-content", "html":"<p>But we have <strong>glaucoma</strong>, so our <em>vision </em>is impaired.&trade;</p>"}' +
    ']';

get_available_markets(marketList);
get_custom_content(layoutsList, content);
load_page_info(localStorage.getItem('PAGE_ID'));


if (localStorage.getItem('pageLayout') == 'text-video' || localStorage.getItem('pageLayout') == 'mission' || localStorage.getItem('pageLayout') == 'splash') {
    get_video_details(videoList);
}

