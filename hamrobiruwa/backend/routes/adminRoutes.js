// src/routes/adminRoutes.js

const { checkRole } = require('../middleware/roleMiddleware');

router.get('/admin-only', checkRole('admin'), adminController.adminOnlyEndpoint);
router.get('/manager', checkRole('manager'), adminController.managerEndpoint);
