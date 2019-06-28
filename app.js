const report = {
  report: [
    {
      fileName: "file-1MB.bin",
      sizeInMB: 1,
      qtyOfHashes: 20,
      hashTime: 0.08,
      hashRate: 255.13,
      collision: [
        {
          collisionBytes: 1,
          collisionAttempts: 96,
          collisionTime: 0.0005,
          collisionRate: 202440.0121
        },
        {
          collisionBytes: 2,
          collisionAttempts: 133522,
          collisionTime: 0.6156,
          collisionRate: 216902.2538
        },
        {
          collisionBytes: 3,
          collisionAttempts: 4039177,
          collisionTime: 23.2189,
          collisionRate: 173960.7606
        }
      ]
    },
    {
      fileName: "file-10MB.bin",
      sizeInMB: 10,
      qtyOfHashes: 20,
      hashTime: 0.84,
      hashRate: 23.8,
      collision: [
        {
          collisionBytes: 1,
          collisionAttempts: 100,
          collisionTime: 0.0005,
          collisionRate: 205804.9068
        },
        {
          collisionBytes: 2,
          collisionAttempts: 143321,
          collisionTime: 0.7296,
          collisionRate: 196446.389
        },
        {
          collisionBytes: 3,
          collisionAttempts: 4461332,
          collisionTime: 22.8627,
          collisionRate: 195135.7473
        }
      ]
    },
    {
      fileName: "file-100MB.bin",
      sizeInMB: 100,
      qtyOfHashes: 20,
      hashTime: 8.31,
      hashRate: 2.41,
      collision: [
        {
          collisionBytes: 1,
          collisionAttempts: 14,
          collisionTime: 0.0001,
          collisionRate: 150179.6829
        },
        {
          collisionBytes: 2,
          collisionAttempts: 34156,
          collisionTime: 0.1607,
          collisionRate: 212514.4224
        },
        {
          collisionBytes: 3,
          collisionAttempts: 7259599,
          collisionTime: 36.237,
          collisionRate: 200336.38
        }
      ]
    },
    {
      fileName: "file-200MB.bin",
      sizeInMB: 200,
      qtyOfHashes: 20,
      hashTime: 22.61,
      hashRate: 0.88,
      collision: [
        {
          collisionBytes: 1,
          collisionAttempts: 157,
          collisionTime: 0.0007,
          collisionRate: 211602.0977
        },
        {
          collisionBytes: 2,
          collisionAttempts: 2993,
          collisionTime: 0.0158,
          collisionRate: 188846.2109
        },
        {
          collisionBytes: 3,
          collisionAttempts: 552637,
          collisionTime: 2.6935,
          collisionRate: 205172.9432
        }
      ]
    },
    {
      fileName: "file-500MB.bin",
      sizeInMB: 500,
      qtyOfHashes: 20,
      hashTime: 62.05,
      hashRate: 0.32,
      collision: [
        {
          collisionBytes: 1,
          collisionAttempts: 307,
          collisionTime: 0.0017,
          collisionRate: 176826.6037
        },
        {
          collisionBytes: 2,
          collisionAttempts: 84045,
          collisionTime: 0.5201,
          collisionRate: 161584.629
        },
        {
          collisionBytes: 3,
          collisionAttempts: 7737518,
          collisionTime: 43.1289,
          collisionRate: 179404.5372
        }
      ]
    },
    {
      fileName: "file-1000MB.bin",
      sizeInMB: 1000,
      qtyOfHashes: 20,
      hashTime: 100.79,
      hashRate: 0.2,
      collision: [
        {
          collisionBytes: 1,
          collisionAttempts: 28,
          collisionTime: 0.0005,
          collisionRate: 60913.1286
        },
        {
          collisionBytes: 2,
          collisionAttempts: 48780,
          collisionTime: 0.2223,
          collisionRate: 219451.9755
        },
        {
          collisionBytes: 3,
          collisionAttempts: 4488597,
          collisionTime: 24.1298,
          collisionRate: 186018.9678
        }
      ]
    }
  ],
  system: {
    arch: "x86_64",
    platform: "Darwin-18.6.0-x86_64-i386-64bit",
    processor: ["2.7 GHz Intel Core i5 (i386)", "3.0 GHz Intel Core i5-7400 (i386)"],
    ram: "8 GB 1867 MHz DDR3",
    device: ["MacBook Pro (Retina, 13-inch, Early 2015)", "Desktop"]
  }
};

const backgroundColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)"
];
const borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)"
];

