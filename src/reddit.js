const about = async user => {
  const res = await fetch(`https://www.reddit.com/user/${user}/about.json`)
  const payload = await res.json()
  return payload.data
}

export default { about }
