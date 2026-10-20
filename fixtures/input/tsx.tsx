export function Component1() {
  return <div/>;
}

const cn = (className: string) => className;

export function jsx2() {
  const props = {a:1,
  b:2}
  return < a  foo= 'bar' bar={`foo` } className="p-3 border-gray-300 m-4 h-24 lg:p-4 flex border-2 lg:m-4">
     <div {...props }
     a={1}
    b="2">Inline Text</div>
    <Component1 className={cn("p-3 border-gray-300 m-4 h-24 lg:p-4 flex border-2 lg:m-4")}>
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
