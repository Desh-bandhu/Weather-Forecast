git init

git status

git add src/
git add .

git commit -m "Init commit"


//Setting up SSH keys
1)Search for ssh keys
 ls -a -l ~/.ssh

ls means all list shows
a means it shows all hidden files and folders
~/.ssh means seach in home directory ~ for .ssh files

2)Generate ssh
ssh-keygen -t rsa -b 4096 -C "deshbandhugupta4@gmail.com"

t means type
rsa is algorithm
b means bits


it Generate two files
id_rsa- it is a secret key available only in our machine 
and id_rsa.pub is public key, it is share with github & heroku


3)Register new private key files
eval "$(ssh-agent -s)"

4)Register the file
ssh-add ~/.ssh/id_rsa

----------------------
setup in github
create repository
in setting add ssh key
git remote add origin https://github.com/Desh-bandhu/Weather-Forecast.git
get key from terminal--- cat ~/.ssh/id_rsa.pub --- it creates key
ssh -T git@github.com
yes
git branch -u origin machine
git push -u origin main
----------------------

Deploying Node.js to heroku

add ssh keys to heroku---heroku keys:add

create app on heroku--- heroku create db-weather-info-application

setup package.json---start node src/app.js

change listen or localhost url---process.env








