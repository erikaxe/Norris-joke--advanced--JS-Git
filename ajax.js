const buttonRandom = document.querySelector('.btn-random')
const buttonFood = document.querySelector('.btn-food')
const buttonScience = document.querySelector('.btn-science')

buttonRandom.addEventListener('click', function(){
    let randomJoke = new Joke();
    randomJoke.requestJoke();
})
buttonFood.addEventListener('click', function(){
    let foodJoke = new Joke('food');
    foodJoke.requestJoke();
})
buttonScience.addEventListener('click', function(){
    let scienceJoke = new Joke('science');
    scienceJoke.requestJoke();
})

class Joke {
    constructor(category = false) {
        this.category = category;
        this.joke = "";
        this.url = "https://api.chucknorris.io/jokes/random"
        if(category!=false){
            this.url=this.url + "?category=" + this.category
        }
    }

    requestJoke() { /* function */
        let self = this;
        const request = new XMLHttpRequest;

        request.open("GET", this.url, true);
        request.onload = function(){
            if(this.status == 200){
                self.setJoke(JSON.parse(this.responseText))  
            }
        }
        request.send();
    }

    setJoke(randomJoke) {
        this.joke=randomJoke
        const list = document.querySelector('.card')
        list.innerHTML = `
        <ul class="list">
            <li class="list-item">
                <div class="li-cont">
                    <img src=${randomJoke.icon_url}>
                    <span>${randomJoke.value}</span>
                </div>
            </li> 
        </ul>
        `
    }
}




/* https://api.chucknorris.io/jokes/categories */

/* https://api.chucknorris.io/jokes/random */
/* https://api.chucknorris.io/jokes/random?category=celebrity */
/* https://api.chucknorris.io/jokes/random?category=food */
/* https://api.chucknorris.io/jokes/random?category=history */
/* https://api.chucknorris.io/jokes/random?category=sport */
/* https://api.chucknorris.io/jokes/random?category=science */