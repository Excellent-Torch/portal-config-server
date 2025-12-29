import express from 'express';
import bodyParser from 'body-parser';
import { setRoutes } from './routes/portalRoutes';
import { config } from './config';

const app = express();
const PORT = config.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setRoutes(app);

app.post('/portals', async (req, res) => {
  try {
    const portalConfig = req.body;
    // Validate portalConfig (add more validation as needed)
    if (!portalConfig || !portalConfig.name || !portalConfig.url) {
      return res.status(400).json({ error: 'Missing portal name or url' });
    }
    // Add portal using service
    const result = await portalService.addPortal(portalConfig);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});