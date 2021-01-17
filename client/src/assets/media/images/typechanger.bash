files=`ls -1 *.JPEG`

# Rename all *.txt to *.text
for f in *.JPEG; do 
	mv -- "$f" "${f%.JPEG}.jpg"
done