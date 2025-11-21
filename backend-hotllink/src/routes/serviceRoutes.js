const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/cars', serviceController.getCars);
router.get('/translators', serviceController.getTranslators);
router.get('/city-guide', serviceController.getCityGuide);
router.post('/trip-planner', serviceController.tripPlanner);
router.post('/contact', serviceController.contact);

module.exports = router;
