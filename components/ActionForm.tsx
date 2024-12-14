interface ActionFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string
}
import clsx from "clsx";
export function ActionForm({
  action,
  children,
  className,
  title,
  ...props
}: ActionFormProps) {
  return (
    <div className='flex flex-col justify-center items-center'>
    <h2 className="text-lg mb-4">{title}</h2>
      <form className="flex flex-col items-center gap-4" {...props} action={action}>
        {children}
      </form>
    </div>
  );
}
