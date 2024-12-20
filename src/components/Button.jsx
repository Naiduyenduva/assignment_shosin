
const Button = ({text, variant='pramary'}) => {
    const variantStyles = {
        primary: 'bg-activityButton'
    }
    return (
        <button className={`py-2 px-4 w-139 h-38 rounded font-medium text-sm text-center ${variantStyles[variant]}`}>{text}</button>
    )

}
export default Button;