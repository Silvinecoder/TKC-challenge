const path = require('path');
const Graph = require('node-dijkstra');

const route = new Graph();

// dijkstra algorithm to find the cheapest path
const dijkstra = () => {
  route.addNode('SOL', { PRX: 90, SIR: 80, RAN: 100, ARC: 500, ALD: 200 });
  route.addNode('PRX', { SOL: 90, SIR: 10, FOM: 10 });
  route.addNode('SIR', { SOL: 100, PRX: 100, CAS: 200 });
  route.addNode('CAS', { SIR: 200, PRO: 80 });
  route.addNode('PRO', { CAS: 80, DEN: 5 });
  route.addNode('DEN', { ARC: 120, FOM: 20 });
  route.addNode('RAN', { SOL: 100, DEN: 100 });
  route.addNode('ARC', { SOL: 200, DEN: 2, VEG: 220 });
  route.addNode('FOM', { DEN: 8, ALT: 140 });
  route.addNode('ALT', { PRX: 150, ALS: 1 });
  route.addNode('VEG', { ALT: 220, ALD: 320 });
  route.addNode('ALD', { SOL: 250, DEN: 3, VEG: 580, ALS: 1 });
  route.addNode('ALS', { FOM: 9, ALD: 160 });
};

const getAccelerator = (app, fs) => {
  const readFile = (
    callback,
    returnJson = false,
    dbPath = '../db/acceleratorTable.json',
    encoding = 'utf8'
  ) => {
    fs.readFile(path.join(__dirname, dbPath), encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  // Getting all of the accelerators
  app.get('/accelerators', (req, res) => {
    readFile((data) => {
      res.send(data);
    }, true);
  });

  // Getting the accelerators ID
  app.get('/accelerators/:id', (req, res) => {
    readFile((data) => {
      res.send(
        data.filter((element) => element.id === req.params.id.toUpperCase())
      );
    }, true);
  });

  // getting the cheapest accelerator ID to the target accelerator ID
  app.get('/accelerators/:id/to/:targetID', (req, res) => {
    dijkstra();

    res.send(
      route.path(req.params.id.toUpperCase(), req.params.targetID.toUpperCase())
    );
  });

  app.get('transport/:distance?passangers=:number&parking=:days');
};

module.exports = getAccelerator;
