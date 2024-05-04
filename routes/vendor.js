const vendor = require("../modals/vendor")

const router = require("express").Router()


router.post("/add", async (req, res) => {
    
    try {
        
        const newvendor = new vendor({
            name: req.body.name,
            contact: req.body.contact,
            performance: req.body.performance,
            rating:req.body.rating,

        })

        await newvendor.save()
        res.status(200).json({"data":newvendor,"message":"Vendor Entry Succefully Complete"})
    } catch (error) {
        res.status(500).json(error)
    }
})



router.put("/update/:id", async (req, res) => {
    try {

       
        const update = await vendor.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })

        if (update) {
            res.status(200).json({ status: true, message: "vendor data Update", json: update })
        }

    } catch (error) {
        res.status(500).json({ status: false, message: "vendor Not Update", json: error })
    }
})



router.delete("/delete/:id", async (req, res) => {

    try {
        const tech = await vendor.findById({ _id: req.params.id });

        if (tech) {
            vendor.findByIdAndDelete({ _id: req.params.id }).then(() => {
                res.status(200).json({ status: true, message: "vendor Delelted Found" })
            })
        } else {
            res.status(200).json({ status: false, message: "vendor Not Found" })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: "error", errormessage: error })
    }
})


// GET ALL USER 

router.get("/get", (req, res) => {
    vendor.find().then(users => {
        res.status(200).json({ status: true, message: "vendor Fetch Sucesfullly", data: users })
    }).catch(error => {
        res.status(500).json({ status: false, message: "no vendor", errormessage: error })
    })
})

// GET ONE USER

router.get("/get/:id", async (req, res) => {
    try {
        const tech = await vendor.findById({ _id: req.params.id })
        if (tech) {
            res.status(200).json({ status: true, message: "vendor Found Succesfully", data: tech })
        }
        else {
            res.status(200).json({ status: false, message: "vendor Not Found" })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: "error", errormessage: error })
    }
})




module.exports = router