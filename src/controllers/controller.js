import {httpRequest} from "../configs/axiosConfig.js";
import TextBlock from "../models/textBlock.js";

export const renderHomePage = async (req, res) => {
    // const response = await httpRequest.get('/api/example')
    // const textBlock = TextBlock.fromJSON(response.data);
    const textBlock = new TextBlock('Title', 'Welcome to Advancing Film, your premier repository of film photography wisdom in today\'s digital era. Here, we celebrate the enduring art of film photography—a medium that continues to captivate with its unique blend of craftsmanship and nostalgia. Our carefully curated collection of articles, tutorials, and historical insights is designed to inform and inspire both seasoned professionals and budding enthusiasts alike. In a world where instant digital capture often prevails, we champion the deliberate and soulful process of shooting on film, ensuring that each frame tells its own timeless story. Join us as we explore the revival of this classic art form, and discover the magic that lies within every roll of film.');

    res.render('home', {textBlock});
}

export const renderSecondPage = async (req, res) => {
    res.render('secondPage');
}