window.onload = function () {
    var list = document.getElementById("shuffleAndSort"),
        button = document.getElementById("shuffle"),
        button2 = document.getElementById("sort");

    //sort function calling    
    function sort() {
        //holding the li elements in the list array variable.
        var items = list.children,
            //initializing the value of i.
            i = 0;
        items = Array.prototype.slice.call(items);
        //declaring the cached variable for storing items. 
        var cached = items.slice(0),
            temp, i = cached.length,
            rand;
        // creating the sort array with bubble sort operation using for loop.
        for (var x = 0; x < cached.length - 1; x++) {
            for (var y = 0; y < cached.length - 1 - x; y++) {
                if (+cached[y].innerText > +cached[y + 1].innerText) {
                    var temp = cached[y];
                    cached[y] = cached[y + 1];
                    cached[y + 1] = temp;
                }
            }
        }
        i = 0;
        //this for loop will create the UI view using li tag.
        while (i < cached.length) {
            list.appendChild(cached[i]);
            ++i;
        }
    }

    //shuffle function.
    function shuffle(items) {
        var cached = items.slice(0), temp, i = cached.length, rand;
        //this loop will generate the random number and stroe the values in an array and return this array.
        while (--i) {
            rand = Math.floor(i * Math.random());
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
        }
        return cached;
    }
    //this shuffleNodes function will create the UI view using li tag for shuffle values..
    function shuffleNodes() {
        var nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffle(nodes);
        while (i < nodes.length) {
            list.appendChild(nodes[i]);
            ++i;
        }
    }
    document.getElementById("shuffle").onclick = shuffleNodes;
    document.getElementById("sort").onclick = sort;
}