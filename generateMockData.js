/**
 * Created by tom on 16/12/2016.
 */

let data = {};

for(let i = 0; i < Math.pow(10, 5); i++) {
    data[i] = {
        number: i,
        timestamp: Date.now(),
        status: i % 1000 === 0 ? 'active' : 'inactive',
    }
}

require('fs').writeFileSync('data.json', JSON.stringify(data));