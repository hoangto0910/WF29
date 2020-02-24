// Vegas slide !!!!
$(document).ready(function(){
  // vegasslide
  $('.container_vegas').vegas({
    overlay: true,
    transition: 'fade', 
    transitionDuration: 4000,
    delay: 10000,
    animation: 'random',
    animationDuration: 20000,
    slides: [
    { src: 'https://dupontconstructionandremodeling.com/wp-content/uploads/2017/04/1.2.jpg' },
    { src: 'https://i.pinimg.com/736x/10/9d/57/109d57f054f5927656bbd87f0c282760.jpg' },
    {src: 'https://static.dezeen.com/uploads/2017/11/tree-house-matt-fajkus-architecture-austin-texas_dezeen_2364_hero2-852x479.jpg'}
    ]
  });
  new WOW().init();

  $('.filterizr-filter li').click(function() {
    $('.filterizr-filter li').removeClass('filtr-active');
    $(this).addClass('filtr-active');
  });
  $('.filterizr-sorting li').click(function() {
    $('.filterizr-sorting li').removeClass('filtr-active');
    $(this).addClass('filtr-active');
  });
  
  var filterizd = $('.filtr-container').filterizr();

  filterizd.filterizr('sort', 'title', 'asc');

  // validate
  // $("#frm").validate({
  //   rules: {
  //     name: "required",
  //     email: {
  //       required : true,
  //       email : true,
  //     },
  //     password: "required",
  //     area: {
  //       required : true,
  //       minlength : 10,
  //     },
  //     phone: {
  //       required : true,
  //       number : true,
  //       minlength : 10,
  //       maxlength : 14,
  //     },
  //   },
  //   messages: {
  //     name: "Vui lòng nhập họ tên",
  //     email: {
  //       required : "Vui lòng nhập email",
  //       email : "Vui lòng nhập đúng định dạng",
  //     },
  //     password: "Vui lòng nhập pass",
  //     area: {
  //       required : "Vui lòng nhập message",
  //       minlength : "Vui lòng nhập min 10 ký tự",
  //     },
  //     phone: {
  //       required : "Vui lòng nhập phone",
  //       number : "nhập sdt",
  //       minlength : "Vui lòng nhập min 10 ký tự",
  //       maxlength : "Vui lòng nhập max 14 ký tự",
  //     },
  //   },
  // });
  $("#ordersForm").validate({
    rules: {
      name11:{
        required: true,
        minlength: 8,
      },
      Mail: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      Addr: {
        required: true,
      },
      area: {
        required: true,
      },
    },
    submitHandler: function() {
      $('#exampleModal').modal('hide');
      fDone2(); 
    }
  });
  $('.btn_9_active').css({'color':'white'});
  $('.card_color').eq(0).css({'background':'#F7C325','color':'white'});
  for(var i = 0; i < $('.card_color').length; i++){
    $('.card_color').eq(i).on('click',function(){
      for(var i = 0; i < $('.card_color').length; i++){
        $('.card_color').eq(i).css({'background':'white','color':'black'});
      }
      $(this).css({'background':'#F7C325','color':'white'});
    })
  };
  for(var i = 0; i < $('.btn_9').length; i++){
    $('.btn_9').eq(i).on('click',function(){
      for(var i = 0; i < $('.btn_9').length; i++){
        $('.btn_9').css({'color':'black'});
      }
      $(this).css({'color':'white'});
    })
  };
})
