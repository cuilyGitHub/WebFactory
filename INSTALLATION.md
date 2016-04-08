# Install NodeJS

    curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash - 
    sudo apt-get install -y nodejs

# Install Gulp  

    npm install --global gulp  

# Update NPM packages  

    npm install vendor/gulp-html-extract -force  

# Debug your Gulp  

    node debug $(which gulp) default  


