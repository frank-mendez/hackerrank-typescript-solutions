function main(s: string): string {
    const isSplitMethod = s.includes('S;M')
    const isCombineVariable = s.includes('C;V')
    const isCombineClass = s.includes('C;C')
    const isSplitClass = s.includes('S;C')
    const isCombineMethod = s.includes('C;M')
    const isSplitVariable = s.includes('S;V')
    const [operation, indicator, word] = s.split(';')
    if(isSplitMethod) {
        return splitMethod(word)
    }
    if(isCombineVariable) {
        return combineVariable(word)
    }
    if(isCombineClass) {
        return combineClass(word)
    }
    if(isSplitClass) {
        return splitClass(word)
    }
    if(isCombineMethod) {
        return combineVariable(word) + '()'
    }
    if(isSplitVariable) {
        return splitMethod(word)
    }
    return ''
}

const splitMethod = (s: string): string => {
    const data = s.split(/(?=[A-Z])/).map((word) => {
        return word.includes('(') ? word.split('(')[0].toLowerCase() : word.toLowerCase()
    })
    return data.join(' ')
}

const combineVariable = (s: string): string => {
    return s.split(' ').map((word, index) => {
        return index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join('')
}

const combineClass = (s: string): string => {
    return s.split(' ').map((word, index) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }   ).join('')
}

const splitClass = (s: string): string => {
   return s.split(/(?=[A-Z])/).map((word) => {
        return word.toLowerCase()
    }).join('')
}

console.log('1', main('S;M;plasticCup()'))
console.log('2', main('C;V;mobile phone'))
console.log('3', main('C;C;coffee machine'))
console.log('4', main('S;C;LargeSoftwareBook'))
console.log('5', main('C;M;white sheet of paper'))
console.log('6', main('S;V;pictureFrame'))