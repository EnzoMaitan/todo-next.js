export default function TodoItem({checked, text ,onClick}: {checked : boolean, text: string, onClick: any}) {
    return (
        <div>
            <input type="checkbox" defaultChecked={checked} onClick={onClick} id="topping" name="topping" value="test check" />{text}
        </div>
    )
  }