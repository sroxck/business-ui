import { h, SetupContext, reactive, defineComponent } from 'vue'
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

const useFormData = (property: configType[]) => {
  const formResult: objectRecord = {}
  property.forEach(item => {
    formResult[item.model] = item.value
  })
  const formData = reactive(formResult)
  return {
    formData
  }
}

export function useForm(config: searchConfig) {
  const { formData } = useFormData(config.property)
  const instance = (config: configType, _formData: objectRecord, ctx: SetupContext) => {
    _formData = reactive({..._formData})
    const { placeholder = '请输入...', model } = config
    return {
      props: {
        value: _formData[model],
        prefixIcon: `iconfont ${config.native.prefixIcon}`
      },
      attrs: {
        placeholder
      },
      nativeOn: {
        keyup: (e: KeyboardEvent) => {
          if (e.key == 'Enter') ctx.emit('search', _formData)
        }
      },
      
      onInput: (e: string) => {
        console.log(e,'_formData',_formData)
        _formData[model] = e
      },
      onChange: (e:string) => {
        console.log(e,'_formDat22a',_formData)
        // _formData[model] = e
      }
     
    }
  }
  return {
    instance, formData
  }
}
