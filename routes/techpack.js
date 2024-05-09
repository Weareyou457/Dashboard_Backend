const techpack = require("../modals/techpack")

const router = require("express").Router()

const upload = require("../middleware/upload")

router.post("/add", upload.single("pdf"), async (req, res) => {
    try {
       
        const newpost = new techpack(req.body)

        if (req.file) {
            newpost.pdf = req.file.filename
        }
        const postsave = await newpost.save();
        if (postsave) {
            res.status(200).json({
                status: true, message: "teck added Succesully"
            })
        }
    } catch (error) {
        res.status(500).json({status:false,message:"Error"});
    }
});



router.put("/update/:id", async (req, res) => {
    try {
        const update = await techPack.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })

        if (update) {
            res.status(200).json({ status: true, message: "Teck Pack data Update", json: update })
        }

    } catch (error) {
        res.status(500).json({ status: false, message: "Teck Pack Not Update", json: error })
    }
})



router.delete("/delete/:id", async (req, res) => {

    try {
        const tech = await techPack.findById({ _id: req.params.id });

        if (tech) {
            techpack.findByIdAndDelete({ _id: req.params.id }).then(() => {
                res.status(200).json({ status: true, message: "Teck Pack Delelted Found" })
            })
        } else {
            res.status(200).json({ status: false, message: "Teck Pack Not Found" })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: "error", errormessage: error })
    }
})


// GET ALL USER 

router.get("/get", (req, res) => {
    techpack.find().then(users => {
        res.status(200).json({ status: true, message: "Teck Pack Fetch Sucesfullly", data: users })
    }).catch(error => {
        res.status(500).json({ status: false, message: "no vendor", errormessage: error })
    })
})

// GET ONE USER

router.get("/get/:id", async (req, res) => {
    try {
        const tech = await techpack.findById({ _id: req.params.id })
        if (tech) {
            res.status(200).json({ status: true, message: "Teck Pack Found Succesfully", data: tech })
        }
        else {
            res.status(200).json({ status: false, message: "Teck Pack Not Found" })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: "error", errormessage: error })
    }
})




module.exports = router