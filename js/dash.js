
function toggle(elementid) {
    const element = document.getElementById(elementid);

    element.style.display = "block";

    if (element.style.display != "none") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }

}


function makeChart(id, data, title, labels, name, type, bg) {

    const canvas = document.getElementById(id);

    builder = new ChartBuilder(type);

    builder.labels = labels;

    builder.dataset = [name, data];

    builder.backgroundColor = bg;

    builder.title = title;

    new Chart(canvas, builder.chart);
}



const data = [6, 13, 10, 8, 14];
const title = "Trafégo da API";
const labels = ["jan", "fev", "mar", "apr", "mai"];

makeChart("cv1", data, title, labels, "Requesições", "bar", "#0d6a80");

const data2 = [11, 10, 15, 8, 10];
const title2 = "Encomendas";
const labels2 = ["jan", "fev", "mar", "apr", "mai"];

makeChart("cv2", data2, title2, labels2, "Pedidos", "line", "#0d6a80");