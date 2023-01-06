import { ElButton, ElInput, ElMessage, ElTable, ElTableColumn } from "element-plus";
import { defineComponent, ref } from "vue";
import tableWithAddRowsProps from './DefaultProps'
import tableRowsStyle from './index.module.css'
export default defineComponent({
  name: 'tableWithAddRows',
  props: tableWithAddRowsProps,
  setup(props, context) {
    type rows = typeof props.tableData[0]
    const editSwitch = ref(false)
    const tableColumn = JSON.parse(JSON.stringify(props.tableData[0]))
    const editClick = (row: rows) => {
      if (row.edit == undefined) {
        row.edit = true
      } else {
        delete row.edit
      }
    }
    const deleteClick = (row: rows) => {
      console.log(row, 'row')
      if (row.row.edit) {
        ElMessage.warning('编辑时不可删除')
        return
      } else {
        props.tableData.splice(row.$index, 1)
      }
    }
    const tableCellClick = (row:any , column: any  , cell: any  , event: any)=>{
        row.edit=true
    }
    return () => {
      return (
        <div style="position:relative">
          <ElTable data={props.tableData} border onCellDblclick={tableCellClick}>
            {Object.entries(tableColumn).map(([item]) =>
              <ElTableColumn prop={item} label={props.labelData[item]}>
                {(slot: any) => {
                  return slot.row.edit ? <ElInput v-model={slot.row[item]}></ElInput> : <div>{slot.row[item]}</div>
                }}
              </ElTableColumn>)}
            <ElTableColumn width={props.handleColumnWidth}>
              {(slot: any) => {
                return (
                  <div>
                    <ElButton type={slot.row.edit ? 'primary' : 'warning'} onClick={() => { editClick(slot.row) }}>{slot.row.edit ? '保存' : '编辑'}</ElButton>
                    <el-popconfirm title="确认删除吗?" onConfirm={() => { deleteClick(slot) }}>
                      {{ reference: () => <ElButton type="danger" > 删除 </ElButton>}}
                    </el-popconfirm>
                    {context.slots.handle ? context.slots.handle({ row: slot.row }) : ''}
                  </div>
                )
              }}
            </ElTableColumn>
          </ElTable>
          <div class={tableRowsStyle.addRow} onClick={() => { props.tableData.push({}) }}>增 加 行</div>
        </div>
      )
    }
  }
})
