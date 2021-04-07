// add data 
import Chart from './chart/index';
import Maps from './map/index';

export default [
    {
        key: 4,
        icon: "mdi-toy-brick",
        text: "افزونه ها",
        name:"plugin",
        item: [
          ...Chart,
          ...Maps
        ]
      },
]