import { headerAppender } from "./header";

const Card = (article) => {
  // TASK 5
  // ---------------------
  const cardDiv = document.createElement('div');
  const headLineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const image = document.createElement('img');
  const spanName = document.createElement('span');

  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  cardDiv.appendChild(headLineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(spanName);
  imgDiv.appendChild(image);
  
  cardDiv.classList.add('card');
  headLineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgDiv.classList.add('img-container');

  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  headLineDiv.textContent = article.headline;
  image.src = article.authorPhoto;
  spanName.textContent = article.authorName;

  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  cardDiv.addEventListener('click', el => {
    
    console.log(headLineDiv)
  })
  //
  // <div class="card">                               cardDiv
  //   <div class="headline">{ headline }</div>       --headLineDiv
  //   <div class="author">                           --authorDiv
  //     <div class="img-container">                    --imgDiv
  //       <img src={ authorPhoto }>                      --image  
  //     </div>
  //     <span>By { authorName }</span>                 --spanName
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
