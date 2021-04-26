function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  };

  function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
  };

Interceptor.attach(Module.findExportByName(null, "SetClipboardData"), {

    onEnter: function(args) {
      var ptr = args[1].readPointer();
      if (ptr) {
      var str = ab2str(ptr.readByteArray(32));
      console.log("Copiado: "+ str);
 //     var holaStr = "Hola!                      ";
 //     ptr.writeByteArray(str2ab(holaStr),32); 
      }

    },
  
  });  