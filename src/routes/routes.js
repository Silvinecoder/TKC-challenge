const accelerator = require('./accelerator');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('docker is awesome');
  });

  accelerator(app, fs);
};

module.exports = appRouter;
