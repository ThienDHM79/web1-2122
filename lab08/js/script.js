$(document).ready(function(){
let btnConvert = $('#btnConvert');
let txtFrom = $('#from');
let txtTo = $('#to');

btnConvert.click(function(){
        if(txtFrom.val().length === 0)
            return;
        //get value of textfield FROM
        let valueFrom = txtFrom.val();
        let access_key = 'a409e3407f818ec1d99ed3fd487b279c';
        let api_function = 'latest';
        let api =`http://data.fixer.io/api/${api_function}?access_key=${access_key}`;

        
        $.ajax({
            url: api,
            datatype: 'json',
            success: function(data){
                let value = parseFloat(data.rates['USD'])* parseFloat(valueFrom);
                txtTo.val(value)
            }
        });
    });
});
