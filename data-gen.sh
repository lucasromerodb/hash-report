#! /bin/bash
mkdir files
dd if=/dev/urandom of=files/file-1MB.bin bs=1 count=1048576 # bytes (1MB)
# dd if=/dev/urandom of=files/file-10MB.bin bs=1 count=10485760 # bytes (10MB)
# dd if=/dev/urandom of=files/file-100MB.bin bs=1 count=104857600 # bytes (100MB)
# dd if=/dev/urandom of=files/file-200MB.bin bs=1 count=209715200 # bytes (200MB)
# dd if=/dev/urandom of=files/file-500MB.bin bs=1 count=524288000 # bytes (500MB)
# dd if=/dev/urandom of=files/file-1000MB.bin bs=1 count=1048576000 # bytes (1000MB)
# https://unix.stackexchange.com/questions/199863/create-many-files-with-random-content
