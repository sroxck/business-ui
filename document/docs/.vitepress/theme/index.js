/**
 * @Author: sroxck
 * @Date: 2023-05-29 10:28:18
 * @LastEditors: sroxck
 * @LastEditTime: 2023-05-29 11:10:16
 * @Description: 
 */
import DefaultTheme from 'vitepress/theme'
import {EButton,TableWithAddRows,SrTableWithAddRows} from '../../../../dist/business-ui'
import   '../../../../dist/style.css'
import element from 'element-plus'
import 'element-plus/dist/index.css'
import { globals } from '../components/index'


export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
 
    console.log(ctx,'ctx',TableWithAddRows,SrTableWithAddRows)
    DefaultTheme.enhanceApp(ctx)
 
    ctx.app.component('tablesss', TableWithAddRows)
    ctx.app.use(element)
    globals.forEach((comp) => {
      ctx.app.component(comp.name , comp)
    })
  }
}
