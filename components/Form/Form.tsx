import clsx from "clsx"
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}
export function Form({action, children, className, ...props}: FormProps) {
    return (
        <form className={clsx('flex flex-col gap-5 items-center', className)} action={action} {...props}>
            {children}
        </form>
    )
}