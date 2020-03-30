function template({ template }, opts, { imports, componentName, props, jsx, exports }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })

  componentName.name = componentName.name.slice(3)

  return typeScriptTpl.ast`
  import React from 'react';
  const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
  export default ${componentName}
`
}
module.exports = template
