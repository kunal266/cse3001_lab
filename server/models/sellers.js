const express = require("express");
const router = express.Router();
const seller = require("../models");
const auth = require("../middlewares/auth");
//Sellers model
router.get("/sellers", (req, res) => {
    seller.sellers
      .find()
      .populate()
      .sort({ id: -1 })
      .then(items => res.json(items));
  });
  
  // @routes  POST api/items
  // @desc    CREATE An Item
  // @access  Public
  router.post("/sellers",auth, (req, res,next) => {
    const {Sname , products,state} = req.body
    console.log(Sname)
     console.log(products)
    try{const newSeller = new Seller({
        Sname:Sname,
      
      // Sname:Sname,
      //console.log(seller),
      products: products.map((product) => (product)),
      state:state
    });
  
    newSeller.save().then(seller => res.json(seller));}
    catch(err){
      next(err);
      console.log(err)
    }
    
  });
  
  // @routes  POST api/items/:id
  // @desc    DELETE An Item
  // @access  Public
  router.delete("/sellers/:id", (req, res) => {
    console.log()
    seller.sellers.findById(req.params.id)
      .then(item => item.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false, error: err }));

  });
  router.get("/sellers/:Sname", (req, res) => {
    const {Sname} = req.params;
    // const user = seller.sellers.findById(id).populate("Sellers")
    // console.log(user)
    seller.sellers
      .find({Sname:Sname}, function(err, users) {
        if(err) {
            res.send(err);
            return;
      }
        res.json(users);
        console.log(users[0].products)
  });
}
  )
 
   


module.exports = router
