function Grid(size){
    this.size = size;

    this.cells = [];
    this.build();
}

Grid.prototype.build = function(){
    for (var i = 0; i < this.size; i++) {
        var row = this.cells[x] = [];

        for (var j = 0; j < this.size; j++) {
            row.push(null);
    }
};

Grid.prototype.randomAvailableCell = function(){
    var cells = this.availableCells();

    if(cells.length){
        return cells[Math.floor(Math.random() * cells.length)];
    }
};

Grid.prototype.availableCells = function(){
    var cells = [];

    for(var x = 0 ; x < this.size; x++){
        for(var y = 0 ; y < this.size; y++){
            var cell = {x: x, y: y};

            if(this.cellAvailable(cell){
                cells.push(cell);
            })
        }
    }

    return cells;
};


Grid.prototype.cellAvailable = function(cell){
    return !this.cellOccupied(cell);
};

Grid.prototype.cellOccupied = function(cell){
    return !!this.cells[cell.x][cell.y];
};

Grid.prototype.insertTile = function(tile){
    this.cells[tile.x][tile.y] = tile;
};
