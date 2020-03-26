import * as express from 'express';
import * as path from 'path';
import apiRouter from './routes';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRouter);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
}); // This acts a catch-all bucket for a leaky faucet. It catches everything that doesn't have the '/api/' path

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
