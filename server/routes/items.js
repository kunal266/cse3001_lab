const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
// Item model
const item = require("../models");

// @routes  GET api/items
// @desc    GET All Items
// @access  Public
router.get("/items", (req, res) => {
  item.Item
    .find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @routes  POST api/items
// @desc    CREATE An Item
// @access  Public
router.post("/items",auth, (req, res,next) => {
   const {name,soldby} = req.body
  try{const newItem = new Item({
   
    name:name,
    soldby:soldby.map(seller => (seller))
  })

  newItem.save().then(item => res.json(item));}
  catch(err){
    next(err);
    console.log(err)
  }
  
});

// @routes  POST api/items/:id
// @desc    DELETE An Item
// @access  Public
router.delete("/items/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false, error: err }));
});

router.get("/items/:itemm", (req, res) => {
  const {itemm} = req.params;
  // const user = seller.sellers.findById(id).populate("Sellers")
  // console.log(user)
  item.Item
    .find({name:itemm}, function(err, curritem) {
      if(err) {
          res.send(err);
          return;
    }
      res.json(curritem);
      console.log(curritem[0].soldby)
});
})


module.exports = router;
