// add data
import PictureEditor from './picture-editor/index';
import CodeEditor from './code-editor/index';
import DragAndDrop from './drag-and-drop/index';
import SweetAlert from './sweet-alert/index';
import Other from './other/index'

export default [

    {
        key: 3,
        icon: "mdi-camera-metering-partial",
        text: "اجزای اضافی",
        name:"additional-component",
        item: [
          ...PictureEditor,
          ...CodeEditor,
          ...DragAndDrop,
          ...SweetAlert,
          ...Other
        ],
      },
]