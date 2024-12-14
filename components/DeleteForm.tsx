interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  title: string;
  action: () => void;
}

export function DeleteForm({
  action,
  children,
  className,
  title,
  ...props
}: FormProps) {
  return (
    <div>
        <h2 className="text-lg mb-4">{title}</h2>
      <form className="flex flex-col items-center gap-4" action={action}>{children}</form>
    </div>
  );
}
