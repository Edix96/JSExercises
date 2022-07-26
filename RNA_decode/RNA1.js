var codonsDecoder = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

function decodeRNA(RNA) {
  var codons = RNA.match(/.{1,3}/g);

  var proteins = [];
  for (var codon of codons) {
    let protein = codonsDecoder[codon];
    if (protein === "STOP") {
      break;
    }
    proteins.push(protein);
  }
  return proteins;
}

function decodeRNA2(RNA) {
  var proteins = [];
  for (var i = 0; i < RNA.length; i += 3) {
    var codon = RNA.substring(i, i + 3);
    var protein = codonsDecoder[codon];
    if (protein === "STOP") {
      break;
    }
    proteins.push(protein);
  }
  return proteins;
}

console.log("Decode 1:", decodeRNA("AUGUUUUCUUAAAUG"));
console.log("Decode 2:", decodeRNA2("AUGUUUUCUUAAAUG"));
