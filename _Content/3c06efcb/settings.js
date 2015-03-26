presID = '3c06efcb';

var settings = '[{ "id":"3c06efcb", "division":"Merge", "client":"Merge", "assetDir":"/presentations/_content/3c06efcb/", "logo":"", "hasCaseStudy":false}]';

var theseSettings = get_presentation_settings();

var presentationDirectory = theseSettings[0].assetDir;

var marketList = '[{ "title": "Power", "slug": "power" }, { "title": "Oil &amp; Gas", "slug":"oilGas" }]';
var videoList = '[' +
']';

var layoutsList = '[' +
']';

var content = '[' +
  '{"page_id":"mission", "page_element":"page-title", "html":"asdf"},' +
  '{"page_id":"mission", "page_element":"left-custom-content", "html":"asdf"},' +
  '{"page_id":"mission", "page_element":"right-custom-content", "html":"asf"}' +
']';

get_custom_content(content);

if (localStorage.getItem('pageLayout') == 'text-video' || localStorage.getItem('pageLayout') == 'mission' || localStorage.getItem('pageLayout') == 'splash') {
    get_video_details(videoList);
}