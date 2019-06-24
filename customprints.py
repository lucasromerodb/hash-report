import time
import platform
import os

def printSystemSpecs():
    print('\n\n\n-------------------')
    print('Arqitectura:', platform.machine())
    print('Procesador :', platform.processor())
    print('Plataforma :', platform.platform())
    # not available on macOS
    # mem_bytes = os.sysconf('SC_PAGE_SIZE') * os.sysconf('SC_PHYS_PAGES')  # e.g. 4015976448
    # mem_gib = mem_bytes/(1024.**3)  # e.g. 3.74
    # print('Memoria RAM:', int(mem_gib), 'GB')
    print('-------------------')


def getInfoByFile(hashAmmount, start, fileSize):
    end = time.time() - start
    hashRate = round(hashAmmount/end, 2)
    print('\n||||||||||||| HASHEANDO DATOS |||||||||||||\n')
    print('Archivo de', fileSize, 'MB hasheado', hashAmmount,'veces en %s seg.' % round(end, 2) )
    print('Hashrate', round(hashAmmount/end, 2), 'hashes/seg.')
    print(fileSize, ',', round(end, 2), ',', hashRate, sep = '')


def printBinaryData(text, data, spacer = '', reverse = False,  breakOn = 4):
    hashStr = ''

    for i in range(len(data)):
        j = i + 1
        iStr = format(data[i], '08b') # Se formatea el numero
        if reverse: hashStr = iStr + spacer + hashStr # Menos significativo a la derecha
        else: hashStr += iStr + spacer # Los appendeo de izquierda a derecha

        if breakOn != 0 and j % breakOn == 0 and j <= 32 and j != len(data):
            hashStr += '\n'


    print('\n>', text, 'en bits')
    print(hashStr)


def printInfo(digest, byteNum, data, text = 'RESULTADO', isFile = True):
    print('\n|||||||||||||',text,' |||||||||||||\n')
    print('Dato:', data)
    # print("Fragmento[0]:", format(digest[0], '08b'))
    if isFile: printBinaryData('Dato', byteNum, ' ', True)
    printBinaryData('Digest', digest, ' ')


def printSeparator(fileName):
    print('\n\n\n\n\n\n#########', fileName, '#########')