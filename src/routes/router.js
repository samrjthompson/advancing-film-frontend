import express from 'express';
import path from 'path';
import catchAsync from "../utils/catchAsync.js";
import * as controller from "../controllers/controller.js";
import {fileURLToPath} from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Homepage
router.route("/")
    .get(catchAsync(controller.renderHomePage))

router.route("/gallery")
    .get(catchAsync(controller.renderGallery))

router.route("/services")
    .get(catchAsync(controller.renderServices))

export default router;
