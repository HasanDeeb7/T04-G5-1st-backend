import express from "express"
import { addUser, changeRole, deleteUser, getUsers, updateUser, changeMembership, signIn  } from "../controllers/userController.js"
import { validatePass, checkUserID, checkUsername, updatePass, validateUsername, signInUser, signInPass} from "../middlewares/userMiddleware.js"
const userRouter = express.Router()

userRouter.get('/read', getUsers)
userRouter.post('/add', checkUsername, validateUsername,validatePass, addUser)
userRouter.delete('/delete',checkUserID, deleteUser)
userRouter.patch('/update',checkUserID, updatePass, updateUser)
userRouter.patch('/update/role', checkUserID, changeRole)
userRouter.patch('/update/membership', checkUserID, changeMembership )
userRouter.get('/signin', signInUser, signInPass, signIn)

export default userRouter