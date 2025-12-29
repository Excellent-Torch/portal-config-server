// This file contains utility functions for validating portal configurations.

export const isValidMacAddress = (mac: string): boolean => {
  const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return macRegex.test(mac);
};

export const isValidPortalUrl = (url: string): boolean => {
  const urlRegex = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;
  return urlRegex.test(url);
};

export const hasRequiredFields = (portalConfig: any): boolean => {
  const requiredFields = ['portalUrl', 'mac', 'timezone', 'token'];
  return requiredFields.every(field => field in portalConfig);
};