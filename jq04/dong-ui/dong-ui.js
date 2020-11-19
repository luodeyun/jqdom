/*保存我的插件库中所有插件的函数定义*/
jQuery.fn.myAccordion=function(){
  //a. 自动为插件父元素及其子元素添加必须的class——侵入
  //(1). 为当前插件的父元素加class accordion
  this.addClass("accordion")
  //return this
  //(2). 为父元素下直接子元素中奇数位置的元素加class title
  .children(":nth-child(2n+1)") //3个奇数位置的元素
  .addClass("title")
  //return 3个奇数位置的元素
  //(3). 为所有奇数位置的下一个兄弟（偶数位置）加class content和fade
  .next() //自带遍历: 3个偶数位置的元素
  .addClass("content fade")
  //return 3个偶数位置的元素
  //(4). 为所有偶数位置的元素中第一个元素加class in
  .first() //获得任何查找结果中排在第一个位置的一个元素——本例中获得3个偶数位置的元素中的第一个偶数位置的元素。
  .addClass("in");
  //b. 自动为插件中对应元素绑定事件处理函数
  //其实就是将原来已经实现的单击事件处理函数拷贝到此！
  $(".accordion").on("click",".title",e=>
    $(e.target).next(".content").toggleClass("in")
      .siblings(".content").removeClass("in")
  );
}
//将来希望: 
// 已经是$(...)了   <-this
//$("#my-accordion").myAccordion();