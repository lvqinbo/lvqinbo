/**
 * Created by HelloMan on 15/5/20.
 */
function ajax(url,fnSucc,fnFailed)
{
    //1.创建对象
   /* if(window.XMLHttpRequest)
    {
        var oAjax = new XMLHttpRequest();
    }
    else
    {
        //IE6
        var oAjax= new ActiveXObject("Microsoft.XMLHTTP");
    }*/

    /*try{
        var oAjax = new XMLHttpRequest();
    }
    catch(e){
         var oAjax= new ActiveXObject("Microsoft.XMLHTTP");
    }*/
    
    var oAjax = null;
    window.XMLHttpRequest ? oAjax = new XMLHttpRequest() : oAjax= new ActiveXObject("Microsoft.XMLHTTP");


    //2. 连接
    oAjax.open('GET',url,true);

    //3.发送
    oAjax.send();

    //4.接收返回值
    oAjax.onreadystatechange=function()
    {
        if(oAjax.readyState==4)
        {
            if(oAjax.status==200)
            {
                fnSucc(oAjax.responseText);
            }
            else
            {
                if(fnFailed)
                {
                    fnFailed(oAjax.status);
                }

            }
        }
    }
}