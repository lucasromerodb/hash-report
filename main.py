from utils import folder, getHashFile
from customprints import getInfoByFile, printSystemSpecs, printSeparator
from collider import findCollision
import time
import json

fileSize = [1, 10, 100, 200, 500, 1000]
offset = 5

qtyOfHashes = 20
zeros = 10
bytesQtyToCollide = 2

report = {'report':[], 'system': {}}

for i in range(len(fileSize) - offset):
  fileName = 'file-' + str(fileSize[i]) + 'MB.bin'
  file = folder + fileName
  start = time.time()

  for j in range(qtyOfHashes):
    getHashFile(file)


  printSeparator(fileName)
  hashTime, hashRate = getInfoByFile(qtyOfHashes, start, fileSize[i])
  digest = getHashFile(file, True)
  collisionAttempts, collisionTime, collisionRate =  findCollision(digest, fileName, zeros, bytesQtyToCollide)

  thisReport = {
    'fileName': fileName,
    'sizeInMB': fileSize[i],
    'qtyOfHashes': qtyOfHashes,
    'hashTime': hashTime,
    'hashRate': hashRate,
    'collisionBytes': bytesQtyToCollide,
    'collisionAttempts': collisionAttempts,
    'collisionTime': collisionTime,
    'collisionRate': collisionRate
  }

  report['report'].append(thisReport)

arch, processor, platform = printSystemSpecs()

report['system'] = {
  'arch': arch,
  'platform': platform,
  'processor': '2.7 GHz Intel Core i5 (' + processor + ')',
  'ram': '8 GB 1867 MHz DDR3',
  'device': 'MacBook Pro (Retina, 13-inch, Early 2015)'
}

reportToJson = json.dumps(report)
reportFile = open('report.json', 'w')
reportFile.write(reportToJson)
reportFile.close()