//根据浏览器判断事件处理及绑定

var EventUtil={

    //DOM2添加事件处理
    addEventListenerHandler:function(element,type,handle){
        if(element.addEventListener){
            element.addEventListener(type,handle,false);
        }else if(element.attachEvent){
            element.attachEvent('on'+type,handle,false);
        }else{
            element['on'+type]=handle;//直接复制给脚本事件处理
        }
    },

    //DOM2移除事件处理
    removeEventListenerHandler:function(element,type,handle){
        if(element.removeEventListener){
            element.removeEventListener(type,handle,false);
        }else if(element.detachEvent){
            element.detachEvent('on'+type,handle,false);
        }else{
            element['on'+type]=null;
        }
    },

    //判断浏览器兼容性，针对IE浏览器
    getEvent:function(event){
        return event?event:window.event;
    },

    //获取事件对象
    getTarget:function(event){
        return event.target||event.srcElement;
    },

    getPreventDefault:function(event){
        // if(event.stopPropagation()){
        //     event.stopPropagation();//阻止冒泡
        // }else{
        //      window.event.cancelBubble=true;//IE对象的阻止冒泡
        //     // event.cancelable=true;
        //     event.preventDefault();//取消跳转
        // }
        event.preventDefault();
    }


}