const fs = require('fs');
const path = require('path')

module.exports = {
    loadData : function(filenameJSON){
        const productos= JSON.parse(fs.readFileSync(path.join(__dirname, `./${filenameJSON}.json`), "utf-8"))
        
        return productos
    },

    saveData: function (data, filenameJSON){ 
       const jsonData = JSON.stringify(data, null, 3); 
       fs.writeFileSync(path.join(__dirname, `./${filenameJSON}.json`), jsonData, 'utf-8');


    }

}
