import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const divCard = document.createElement('div');
  divCard.classList.add('card');

  const headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = `${article.headline}`;
  divCard.appendChild(headlineDiv);


  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');
  divCard.appendChild(authorDiv);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  authorDiv.appendChild(imgContainer);

  const imgSrc = document.createElement('img');
  imgSrc.src = `${article.authorPhoto}`;
  imgContainer.appendChild(imgSrc);


  const spanCard = document.createElement('span');
  spanCard.textContent = `${article.authorName}`;
  authorDiv.appendChild(spanCard);

  return divCard;
}



const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5001/api/articles')
  
    .then(res => {
      const bootstrapArray = res.data.articles.bootstrap;
      bootstrapArray.forEach(element => {

        const newCard = Card(element);
        document.querySelector(selector).appendChild(newCard);
      })

      const javascriptArray = res.data.articles.javascript;
      javascriptArray.forEach(element => {

        const newCard1 = Card(element);
        document.querySelector(selector).appendChild(newCard1);
      })
      
      const technologyArray = res.data.articles.technology;
      technologyArray.forEach(element => {

        const newCard2 = Card(element);
        document.querySelector(selector).appendChild(newCard2);
      })

      const jqueryArray = res.data.articles.jquery;
      jqueryArray.forEach(element => {

        const newCard3 = Card(element);
        document.querySelector(selector).appendChild(newCard3);
      })

      const nodeArray = res.data.articles.node;
      nodeArray.forEach(element => {
        const newCard4 = Card(element);
        document.querySelector(selector).appendChild(newCard4);
      })
      
    })
}

export { Card, cardAppender }
