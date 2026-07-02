const southCarolinaCities = [
  "Prosperity", "Reevesville", "Reidville", "Richburg", "Ridgeland",
  "Ridgeville", "Ridgeway", "Rock Hill", "Roebuck", "Saint George",
  "Saint Helena Island", "Saint Matthews", "Salem", "Saluda", "Santee",
  "Scranton", "Seneca", "Sharon", "Shaw", "Sheldon",
  "Simpsonville", "Six Mile", "Slater", "Smyrna", "Society Hill",
  "Spartanburg", "Springfield", "Sullivans Island", "Summerville", "Sumter",
  "Sunset", "Swansea", "Taylors", "Timmonsville", "Townville",
  "Travelers Rest", "Union", "Varnville", "Vaucluse", "Wadmalaw Island",
  "Wagener", "Walhalla", "Walterboro", "Warrenville", "West Columbia",
  "West Union", "Westminster", "Williamston", "Williston", "Winnsboro",
  "Woodruff", "Yemassee", "York",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < southCarolinaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(southCarolinaCities[i]);
}

module.exports = { batches };
