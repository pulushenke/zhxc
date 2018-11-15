$(function () {

    $('form').bootstrapValidator({

        // live: 'submitted',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Cname: {
                message: '公司名验证失败',
                validators: {
                    stringLength: {
                        max: 30,
                        message: '公司名称超长'
                    }

                }
            },
            contacts: {
                message: '联系人验证失败',
                validators: {
                    notEmpty: {
                        message: '联系人不能为空'
                    },
                    regexp: {
                        regexp: /^[\u4e00-\u9fa5_a-zA-Z]+$/,
                        message: '联系人格式有误'
                    },
                    stringLength: {
                        min: 2,
                        max: 12,
                        message: '联系人长度必须在2到12位之间'
                    }

                }
            },
            email: {
                validators: {
                    emailAddress: {
                        message: '邮箱地址格式有误'
                    }
                }
            },
            Telephone: {
                validators: {
                    notEmpty: {
                        message: '电话不能为空'
                    },
                    regexp: {
                        regexp: /^((0\d{2,3}-\d{7,8})|(1[35847]\d{9}))$/,
                        message: '固定电话或手机格式有误'
                    }
                }

            },
            message: {
                validators: {
                    stringLength: {
                        max: 100,
                        message: '留言超长'
                    }
                }
            }

        }

    });
})

function subMessage($this) {
    var options = {
        url: "/email",
        type: "post",
        beforeSubmit: boots, //提交前的回调函数
        success: sucCheck, //提交成功后的回调函数
        resetForm: true,
        timeout: 5000 //限制请求的时间，当请求大于5秒后，跳出请求

    };
    $($this).ajaxSubmit(options);

    return false;

}

function sucCheck(messageRes) {
    alert(messageRes);
    location.reload();

};

function boots(formArrData, formObj) {
    var fbv = formObj.data('bootstrapValidator');
    if (fbv.isValid()) {
        fbv.resetForm(fbv.isValid());
        return true;
    }

    return fbv.isValid();

}
