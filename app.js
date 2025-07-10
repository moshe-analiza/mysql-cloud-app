import express from 'express';
import configRoutes from './routes/configRoutes.js';
import { config } from 'dotenv';
config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

configRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
