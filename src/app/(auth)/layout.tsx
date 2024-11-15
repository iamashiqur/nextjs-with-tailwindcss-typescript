const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-auth-bg flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  )
}

export default AuthLayout
