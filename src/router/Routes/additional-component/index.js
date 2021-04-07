import PictureEditor from './picture-editor/index';
import CodeEditor from './code-editor/index';
import DragAndDrop from './drag-and-drop/index';
import SweetAlert from './sweet-alert/index';
import Other from './other/index';
export default [

    {
        path: "/additional-component",
        component: () => import('../../../views/AdditionalComponent/PictureEditor/ToastUi/ToastUi.vue')
    },

    // picture editor
    ...PictureEditor,


    // code editor
    ...CodeEditor,


    // drag and drop
    ...DragAndDrop,


    // sweet alert
    ...SweetAlert,


    // other
    ...Other
]