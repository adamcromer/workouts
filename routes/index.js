const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

const withAuth = require('../middleware');

// API Routes
router.use("/api", apiRoutes);

router.use('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

// router.use('/workout', withAuth, function(req, res) {
//   res.send('Authenticated!');
// });

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
