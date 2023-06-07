const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]

function main(story, separators) {
    let s = cleanStory(story, separators)
    console.log(story)
    console.table(countWords(s))
}

function cleanStory(story, separators) {
    let s = story
    for (let i = 0; i < separators.length; i++) {
        s = s.split(separators[i]).join('')
    }
    return s.toLowerCase()
}

function countWords(str) {
    const wordCounts = {}
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (!wordCounts[arr[i]]) wordCounts[arr[i]] = 1
        else wordCounts[arr[i]] += 1
    }
    return wordCounts
}

main(story, specialChars)