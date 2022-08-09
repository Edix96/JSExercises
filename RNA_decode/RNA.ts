const codonsDecoder = new Map<string, string>([
    ["AUG", "Methionine"],
    ["UUU", "Phenylalanine"],
    ["UUC", "Phenylalanine"],
    ["UUA", "Leucine"],
    ["UUG", "Leucine"],
    ["UCU", "Serine"],
    ["UCC", "Serine"],
    ["UCA", "Serine"],
    ["UCG", "Serine"],
    ["UAU", "Tyrosine"],
    ["UAC", "Tyrosine"],
    ["UGU", "Cysteine"],
    ["UGC", "Cysteine"],
    ["UGG", "Tryptophan"],
    ["UAA", "STOP"],
    ["UAG", "STOP"],
    ["UGA", "STOP"],
  ]);
  
  const decodeRNATS = (rna: string) => {
    const proteinNames: string[] = [];
  
    for (let i = 0; i < rna.length; i += 3) {
      const protein = rna.substring(i, i + 3);
      const proteinName = codonsDecoder.get(protein);
  
      if (proteinName === "STOP") return proteinNames;
      if (proteinName) proteinNames.push(proteinName);
    }
    return proteinNames;
  };
  
  console.log(decodeRNATS("AUGUUUUCUUAAAUG"));
  console.log(decodeRNATS(""));
  console.log(decodeRNATS("AUGUUUUCUAUG"));