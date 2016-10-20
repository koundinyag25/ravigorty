function HomeController($scope,$location,$anchorScroll,scrollService,$timeout){
  $scope.image = "src/svg/home-img.jpg";
$scope.buttons = [ { name: 'Home', value: 'home'},{ name:'Family Tree', value:'family-tree'},{ name:'Gallery', value: 'gallery'},{name:'Contact Us', value:'contactus'}];
 $scope.gotoSection = function(x) {
      // console.log('go to section',x);
      // $location.hash();
      // $anchorScroll();


      // var newHash = x;
      // console.log('newHash',newHash);
      // console.log($location.hash());
      // if ($location.hash() !== newHash) {
      //   // set the $location.hash to `newHash` and
      //   // $anchorScroll will automatically scroll to it
      //   $location.hash(x);
      // } else {
      //   // call $anchorScroll() explicitly,
      //   // since $location.hash hasn't changed
      //   $anchorScroll();
      // }
      console.log('go to section',x);
      $location.hash(x);
      $anchorScroll();
      // $location.hash() = null;
      // scrollService.scrollTo(x);


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
