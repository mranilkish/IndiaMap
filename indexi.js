d3.xml("i.svg",
        function(error, xml) {
    if (error) {console.log(error); return;}
            document.body.appendChild(xml.documentElement);
                 i=-1;
                 b=[];
                 s={
                   'path3778':'Jammu and Kashmir',
                   'path3874':'Andhra Pradesh',
'path3901':'Arunachal Pradesh',
'path3904':'Assam',
'path3013':'Bihar',
'path3865':'Chhattisgarh',
'path3871':'Goa',
'path3799':'Gujarat',
'path3790':'Haryana',
'path3781':'Himachal Pradesh',
'path3785':'Jharkhand',
'path3868':'Karnataka',
'path3880':'Kerala',
'path3805':'Madhya Pradesh',
'path3819':'Maharashtra',
'path3895':'Manipur',
'path3886':'Meghalaya',
'path3892':'Mizoram',
'path3898':'Nagaland',
'path3832':'Odisha',
'path3784':'Punjab',
'path3796':'Rajasthan',
'path3883':'Sikkim',
'path3877':'Tamil Nadu',
'path4688':'Telangana',
'path3889':'Tripura',
'path3802':'Uttar Pradesh',
'path3787':'Uttarakhand',
'path3788':'West Bengal',
'path3793':'Delhi',
'path7865':'Daman',
'path3121':'Diu',
'path3822':'Dadra and Nagar Haveli',
'path4015':'Chandigarh'

                 }
                 var anda=d3.select('#layer33')
                 .selectAll('path');
                   anda.style("fill", "lightgreen")
                   .on("mouseover", function(d) {
                      {
                     anda.style("fill", "blue");
                   }
                      // d3.selectAll("b").text(d3.select(this).attr('name'));
                   })
                   .on("click", function(d) {
                    //alert("hi");
                    anda.style("fill", "red");
                    i++;
                    //alert(
                      a='Lakshadweep'
                    //);
                    b.push( a);
                  //  alert(b);


                    d3.selectAll("b").text(b);

                   })
                   .on("mouseout", function(d) {

                    // if(t!=1)
                     {
                     anda.style("fill", "lightgreen")
                   }
                      //   d3.selectAll("b").text("none")

                   });

                   var lac=d3.select('#layer34')
                   .selectAll('path');
                     lac.style("fill", "lightgreen")
                     .on("mouseover", function(d) {
                        {
                       lac.style("fill", "blue");
                     }
                        // d3.selectAll("b").text(d3.select(this).attr('name'));
                     })
                     .on("click", function(d) {
                      //alert("hi");
                      lac.style("fill", "red");
                      i++;
                      //alert(
                        a='Andaman And Nicobar'
                      //);
                      b.push( a);
                    //  alert(b);


                      d3.selectAll("b").text(b);

                     })
                     .on("mouseout", function(d) {

                      // if(t!=1)
                       {
                       lac.style("fill", "lightgreen")
                     }
                        //   d3.selectAll("b").text("none")

                     });




                     var pud=d3.select('#layer36')
                     .selectAll('path');
                       pud.style("fill", "lightgreen")
                       .on("mouseover", function(d) {
                          {
                         pud.style("fill", "blue");
                       }
                          // d3.selectAll("b").text(d3.select(this).attr('name'));
                       })
                       .on("click", function(d) {
                        //alert("hi");
                        pud.style("fill", "red");
                        i++;
                        //alert(
                          a='Puducherry'
                        //);
                        b.push( a);
                      //  alert(b);


                        d3.selectAll("b").text(b);

                       })
                       .on("mouseout", function(d) {

                        // if(t!=1)
                         {
                         pud.style("fill", "lightgreen")
                       }
                          //   d3.selectAll("b").text("none")

                       });


     d3.selectAll('path.tel')
       .style("fill", "yellow")
       .on("mouseover", function(d) {
          {
         d3.select(this).style("fill", "blue");
       }
          // d3.selectAll("b").text(d3.select(this).attr('name'));
       })
       .on("click", function(d) {
        //alert("hi");
        d3.select(this).style("fill", "red");
        i++;
        //alert(
          a=d3.select(this).attr('id')
        //);
        b.push(s[a]);
      //  alert(b);


        d3.selectAll("b").text(b);

       })
       .on("mouseout", function(d) {

        // if(t!=1)
         {
         d3.select(this).style("fill", "yellow")
       }
          //   d3.selectAll("b").text("none")

       });
       svg=d3.select("body").select("svg");
          console.log(svg[0][0])
       slides = svg_slides(svg,1500);
        setTimeout(function() { svg_interact(svg);console.log("OK")},100);


       // Lets test the slide scales - put a bouncing ball on slide id 3
       s = slides[3];
       circle = svg.append("svg:circle")
           .attr("cx",s.scale_x(500)).attr("cy",s.scale_y(500))
           .attr("r",20)
           .style("fill","steelblue");

       next = 500;

       function bounce() {
           next = -next;
           circle.transition().duration(2500).attr("cx",s.scale_x(500+next))
           .each("end",bounce);
       }
       bounce();     

  });
