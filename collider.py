import random
import struct
import time
from utils import buildData, getZeroQty
from customprints import printBinaryData, printInfo

def qtyBytesOfCollition(originalDigest, digest, bytesQty = 1):
    found = True

    for i in range(bytesQty):
        if originalDigest[i] != digest[i]:
            found = False
            break

    return found


def findCollision(originalDigest, fileName,  zeros = 9, bytesQty = 1):
    topNumber = getZeroQty(zeros)

    originalFragment = originalDigest[0]

    startTime = time.time()
    endTime = 0
    attempts = 0

    found = False

    while not found:
        attempts += 1

        number = random.randint(0, topNumber)
        byteNum, digest, fragment = buildData(number)

        if qtyBytesOfCollition(originalDigest, digest, bytesQty):
            found = True
            bFile = struct.pack('q', 0)
            bNumber = struct.pack('q', number)
            endTime = time.time() - startTime

            printInfo(originalDigest, bFile, fileName, 'FRAGMENTO A ENCONTRAR', False)
            printInfo(digest, bNumber, number, 'COLISION PARCIAL')
            print('Colisión de', bytesQty,'byte(s)')
            print("\n> Intentos:", attempts)
            print('> Tiempo: %s seg.' % round(endTime, 2))
            print('> Collision rate: %s c/s' % round(attempts/endTime, 2))

            break

    return attempts, round(endTime, 2), round(attempts/endTime, 2)
