from gencode import CodeGenner,codewords
import sys
import random

'''
Use this to generate code for Arkaon.

Can be used from command line by typing:

python colgen.py [rows] [minlen] [maxlen]

where [cols] is the number of rows of code

[minlen] is the minimum length of the row

[maxlen] is the maximum length of the row
'''
symbols = ["::","|", "||", ">>"]
def subgen(minlen, maxlen, mincomp, maxcomp, cg):
    retstr = ""
    random.seed()
    complen = random.randint(mincomp, maxcomp)
    for i in range(complen):
        gcode = cg.gen_code(random.randint(minlen, maxlen))
        if i > 0:
            retstr += " " + symbols[random.randint(0,3)]
            retstr += " [" + gcode + "]"
        else:
            retstr += "[" + gcode + "]"
    return retstr



if __name__ == "__main__":
    rows = int(sys.argv[1])
    minlen = int(sys.argv[2])
    maxlen = int(sys.argv[3])
    random.seed()
    carriage = '\n'
    cg = CodeGenner(codewords)
    codecol = subgen(minlen, maxlen, 3, 5, cg)
    for _ in range(rows - 1):
        codecol += carriage + subgen(minlen, maxlen, 3, 5, cg)
    print(codecol)
