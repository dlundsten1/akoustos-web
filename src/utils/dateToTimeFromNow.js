const dateToTimeFromNow = date => {
  const minute = 60 * 1000
  const hour = 60 * 60 * 1000
  const day = 24 * hour
  const diff = new Date().getTime() - date.getTime()
  const minutes = minute * 5
  const hours = hour * 2

  if (diff < minutes) {
    return 'Few minutes ago'
  }

  if (diff < hour) {
    const minutesAgo = Math.floor(diff / minute)
    return `${minutesAgo} minutes ago`
  }

  if (diff >= hour && diff < hours) {
    return '1 hour ago'
  }

  if (diff < day) {
    const hoursAgo = Math.floor((diff / hour) % 60)
    return `${hoursAgo} hours ago`
  }

  if (diff < 2 * day) {
    return 'Yesterday'
  }
  if (diff < 3 * day) {
    return '2 days ago'
  }

  if (diff < 4 * day) {
    return '3 days ago'
  }

  return date.toLocaleDateString('sv-SE')
}

export default dateToTimeFromNow
