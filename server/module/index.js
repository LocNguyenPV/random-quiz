import {readFile, writeArrayToFile, shuffle} from './utils.js'

function readData() {
    try {
        const data = readFile('./data/questions.js');
        return data.split("/// Question ///").filter(m => m !== '');
    } catch (err) {
        console.error(err);
    }
}

export default function generateQuestions(name, className) {
    let result = shuffle(readData());
    let sliceResult = result.slice(0, 5);
    writeArrayToFile(`.\\work\\${className}\\${name}.js`, sliceResult);
    // var file = fs.createWriteStream(`.\\work\\${name}.js`);
    // file.on('error', function (err) { console.error(err) });
    // let count = 1;
    // sliceResult.forEach(value => file.write(`//// ${count++} ${value}\n`));
    // file.end();
}
