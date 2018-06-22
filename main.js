/*<body>
  <article class="article">
    <section class="article__header">
      Welcome to my blog
    </section>
    <section class="article__content">
      Copper mug small batch meh plaid flexitarian. Before they
      sold out occupy chartreuse hot chicken, la croix
      fingerstache offal VHS air plant. Humblebrag blue bottle
      cred af jean shorts etsy copper mug chicharrones cronut
      art party scenester pabst chillwave. Distillery 8-bit
      pabst fashion axe, tousled cloud bread bushwick roof party
      franzen quinoa fixie.
    </section>
    <aside class="aside_box--dark dashed">
      <div class="article__header">
        Very important box header
      </div>
      Messenger bag sriracha tote bag intelligentsia air plant
      leggings.
    </aside>
    <section class="article__footer">
      Author: Steve Brownlee
    </section>
  </article>
</body>
Use JavaScript to obtain a reference to the first article header and change its text with 
textContent property to "Welcome the {insert your name here} blog"
Use JavaScript to obtain a reference to all article__header elements and change their classList 
property value to "article__header important".*/

document.querySelector(".article__header").textContent = "Welcome to the Jake blog";

var x = querySelectorAll(".article__header");

for(let i = 0; i < x.lenth; i++){
    x[i].classList = "article_header important";
}