const options = {
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const hashTime = new Chart(document.getElementById("hashTime"), {
  type: "line",
  data: {
    labels: report.report.map(i => i.sizeInMB + " MB"),
    datasets: [
      {
        label: "Tiempo en hashear (seg.)",
        data: report.report.map(i => i.hashTime),
        borderWidth: 1,
        backgroundColor: backgroundColor[0],
        borderColor: borderColor[0]
      }
    ]
  },
  options: options
});

const hashRate = new Chart(document.getElementById("hashRate"), {
  type: "line",
  data: {
    labels: report.report.map(i => i.sizeInMB + " MB"),
    datasets: [
      {
        label: "Hashes por seg.",
        data: report.report.map(i => i.hashRate),
        borderWidth: 1,
        backgroundColor: backgroundColor[1],
        borderColor: borderColor[1]
      }
    ]
  },
  options: options
});

const collisionRate = new Chart(document.getElementById("collisionRate"), {
  type: "line",
  data: {
    labels: report.report.map(i => i.sizeInMB + " MB"),
    datasets: [
      {
        label: "Colisiones por seg. 1 byte",
        data: report.report.map(i => i.collision[0].collisionRate),
        borderWidth: 1,
        backgroundColor: backgroundColor[0],
        borderColor: borderColor[0]
      },
      {
        label: "Colisiones por seg. 2 bytes",
        data: report.report.map(i => i.collision[1].collisionRate),
        borderWidth: 1,
        backgroundColor: backgroundColor[1],
        borderColor: borderColor[1]
      },
      {
        label: "Colisiones por seg. 3 bytes",
        data: report.report.map(i => i.collision[2].collisionRate),
        borderWidth: 1,
        backgroundColor: backgroundColor[2],
        borderColor: borderColor[2]
      }
    ]
  },
  options: options
});

const collisionAttemptsByBytes = new Chart(document.getElementById("collisionAttemptsByBytes"), {
  type: "line",
  data: {
    labels: report.report.map(i => i.sizeInMB + " MB"),
    datasets: [
      {
        label: "Intentos con 1 byte",
        data: report.report.map(i => i.collision[0].collisionAttempts),
        borderWidth: 1,
        backgroundColor: backgroundColor[0],
        borderColor: borderColor[0]
      },
      {
        label: "Intentos con 2 bytes",
        data: report.report.map(i => i.collision[1].collisionAttempts),
        borderWidth: 1,
        backgroundColor: backgroundColor[1],
        borderColor: borderColor[1]
      },
      {
        label: "Intentos con 3 bytes",
        data: report.report.map(i => i.collision[2].collisionAttempts),
        borderWidth: 1,
        backgroundColor: backgroundColor[2],
        borderColor: borderColor[2]
      }
    ]
  },
  options: options
});

// const collisionTimeByBytes = new Chart(document.getElementById("collisionTimeByBytes"), {
//   type: "line",
//   data: {
//     labels: report.report.map(i => i.sizeInMB + " MB"),
//     datasets: [
//       {
//         label: "Intentos con 1 byte",
//         data: report.report.map(i => i.collision[0].collisionTime),
//         borderWidth: 1,
//         backgroundColor: backgroundColor[0],
//         borderColor: borderColor[0]
//       },
//       {
//         label: "Intentos con 2 bytes",
//         data: report.report.map(i => i.collision[1].collisionTime),
//         borderWidth: 1,
//         backgroundColor: backgroundColor[1],
//         borderColor: borderColor[1]
//       },
//       {
//         label: "Intentos con 3 bytes",
//         data: report.report.map(i => i.collision[2].collisionTime),
//         borderWidth: 1,
//         backgroundColor: backgroundColor[2],
//         borderColor: borderColor[2]
//       }
//     ]
//   },
//   options: options
// });

const collisionTimeByBytesOnly = new Chart(document.getElementById("collisionTimeByBytesOnly"), {
  type: "line",
  data: {
    labels: [1, 2, 3].map(i => i + " byte(s)"),
    datasets: [
      {
        label: "1 MB",
        data: [
          report.report[0].collision[0].collisionTime,
          report.report[0].collision[1].collisionTime,
          report.report[0].collision[2].collisionTime
        ],
        borderWidth: 1,
        backgroundColor: backgroundColor[0],
        borderColor: borderColor[0]
      },
      {
        label: "10 MB",
        data: [
          report.report[1].collision[0].collisionTime,
          report.report[1].collision[1].collisionTime,
          report.report[1].collision[2].collisionTime
        ],
        borderWidth: 1,
        backgroundColor: backgroundColor[1],
        borderColor: borderColor[1]
      },
      {
        label: "100 MB",
        data: [
          report.report[2].collision[0].collisionTime,
          report.report[2].collision[1].collisionTime,
          report.report[2].collision[2].collisionTime
        ],
        borderWidth: 1,
        backgroundColor: backgroundColor[2],
        borderColor: borderColor[2]
      },
      {
        label: "200 MB",
        data: [
          report.report[3].collision[0].collisionTime,
          report.report[3].collision[1].collisionTime,
          report.report[3].collision[2].collisionTime
        ],
        borderWidth: 1,
        backgroundColor: backgroundColor[3],
        borderColor: borderColor[3]
      },
      {
        label: "500 MB",
        data: [
          report.report[4].collision[0].collisionTime,
          report.report[4].collision[1].collisionTime,
          report.report[4].collision[2].collisionTime
        ],
        borderWidth: 1,
        backgroundColor: backgroundColor[4],
        borderColor: borderColor[4]
      },
      {
        label: "1000 MB",
        data: [
          report.report[5].collision[0].collisionTime,
          report.report[5].collision[1].collisionTime,
          report.report[5].collision[2].collisionTime
        ],
        borderWidth: 1,
        backgroundColor: backgroundColor[5],
        borderColor: borderColor[5]
      }
    ]
  },
  options: options
});
