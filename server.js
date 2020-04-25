const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;
app.get('/api/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios.get(
      `https://corona.lmao.ninja/v2/countries/${id}`
    );
    console.log('Overall data fetched successfuly');
    // console.log(data);
    res.send({ data });
  } catch (e) {
    console.log({ error: 'Error fetching overall data' });
    res.status(400).send({ error: 'Error fetching overall data', response: e });
  }
});
app.get('/api/history/:name', async (req, res) => {
  try {
    const name = req.params.name;
    const { data } = await axios.get(
      `https://corona.lmao.ninja/v2/historical/${name}`
    );
    console.log('History fetched successfuly');
    // console.log(data);
    res.send({
      data,
    });
  } catch (e) {
    console.log({ error: 'Error fetching history data' });
    res.status(400).send({ error: 'Error fetching history data' });
  }
});
app.listen(port, () => console.log('server is on ' + port));
module.exports = app;
