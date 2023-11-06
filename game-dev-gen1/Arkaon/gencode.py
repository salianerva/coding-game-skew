import random
import sys

'''
Use this to generate code for Arkaon.

Can be used from command line by typing:

python gencode.py [n]

where n is the number of elements in the code
'''

class CodeGenner:
    codewords = dict()
    weighttotal = 0
    rawindex = []

    def __init__(self, words):
        self.codewords = words
        for word in self.codewords:
            self.rawindex.extend(words[word]*[word])
            self.weighttotal += words[word]
        random.seed()

    def set_words(self, words):
        self.codewords = words
        for word in self.codewords:
            self.rawindex.extend(words[word]*[word])
            self.weighttotal += words[word]

    def print_word_data(self):
        print("codewords:")
        print(self.codewords)
        print(f'weight total {self.weighttotal}')

    def sample_word(self):
        rind = random.randrange(0, self.weighttotal, 1)
        return self.rawindex[rind]


    def gen_code(self, len):
        code = ""
        separator = " - "
        if len <= 0:
            return code
        code = self.sample_word()
        for i in range(len-1):
            code += separator + self.sample_word()
        return code






codewords = {
    "Tyrion": 3,
    "Sirion": 3,
    "Tyrael": 3,
    "Antioch": 1,
    "Antion": 1,
    "Drepanon": 1,
    "Arcadyon": 3,
    "Azrafel": 3,
    "Exilion": 3,
    "Esdraelon": 3,
    "Edessa": 1,
    "Aurelian": 3,
    "Erenion": 1,
    "Exodion": 3,
    "Blazar": 2,
    "Florentia": 2,
    "Romanos": 2,
    "Rashion": 2,
    "Anaxion": 3,
    "Akaia": 3,
    "Phoenice": 2,
    "Erios": 1,
    "Eldarion": 2,
    "Noldorion": 2,
    "Hadrion": 3,
    "Arcadius": 3,
    "Karkadon": 3,
    "Katamon": 2,
    "Valia": 3,
    "Vastel": 2,
    "Aspera": 3,
    "Quazar": 2,
    "Delphion": 2,
    "Diabound": 2,
    "Honorius": 2,
    "Zoannes": 2,
    "Regulus": 3,
    "Pharazon": 2,
    "Morphos": 2,
    "Musai": 2,
    "Essendel": 2,
    "Eurion": 2,
    "Ashion": 2,
    "Ilya": 3,
    "Orion": 2,
    "Valios": 2,
    "Noraus": 3,
    "Warfaron": 4,
    "Adaside": 4,
    "Sharrukin": 3,
    "Sargon": 3,
    "Akkad": 1,
    "Syrus": 2,
    "Valrokar": 1,
    "Raidon": 2,
    "Wargradon": 4,
    "Eredion": 5,
    "Tyrios": 3,
    "Kaeronos": 3,
    "Coronis": 4,
    "Evangelion": 3,
    "Serangel": 3,
    "Azuron": 2,
    "Azalon": 3,
    "Escaflon": 2,
    "Lorion": 2,
    "Dioclon": 2,
    }

if __name__ == "__main__":
    len_code = int(sys.argv[1])
    cg = CodeGenner(codewords)
    print(cg.gen_code(len_code))
