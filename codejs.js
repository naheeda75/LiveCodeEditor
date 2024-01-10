
function run(){
 let h=document.getElementById("html-code").value;
 let c=document.getElementById("css-code").value;
 let j=document.getElementById("js-code").value;
 let o=document.getElementById("output-code");

    o.contentDocument.body.innerHTML= h +"<style>"+ c +"<style>";
    o.contentWindow.eval(j);

}