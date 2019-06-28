from utils import folder, getHashFile
from customprints import getInfoByFile, printSystemSpecs, printSeparator
from collider import findCollision
import time
import json

fileSize = [1, 10, 100, 200, 500, 1000]
offset = 0

qtyOfHashes = 20
zeros = 10

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
  collisionAttempts1, collisionTime1, collisionRate1 =  findCollision(digest, fileName, zeros, 1)
  collisionAttempts2, collisionTime2, collisionRate2 =  findCollision(digest, fileName, zeros, 2)
  collisionAttempts3, collisionTime3, collisionRate3 =  findCollision(digest, fileName, zeros, 3)

  thisReport = {
    'fileName': fileName,
    'sizeInMB': fileSize[i],
    'qtyOfHashes': qtyOfHashes,
    'hashTime': hashTime,
    'hashRate': hashRate,
    'collision': [
      {
        'collisionBytes': 1,
        'collisionAttempts': collisionAttempts1,
        'collisionTime': collisionTime1,
        'collisionRate': collisionRate1
      },
      {
        'collisionBytes': 2,
        'collisionAttempts': collisionAttempts2,
        'collisionTime': collisionTime2,
        'collisionRate': collisionRate2
      },
      {
        'collisionBytes': 3,
        'collisionAttempts': collisionAttempts3,
        'collisionTime': collisionTime3,
        'collisionRate': collisionRate3
      },
    ]

  }

  report['report'].append(thisReport)

arch, processor, platform = printSystemSpecs()

report['system'] = {
  'arch': arch,
  'platform': platform,
  'processor': [
    '2.7 GHz Intel Core i5 (' + processor + ')',
    '3.0 GHz Intel Core i5-7400 (' + processor + ')',
  ],
  'ram': '8 GB 1867 MHz DDR3',
  'device': [
    'MacBook Pro (Retina, 13-inch, Early 2015)',
    'Desktop'
    ]
}

reportToJson = json.dumps(report)
reportFile = open('report.json', 'w')
reportFile.write(reportToJson)
reportFile.close()