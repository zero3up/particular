//--------------------------------------------
// 塩辛瓶のリンク
//--------------------------------------------
function siokaralink(el)
{
    var htm = el.innerHTML;
    var newhtm = htm;
    var regsiokara = new RegExp("s[pqsu][1-9][0-9]+\.[0-9a-zA-Z]+","g");

    while (ret = regsiokara.exec(htm))
    {
        var str = ret[0];
        var siokaraurl = "";
        
        if(chglist.indexOf(str) !== -1)
        {
            continue;
        }

        chglist.push(str);

        // どの塩辛瓶へのリンクか確認しURLを作る
        switch(str.substring(1, 2))
        {
            case "u": // 塩粒
                siokaraurl = "http://www.nijibox5.com/futabafiles/tubu/src/" + str;
                break;
            case "s": // 小瓶
                siokaraurl = "http://www.nijibox5.com/futabafiles/kobin/src/" + str;
                break;
            case "p": // 3ml
                siokaraurl = "http://www.nijibox2.com/futabafiles/003/src/" + str;
                break;
            case "q": // 中瓶
                siokaraurl = "http://www.nijibox6.com/futabafiles/mid/src/" + str;
                break;
            case "z": // 大瓶
                siokaraurl = "http://www.siokarabin.com/futabafiles/big/src/" + str;
                break;
        }
    
        if(siokaraurl !== "")
        {
            // aタグ作成
            var atag = "<a target=\"_blank\" href=\"" + siokaraurl + "\">" + str + "</a>";
            newhtm = newhtm.split(str).join(atag);
        }
    }

    // aタグを入れ込み
    if(htm !== newhtm)
    {
        el.innerHTML = newhtm;
    }
}

//--------------------------------------------
// URLリンク
//--------------------------------------------
function urllink(el)
{
    var htm = el.innerHTML;
    var newhtm = htm;
    var regurl = new RegExp("http(s)?://([0-9a-zA-Z-]+\.)+[0-9a-zA-Z-]+(/[0-9a-zA-Z- ./?%&=]*)?","gi");
    while (ret = regurl.exec(htm))
    {
        var str = ret[0].replace("<br","");
        var siokaraurl = "";

        if(chglist.indexOf(str) !== -1)
        {
            continue;
        }

        chglist.push(str);

        var atag = "<a target=\"_blank\" href=\"" + str + "\">" + str + "</a>";
        newhtm = newhtm.split(str).join(atag);
    }

    // aタグを入れ込み
    if(htm !== newhtm)
    {
        el.innerHTML = newhtm;
    }
}

//--------------------------------------------
// メイン
//--------------------------------------------
var blkelement = document.getElementsByTagName('BLOCKQUOTE');
var count = blkelement.length;
var chglist = [];

for(var i = 0 ; i < count; i++)
{
    chglist = [];
    
    var el = blkelement[i];
    
    // URLリンク
    urllink(el);

    // 塩辛瓶のリンク設定
    siokaralink(el);

}