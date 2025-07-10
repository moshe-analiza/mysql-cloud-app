import riddleRoutes from './riddleRoutes.js';

export default function configRoutes(app) {
  app.use('/api/riddles', riddleRoutes);
}