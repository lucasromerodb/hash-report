  # SOURCE: https://www.programiz.com/python-programming/examples/hash-file
from utils import folder, getHashFile
from customprints import getInfoByFile, printSystemSpecs, printSeparator
from collider import findCollision
import time

fileSize = [1, 10, 100, 200, 500, 1000]
offset = 3

qtyOfHashes = 20
zeros = 9

# results = []

# infoReport = {
#   file: fileName,
#   qtyOfHashes: qtyOfHashes,
#   hashTime: '',
#   hashRate: '',
#   collisionBytes: '',
#   collisionAttempts: '',
#   collisionTime: ''
# }


for i in range(len(fileSize) - offset):
  fileName = 'file-' + str(fileSize[i]) + 'MB.bin'
  file = folder + fileName
  start = time.time()

  for j in range(qtyOfHashes):
    getHashFile(file)

  printSeparator(fileName)
  getInfoByFile(qtyOfHashes, start, fileSize[i])
  digest = getHashFile(file, True)
  findCollision(digest, fileName, zeros)


printSystemSpecs()