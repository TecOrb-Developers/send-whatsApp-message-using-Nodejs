import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import promotionController from '@controllers/vendor/promotion';



// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    register: '/create',
    edit: '/edit/:id',
    details:'/detail/:id',
    list: '/list',
    expirelist: '/expire-list',
    delete: '/promotion-delete/:id',
    sendPromotionTocustomer: '/promotion-toCustomer',
    
} as const;

//****  Add****//
router.post(p.register, verifyAuthToken, schemaValidator(vendorPromotionSchema), async (req: any, res: Response) => {
    const data = await promotionController.registerPromotion(req.body, req.user.businessId);
    return res.status(CREATED).send({ data, code: CREATED, message: success.en.succssDefault })
});

//******** Edit********* */
router.put(p.edit, verifyAuthToken, schemaValidator(vendorPromotionSchema), async (req: any, res: Response) => {
    const data = await promotionController.editPromotion(req.body, req.params.id);
    return res.status(OK).send({ data, code: OK, message: success.en.succssDefault })
});
//***** Detail**** */
router.get(p.details, verifyAuthToken, async (req: Request, res: Response) => {
    const data = await promotionController.promotionProfile(req.params.id);
    return res.status(OK).send({ data, code: OK })
})
//****  List****//
router.get(p.list, verifyAuthToken, async (req: any, res: Response) => {
    const data = await promotionController.getPromotionList(req.query, req.user.businessId);
    return res.status(OK).send({ data, code: OK, message: success.en.succssDefault })
});

//**** Expire List****//

router.get(p.expirelist, verifyAuthToken, async (req: any, res: Response) => {
    const data = await promotionController.getExpirePromotionsList(req.query, req.user.businessId);
    return res.status(OK).send({ data, code: OK })
});


//******** delete********* */
router.put(p.delete, verifyAuthToken, async (req: Request, res: Response) => {
    const data = await promotionController.deletePromotion(req.params.id);
    return res.status(OK).send({ data, code: OK, message: success.en.succssDefault })
});

//******** Send promotions to customers********* */
router.post(p.sendPromotionTocustomer, verifyAuthToken, async (req: any, res: Response) => {
    const data = await promotionController.sendOffersTocustomer(req.body, req.user.businessId);
    return res.status(OK).send({ data, code: OK })
});
//******** Advertise Status********* */
router.put(p.advertiseStatus, verifyAuthToken, async (req: Request, res: Response) => {
    const data = await promotionController.statusAdvertise(req.body,req.params.id ,res);
    return res.status(OK).send({ data, code: OK, message: success.en.succssDefault })
});

//****  List By Id****//
router.get(p.listById, async (req: any, res: Response) => {
    const data = await promotionController.getPromotionListByID(req.query);
    return res.status(OK).send({ data, code: OK, message: success.en.succssDefault })
});

//******** Bulk Counts of users********* */
router.post(p.bulkUserCounts, verifyAuthToken, async (req: any, res: Response) => {
    const data = await promotionController.bulkUserCount(req.body, req.user.businessId);
    return res.status(OK).send({ data, code: OK })
});

// Export default
export default router;
