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
Home  | H-1.0     | Gain access to landing page    | **As a** user **I want** to access the Rosie's landing page  **so that** I can gain access to the site content.| **Given** that the user is on Rosie Landing page, **When** they click on the Home Nav link **then** the system  will take them to the About me section of Rosie's website. |     M   |
Home |  H-1.1   | Gain access to landing page  |  **As a** user **I want** to access the Rosie's landing page **so that** I can see have access to the icons at the bottom of the page .| **Given** that the user is on Rosie's website, **When** they click on the HTML,CSS or JS icons at the bottom of the page **then** the system will change the image on the right hand side of the page and color background of the web page . |    M   |
 Resume | R-2.0 | Gain access to Resume page | **As a** user **I want** to access the Resume section of Rosie's website   **so that** I can gain access to the site content.| **Given** that the user is on Rosie's website, **When** they click on the Resume Nav link **then** the system  will take the user to Resume section to view the information. |    M   |
Contact | C-3.0 | Gain access to contact page | **As a** user **I want** to access the contact section of Rosie's website  **so that** I can gain access to the site content.| **Given**  that the user is on Rosie's website, **When** they click on the contact Nav link **then** the system  will take the user to the contact page. |    M   |
Contact Form | c-3.1| Gain access to the contact form | **As a** user **I want** to access the contact form on Rosie's website **so that** I can use the contact form.| **Given** that the user is on on Rosie's website, **When** they click on the contact Nav link **then** the system will take the user to the contact page where they can fill in the form and submit their information. |    M   |
Interest | I-4.0 | Gain access to Interest page | **As a** user **I want** to access the interest page on Rosie's website  **so that** I can gain access to the content.| **Given** that the user is on on Rosie's website, **When** they click on the interest Nav link **then** the system will take the user to the interest page . |    M   |
Google map | GM-4.1| Gain access to Interest page Google map| **As a** user **I want** to access the google map on the interest page **so that** I can see all the conferences that Rosie has attended.| **Given** that the user is on on Rosie's website, **When** they click on the interest Nav link **then** the system will allow the user gain access to the google map and the map marker information .|    M  |
GitHub | G-5.0| Gain access to the GitHub page | **As a** user **I want** to access the Github page on Rosie's website **so that** I can gain access to the content .| **Given** that the user is on on Rosie's website, **When** they click on the Github Nav link  **then** the system will allow the user to gain access to Rosie's Github information .|    S  |
GitHub search | GS-5.1 | Gain access to the GitHub page | **As a** user **I want** to access the Github page on Rosie's website**so that** I can gain access to the site content.| **Given** that the user is on on Rosie's website, **When** they click on the Github Nav link **then** the system will allow the user access to Github search engine . |    M   |
Download | D-6.0 | Gain access to Down load | **As a** user **I want** to access the Rosie's CV **so that** i can review her information| **Given** that the user is on on Rosie's website, **When** they click on the Login download link **then** the system will open another page with the CV in PDF format .|    M   |
Social Media | SM-7.0 | Gain access to Social Media Icon | **As a** user **I want** to access the Rosie's social media accounts **so that** I can find out more information about her.| **Given** that the user is on on Rosie's website, **When** they click on the selected social media icons **then** the system will take the user to Rosie's social media account .|    M   |
GitHub button | GB-8.0 | Gain access to the Github button | **As a** user **I want** to access the Rosie's github repository **so that** I can view her website work portfolio and other softare developments .| **Given** that the user is on on Rosie's website, **When** they click on github button on the landing page  **then** the system will take the user to Rosie' website work portfolio and other software developments.|    M   |


## User-Acceptance-Testing

The UAT will define the criteria by which the website is considered to be "working",high, medium or low defects will be identified and cataloged for further improvements or regression testing.
The UAT critreria and results will confirm if the website can handle required task in a real-world scenarios, according to the Requirements Traceability Catalog Table 1.0.

