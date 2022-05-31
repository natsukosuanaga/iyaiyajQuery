$("form_id").validate({
    rules: {
        text_name: {
            required: true,
        },
    },
    messages: {
        text_name: {
            required: "入力必須項目",
        },
    },
});

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