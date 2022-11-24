import { Router } from 'express';

import promotionRoute from './whatsApp_message'


const baseRouter = Router();

// Setup routers
baseRouter.use('/promotion', promotionRoute)

// Export default.
export default baseRouter;