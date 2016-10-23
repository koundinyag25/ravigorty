function FamilytreeController() {
    var data = [{
        "name": "Mahesh",
        "parent": "null",
        "facebookId": 100001624730589,
        "spouse": "Valli",
        "spouseFbId": 100001624730589,
        "children": [{
            "name": "Megha",
            "parent": "Jules",
            "spouse":"Blah",
            "facebookId": 100001644911288,
            "spouseFbId":100001644911288,
            "children": [{
                "name": "Carlton Lassiter",
                "parent": "Shawn Spencer",
                "facebookId": 100000539922051
            },{
                "name": "Carlton Lassiter",
                "parent": "Shawn Spencer",
                "facebookId": 100000539922051
            },{
                "name": "Carlton Lassiter",
                "parent": "Shawn Spencer",
                "facebookId": 100000539922051
            }]
        }, {
            "name": "koundinya",
            "parent": "Jules",
            "facebookId": 100000185556478,
            "spouse":"vamsi",
            "spouseFbId":100000539922051,
            "children": [{
                "name": "Carlton Lassiter",
                "parent": "Shawn Spencer",
                "facebookId": 100000539922051,
                "children": [{
                    "name": "Carlton Lassiter",
                    "parent": "Shawn Spencer",
                    "facebookId": 100000539922051
                },{
                    "name": "Carlton Lassiter",
                    "parent": "Shawn Spencer",
                    "facebookId": 100000539922051
                },{
                    "name": "Carlton Lassiter",
                    "parent": "Shawn Spencer",
                    "facebookId": 100000539922051
                }]
            }]
        }]
    }];
    var svg, root, margin;
    var width = 900;
    var height = 500;
    var margin = 50;
    var count = 0;
    var duration = 750;
    var tree = d3.layout.tree()
        .size([height, width])
    var diagonal = d3.svg.diagonal()
        .projection(function(d) {
            return [d.y, d.x];
        });

    var svg = d3.select('svg')
        .attr('width', width + margin + margin)
        .attr('height', height + margin + margin)
        .attr('margin-left',250)
        .append('g')
        .attr('transform', 'translate(' + margin + ',' + margin + ')');



    var root = data[0];
    root.x0 = height / 2;
    root.y0 = 0;

    var update = function(source) {
        // Compute the new tree layout.
        var nodes = tree.nodes(root)
            .reverse(),
            links = tree.links(nodes);

        // Normalize for fixed Depth
        nodes.forEach(function(d) {
            d.y = d.depth * 180;
        });

        // Update the nodes...
        var node = svg.selectAll('g.node')
            .data(nodes, function(d) {
                return d.id || (d.id = ++count);
            });

        //this is where the main problem for the spouses is solved...Thats just a guess...messiest code ever.
        var defs = svg.append("defs").attr("id", "imgdefs");



        var nodeEnter = node.enter()
            .append('g')
            .attr('class', 'node')
            .attr('transform', function() {
                return 'translate(' + source.y0 + ',' + source.x0 + ')';
            });


        nodeEnter.append("image")
        .attr("x",-20)
        .attr("y", 30)
        .attr("height",50)
        .attr("width",50)
        .attr("xlink:href", function(d) {
            if(d.spouse){

              return "https://graph.facebook.com/" + d.spouseFbId + "/picture";
            }

        }).attr("clip-path","url(#boop)");


        nodeEnter.append('image')
            .attr('x', -20)
            .attr('y', -20)
            .attr('width', 50)
            .attr('height', 50)
            .attr("xlink:href", function(d) {
                return "https://graph.facebook.com/" + d.facebookId + "/picture";
            }).attr('class', 'image-border');
            // .attr("clip-path", "url(#clip)");
            nodeEnter.append('rect')
            .attr('x', -20)
            .attr('y', -20)
            .attr('class', 'image-border').attr('width', 50)
            .attr('height', 50);


        nodeEnter.append('text')
            .attr('x', function(d) {
                return d.children || d._children ? 45 :35;
            }).attr('y',(d)=>{
              if(d.children){
                 return -30;
              }
              return;
            })
            // .attr('y',function() {
            //   return d.children || d._children ? 50: -50;
            // })
            .attr('dy', '2px')
            .attr('text-anchor', function(d) {
                return d.children || d._children ? 'end' : 'start';
            })
            .text(function(d) {
                return d.name+" "+"and"+" "+ d.spouse;
            })
            .style('fill-opacity', 1e-6);


        // Transition nodes to their new position
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr('transform', function(d) {
                return 'translate(' + d.y + "," + d.x + ')';
            });

        nodeUpdate.select('circle')
            .attr('r', 20);

        nodeUpdate.select('text')
            .style('fill-opacity', 1)
            .style('fill','#FFFFFF');

        //Transition exiting nodes to the parents new position
        var nodeExit = node.exit()
            .transition()
            .duration(duration)
            .attr('transform', function() {
                return 'translate(' + source.y + ',' + source.x + ')';
            })
            .remove();

        nodeExit.select('image')
            .style('opacity', 1e-6);

        nodeExit.select('text')
            .style('fill-opacity', 1e-6)
            .style('fill', 'white');

        // Update the links...
        var link = svg.selectAll('path.link')
            .data(links, function(d) {
                return d.target.id;
            });

        // Enter any new links at the parents previous position
        link.enter()
            .insert('path', 'g')
            .attr('class', 'link')
            .attr('d', function() {
                var o = {
                    x: source.x0,
                    y: source.y0
                };
                return diagonal({
                    source: o,
                    target: o
                });
            }.bind(this));

        //Transition links to their new position.
        link.transition()
            .duration(duration)
            .attr('d', diagonal);

        // Transition exiting nodes to the parents new position.
        link.exit()
            .transition()
            .duration(duration)
            .attr('d', function() {
                var o = {
                    x: source.x,
                    y: source.y
                };
                return diagonal({
                    source: o,
                    target: o
                });
            }.bind(this))
            .remove();

        // Stash the old positions for transition
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    };
    update(root);


}

export default FamilytreeController;
