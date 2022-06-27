let firstName = prompt('what is your name')

alert(`Great scott! ${firstName} we have to go!.`)

let years = promt(
  `Great scott ${firstName}, What year would you like to visit first?`
)

const startGame = () => {
    if (years >=2022) {
        let biffOrGriff =prompt("Would you rather go to the future or the past? (F/P)"
        
        if (biffOrGriff === 'P'){
            let fightOrRun = prompt ('Oh no! Biff blames you for the manure in his car! He wants to fight. Do you want to fight or be called a chicken!? (F/C)')

            if (fightOrRun === 'F') {
                alert ('No one calls me a chicken!')
            } else if (fightOrRun === 'C') {
                alert('I knew you were chicken ${firstName}')
            } else {
                alert('You have to pick one')
            }
        } else if (biffOrGriff === 'F') {
            let badOrGood = prompt ('Griff wants your help with the bank. You helping or not? (Y/N)')
            if (badOrGood === 'Y'){
                alert('OH no it was a set up! Griff frames you!')
                } else if (goodOrBad === 'N'){
                    alert( 'Griff gets caught robbing the bank! You save your son from a life of crime!')
                }
            }
        }
    }
    if (years <= 2021) {
        let secondName = prompt(
            "The Dalorian's engine is broken! You'll have to wait for Doc to fix it! You need a new name if your gonna wait around for him. What will your name be?")
        alert(`Don't get caught ${secondName}!`)
    }
    if (years <= 1985) {
        let saveYourself = prompt ('The dance where your parents had thier first date is coming up. Your mom asked you to go with her. Do you say yes or no? (Y/N/B)'
        )
        switch (saveYourself) {
            case 'Y':
                alert('I hope you"re not into your mom')

            break
                case 'N':
                    alert('Glad to know you are not into you"re mom. But now your parents do not get together and never have you.')
            break
                case 'B':
                    alert('Plan B! You come up with a plan to get your parents together and save yourself! Now you can go home!'
                        )
            break
            default:
                alert('You have to pick again')
        }

        
    }

startGame()