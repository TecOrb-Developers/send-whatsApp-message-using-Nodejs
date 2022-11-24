import { Router } from 'express';
import userRoute from './user';
import vendorRoute from './vendor';
import customerRoute from './customer';



// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/user', userRoute)
baseRouter.use('/vendor', vendorRoute)
baseRouter.use('/customer', customerRoute)


// Export default.
export default baseRouter;
