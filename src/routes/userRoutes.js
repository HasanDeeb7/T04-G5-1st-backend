import express from "express"
import { addUser, changeRole, deleteUser, getUsers, updateUser, changeMembership  } from "../controllers/userController.js"
import { checkPass, checkUserID, checkUsername, updatePass} from "../middlewares/userMiddleware.js"
const userRouter = express.Router()

userRouter.get('/read', getUsers)
userRouter.post('/add', checkUsername, checkPass, addUser)
userRouter.delete('/delete',checkUserID, deleteUser)
userRouter.patch('/update',checkUserID, updatePass, updateUser)
userRouter.patch('/update/role', checkUserID, changeRole)
userRouter.patch('/update/membership', checkUserID, changeMembership )

export default userRouter