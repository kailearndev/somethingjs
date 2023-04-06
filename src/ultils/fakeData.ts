import { v4 as uuidv4, v4 } from "uuid";

export const customersDataFake = [
  {
    id: uuidv4(),
    firstName: "John",
    lastName: "Smith",
    age: "35",
    email: "john.smith@example.com",
    phone: "+1 (555) 555-1234",
    address: "123 Main St, Anytown USA",
    job: "dev",
    birth: "01/02/1990",
    purchaseHistory: [
      {
        date: "2022-01-01",
        product: "Widget",
        price: 50.0,
      },
      {
        date: "2022-02-15",
        product: "Gadget",
        price: 75.0,
      },
    ],
  },
  {
    id: uuidv4(),

    job: "sale",
    birth: "01/02/1980",
    firstName: "Jane",
    lastName: "Doe",
    age: "35",
    email: "jane.doe@example.com",
    phone: "+1 (555) 555-5678",
    address: "456 Oak Ave, Anytown USA",
    purchaseHistory: [
      {
        date: "2022-03-10",
        product: "Thingamajig",
        price: 25.0,
      },
      {
        date: "2022-05-01",
        product: "Doodad",
        price: 30.0,
      },
    ],
  },
  {
    id: uuidv4(),

    job: "call center",
    birth: "01/01/1960",
    firstName: "Bob",
    lastName: "Johnson",
    age: "20",
    email: "bob.johnson@example.com",
    phone: "+1 (555) 555-9012",
    address: "789 Pine St, Anytown USA",
    purchaseHistory: [
      {
        date: "2022-04-15",
        product: "Widget",
        price: 50.0,
      },
      {
        date: "2022-06-30",
        product: "Gadget",
        price: 75.0,
      },
      {
        date: "2022-08-01",
        product: "Thingamajig",
        price: 25.0,
      },
    ],
  },
  // Add more objects with fake customer data as needed
];

export const optHomeChart = {
  legend: {},
  tooltip: {
    trigger: "axis",
    showContent: false,
  },
  dataset: {
    source: [
      ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
      ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
      ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
      ["Cheese Cocoa", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
      ["Walnut Brownie", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
    ],
  },
  xAxis: { type: "category" },
  yAxis: { gridIndex: 0 },
  grid: { top: "55%" },
  series: [
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" },
    },
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" },
    },
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" },
    },
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" },
    },
    {
      type: "pie",
      id: "pie",
      radius: "30%",
      center: ["50%", "25%"],
      emphasis: {
        focus: "self",
      },
      label: {
        formatter: "{b}: {@2012} ({d}%)",
      },
      encode: {
        itemName: "product",
        value: "2012",
        tooltip: "2012",
      },
    },
  ],
};
export const optCustomerDta = {
  grid: { top: 8, right: 8, bottom: 24, left: 36 },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};
export const optDashboardFake = {
  title: {
    text: "Distribution of Electricity",
    subtext: "Fake Data",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    // prettier-ignore
    data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value} W",
    },
    axisPointer: {
      snap: true,
    },
  },
  visualMap: {
    show: false,
    dimension: 0,
    pieces: [
      {
        lte: 6,
        color: "green",
      },
      {
        gt: 6,
        lte: 8,
        color: "red",
      },
      {
        gt: 8,
        lte: 14,
        color: "green",
      },
      {
        gt: 14,
        lte: 17,
        color: "red",
      },
      {
        gt: 17,
        color: "green",
      },
    ],
  },
  series: [
    {
      name: "Electricity",
      type: "line",
      smooth: true,
      // prettier-ignore
      data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
      markArea: {
        itemStyle: {
          color: "rgba(255, 173, 177, 0.4)",
        },
        data: [
          [
            {
              name: "Morning Peak",
              xAxis: "07:30",
            },
            {
              xAxis: "10:00",
            },
          ],
          [
            {
              name: "Evening Peak",
              xAxis: "17:30",
            },
            {
              xAxis: "21:15",
            },
          ],
        ],
      },
    },
  ],
};
export const fakeCV = [
  {
    content: "CRM (Customer Relationship Management) : A useful tool ot help the company manage interactions with customers at the present time, analyze data about customers' history with the company to,   LOS (Loan Origination System) : A loan origination process management solution for the banking industry, helping ot quickly and accurately process documents related to loans applications and reduce time Technologies: React, TypeScript, Material UI, Redux-Toolkit, Redux-Saga, Axios, RestfulAPI"
  },
  {
    content:'Construction Work Management: CRM on construction. manage customers to rent construction equipment.Member size: 4, Technologies: ReactS. Material UI. Redux. C# Winform.'
  }
]


// const people = [  { name: 'John', age: 30 },  { name: 'Jane', age: 25 },  { name: 'Bob', age: 40 }];

// const person = people.find(p => p.name === 'John' && p.age === 30);
// console.log(person); // { name: 'John', age: 30 }
