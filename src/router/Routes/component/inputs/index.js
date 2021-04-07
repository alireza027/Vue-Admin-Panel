export default [
    {
        path: '/components/inputs',
        component: () => import('../../../../views/Component/Inputs/Slider/Slider.vue')
    },
    {
        path: '/components/inputs/sliders',
        component: () => import('../../../../views/Component/Inputs/Slider/Slider.vue')
    },
    {
        path: '/components/inputs/selects',
        component: () => import('../../../../views/Component/Inputs/Select/Select.vue')
    },
    {
        path: '/components/inputs/color-picker',
        component: () => import('../../../../views/Component/Inputs/ColorPicker/ColorPicker.vue')
    },
    {
        path: '/components/inputs/autocompletes',
        component: () => import('../../../../views/Component/Inputs/AutoComplete/AutoComplete.vue')
    },
    {
        path: '/components/inputs/checkboxes',
        component: () => import('../../../../views/Component/Inputs/Checkbox/Checkbox.vue')
    },
    {
        path: '/components/inputs/radio',
        component: () => import('../../../../views/Component/Inputs/RadioButton/RadioButton.vue')
    },
    {
        path: '/components/inputs/ratings',
        component: () => import('../../../../views/Component/Inputs/Rating/Rating.vue')
    },
    {
        path: '/components/inputs/files',
        component: () => import('../../../../views/Component/Inputs/File/File.vue')
    },
    {
        path: '/components/inputs/forms',
        component: () => import('../../../../views/Component/Inputs/Form/Form.vue')
    },
    {
        path: '/components/inputs/comboboxes',
        component: () => import('../../../../views/Component/Inputs/ComboBox/ComboBox.vue')
    },
    {
        path: '/components/inputs/textarea',
        component: () => import('../../../../views/Component/Inputs/TextArea/TextArea.vue')
    },
    {
        path: '/components/inputs/inputs',
        component: () => import('../../../../views/Component/Inputs/Inputs/Inputs.vue')
    },
]