import express from "express"
import{createGymPlan} from "../controllers/gymPlanController.js"
import{getAllGymPlans } from "../controllers/gymPlanController.js"
import{getGymPlanById} from "../controllers/gymPlanController.js"
import{deleteGymPlan} from "../controllers/gymPlanController.js"
import{updateGymPlan}from "../controllers/gymPlanController.js"
const gymPlanRouter = express.Router()



gymPlanRouter.post('/add' , createGymPlan)
gymPlanRouter.get('/read', getAllGymPlans)
gymPlanRouter.get('/read/id',getGymPlanById)
gymPlanRouter.delete('/delete',deleteGymPlan)
gymPlanRouter.patch('/update',updateGymPlan)



 export default gymPlanRouter