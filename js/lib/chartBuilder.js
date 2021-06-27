class ChartBuilder {

    constructor(type) {
        this.obj = {};
        this.obj.type = type;
        this.obj.data = {};
        this.obj.data.datasets = [];
        this.obj.options = {};
        this.pos1 = 0;

        if (type == "bar") {
            this.obj.options.scales = {
                yAxes: [{
                    ticks: { beginAtZero: true }
                }]
            }
        }

    }


    set labels(data) {
        this.obj.data.labels = data;
    }

    set backgroundColor(item) {
        this.obj.data.datasets[this.pos1 - 1].backgroundColor = item;
    }

    set backgroundColorCondiction(closure) {
        this.obj.data.datasets[this.pos1 - 1].backgroundColor = closure;
    }

    set dataset(list) {

        this.obj.data.datasets[this.pos1++] = {
            label: list[0],
            data: list[1],
            borderWhidth: 6,
            borderColor: "rgba(77,166,203,0.85)",
            backgroundColor: "#eee"
        }

    }


    set title(title) {
        this.obj.options.title = {
            display: true,
            text: title
        }
    }


    get chart() {
        return this.obj;
    }


    get labels() {
        return this.obj.data.label;
    }

    get datasets() {
        return this.obj.data.datasets;
    }

    get title() {
        return this.obj.options.text;
    }

    get backgroundList() {
        return this.obj.data.datatasets[this.pos1].backgroundColor;
    }

    get backgroundColorCondiction() {
        return this.obj.data.datatasets[this.pos1].backgroundColor;
    }
}
