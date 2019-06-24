import random
import struct
from ticker import Ticker
from utils import buildData, getZeroQty
from customprints import printBinaryData, printInfo

def qtyBytesOfCollition(originalDigest, digest, bytesQty = 1):
    found = True

    for i in range(bytesQty):
        if originalDigest[i] != digest[i]:
            found = False
            break

    return found


def findCollision(originalDigest, fileName,  zeros = 9):
    topNumber = getZeroQty(zeros)

    originalFragment = originalDigest[0]

    tick = Ticker()
    attempts = 0

    bytesQty = 2
    found = False

    while not found:
        attempts += 1

        number = random.randint(0, topNumber)
        byteNum, digest, fragment = buildData(number)

        if qtyBytesOfCollition(originalDigest, digest, bytesQty):
            found = True
            bFile = struct.pack('I', 0)
            bNumber = struct.pack('I', number)

            printInfo(originalDigest, bFile, fileName, 'FRAGMENTO A ENCONTRAR', False)
            printInfo(digest, bNumber, number, 'COLISION PARCIAL')
            print('Colisión de', bytesQty,'byte(s)')
            print("\n> Intentos:", attempts)
            print('> Tiempo:', round(tick(), 2), 'ms.')

            break
