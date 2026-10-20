export function Component1() {
  return <div/>
}

const cn = (className: string) => className

export function jsx2() {
  const props = { a: 1, b: 2 }
  return < a foo= 'bar' bar={`foo` } className="m-4 flex h-24 border-2 border-gray-300 p-3 lg:m-4 lg:p-4">
    <div {...props } a={1} b="2">Inline Text</div>
    <Component1 className={cn('m-4 flex h-24 border-2 border-gray-300 p-3 lg:m-4 lg:p-4')}>
      Block Text
    </Component1>
    <div>
      Mixed
      <div>Foo</div>
      Text<b > Bar</b>
    </div>
    <p>
      foo<i>bar</i><b>baz</b>
    </p>
  </ a >
}
