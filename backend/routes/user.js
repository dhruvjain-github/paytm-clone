const express= require("express")
const {signup,signin,update}=require("../controller/usercontroller")
const {authMiddleware}=require("../middleware")
const {User}=require("../db")
const router=express.Router()

router.post("/signup",signup)
router.post("/signin",signin)
router.put("/",authMiddleware,update)
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports=router