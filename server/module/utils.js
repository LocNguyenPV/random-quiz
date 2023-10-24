import * as fs from 'fs';

export function readFile(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        return data;
    } catch (err) {
        console.error(err);
    }
}

export function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};



export function writeArrayToFile(path, arr) {
    if (fs.existsSync(path)) return;
    var file = fs.createWriteStream(path);
    file.on('error', function (err) { console.error(err) });
    let count = 1;
    arr.forEach(value => file.write(`//// ${count++} ${value}\n`));
    file.end();
}

export async function appendFile(path, content, isIgnore = false) {
   await fs.readFile(path, 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            let obj = JSON.parse(data); //now it an object
            obj.data = obj.data.filter((ele) => { return ele !== content });
            if (isIgnore) {
                obj.ignore.push(content);
            } else {
                obj.done.push(content);
            }
            let json = JSON.stringify(obj); //convert it back to json
            fs.writeFileSync(path, json, 'utf8'); // write it back 
        }
    });
}