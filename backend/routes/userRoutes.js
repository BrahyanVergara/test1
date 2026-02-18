import { Router } from 'express'; 
import { saveUser } from '../controllers/userControllers.js'; 

const router = Router(); 
router.post('/', saveUser); 
export default router; 