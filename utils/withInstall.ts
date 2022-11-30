import { Plugin } from 'vue'
type SFCWithInstall<T> = T & Plugin

interface extendsName {
  name: string;
}

export const withInstall = <T extends extendsName>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app) {
    app.component(component.name, component)
  }
  return component as SFCWithInstall<T>
}
