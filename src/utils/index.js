export const formatDate = (date) => {
  const d = date.split('-')
  const monthes = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]

  return `${monthes[+d[1] - 1]} ${d[2]}, ${d[0]}`
}

export function useQuery() {
  return new URLSearchParams(window.location.search)
}
