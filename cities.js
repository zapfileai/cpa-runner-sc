const southCarolinaCities = [
  "Heath Springs", "Hemingway", "Hilton Head Island", "Hodges", "Holly Hill",
  "Hollywood", "Honea Path", "Hopkins", "Huger", "Inman",
  "Irmo", "Isle Of Palms", "Jamestown", "Jefferson", "Jenkinsville",
  "Johns Island", "Johnsonville", "Johnston", "Kershaw", "Kinards",
  "Kingstree", "Ladson", "Lake City", "Lamar", "Lancaster",
  "Landrum", "Lane", "Langley", "Latta", "Laurens",
  "Leesville", "Lexington", "Liberty", "Liberty Hill", "Little Mountain",
  "Little River", "Lockhart", "Longs", "Loris", "Lugoff",
  "Lyman", "Manning", "Marietta", "Marion", "Martin",
  "Mauldin", "Mcbee", "Mccormick", "Modoc", "Moncks Corner",
  "Monetta", "Moore", "Mount Pleasant", "Mullins", "Murrells Inlet",
  "Myrtle Beach", "Nesmith", "Newberry", "Nichols", "Ninety Six",
  "North Augusta", "North Charleston", "North Myrtle Beach", "Okatie", "Olanta",
  "Orangeburg", "Pageland", "Pamplico", "Parksville", "Patrick",
  "Pauline", "Pawleys Island", "Pelzer", "Pendleton", "Pickens",
  "Piedmont", "Pinewood", "Pinopolis", "Pomaria", "Port Royal",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < southCarolinaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(southCarolinaCities[i]);
}

module.exports = { batches };
