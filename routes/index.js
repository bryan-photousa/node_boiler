const router = require("express").Router();
const clientRoutes = require("./client.routes");
const testersRoutes = require("./testers.routes");



module.exports = router;

// check authentication for all requests

// API routes (group routing modules here - no empty lines between)
router.use("/api/testers", testersRoutes);


// API error handlers (API routes must be registered before this)
useAPIErrorHandlers(router);

// register client routes
router.use(clientRoutes);

function useAPIErrorHandlers(router) {
  // Handle API 404
  router.use("/admin/api/*", (req, res, next) => {
    res.sendStatus(404);
  });

  // Handle API 500
  router.use((err, req, res, next) => {
    // If the error object doesn't exists
    if (!err) {
      return next();
    }

    // Log it
    console.error(err.stack);

    // Redirect to error page
    res.sendStatus(500);
  });
}
