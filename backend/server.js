const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello World.`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Arien Shibani", "location": "Bergen, Norway"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2010", "yearTo": "2013", "place": "Haugli Bakeri", "comment": "Bakte masse brød"}, {"yearFrom": "2015", "yearTo": "2018", "place": "Teknik Magasinet", "comment": "Salesman master chief"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "2011", "yearTo": "2013", "place": "Vardafjell VGS", "comment": "Studying"}, {"yearFrom": "2016", "yearTo": "2018", "place": "University of Bergen", "comment": "Bachelor in information sciences"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
