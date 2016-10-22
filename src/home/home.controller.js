function HomeController($scope,$location,$anchorScroll,scrollService,$timeout){
  $scope.image = "src/svg/home-img.jpg";
  $scope.arrow="src/svg/arrow.png"
$scope.buttons = [ { name: 'Home', value: 'home'},{ name:'Family Tree', value:'family-tree'},{ name:'Gallery', value: 'gallery'},{name:'Contact Us', value:'contactus'}];
 $scope.gotoSection = function(id) {
      $location.hash(id);
      scrollService.scrollTo(id);
 };

 $scope.gotoNextSection = function(){
      if(event.target.getAttribute("value") == "family-tree"){
        $location.hash("family-tree");
          scrollService.scrollTo("family-tree");
      }
      if(event.target.getAttribute("value") == "gallery"){
        console.log(event.target.getAttribute("value"));
        scrollService.scrollTo("gallery");
      }
      if(event.target.getAttribute("value") == "contactus"){
        $location.hash("contactus");
          scrollService.scrollTo("contactus");
      }
 }
}

export default HomeController;
