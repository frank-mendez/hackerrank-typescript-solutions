function pangrams(s: string): string {
    const regex = /([a-z])(?!.*\1)/g;
    const isPangram =  (s.toLowerCase().match(regex) || []).length === 26;
    return isPangram ? 'pangram' : 'not pangram'
}

const data = 'The quick brown fox jumps over the lazy dog'

console.log('pangram', pangrams(data))