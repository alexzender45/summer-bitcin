var fs = require('fs'); 
var parse = require('csv-parse');
const withParentId = [];
var parser = parse({columns: true}, function (err, records) {
    records.forEach(element => {
        withParentId.push(element.tx_id.split(","))
       fs.writeFile("block.txt", withParentId, function(err) {
      if (err) {
        return err;
    }
});
    });
});

fs.createReadStream('mempool.csv').pipe(parser);
