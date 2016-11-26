// show & hide
(function() {
    var switchNode = $('.switch-next>input');
    // change event
    switchNode.change(function() {
        console.log(this);
        var dependentNode = $(this).parent().next();
        dependentNode.find('input').prop("checked", false);
        dependentNode.fadeToggle("100");
    });
})();


// step 1.1 which one is showed
(function() {
    var dictJSON = {
        levelDict: {
            '000': '2、美团历史合作情况：无三方；无直签\n3、 预付  万后：佣金率 %； 一年净收益  万（目前系统无法监控实际执行）',
            '100': '2、美团历史合作情况：无直签；三方覆盖\n   三方：佣金率 %\n3、 预付  万后：佣金率 %； 一年净收益  万（目前系统无法监控实际执行）',
            '110': '2、美团历史合作情况：三方、直签均有\n 1）三方：佣金率 %\n 2）直签：正常结算（ - ：佣金率 %）\n3、申请 预付  万\n 1）原因：\n 2）佣金率 （ %→ %）； 一年增加净收益 万（目前系统无法监控实际执行）' + '\n',
            '111': '2、美团历史合作情况：三方、直签均有\n 1）三方：佣金率 %\n 2）直签：预付合作（ - ：佣金率 %； 预付  万）\n3、此次续签合同\n   佣金率 （ %→ %）；预付金额 （ → ）； 一年净收益 万（目前系统无法监控实际执行）' + '\n',
            '010': '2、美团历史合作情况：无三方；仅直签\n   直签：正常结算（ - ：佣金率 %）\n3、申请 预付  万\n 1）原因：\n 2）佣金率 （ %→ %）； 一年增加净收益 万（目前系统无法监控实际执行）',
            '011': '2、美团历史合作情况：无三方；仅直签\n   直签：预付合作（ - ：佣金率 %； 预付  万）\n3、此次续签合同\n   佣金率 （ %→ %）；预付金额 （ → ）； 一年净收益 万（目前系统无法监控实际执行）'
        },
        paymentDict: {
            '000': '一次性预付：  万（回款周期 天）',
            '100': '1、合作期至\n   保护条款 余额退回\n2、一次性预付：  万（回款周期： 天）',
            '110': '1、合作期至\n   保护条款 余额退回\n   临近商家闭园，我方可酌情降低预付金额，并在合同中增加相应条款\n2、循环预付：  万（回款周期： 天）',
            '111': '1、合作期至\n   保护条款 余额退回\n   临近商家闭园，我方可酌情降低预付金额，并在合同中增加相应条款\n2、首次付款：  万（回款周期： 天）\n   后续付款：循环预付  万（回款周期 天）',
            '010': '   - 月  万（回款周期 天）\n   - 月  万（回款周期 天）',
            '011': '   首次付款：  万（回款周期 天）\n   后续付款：\n   - 月  万（回款周期 天）\n   - 月  万（回款周期 天）'
        },
        priceDict: {
            '00': '2、价格无法比较（）',
            '10': '2、无lose（vs 携程/去哪儿/同程/美团三方）',
            '11': '2、有lose（vs ： 票高 元）'
        },
        evaluationDict: {
            '00': '1、月均回款\n   - 月： 万\n   - 月： 万\n2、收益情况\n   净收益 万（年总佣金 –年资金成本）',
            '01': '1、月均回款\n   - 月： 万\n   - 月： 万\n2、收益情况\n   额外收益 万（年总佣金 –年资金成本 -正常结算总佣金 ）',
            '10': '1、回款情况\n   至 可完全回款\n2、收益情况\n   净收益 万（年总佣金 –年资金成本）',
            '11': '1、回款情况\n   至 可完全回款\n2、收益情况\n   额外收益 万（年总佣金 –年资金成本 -正常结算总佣金 ）'
        }
    };


    $('.cooperation button').click(function() {
        console.log(this);

        // 000 ~ 111
        var checkBoxArr = $(this).parent('.cooperation').find('input[type="checkbox"]');
        var status = '';
        for (var i = 0; i < checkBoxArr.length; i++) {
            status += checkBoxArr[i].checked == true ? 1 : 0;
        }
        console.log(status);

        // msg
        var nodeStepMsg = $(this).data('step'); // $(this).attr('data-step');
        console.log(nodeStepMsg);
        var msg = dictJSON[nodeStepMsg][status];
        console.log(msg);
        var detailTextArea = $(this).parents('.checkbox').find('.detail-info textarea');
        console.log(detailTextArea);
        detailTextArea.val(msg);
    });
})();
