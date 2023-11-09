const express = require('express');
const router = express.Router();
const { protect } = require('../midlewhere/auth');

const MEE = require('../controlleurs/me')
const { rest } = require('../controlleurs/me')

router.route('/')
  .get(protect, MEE.GetME)
  .delete(protect, MEE.deleteMe)
  .put(protect, MEE.UpdateMe)

router.route('/rest')
  .put(MEE.RestMe)

module.exports = router;