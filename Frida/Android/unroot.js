
// Invocar con frida -U --no-pause -l unroot.js -f owasp.mstg.uncrackable1

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

})