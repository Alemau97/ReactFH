import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./routes/AppRouter"
import { Navbar } from "./ui/components/Navbar"

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
