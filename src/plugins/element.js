import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  col,
  Table,
  TableColumn,
  Switch,
  tooltip,
  pagination,
  dialog,
  MessageBox,
  Tag,
  Tree,
  select,
  option,
  Cascader,
  alert,
  tabs,
  TabPane,
  Steps,
  Step,
  CheckboxGroup,
  Checkbox,
  upload
} from 'element-ui'

import Timeline from './timeline/index'
import TimelineItem from './timeline-item/index'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(tooltip)
Vue.use(pagination)
Vue.use(dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(select)
Vue.use(option)
Vue.use(Cascader)
Vue.use(alert)
Vue.use(tabs)
Vue.use(TabPane)
Vue.use(Steps)
Vue.use(Step)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(upload)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
