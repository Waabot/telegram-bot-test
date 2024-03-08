export class History {
    public data = [{}]
    // export default histories;
    async addToHistory(index: number, data: any) {
        this.data[index] = data;
    }
    async getHistory(index: number) {
        return this.data[index]
    }
}

const history = new History;

export default history;