*Table 2.0 User Acceptance Testing (UAT)*


 Test#    | User stories Ref# |        Description of task        |               Steps to evaluate    |                        Expected Result                                                                                                                                                                                                                             |            Pass / Fail / Comments                             |  
--------  |-------------------|-----------------------------------|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------| 
APT-H-1.0  | H-1.0             | Home nav link                     | APT-H-1.1: Click home Nav link      | The link should be funtional and take the user to the About Me page, while still on the landing page afro beat music will play for 2mins, if the user clicks on another NAV link the music will stop.                                                           |                     Pass                                      |
APT-H-1.1 |  H-1.1             | HTML,CSS, JS Icon at the bottom of the page | APT-H-1.1.1: Click icon  | when mouse hover, the icon will float up, when clicked, it changes the image to a larger image of the smaller icon and changes the page color simultaneously, when the HTML 5 icon is clicked it changes to the python gif image                                 |                     Pass                                      |                                                                         
APT-R-2.0  | R-2.0            | Resume nav link                    | APT-R-2.1.0: Click resume nav link |  once correponding nav-link is clicked it will be functional and it will take the user to the resume page                                                                                                                                                        |                     Pass                                      |
APT-C-3.0  | C-3.0            | Contact nav link                   | APT-C-3.1.0: Click Contact nav link| The nav-link should be funtional and load the contact page of the the website.                                                                                                                                                                                    |                     Pass                                      |                                                                   
APT-C-3.1  | C-3.1             | Contact Form                      | APT-C-3.1.1: write information in the contact form| The form should accept inputs from the user and validate the email input.                                                                                                                                                                          |                     Pass                                      |                                                        
APT-Int-4.0 | I-4.0             | Interest nav link                | APT-C-4.0.1: Click interest Nav link|The link should be funtional and allow the user to access the interest page                                                                                                                                                                                        |                     Pass                                      |                                                                                     
APT-GM-4.1  | GM-4.1            | Google maps                      | APT-C-4.1.1: Hover over maps |once the users mouse hovers on the map the user can move the map and access the map marker information                                                                                                                                                                    |                     Pass                                      |                                                                                     
APT-GH-5.0 | G-5.0              | Github nav link                  | APT-G-5.1.1: Click Github Nav link | The link should be funtional and allow the user to acess the Github page.                                                                                                                                                                                          |                     Pass                                      |
APT-GS-5.1  | GS-5.1             | Github search                   | APT-GS-5.2.1: gain access to Rosie's gihub repository and search form other repositorys | The search engine should automatically have Rosie github repository as the first repository to view , once the user inputs another repository the system should search and display a loader icon until the search criteria is sucessful or failed |                     Pass  |                                                                        
APT-GS-5.1.1 | GS-5.1           |  Github search                   | APT-GS-5.2.2: gain access to Rosie's gihub repository and search engine| When the user makes too many request from the search engine the system will end the search and diaplay a message to the user to try again at a particular time.                                                               |                     Pass                                      |
APT-D-6.0  | D-6.0             | Down Load nav link                | APT-D-6.1.1: Click on the nav link download | The link should down load Rosie's CV in PDF on another page.                                                                                                                                                                                             |                     Pass                                      |                                                                
APT-SM-7.0  | SM-7.0            | Social Media Icons                | APT-SM-7.1.1: Click on social media Icons  | The icons should be functional, once clicked the system should take the user to Rosie social media profile.                                                                                                                                              |                     Pass                                      |
APT-GB-8.1  | GB-8.21            | GitHub button                    | APT-L-8.1.1: Click on the Github button | The button should be functional, once it is clicked they system should take the user to Rosie public Github repository.                                                                                                                                     |                     Pass                                      |

## Technologies 

The technologies employed to develop this web application was based on the principles of Design for X (DFX) also know as Design for excellence, the basis of this methodology is based
on cost to quality, making effective use of resources to minimize cost and relay more on innovation and technical knowledge to meet the users expectations.The software's used are mostly free 
and meet the **Requirements Traceability Catalog Table 1.0** to develop this website, innovation and technical knowledge was based on my recently aquired skills based on my journey so 
far with Code institute and the Canadian Business College.

