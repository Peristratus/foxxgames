## Foxx Games Website
![Project Image](/img/foxxgames.png)

--------

### Table of Content

-  [Description](#description)
 - [User-stories](#user-stories)
 - [User-Acceptance-Testing](#User-Acceptance-Testing)
 - [Technologies](#technologies)
 - [Deployment](#Deployment)
 - [References](#References)
 - [Licenses](#licenses)
 - [Author](#author)

------------------------
 ## Description

 This milestone project is part of my on going Full Stack Software Developer course at Canadian Business college in collaboration with the Code Instititute.
 The website is based on a fictional FOXX GAMES website, the website theme is based on vintage Atari, Nintendo and Sega games.The user will be able to 
 scroll through the web page, buy games and play two games, the classic 1979 Asteroid game and the 2020 Asteriod game.I went through two tutorials and 
 implemented the code, the results was two fully functional games, I also took a tutorial on Neural networks for the 1979 Asteriod game and managed to 
 build a Neural network that enabled my computer to learn how to play the game, this resulted in an Artifical inteligent software that became better 
 over time as I allowed the computer to practice playing the game, the first score was 80,789 level 15 utilizing all 3 lives, the second attempt was 
 97,980 level 17 utilizing all 3 lives, I now have a good understanding of neural networks and the math associated with neural networks, i intend to 
 continue improving on my skills by taking a course with intellipat on machine learning and eventually become certified by IBM for Machine learning and 
 Artifical Intelligence, this project is supposed to showcase my skills in HTML, CSS, JavaScript & Jquery. Other features include the intigation of Pay 
 Pal and emailjs API into the webdesign, the website also features parallax effect and carousel slide.The development of this website is purely for 
 educational purposes and not intended for commercial use.
 
----------------------------
 ## User-stories

 ### Requirement Gathering
 
 The table below will breifly describe the user stories for the functional and non-functional requirements, the user stories decribed in
 **Table 1.0 Requirement Traceability Catalog** will be Independent, Negotiable, Valuable, Estimable, Smart and Testable, **INVEST** in nature and composition.

 *Table 1.0 Requirement Traceability Catalog*

HLR   |  HLR Ref# |    HLR Description    |                              User Stories                                                    |                                                      Acceptance criteria                                                                                        |                                MoSCoW                                                                                                                |
------|---------- |-----------------------|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------| 
Home  | H-1.0     | Gain access to Foxx games website   | **As a** user **I want** to access the web page  **so that** I can gain access to the site content.| **Given** that the user is on Foxx Games web page, **When** they click on the Nav links Home **then** the system will take the user to the home section of the web page. |     M   |
Atari |  A-2.0  | Gain access to Foxx games website  |  **As a** user **I want** to access to the  Atari section **so that** I can buy the advertised game .| **Given** that the user is on Foxx Games web page, **When**  they click on the Nav link Atari **then** the system will scroll down to the desired section and diaplay the advertised game for sale . |    M   |
 Nintendo | N-3.0 | Gain access to Foxx games website | **As a** user **I want** to access to the Nintendo section  **so that** I can buy the advertised game.| **Given** that the user is on Foxx Games web page, **When** they click on the Nav link Nintendo **then** the system will scroll down to the desired section and diaplay the advertised game for sale . |    M   |
Sega | S-4.0 | Gain access to Foxx games website | **As a** user **I want** to access the Sega section  **so that** I can buy the advertised game| **Given**  that the user is on Foxx Games web page, **When** they click on the Nav link Sega **then** the system will scroll down to the desired section and diaplay the advertised game for sale . |    M   |
Games | GA-5.0| Gain access to Foxx games website | **As a** user **I want** to access the games section  **so that** I can have access to the press start btn.| **Given**  that the user is on Foxx Games web page, **When** they click on the Nav link games **then** the system will scroll down to the desired section and display the option of two game to play|    M   |
Press Start btn | PS-5.1 | Gain access to Foxx games website | **As a** user **I want** to access the games section  **so that** I can press start and play the game .| **Given** that the user is on Foxx Games web page, **When** they click on the press start btn **then** the system will give them access to play the gaim of their choice. |    M   |
Pay Pal btn | PP-6.0|  Gain access to Foxx games website| **As a** user **I want** to access the pay pal btn **so that** I can buy the game of my choice.| **Given** that the user is on Foxx Games web page, **When** they click on the pay pal btn **then** the system will take the user to the payment page, where the user can view the shopping cart details before they make a decision to buy the item(s) .|    M  |
Pay Pal btn | PP-6.1| Gain access to payment page | **As a** user **I want** to access the Foxx Game payment page **so that** I can buy the items(s) in my shopping cart.| **Given** that the user is on Foxx Games payment web page **When** they click on pay pal check-out btn  **then** the system will display the users pay pal account details to complete the transaction, once this is sucessful, the system will display a payment confirmation page. If the transaction is not successfully or canceled by the user, the system will display a cancel confirmation page |    M |
Pay Pal btn | PP-6.2| Gain access to payment page | **As a** user **I want** to access the Foxx Game payment page **so that** I can buy the items(s) in my shopping cart.| **Given** that the user is on Foxx Games payment web page **When** they click on pay pal Guest-check-out btn  **then** the system will display a drop down credit/debit card form for the user to fill in their details to complete the process, once this is sucessful, the system will display a payment confirmation page. If the transaction is not successfully or canceled by the user, the system will display a cancel confirmation page|    M |
Return to shopping link | RS-6.3| Gain access to payment page | **As a** user **I want** to access the Foxx Game payment page **so that** I can return to foxx games  website.| **Given** that the user is on Foxx Games payment web page **When** they click on the return to shopping link  **then** the system will take the user back to the home page.|    M |
Continue shopping link | CS-6.4| Gain access to the payment confirmation page | **As a** user **I want** to access the Foxx Game payment confirmation page **so that** I can  return to foxx games  website.| **Given** that the user is on Foxx Games payment confirmation web page **When** they click on the continue shopping link  **then** the system will take the user back to the home page.|    M |
Continue shopping link | CS-6.5| Gain access to the payment cancel page | **As a** user **I want** to access the Foxx Game cancel confirmation page **so that** I can  return to foxx games website.| **Given** that the user is on Foxx Games cancel confirmation web page **When** they click on the continue shopping link  **then** the system will take the user back to the home page.|    M |
Contact Us| CUF-7.0 | Gain access to Foxx games website | **As a** user **I want** to access the contact us section **so that** I can access to the contact form.| **Given** that the user is on Foxx Games web page, **When** they click on the contact us Nav link **then** the system will scroll down to the contact form and allow the user make their inputs . |    M   |
Submit btn | SB-7.1 | Gain access to Foxx games website | **As a** user **I want** to access the contact us section **so that** I can access the submit btn.| **Given** that the user is on Foxx Games web page, **When** they click on the submit btn **then** the system will submit the message via emailjs to the seller. |    M   |
Reset btn | RB-7.2 | Gain access to Foxx games website | **As a** user **I want** to access the contact us section **so that** I can access the Reset btn.| **Given** that the user is on Foxx Games web page, **When** they click on the Reset btn **then** the system will reset the input fields. |    M   |
Social Icon | SM-8.0 | Gain access to Social Media Icon | **As a** user **I want** to access the Foxx games social media accounts **so that** I can find out more information about foxx games.| **Given** that the user is on on Foxx games website, **When** they click on the selected social media icons **then** the system will take the user to foxx games social media page .|    M   |
Download Icon | DI-9.0 | Gain access to the download Icon | **As a** user **I want** to access the download icon **so that** I can download the free game .| **Given** that the user is on on foxx games website, **When** they click on the download icon  **then** the system will download the game onto their device or computer.|    M   |
Parallax | PAR-10.0 | Gain access to Foxx games website | **As a** user **I want** to access the information **so that** I can get informatiom on upcpming games.| **Given** that the user is on Foxx Games payment web page, **When** they click on the games navlink **then** the system will scroll to the games and upcoming game section. |    M   |
1979 Asteroid | ASO-11.0 | play the 1979 Asteriod Game | **As a** user **I want** to access the games section **so that** I can play the 1979 Asteroid game.| **Given** that the user is on Foxx Games payment web page, **When** they click on the press start btn **then** the system will allow the user access to the 1979 Asteroid game. |    M   |
2020 Asteroid | ASN-12.0 | play the 2020 Asteriod Game | **As a** user **I want** to access the games section **so that** I can play the 2020 Asteroid game.| **Given** that the user is on Foxx Games payment web page, **When** they click on the press start btn **then** the system will  allow the user access to the 2020 Asteroid game. |    M   |



## User-Acceptance-Testing

The UAT will define the criteria by which the website is considered to be "working",high, medium or low defects will be identified and cataloged for further improvements or regression testing.
The UAT critreria and results will confirm if the website can handle required task in a real-world scenarios, according to the Requirements Traceability Catalog Table 1.0.

*Table 2.0 User Acceptance Testing (UAT)*


 Test#    | User stories Ref# |        Description of task        |               Steps to evaluate    |                        Expected Result                                                                                                                                                                                                                             |            Pass / Fail / Comments                             |  
--------  |-------------------|-----------------------------------|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------| 
APT-H-1.0  | H-1.0             | Home nav link                     | APT-H-1.0.1: Click home nav link      | The link should be funtional and take the user to the home page section displaying the carousel image slider.                                                                                                                                                   |                     Pass                                      |
APT-A-2.0 |  A-2.0            |  Atari nav link                    | APT-A-2.0.1: Click Atari nav link  | The link should be funtional and take the user to the Atari game section.                                                                                                                                                                                          |                     Pass                                      |                                                                         
APT-N-3.0  | R-3.0            | Nintendo nav link                  | APT-N-3.0.1: Click Nintendo nav link |  The link should be funtional and take the user to the Nintendo game section.                                                                                                                                                                                    |                     Pass                                      |
APT-S-4.0  | S-4.0            | Sega nav link                      | APT-S-4.0.1: Click Sega nav link| The link should be funtional and take the user to the Sega game section.                                                                                                                                                                                              |                     Pass                                      |                                                                   
APT-GA-5.0  | GA-5.0           | Game nav link                      | APT-GA-5.0.1: Click Game nav link| The link should be funtional and take the user to the game section.                                                                                                                                                                                                 |                     Pass                                      |                                                        
APT-PR-5.1 | PR-5.1            | Press Start                       | APT-PS-5.1.1: Click Press Start Btn |The button should be functional and allow the user access the selected game to play                                                                                                                                                                                |                     Pass                                      |                                                                                     
APT-PP-6.0  |PP-6.0            | Pay pal Btn                        | APT-PP-6.0.1: Click Pay Pal Btn |The button should be functional and allow the user access to view the shopping cart.                                                                                                                                                                                  |                     Pass                                      |                                                                                     
APT-PP-6.1 | PP-6.1              |Pay pal Check-out-btn             | APT-PP-6.1.1: Click Pay pal Check-out btn| The button should be functional and allow the user access the Pay Pal pop up login window, insert their credentials, validate the inputs and complete the purchase, once the purchase is successful the system will display a payment confirmation page ,or it will display a paymemt cancel page |                     Pass                                      |
APT-PP-6.2  | PP-6.2            | Pay pal Guest-check-out-btn       | APT-PP-6.2.1: Click Pay pal Guest-check-out btn | The button should be functional and allow the user access the credit/debit card drop down form, insert their credentials, validate the inputs and complete the purchase, once the purchase is successful the system will display a payment confirmation page ,or it will display a paymemt cancel page |                     Pass  |                                                                        
APT-RS-6.3 | RS-6.3             | Retun to Shopping Link             | APT-RS-6.3.1: Click the Return to shopping link | When the user is on the payment page they can exit the page by clicking the link which will take them back to the foxx games website.                                                                                                                |                     Pass                                      |
APT-CS-6.4  | CS-6.4             | Continue Shopping Link             | APT-CS-6.4.1:Click the Continue shopping link | When the user is on the payment confirmation page they can exit the page by clicking the link which will take them back to the foxx games website.                                                                                                    |                     Pass                                      |                                                                
APT-CS-6.5  | CS-6.5            | Continue Shopping Link              | APT-CS-6.5.1: Click the Continue shopping link |  When the user is on the cancel confirmation page they can exit the page by clicking the link which will take them back to the foxx games website.                                                                                                   |                     Pass                                      |
APT-CUF-7.0  | CUF-7.0          | Contact us form                     | APT-CUF-7.0.1: Input information into Contact us form| The form should be functional, accept the user details and validate their inputs.                                                                                                                                                              |                     Pass                                      |
APT-SB-7.1  | SB-7.1            | Send Button                         | APT-SB-7.1.1: Click on the send button | The button should be functional, once it is clicked the system should submit the information via email.js to the seller.                                                                                                                                     |                     Pass                                      |
APT-RB-7.2  | RB-7.2            | Reset Button                         | APT-RB-7.2.1: Click on the Reset button | The button should be functional, once it is clicked the system should clear all input fields.                                                                                                                                                              |                     Pass                                      |
APT-SM-8.0  | SM-8.0            | Social Media icons                     | APT-SM-8.0.1: Click on Social Media Icon | The Link should be functional, once it is clicked they system should take the user to fox games social media page.                                                                                                                                |                     Pass                                      |
APT-DI-9.0  | DI-9.0           | Download icon                       | APT-DI-9.0.1: Click on Download Icon | The link should be functional, and redirect the user to another website to download the free game.                                                                                                                                                              |                     Pass                                      |
APT-PAR-10.0 | PAR-10.0         | Parallax Effect                         | APT-PAR-10.0.1: Parallax Effect | The parallax should be functional and display the pictures of upcoming games, this is displayed at the top of the parallex.                                                                                                                                     |                     Pass                                      |
APT-PAR-10.1 | PAR-10.1         | Parallax Effect                         | APT-PAR-10.1.1: Parallax Effect | The parallax should be functional, once user scrolls up and down the web page, the image in the middle between the top and bottom of the page should be visable .                                                                                               |                     Pass                                      |
APT-PAR-11.0 | ASO-11.0         | 1979 Asteroid                           | APT-PAR-11.0.1: 1979 Asteroid   | The game should be functional, allow the user to play the game and allow the user exit the game by pressing the exit button ,  when the game starts or ends.                                                                                                                                  |                     Pass                                      |
APT-PAR-11.1 | ASO-11.1         | 1979 Asteroid                           | APT-PAR-11.1.1: AI Software     | The AI should be able to play the 1979 Asteroid game independent of any asistance from the user. The AI should keep improving its performace and score as it plyas the game over and over again.                                                                                                                                |                     Pass                                      |
APT-PAR-12.0 | ASN-12.0         | 2020 Asteroid                           | APT-PAR-12.0.1: Parallax Effect | The game should be functional, allow the user to play the game and allow the user exit the game by pressing the exit buttom , when the game starts or ends.                                                                                                                                  |                     Pass                                      |



## Technologies 

The technologies employed to develop this web application was based on the principles of Design for X (DFX) also know as Design for excellence, the basis of this methodology is based
on cost to quality, making effective use of resources to minimize cost and relay more on innovation and technical knowledge to meet the users expectations.The software's used are mostly free 
and meet the **Requirements Traceability Catalog Table 1.0** to develop this website, innovation and technical knowledge was based on my recently aquired skills based on my journey so 
far with Code institute and the Canadian Business College.

Technologies deployed on this project:

 1.  For email API plug in [emailjs](https://www.emailjs.com/)
 2.  For Payment API plug in [Paypal](https://developer.paypal.com/developer/accounts/)
 3.  For README.md file image and website images editing and styling Canva software [Canva](https://www.canva.com/)
 4.  For coding enviroment /IDE github [GitHub](http://github.com)
 5.  HTML 5 code sequence and syntax deployed for index.html,cancel.html,gmenue.html,payment1.html, payment2.html, payment3.html, success.html and cancel.html
 6.  CSS code sequence and syntax deployed for style.css,style1.css,style2.css, style3.css and style4.css
 7.  Java script code sequence and syntax deployed for index.html, asterold.html, asternew.js,neural_network.js,payment.js,smooth_scrooll.js and sendEmail.js
 8.  Jquery script code sequence and syntax deployed in index.html and sendEmails.js
 9.  Bootstrap cnd 4.4.1 [Bootstrap](https://getbootstrap.com/)
 10. Bootstrap Jquery 3.4.1 [Bootstrap](https://getbootstrap.com/)
 11. Bootstrap cnd font awesome [Bootstrap](https://www.bootstrapcdn.com/fontawesome/)
 12. For CSS plugin [Trailwind](https://tailwindcss.com/)
 13. Font Google Poppins & Yellow tail  [Fontgoogle](https://fonts.google.com/)
 14. Tutorial on [Neural-Networks](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ)
 15. Scroll effect on index.html [Smooth-scroll](http://github.com/cferdinandi/smooth-scroll )
  

---------------------------------------------

 ## Deployment
 After my User Acceptance Testing (UAT) I pushed the final version of my code to git hub , in my commit message I cataloged each change before my final push, the steps I took 
 can be seen below, my project is now live on [GitHub]( https://peristratus.github.io/bootstrap/)

 1. Complete the User UAT evaluation and made sure that all codes are funtional and operational.
 2. Used git commit -m to catalog all my changes in line with UAT requirement.
 3. Used git push to push my final version to my git hub repository. 
 4. Clicked on settings on my Peristratus/bootstrap repository and scrolled down to github pages.
 5. Clicked on select branch drop down menu and then selected master.

-----------------------------------------------

## References

I would like to make references to cetain educational Youtube tutorials and certain articles that have helped with my webdesign develop my skills as a Fullstack developer.


1. Online tutorials youtube video on 1979 Asteroid game & Neural Networks [Freecode-camp](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ )
2. Online tutorials youtube video on new Asteroid game [Chris-course](https://www.youtube.com/channel/UC9Yp2yz6-pwhQuPlIDV_mjA)
3. HTML/CSS security by sqreen online article [sqreen](https://www.sqreen.com/checklists/html-css-security-checklist)
4. Input patterns online article [HTML.com](https://html.com/attributes/input-pattern/)

-----------------------------------------------

## Licenses

All icons,logos and videos used on my website are only for educational purposes and will not be used for the commercial version:

1. Atari, Nintendo, Sega games random images from [google](https://www.google.com/) search engine.
2. Hero images random from [google](https://www.google.com/) search engine.
3. Footer icons [fontawesome](https://fontawesome.com/v4.7.0/icons/)
4. Music for 2020 Asteriod game from Youtube [MP3music](https://www.youtube.com/watch?v=mGx_FATyasQ)
5. Music and sounds for 1979 Asteriod game from [Freecode-camp](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ)

-----------------------------------------------

## Author 

*Name: Olaorebikan Roy Abdallah*\
*Institute: Canadaian Business College (code Institute).*\
*Designation: Student.*\
*Course: Fullstack Developer.*

