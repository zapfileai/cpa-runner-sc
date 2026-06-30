const southCarolinaCities = [
  "Abbeville", "Adams Run", "Aiken", "Allendale", "Anderson",
  "Andrews", "Awendaw", "Aynor", "Ballentine", "Bamberg",
  "Barnwell", "Batesburg", "Beaufort", "Belton", "Bennettsville",
  "Bishopville", "Blacksburg", "Blenheim", "Bluffton", "Blythewood",
  "Boiling Springs", "Camden", "Cameron", "Campobello", "Cassatt",
  "Cayce", "Central", "Chapin", "Charleston", "Cheraw",
  "Chesnee", "Chester", "Chesterfield", "Clearwater", "Clemson",
  "Clinton", "Clover", "Columbia", "Conway", "Cowpens",
  "Cross Hill", "Dalzell", "Darlington", "Daufuskie Island", "Denmark",
  "Dillon", "Donalds", "Dorchester", "Due West", "Duncan",
  "Easley", "Edgefield", "Edisto Island", "Effingham", "Elgin",
  "Enoree", "Fair Play", "Fairfax", "Florence", "Folly Beach",
  "Fort Lawn", "Fort Mill", "Fountain Inn", "Gaffney", "Gaston",
  "Georgetown", "Gilbert", "Glendale", "Goose Creek", "Gramling",
  "Graniteville", "Gray Court", "Greenville", "Greenwood", "Greer",
  "Hampton", "Hanahan", "Hardeeville", "Harleyville", "Hartsville",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < southCarolinaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(southCarolinaCities[i]);
}

module.exports = { batches };
