function HomeController($scope,$location,$anchorScroll){
  $scope.image = "src/svg/home-img.jpg";
$scope.buttons = [ { name: 'Home', value: 'home'},{ name:'Family Tree', value:'family-tree'},{ name:'Gallery', value: 'gallery'},{name:'Contact Us', value:'contactus'}];
 $scope.gotoSection = function(id) {
      console.log('go to section',id);
       $location.hash("family-tree");
       $anchorScroll();
 };

 // $scope.gotoNextSection = function(){
 //      console.log(event.target.getAttribute("value"));
 //      if(event.target.getAttribute("value") == "family-tree"){
 //        $location.hash("family-tree");
 //          $anchorScroll();
 //      }
 //      if(event.target.getAttribute("value") == "gallery"){
 //        console.log(event.target.getAttribute("value"))
 //        $location.hash("gallery");
 //        $anchorScroll();
 //      }
 //      if(event.target.getAttribute("value") == "contactUs"){
 //        $location.hash("contactUs");
 //          $anchorScroll();
 //      }
 // }
}

export default HomeController;
