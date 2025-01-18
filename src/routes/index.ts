import { Router } from 'express';
import useragent from 'express-useragent';

const rotas = Router();
rotas.use(useragent.express());

export default rotas;