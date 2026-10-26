import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Mount feature routers here, e.g. router.use('/events', eventsRouter);

export default router;
