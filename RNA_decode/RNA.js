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
    UGA: "STOP"
};
function decodeRNATS(RNA) {
    var codons = [];
    var protein = [];
    for (var _i = 0, _a = RNA.match(/.{1,3}/g); _i < _a.length; _i++) {
        var condon = _a[_i];
        var proteinName = codonsDecoder[condon];
        if (proteinName === "STOP") {
            break;
        }
        protein.push(proteinName);
    }
    return protein;
}
;
console.log(decodeRNATS("AUGUUUUCUUAAAUG"));
