// 通用函数

 var g = function(args){
            if(args.substring(0,1) == '.'){
                return document.getElementsByClassName(args.substring(1));
            }
            return document.getElementById(args);
        }

 function view() {
     return {
         w: document.documentElement.clientWidth,
         h: document.documentElement.clientHeight
     };
 }

 function bind(obj, ev, fn) {
     if (obj.addEventListener) {
         obj.addEventListener(ev, fn, false);
     } else {
         obj.attachEvent('on' + ev, function() {
             fn.call(obj);
         });
     }
 }

 function addClass(obj, sClass
) {
     var aClass = obj.className.split(' ');
     if (!obj.className) {
         obj.className = sClass;
         return;
     }
     for (var i = 0; i < aClass.length; i++) {
         if (aClass[i] === sClass) return;
     }
     obj.className += ' ' + sClass;
 }

 function getByClass(oParent,sClass){

    var aResult = [];
    var aEle = oParent.getElementsByTagName('*');
    var re = new RegExp('\\b'+sClass+'\\b');
    for (var i = 0; i < aEle.length; i++) {
        if(re.test(aEle[i].className)){
            aResult.push(aEle[i]);
        }
    };
    return aResult;
}

 function removeClass(obj, sClass) {
     var aClass = obj.className.split(' ');
     if (!obj.className) return;
     for (var i = 0; i < aClass.length; i++) {
         if (aClass[i] === sClass) {
             aClass.splice(i, 1);
             obj.className = aClass.join(' ');
             break;
         }
     }
 }

