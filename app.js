(function() {
    var app = angular.module("app", []);

    app.controller('Scanner', function() {
        this.reference = "";
        this.filePath = "";
        this.fileContent = "";
        this.setFilePath = function() {
            this.filePath = "ans/" + this.reference + ".pdf";
            this.reference = "";
	    document.getElementById("ans").focus();
	    document.getElementById("ref").focus();
        };
    });
})();
