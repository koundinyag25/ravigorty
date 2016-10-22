function familyTreeController($scope){

  $scope.message = "family tree controller";
    var treeData =[{
   "name": "Mahesh",
   "spouse": "Valli",
  //  "icon":"cart.png",
   "children":[{
     "name":"Megha",
     "spouse":"monkey",
     "children":[{
       "name": "boop1",
      "spouse":"Rekha",
    "children":[{
      "name":"boop3",
      "children":[{
        "name":"boop jr"
      },{
        "name": "beep jr"
      }]
    }]
  },
       {"name": "beep2"
   }]
 },{
     "name":"koundinya",
     "spouse": "Donkey",
     "children":[{
       "name":"boop",
       "spouse":"bandar"
      },{
       "name":"beep",
       "spouse":"someone",
       children:[
         { "name":"someone1",
       },{
         "name":"someone2"
       }
       ]
     },{
       "name":"boopiyaaaa",
       "spouse":"bandariyaa"
     }]
   }
 ]
}
];

// var treeData = [
//   {
//     "name": "Top Level",
//     "parent": "null",
//     "children": [
//       {
//         "name": "Level 2: A",
//         "parent": "Top Level",
//         "children": [
//           {
//             "name": "Son of A",
//             "parent": "Level 2: A"
//           },
//           {
//             "name": "Daughter of A",
//             "parent": "Level 2: A"
//           }
//         ]
//       },
//       {
//         "name": "Level 2: B",
//         "parent": "Top Level"
//       }
//     ]
//   }
// ];

// //************** Generate the tree diagram  *****************
var margin = {top: 20, right: 120, bottom: 20, left: 120},
 width = 960 - margin.right - margin.left,
 // height = 500 - margin.top - margin.bottom;
height= 600;
var i = 0;

var tree = d3.layout.tree()
 .size([height, width]);

var diagonal = d3.svg.diagonal()
 .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("#family-tree-div").append("svg")
 .attr("width", width + margin.right + margin.left)
 .attr("height", height + margin.top + margin.bottom)
  .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var root = treeData[0];
console.log(root);

update(root);

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root);
   var links = tree.links(nodes);
console.log('links',links);
  // Normalize for fixed-depth.
  nodes.forEach(function(d) {
    d.y = d.depth * 180;
   });

  // Declare the nodesâ€¦
  var node = svg.selectAll("g.node")
   .data(nodes, function(d) { return d.id || (d.id = ++i); });
  // Enter the nodes.
  var nodeEnter = node.enter().append("g")
  // .append("image").
  //  .attr("xlink:href",function(d){ return d.icon})
   .attr("class", "node")
   .attr("transform", function(d) {
    return "translate(" + d.y + "," + d.x + ")";
   });

  nodeEnter.append("circle")
   .attr("r", 30)
   .style("fill", "#fff");

  // nodeEnterSpouse.append("circle")
  // .attr("r",30)
  // .style("fill",blue);

  nodeEnter.append("text")
   .attr("x", function(d) {
     console.log("d.children",d.children);
    return d.children || d._children ? -13 : 13; })
   .attr("dy", ".35em")
   .attr("text-anchor", function(d) {
    return d.children || d._children ? "end" : "start"; })
   .text(function(d) { return d.name; })
   .style("fill-opacity", 1);

  // Declare the linksâ€¦
  var link = svg.selectAll("path.link")
   .data(links, function(d) { return d.target.id; });

  // Enter the links.
  link.enter().insert("path", "g")
   .attr("class", "link")
   .attr("d", diagonal);

   nodes.forEach(function(data){
    if(data.spouse){
      console.log(data.name+ "he/she has spouse");
      console.log(data.x,data.y);
      var x = data.x;
      var y = data.y
        svg.append("circle").attr("r",30).attr("class","circle").attr("transform", function() {
        // return "translate(" + d.y + "," + d.x + ")";
        console.log(data.x,data.y);
        var x = data.x;
        var y = data.y+ 50;
        console.log(data.name, x,y);
        tree.separation(function separation(a, b) {
          console.log("somelog",a,b);
            return a.parent == b.parent ? 1 : 1.5;
        });

        return "translate(" + y+ "," + x  + ")";
      });
    }


   });
 }
}

export default familyTreeController;
