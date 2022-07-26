var codonsDecoder : { [key: string]: string }  = {
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


function decodeRNATS(RNA: string): string[] {
    let codons: string[] = [];

    var protein: string[] = [];
    for(var condon of RNA.match(/.{1,3}/g)) {
        let proteinName = codonsDecoder[condon];
        if (proteinName === "STOP") {
            break;
        }
        protein.push(proteinName);
    }
    return protein;
};

console.log(decodeRNATS("AUGUUUUCUUAAAUG"));

