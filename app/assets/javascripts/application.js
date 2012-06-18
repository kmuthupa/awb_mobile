$("#chart").kendoChart({
    title: {
         text: "Kendo Chart Example"
    },
    series: [
         { name: "Example Series", data: [200, 450, 300, 125] }
    ],
    categoryAxis:{
         categories: [ 2000, 2001, 2002, 2003 ]
    }
});