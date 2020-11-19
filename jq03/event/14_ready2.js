//仅DOM内容(HTML+JS)加载完成，就提前
// document.addEventListener("DOMContentLoaded",function(){
$(()=>{
  //为第2个按钮绑定单击事件
  $("#btn2").click(function(){
    console.log(`btn2 疼!`)
  });
  //用户就可以提前用上！
})

//整个页面内容都加载完成后自动执行以下操作
//window.onload=function(){
window.addEventListener("load",function(){

})