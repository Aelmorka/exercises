function strings() {
    function StringFormatter() {
        function capitalizeFirst(str) { 
            /* receives a string and returns the string with the first letter uppercased, 
            and the next ones lowercased */
            let string = str[0].toUpperCase()
            for (let i = 1; i < str.length; i++) string += str[i]
            return string
        } 
        // receives a string and replaces any spaces with a dash
        function toSkewerCase(str) {
            return str.replaceAll(/ /g,"-")
        }
        return {
            capitalizeFirst: capitalizeFirst,
            toSkewerCase: toSkewerCase
        }

    } 

    const formatter = StringFormatter()

    console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
    console.log(formatter.toSkewerCase("blue box")) //should return blue-box
}

strings()

function banking() {
    let _money = 500
    function Bank () {
        const depositCash  = cash => _money += cash
        const checkBalance = () => _money
        return {
            deposit: depositCash,
            showBalance: checkBalance
        }
    }

    const bank = Bank()
    bank.deposit(200)
    bank.deposit(250)
    console.log(bank.showBalance()) //should print 950
}

banking()

function jukeBox() {
    function SongsManager() {
        let _songList = {}
        const addSong = (name, link) => _songList[name] = link.slice(link.indexOf('=') + 1)
        const getSong = name => {
            if (_songList[name]) {
                console.log(`https://www.youtube.com/watch?v=${_songList[name]}`)
            } else {
                console.log('No such song')
            }   
        }
        return {
            addSong: addSong,
            getSong: getSong
        }
    }

    const songsManager = SongsManager()
    songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
    songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
    songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

    songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
}

jukeBox()