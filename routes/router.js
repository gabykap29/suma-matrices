import express from 'express';
import path from 'path';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import { sumaMatrices } from '../controllers/suma.controller.js';
const router = express.Router();


const __dirname = dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname,"../views/", 'index.html');
router.get('/', (req, res) => {
  res.sendFile(file);
});


//api

router.post('/suma', sumaMatrices);

export default router;