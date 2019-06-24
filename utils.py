import hashlib
import struct

folder = '/Users/lucas/Documents/development/carq-hashing/hash-file-poc/files/'

def getHashFile(filename, returning = False):
    h = hashlib.sha256()

    with open(filename, 'rb') as file:
        chunk = 0
        while chunk != b'': # loop till the end of the file
            chunk = file.read(1024) # read only 1024 bytes at a time
            h.update(chunk)

    if returning: return h.digest()


def getHashData(data):
    h = hashlib.sha256()
    h.update(data)
    digest = h.digest()

    return digest


def buildData(n, digestIndex = 0):
    nInBytes = struct.pack('I', n)
    digest = getHashData(nInBytes)
    fragment = digest[digestIndex]

    return nInBytes, digest, fragment


def getZeroQty(qty):
    return 1 * (10 ** qty)