const router = require('express').Router();

// Sample route for this second set of routes
router.get('/example', (req, res) => {
  try {
    res.json({ message: 'This is an example route from the second set of routes' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
