class NewsCtrl {
    
    public init = ($scope): void => {
        $scope.newsItems = [
        {
            "id": "cadet-launch", 
            "imageUrl": "img/news/cadet.png", 
            "title": "Cadet Engine Launch",
            "date": "17/06/2013 12:00 PM",
            "description": "Today we're proud to announce the launch of CadetEngine, the engine behind CadetEditor. CadetEngine is an open source, component-based ActionScript3 scene engine, which has been designed from the ground up to be plug-and-play in order to support editability.<br / ><br / ><a href ='http://www.cadeteditor.com'>http://www.cadeteditor.com</a><br / ><br / >what's special about CadetEngine? unlike many other game engines available in Flash, CadetEngine is fully supported by an extensible editor tool, namely CadetEditor.<br / ><br / > please check the website for details or take a look at rob's blog post!."
        }

        ]
    }

}  