paypal.Buttons({
style:{
    color:'blue',
    shape: 'pill'
},
createOrder:function(data,actions){
return actions.order.create({
      purchase_units:[{
          amount: {
              value:'0.1'
            }
      }]
  });

}, 
onApprove: function (data,actions){
return actions.order.capture().then(function (details){
     console.log(details)
     windows.location.replace('https//github.com/peristratus/foxxgames/blob/master/success.html')
  })

},
onCancel:function(data){
    windows.location.replace('https//github.com/peristratus/foxxgames/blob/master/cancel.html')
}
}).render('#paypal-payment-button');