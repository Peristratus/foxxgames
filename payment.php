<!DOCTYPE html>
  <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Paypal Payment</title>
      <link rel="stylesheet" href="#">
   </head>
  <body>
    <main id= "cart-main">
       <div class ="site-title text-center">
           <h1 class= "font-title">Shopping Cart</h1>
       </div>

       <div class="container">
           <div class="grid">
             <div class = "col-1">
               <div class ="flex item justify-content-between">
                   <div class="flex">
                       <div class ="img text-center">
                           <img src= "../img/star22.jpg" alt ="Atari star Wars game">
                       </div>
                       <div class= "title">
                           <h3>Star Wars</h3>
                           <span>Atari Game-Arcade Version</span>

                           <div class= "buttons">
                               <button  type = "submit"><i class= "fas fa-chevron-up"></i></button>
                               <input   type = "text" class = "font-title" value = "1">
                               <button  type = "submit"><i class= "fas fa-chevron-down"></i></button> 
                           </div>
                           <a href ="#">Save for later</a>
                           <a href ="#">Delete from Cart</a>
                       </div>
                   </div>
                   <div class ="price">
                     <h4 class= "text-red">$59.78</h4>
                   </div>
               </div>
            </div>
           <div class= "col-2">
               <div class = "subtotal text-center">
                   <h3>Price Details</h3>

                   <ul>
                    <li class= "flex justify-content-between">
                        <label for= "price" >Product (1 item(s)): </label>
                        <span>$67.56</span>
                    </li>
                    <li class= "flex justify-content-between">
                        <label for= "price" >Delivery Charges: </label>
                        <span>Free</span>
                    </li>
                    <hr>
                    <li class= "flex justify-content-between">
                        <label for= "price" >Amount Payable: </label>
                        <span clsss = "text- red font-title">$67.56</span>
                    </li>
                   <li class= "flex justify-content-between">
                   <div id ="paypal-payment-button">
                   </div>
                   </li>
                   </ul>
                </div>
            </div>
          </div>
       </div>

    </main>
    <script src=<script src="https://www.paypal.com/sdk/js?client-id=AWiHfkGAozfapAeK_p9EWZl6RWRnucJkRK_et_9uyOA61M2lJKh1TK-D3vurai4GbM4wk66BrfHrT_Wp"></script>></script>
    <script>paypal.Buttons().render('#paypal-payment-button');</script>

  </body>
</html>