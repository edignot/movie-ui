export const convertMinutes = (min) => {
  const hours = min / 60
  const fullHours = Math.floor(hours)
  const minutes = (hours - fullHours) * 60
  const fullMinutes = Math.round(minutes)
  return fullHours > 0 ? `${fullHours}h ${fullMinutes}min` : `${fullMinutes}min`
}
