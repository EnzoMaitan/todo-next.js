export default function TodoItem({checked, text ,onChange}: {checked : boolean, text: string,onChange: any}) {
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={onChange} id="topping" name="topping" value="test check" />{text}
        </div>
    )
  }