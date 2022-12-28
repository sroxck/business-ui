import { ElButton } from "element-plus"
import { defineComponent, h } from "vue"

export default defineComponent({
  name: 'EButton',
  setup(props, context) {
    // const { render } = useButton(props, context)
    return ()=>{
      return <ElButton type="primary">222</ElButton>
    }
  }
})
