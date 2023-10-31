export default function TodoItem({checked, text ,onChange}: {checked : boolean, text: string, onChange: any}) {
    return (
        <div>
            <input type="checkbox" defaultChecked={checked} onChange={onChange} id="topping" name="topping" value="test check" />{text}
        </div>
    )
  }