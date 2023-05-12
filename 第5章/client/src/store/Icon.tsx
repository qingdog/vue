import * as icons from '@ant-design/icons'

interface Module {
  [p: string]: any
}

const all: Module = icons

export default function Icon({ name }: { name: string }) {
  const Icon = all[name]
  return <Icon></Icon>
}
