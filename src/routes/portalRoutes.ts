import { Router } from 'express';
import PortalController from '../controllers/portalController';

const router = Router();
const portalController = new PortalController();

const setRoutes = (app) => {
  app.use('/api/portals', router);
  
  router.post('/', portalController.addPortal.bind(portalController));
  router.get('/', portalController.getPortals.bind(portalController));
};

export default setRoutes;