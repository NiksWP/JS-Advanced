function Subset(input = []){
    return input.reduce((acc, current) => {
        if (current >= acc[acc.length - 1] || acc.length === 0) {
            acc.push(current);
        }
        return acc;
    }, [])
}
