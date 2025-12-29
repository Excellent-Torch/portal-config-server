import { Portal } from '../models/portal';

export class PortalService {
  private portals: Portal[] = [];

  public addPortal(portal: Portal): void {
    // Check for duplicate portal name
    if (this.portals.some(p => p.name === portal.name)) {
      throw new Error('Portal with this name already exists');
    }
    this.portals.push(portal);
  }

  public getPortals(): Portal[] {
    return this.portals;
  }

  public validatePortal(portal: Portal): boolean {
    // Add validation logic here, e.g., checking required fields
    return !!(portal.portalUrl && portal.mac);
  }
}