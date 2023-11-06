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
if __name__ == "__main__":
    rows = int(sys.argv[1])
    minlen = int(sys.argv[2])
    maxlen = int(sys.argv[3])
    random.seed()
    carriage = '\n'
    cg = CodeGenner(codewords)
    codecol = cg.gen_code(random.randint(minlen, maxlen))
    for _ in range(rows - 1):
        codecol += carriage + cg.gen_code(random.randint(minlen, maxlen))
    print(codecol)