Technologies deployed on this project:

 1.  For email API plug in [emailjs](https://www.emailjs.com/)
 2.  For Google Maps API plug in [Googlemaps](https://cloud.google.com/maps-platform/?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_460848633508-ADGP_Hybrid%20%7C%20AW%20SEM%20%7C%20BKWS%20~%20Google%20Maps%20API-KWID_43700033921822012-kwd-1952727095-userloc_9000847&utm_term=KW_google%20map%20api-ST_google%20map%20api&&gclid=Cj0KCQiA2uH-BRCCARIsAEeef3lcIM0O5ronrPfMeghq70q4i7bwzKfNMRz2R2-pLW-XCp0-_H6TYxkaAs5NEALw_wcB)
 3.  For Github API plug in [Githubapi](https://docs.github.com/en/free-pro-team@latest/rest)
 4.  For README.md file image Canva software [Canva](https://www.canva.com/)
 5.  For coding enviroment /IDE github [GitHub](http://github.com)
 6.  HTML 5 code sequence and syntax deployed for index.html, signup.html and services.html
 7.  CSS code sequence and syntax deployed for style.css and style1.css
 8.  Java script code sequence and syntax deployed for index.html.
 9.  Jquery script code sequence and syntax deployed in contact.html, github-information.js, maps.js and sendEmails.js
 10.  Bootstrap cnd 4.4.1 [Bootstrap](https://getbootstrap.com/)
 11. Bootstrap Jquery 3.4.1 [Bootstrap](https://getbootstrap.com/)
 12. Bootstrap cnd font awesome [Bootstrap](https://www.bootstrapcdn.com/fontawesome/)
 13. Font Google Poppins [Fontgoogle](https://fonts.google.com/)
  

---------------------------------------------

 ## Deployment
 After my User Acceptance Testing (UAT) I pushed the final version of my code to git hub , in my commit message I cataloged each change before my final push, the steps I took 
 can be seen below, my project is now live on [GitHub]( https://peristratus.github.io/bootstrap/)

 1. Complete the User UAT evaluation and made sure that all phase 1 codes are funtional and operational.
 2. Used git commit -m to catalog all my changes in line with UAT requirement.
 3. Used git push to push my final version to my git hub repository. 
 4. Clicked on settings on my Peristratus/bootstrap repository and scrolled down to github pages.
 5. Clicked on select branch drop down menu and then selected master.

-----------------------------------------------

## References

I would like to make references to cetain educational Youtube tutorials and certain articles that have helped with my webdesign develop my skills as a Fullstack developer.


1. Online tutorials youtube video on responsive landing pages & websites.[Onlinetutorial](https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog )
2. Dev Ed Youtube tutorials on responsive web design and login forms [DevED](https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q)
3. HTML/CSS security by sqreen online article [sqreen](https://www.sqreen.com/checklists/html-css-security-checklist)
4. Input patterns online article [HTML.com](https://html.com/attributes/input-pattern/)
5. W3 schools tutorials on Modal forms, HTML patterns and querry for HTML forms.

-----------------------------------------------

## Licenses

All icons,logos and videos used on my website are only for educational purposes and will not be used for the commercial version:

1. Social medial landing page icons free version from [icon8](https://icons8.com/icons/set/youtube-icon)
2. HTML5, CSS, JS and Python Icons, mobile first image free random images from [google](https://www.google.com/) search engine.
3. Hero image from [codeinstitute](https://icons8.com/icons/set/youtube-icon)
4. Footer icons [fontawesome](https://fontawesome.com/v4.7.0/icons/)
5. Music from Youtube [MP3music](https://www.youtube.com/watch?v=lta5go9P-go)

-----------------------------------------------

## Author 

*Name: Olaorebikan Roy Abdallah*\
*Institute: Canadaian Business College (code Institute).*\
*Designation: Student.*\
*Course: Fullstack Developer.*

