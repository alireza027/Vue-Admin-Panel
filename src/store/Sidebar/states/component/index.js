// add data
import General from './general/index';
import Navigation from './navigation/index';
import Inputs from './inputs/index';
import DataDisplay from './data-display/index';
import Feedback from './feedback/index';
import Table from './table/index';
import DateAndTime from './date-and-time';
import Style from './style/index';
import Directive from './directive/index';
import Other from './other/index';

export default [
    {
        key: 2,
        icon: "mdi-iframe",
        text: "کامپوننت ها",
        name:"components",
        item: [
          ...General,
          ...Navigation,
          ...Inputs,
          ...DataDisplay,
          ...Feedback,
          ...Table,
          ...DateAndTime,
          ...Style,
          ...Directive,
          ...Other
        ],
      },
]