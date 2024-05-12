function flipCoin()
        {
            const randomMove = Math.random();
            let coinMove = '';
            if(randomMove < 0.5){
                coinMove = 'Heads';
            }
            else{
                coinMove = 'Tails';
            }
            document.querySelector('.js-move').innerHTML = `<img src="${coinMove}.png" class="coin-image">`;
            return coinMove;
            
        }

        let score = JSON.parse(localStorage.getItem('score')) || {heads : 0,tails : 0};
        document.querySelector('.js-flips').innerHTML = `Heads: ${score.heads} &nbsp; Tails: ${score.tails} `;

        function playGame()
        {
            let coinMove = flipCoin();
            if(coinMove === 'Heads'){
                score.heads += 1;
                console.log(`Heads: ${score.heads}`);
            }
            else{
               score.tails += 1;
               console.log(`Tail: ${score.tails}`);
            }
            localStorage.setItem('score', JSON.stringify(score));
            document.querySelector('.js-flips').innerHTML = `Heads: ${score.heads} &nbsp; Tails: ${score.tails} `;
            document.querySelector('.js-flip-button').classList.add('change-button');
            document.querySelector('.js-reset-button').classList.remove('change-reset-button');
          

        }
        function resetScore()
        {
           
           score = {heads : 0,tails : 0};
           localStorage.setItem('score',JSON.stringify(score));
           document.querySelector('.js-flips').innerHTML = `Heads: ${score.heads} &nbsp; Tails: ${score.tails} `;
           document.querySelector('.js-flip-button').classList.remove('change-button');
           document.querySelector('.js-reset-button').classList.add('change-reset-button');
        }
