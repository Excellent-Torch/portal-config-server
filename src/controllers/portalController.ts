import { Request, Response } from 'express';
import { PortalService } from '../services/portalService';

export class PortalController {
  private portalService: PortalService;

  constructor() {
    this.portalService = new PortalService();
  }

  public addPortal = async (req: Request, res: Response): Promise<void> => {
    try {
      const portalData = req.body;
      const newPortal = await this.portalService.addPortal(portalData);
      res.status(201).json(newPortal);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  public getPortals = async (req: Request, res: Response): Promise<void> => {
    try {
      const portals = await this.portalService.getPortals();
      res.status(200).json(portals);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}