cd ../
echo "Enter description of changes: "
read msgvar

git add .

git commit -m "$msgvar"

git push
