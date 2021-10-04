export const App = () => {
  const name = 'Hong Kyung Won'

  return (
    <div>
      Hello {name}! - {process.env.NODE_ENV} {process.env.name}
    </div>
  )
}
