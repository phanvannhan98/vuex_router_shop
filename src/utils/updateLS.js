export const setCartLocal = data => {
  localStorage.setItem('data', JSON.stringify(data))
}

export const getCartLocal = () => {
  const data = localStorage.getItem('data')
  return (data && JSON.parse(data)) || []
}
