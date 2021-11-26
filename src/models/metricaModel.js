var database = require("../database/config");

    function listarMetricaDeepin() {
        var query = `SELECT COUNT(fk_distro) as distros FROM usuario JOIN distro ON fk_distro = distro.id WHERE distro.id = 2;`;
        console.log("Executando a query SQL: \n" + query);
        return database.executar(query);
    }
    function listarMetricaCinnamon() {
        var query = `SELECT COUNT(fk_distro) as distros FROM usuario JOIN distro ON fk_distro = distro.id WHERE distro.id = 3;`;
        console.log("Executando a query SQL: \n" + query);
        return database.executar(query);
    }
    function listarMetricai3wm() {
        var query = `SELECT COUNT(fk_distro) as distros FROM usuario JOIN distro ON fk_distro = distro.id WHERE distro.id = 4;`;
        console.log("Executando a query SQL: \n" + query);
        return database.executar(query);
    }
    function listarMetricaXFCE() {
        var query = `SELECT COUNT(fk_distro) as distros FROM usuario JOIN distro ON fk_distro = distro.id WHERE distro.id = 5;`;
        console.log("Executando a query SQL: \n" + query);
        return database.executar(query);
    }
    
module.exports = {
    listarMetricaCinnamon,
    listarMetricaDeepin,
    listarMetricai3wm,
    listarMetricaXFCE
}
