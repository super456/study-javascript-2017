//根据浏览器判断事件处理及绑定

var EventUtil={
    addEventListenerHandler:function(element,type,handle){
        if(element.addEventListener){
            element.addEventListener(type,handle,false);
        }else if(element.attachEvent){
            element.attachEvent('on'+type,handle,false);
        }else{
            element['on'+type]=handle;//直接复制给脚本事件处理
        }
    },
    removeEventListenerHandler:function(element,type,handle){
        if(element.removeEventListener){
            element.removeEventListener(type,handle,false);
        }else if(element.detachEvent){
            element.detachEvent('on'+type,handle,false);
        }else{
            element['on'+type]=null;
        }
    }
}