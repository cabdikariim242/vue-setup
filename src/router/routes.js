

const layout = () =>  import('@/layout/index.vue')
const buttons = () =>  import('@/views/buttons.vue')
const inputGroup = () =>  import('@/views/inputGroup.vue')
const alert = () =>  import('@/views/alert.vue')
const tabs = () =>  import('@/views/tabs.vue')
const TableViews = () =>  import('@/views/TableViews.vue')
const AccordionView = () =>  import('@/views/AccordionView.vue')
const DatePicker = () =>  import('@/views/DatePicker.vue')
const ImageZoomView = () =>  import('@/views/ImageZoomView.vue')
const RegularForm = () =>  import('@/views/RegularForm.vue')
const Dropdown = () =>  import('@/views/Dropdown.vue')
const FormView = () =>  import('@/views/FormView.vue')
const RadioButton = () =>  import('@/views/RadioButton.vue')
const TextArea = () =>  import('@/views/TextArea.vue')
const CheckBox = () =>  import('@/views/CheckBox.vue')
const fileupload = () =>  import('@/views/fileupload.vue')
const SelectBox = () =>  import('@/views/SelectBox.vue')
const TomSelectView = () =>  import('@/views/TomSelectView.vue')


export default [
  {
    path: '/',
    name: 'layout',
    component: layout
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: buttons
  },
  {
    path: '/inputGroup',
    name: 'inputGroup',
    component: inputGroup
  },
  {
    path: '/alert',
    name: 'alert',
    component: alert
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: tabs
   
  },
  {
    path: '/TableViews',
    name: 'TableViews',
    component: TableViews
   
  },
  {
    path: '/DatePicker',
    name: 'DatePicker',
    component: DatePicker
   
  },
  {
    path: '/AccordionView',
    name: 'AccordionView',
    component: AccordionView
   
  },
  
      {
    path: '/ImageZoomView',
    name: 'ImageZoomView',
    component: ImageZoomView
  },
  
      {
    path: '/RegularForm',
    name: 'RegularForm',
    component: RegularForm
  },
      {
    path: '/Dropdown',
    name: 'Dropdown',
    component: Dropdown
  },
   {
    path: '/FormView',
    name: 'FormView',
    component: FormView
  },
  
        {
    path: '/RadioButton',
    name: 'RadioButton',
    component: RadioButton
  },
  
   {
    path: '/TextArea',
    name: 'TextArea',
    component: TextArea
  },
   {
    path: '/CheckBox',
    name: 'CheckBox',
    component: CheckBox
  },
   {
    path: '/fileupload',
    name: 'fileupload',
    component: fileupload
  },
   {
    path: '/SelectBox',
    name: 'SelectBox',
    component: SelectBox
  },
     {
    path: '/TomSelectView',
    name: 'TomSelectView',
    component: TomSelectView
  },
 
 
]
