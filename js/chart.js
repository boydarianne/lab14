"use strict";

let canvasElem = document.getElementById("chart");

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

//instantiate a new AppState

let state = new AppState();
state.loadItems();

// data object
const dataObj = {
  views: [],
  votes: [],
  labels: [],
};

for (let i = 0; i < state.allProducts.length; i++) {
  dataObj.views.push(state.allProducts[i].timesShown);
  dataObj.votes.push(state.allProducts[i].timesClicked);
  dataObj.labels.push(state.allProducts[i].name);
}

function renderChart() {
  const ctx = document.getElementById("chart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: dataObj.labels,
      datasets: [
        {
          label: "# of Votes",
          data: dataObj.votes,
          borderWidth: 1,
        },

        {
          label: "# of Views",
          data: dataObj.views,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

renderChart();
