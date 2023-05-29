import { defineComponent, h, SetupContext } from "vue";
import { useForm } from './useForm'
import {ElButton,ElForm,ElFormItem,ElInput} from 'element-plus'
export const Typer: objectRecord = {
  'text':ElInput,
  'default':ElInput
}

export type configType = {
  type?: string,
  value: string,
  model:'string',
  placeholder?: string
  [index: string]: any
}
export type searchConfig = {
  config: objectRecord,
  property: configType[]
}
export type propsConfig = {
  config: searchConfig
}
export type objectRecord = Record<string, any>


export default defineComponent({
  name:'Search',
  props: {
    config: {
      required: true,
      type: Object
    }
  },
  setup(props,ctx:SetupContext){
    const { emit } = ctx
    const { formData, instance } = useForm(props.config as any)
    const reset = () => {
      Object.keys(formData).forEach(item => (formData[item] = ''))
    }

    const Form = () => {
      return h(ElForm, { props: { ...props.config.config }}, [FormItem(), props.config.config.handle == false ? '' : FormHandle()])
    }

    const FormHandle = () => {
      const queryButton = h(ElButton, { on: { click: () => emit('search', formData) }, class: ['cx'] }, '查询')
      const resetButton = h(ElButton, {
        on: {
          click: () => {
            reset()
            emit('search', formData)
          }
        }
      }, '重置')
      return h(ElFormItem, { class: ['queryBtn'] }, [queryButton, resetButton])
    }

    const FormItem = () => {
      return props.config.property.map((item:any) => h(ElFormItem, null, [FormItemInstance(item)]))
    }

    const FormItemInstance = (config: configType) => {
      
      const { type } = config
      return h(Typer[type || 'default'], instance(config, formData, ctx))
    }

    return () => Form()
  }
})
