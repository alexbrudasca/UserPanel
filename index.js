const sideBar = document.querySelector(".side-bar");
const names = document.querySelectorAll(".test.hidden");

sideBar.addEventListener("mouseenter", () => {
    names.forEach(name => {
        name.classList.remove("hidden");
    });
});

sideBar.addEventListener("mouseleave", () => {
    names.forEach(name => {
        name.classList.add("hidden");
    });
});

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctxTwo = document.getElementById('myChartTwo');

new Chart(ctxTwo, {
  type: 'bar',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


