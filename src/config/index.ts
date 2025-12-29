import { config } from 'dotenv';

config();

export const SERVER_PORT = process.env.SERVER_PORT || 3000;
export const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/portal-config';
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000'];