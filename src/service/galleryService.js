import path from "path";
import {__dirname} from "../../index.js";
import fs from "fs";

export function getImageUrls() {
    const imagesPath = path.join(__dirname, 'src', 'images');
    return new Promise((resolve, reject) => {
        fs.readdir(imagesPath, (err, files) => {
            if (err) {
                return reject(err);
            }

            // Filter for .png files
            const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

            // Map filenames to URLs
            const imageUrls = pngFiles.map(file => `/images/${file}`);

            resolve(imageUrls);
        });
    })
}