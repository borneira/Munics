// Invocar con frida -U --no-pause -l crack.js -f owasp.mstg.uncrackable1

Java.perform(function() {

    var checkRootClass = Java.use("sg.vantagepoint.a.c");

    checkRootClass.a.implementation = function(v) {
         console.log("No hago nada en a()");
          return false;
      }
    checkRootClass.b.implementation = function(v) {
        console.log("No hago nada en b()");
         return false;
     }
    checkRootClass.c.implementation = function(v) {
        console.log("No hago nada en c()");
         return false;
     }

    console.log("Eliminada verificación de root")

    var AESClass = Java.use("sg.vantagepoint.a.a");
    
    AESClass.a.implementation = function(bArr, bArr2) {
    
    console.log("Dentro de sg.vantagepoint.a.a.a()");

    var secreto = this.a(bArr, bArr2);
    
    console.log("Secreto: " + arrayToString(secreto));

    return secreto;
    };


    function arrayToString(bArr) {
        var str = "";
        for (var i = 0; i < bArr.length; i++) {
        str = str + String.fromCharCode(bArr[i]);
        }
        return str;
        }



})