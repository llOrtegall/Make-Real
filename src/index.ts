import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server Is Running On  http://localhost:${PORT}`);
});