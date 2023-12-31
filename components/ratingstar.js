class Star extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>

            .hover-star{
                transition: 1s;
                display: none;
            }

            .current-star{
                color: white;
                transition: 1s;
            }

            
            </style>
            
                <div class="current-star">

                    <img class="blue-star" src="./img/blue-fill-star.png" alt="star with fill blue">

                    <img class="blue-star" src="./img/blue-fill-star.png" alt="star with fill blue">

                    <img class="blue-star" src="./img/blue-fill-star.png" alt="star with fill blue">

                    <img class="blue-star" src="./img/blue-fill-star.png" alt="star with fill blue">

                    <img class="blue-border-star" src="./img/blue-border-star.png" alt="star with border blue">

                </div>


                <div class="hover-star">

                    <img class="white-star" src="./img/white-fill-star.png" alt="star with fill white">

                    <img class="white-star" src="./img/white-fill-star.png" alt="star with fill white">

                    <img class="white-star" src="./img/white-fill-star.png" alt="star with fill white">

                    <img class="white-star" src="./img/white-fill-star.png" alt="star with fill white">

                    <img class="white-border-star" src="./img/white-border-star.png" alt="star with border white">

                </div>
        `
    };
};

window.customElements.define('star-model01', Star);


class Star02 extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <style>
        
        .hover-star{
            display: none;
            transition: 1s;
        }

        .current-star{
            transition: 1s;
        }

        </style>

        <div class="current-star">

            <img class="blue-star" src="./img/blue-fill-star.png" alt="star with fill blue">

            <img class="blue-star" src="./img/blue-fill-star.png" alt="star with fill blue">

            <img class="blue-star" src="./img/blue-fill-star.png" alt="star with fill blue">

            <img class="blue-half-star" src="./img/blue-half-star.png" alt="star with half blue">

            <img class="blue-border-star" src="./img/blue-border-star.png" alt="star with border blue">

        </div>


        <div class="hover-star">

            <img class="white-star" src="./img/white-fill-star.png" alt="star with fill white">

            <img class="white-star" src="./img/white-fill-star.png" alt="star with fill white">

            <img class="white-star" src="./img/white-fill-star.png" alt="star with fill white">

            <img class="white-half-star" src="./img/white-half-star.png" alt="star with fill white">

            <img class="white-border-star" src="./img/white-border-star.png" alt="star with border white">

    </div>
        `
    }
}

window.customElements.define('star-model02', Star02)