class NewsCtrl {
    
    public init = ($scope, $sce): void => {

        $scope.parseHTML = function (value) {
            return $sce.trustAsHtml(value);
        };

        $scope.newsItems = [
            {
                "id": "cadet-engine-launch", 
                "imageUrl": "img/news/cadet.png", 
                "title": "Cadet Engine Launch",
                "date": "17/06/2013 12:00 PM",
                "description": "Today we're proud to announce the launch of CadetEngine, the engine behind CadetEditor. CadetEngine is an open source, component-based ActionScript3 scene engine, which has been designed from the ground up to be plug-and-play in order to support editability.<br / ><br / ><a href ='http://www.cadeteditor.com' target = '_blank'>http://www.cadeteditor.com</a><br / ><br / >What's special about CadetEngine? unlike many other game engines available in Flash, CadetEngine is fully supported by an extensible editor tool, namely CadetEditor.<br / ><br / > please check the website for details or take a look at Rob's blog post!"
            },
            {
                "id": "cadet-editor-launch",
                "imageUrl": "img/news/cadet_editor_launch.jpg",
                "title": "Cadet Editor Launch",
                "date": "25/07/2012 10:50 AM",
                "description": "After much tinkering, testing, re-factoring and playing, we are proud to announce <a href='www.cadeteditor.com'>www.cadeteditor.com</a>, the demo site for our new app.<br /><br />Cadet is a general - purpose editor framework for the Flash platform.The current 2D and 3D editors enable users to visually edit Away3D and Box2D scenes, although if an engine has a Scene Graph, we can probably write an editor for it.<br /><br />Here are a few demo videos: <a href='https://vimeo.com/cadeteditor/videos' target = '_blank'>https://vimeo.com/cadeteditor/videos</a><br /><br />Have a play and let us know what you think! :D"
            },
            {
                "id": "three-dart-launch",
                "imageUrl": "img/news/three_dart_launch.jpg",
                "title": "Three.dart: Three.js Dart language port",
                "date": "16/02/2012 12:44 PM",
                "description": "In his enthusiasm over Google's new <a href='https://www.dartlang.org/' target = '_blank'>Dart language</a>, Director Robert Silverton has written a proof of concept port of the fantastic JavaScript 3D library <a href='http://mrdoob.github.io/three.js/' target = '_blank'>three.js.</a><br/><br/>You can find <a href='http://threedart.github.io/three.dart/' target = '_blank'>three.dart</a> on GitHub, or read more about it in Rob's <a href='http://robertsilverton.com/2012/02/11/threed-three-js-dart-port/' target = '_blank'>blog post</a>!"
            },
            {
                "id": "november-2011",
                "imageUrl": "img/news/happy_snaps.jpg",
                "title": "November Update",
                "date": "09/11/2011 5:37 PM",
                "description": "Finally got around to updating our site again..!<br />Here&#39;s some of our latest work:<br / ><br / >A HTML5 site all about taking a break for <a href='http://www.unwrong.com/case_studies/index.html' target='_blank'>Keen Footwear</a>.<br / ><br / >A snappy happy <a href='http://www.unwrong.com/case_studies/moshi_happy_snaps.html' target='_blank'> Flash game </a> for Moshi Monsters, promoting the release of Moshling Zoo on the Nintendo DS.<br / ><br / >An interactive touch screen map and agenda app for the <a href='http://www.unwrong.com/case_studies/gartner_symposium.html' target='_blank'>Gartner Symposium</a> 2011 in Barcelona.<br / ><br / >And a stylish CMS driven portfolio site for the Mayfair tailors <a href='http://www.unwrong.com/case_studies/thom_sweeney.html' target='_blank'>Thom Sweeney</a>."
            }

        ]
    }

}  