class Grass extends LivingCreature{
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiplay = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        matrix[y][x] = 1
        grassArr.push(this)

    }
    chooseCell(n) {
        let found = []

        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && y >= 0 && x < matrix.length && y < matrix.length) {


                if (matrix[y][x] == n) {

                    found.push(this.directions[i])
                }
            }
        }
        return found
    }
    mul() {
        this.multiplay++
        if (this.multiplay >= 1) {
            let emptyCells = this.chooseCell(0)


            if (emptyCells.length > 0) {
                let randIndex = Math.round(Math.random() * (emptyCells.length - 1))


                let x = emptyCells[randIndex][0]
                let y = emptyCells[randIndex][1]

                matrix[y][x] = 1
                let gr = new Grass(x, y)
            }


            this.multiplay = 0

        }
    }
}