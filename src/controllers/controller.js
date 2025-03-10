import {httpRequest} from "../configs/axiosConfig.js";
import ExampleModel from "../models/exampleModel.js";

export const renderSecondPage = async (req, res) => {
    res.render('secondPage');
}