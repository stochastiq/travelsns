var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name: "Salmon Creek", 
    image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Mauris dictum facilisis augue. Nullam at arcu a est sollicitudin euismod. Phasellus et lorem id felis nonummy placerat. Integer pellentesque quam vel velit. Etiam bibendum elit eget erat. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Aenean id metus id velit ullamcorper pulvinar. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Phasellus faucibus molestie nisl. Nullam sit amet magna in magna gravida vehicula. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Phasellus et lorem id felis nonummy placerat. Mauris metus. Mauris dictum facilisis augue. Etiam quis quam. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus."
    },
    {name: "Granite Hill",
    image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Mauris dictum facilisis augue. Nullam at arcu a est sollicitudin euismod. Phasellus et lorem id felis nonummy placerat. Integer pellentesque quam vel velit. Etiam bibendum elit eget erat. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Aenean id metus id velit ullamcorper pulvinar. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Phasellus faucibus molestie nisl. Nullam sit amet magna in magna gravida vehicula. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Phasellus et lorem id felis nonummy placerat. Mauris metus. Mauris dictum facilisis augue. Etiam quis quam. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus."    
    },
    {name: "Mountain Goat's Hill",
    image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Mauris dictum facilisis augue. Nullam at arcu a est sollicitudin euismod. Phasellus et lorem id felis nonummy placerat. Integer pellentesque quam vel velit. Etiam bibendum elit eget erat. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Aenean id metus id velit ullamcorper pulvinar. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Phasellus faucibus molestie nisl. Nullam sit amet magna in magna gravida vehicula. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Phasellus et lorem id felis nonummy placerat. Mauris metus. Mauris dictum facilisis augue. Etiam quis quam. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus."
    }];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        
        // // Add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //              console.log(err);
        //          }else{
        //              console.log("added a campground");
        //              // create a comment
        //              Comment.create(
        //                 {text: "this place is great",
        //                  author: "homer"
        //                 }, function(err, comment){
        //                  if(err){
        //                      console.log(err);
        //                  }else{
        //                  campground.comments.push(comment);
        //                  campground.save();
        //                  console.log("Created new comment");
        //                  }
        //              });
                     
        //          }
        //          });
        //     });
        });
}


module.exports = seedDB;
