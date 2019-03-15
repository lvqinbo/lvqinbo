/**
 * Created by HelloMan on 15/5/20.
 */
function ajax(url,fnSucc,fnFailed)
{
    var oAjax = null;
    window.XMLHttpRequest ? oAjax = new XMLHttpRequest() : oAjax = new ActiveXObject("Microsoft.XMLHTTP");

    //2. 连接
    oAjax.open('GET',url,true);

    //3.发送
    oAjax.send();

    //4.接收返回值
    oAjax.onreadystatechange=function() {
        if(oAjax.readyState==4 && oAjax.status==200)
        {
            fnSucc && fnSucc(oAjax.responseText);
        }else{
            fnFailed && fnFailed(oAjax.status);
        }
    }
}