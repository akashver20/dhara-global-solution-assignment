const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Mock certificate data (replace this with your actual verification logic)
const validCertificateId = '12345';

app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS, and JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/verify','', (req, res) => {
  const certificateId = req.query.certificateId;

  if (certificateId === validCertificateId) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
