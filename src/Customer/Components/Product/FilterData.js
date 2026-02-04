// export const color = [
//     "white",
//     "Black",
//     "Red",
//     "marun",
//     "Being",
//     "Pink",
//     "Green",
//     "Yellow"
// ];

// export const filters = [
//     {
//         id: "color",
//         name: "Color",
//         option :[
//             {value:"white", lable:"White"},
//             {value:"white", lable:"White"},
//             {value:"white", lable:"White"},
//             {value:"white", lable:"White"},
//             {value:"white", lable:"White"},
//             {value:"white", lable:"White"},
//             {value:"white", lable:"White"},
//             {value:"white", lable:"White"}
//         ],
//     },

//     {
//         id:"size",
//         name:"Size",
//         options:[
//             {value:"S", lable:"S"},
//             {value:"M", lable:"M"},
//             {value:"L", lable:"L"},
//         ],
//     },
// ];

// export const singleFilter =[
//     {
//         id:"price",
//         name:"Price",
//         lable :[
//             {value:"159-399", lable : "159 to 366"},
//             {value:"159-399", lable : "159 to 366"},
//             {value:"159-399", lable : "159 to 366"},
//             {value:"159-399", lable : "159 to 366"},
//             {value:"3999-4999", lable : "3999 to 4999"}
//         ]
//     },
//     {
//         id:"disccount",
//         name:"Disccount Range",
//         option: [
//             {
//                 value:"10",
//                 lable :"10% and Above"
//             },
//             {value:"20", lable:"20% And Above"},
//             {value:"20", lable:"20% And Above"},
//             {value:"20", lable:"20% And Above"},
//             {value:"20", lable:"20% And Above"},
//             {value:"20", lable:"20% And Above"},
//             {value:"20", lable:"20% And Above"},
//             {value:"20", lable:"20% And Above"}
//         ]
//     },
//     {
//         id:"Stock",
//         name:"Availability",
//         options:[
//             {value :"in-stock", lable :"In-stock"},
//             {value :"out-of-stock", lable :"Out-Of-stock"}
//         ],
//     },
// ];


// colors.js
export const colors = [
  "White",
  "Black",
  "Red",
  "Maroon",
  "Beige",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: colors.map(c => ({
      value: c.toLowerCase(),
      label: c,
    })),
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 to ₹399" },
      { value: "400-999", label: "₹400 to ₹999" },
      { value: "1000-4999", label: "₹1000 to ₹4999" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% and above" },
      { value: "20", label: "20% and above" },
      { value: "30", label: "30% and above" },
      { value: "40", label: "30% and above" },
      { value: "50", label: "30% and above" },
      { value: "60", label: "30% and above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in-stock", label: "In Stock" },
      { value: "out-of-stock", label: "Out of Stock" },
    ],
  },
];
