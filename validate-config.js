$('form').validate({
    rules: {
        text_name_1: {
            required: true,
            minlength: 3,
        },

    },
    messages: {
        text_name_1: {
            required: "入力必須項目です。",
            minlength: "3文字以上入力してください。",
        },
    },
    errorPlacement: function (err, elem) {
        err.appendTo($('.error_1')); //p要素を指定
    }
});

$('input[name="text_name_1"]').on('focusout', function () {
    if ($('input[name="text_name_1"]').valid()) {
        $('.OK').show();
        $('#text_name_2').focus();
    } else {
        $('.OK').hide()
    }
});
//enter
// $('input[name="text_name"]').on('keyup', function () {
//     if (!$('form').valid()) {
//         alert('入力エラーがあります');
//     } else {
//         alert('OK');
//     }
// });



// $("バリデーション対象フォームid").validate({
//     rules: {
//       input要素のname: {
//         有効化するルール: true,
//       },
//     },
//     messages: {
//       input要素のname: {
//         有効化するルール: "エラーとして表示したい文言",
//       },
//     },
//   });