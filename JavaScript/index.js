// Reads Data from Excel file.

const runXLSX = document.getElementById("run-XLSX");

runXLSX.onclick = function() {

    document.getElementById("text").innerHTML = '';

    alasql(['SELECT * FROM XLSX("S:\Policy Production Template\PlanetPress Builds.xlsx")']).then(function(data){

        console.log(data);

        for(var i = 0; i < data[0].length; i++)
        {
            for(var k in data[0][i])
            {
                console.log(k);
                document.getElementById("text").innerHTML += "<p>" + k + ':' + data[0][i][k] + "<p/>";
            }
        }
    });
}