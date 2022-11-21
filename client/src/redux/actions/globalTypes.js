export const GLOBALTYPES = {
  AUTH: 'AUTH',
  ALERT: 'ALERT',
  THEME: 'THEME'
}

export const EditData = (data, id, post) => {
  const newData = data.map(item => 
      (item._id === id ? post : item)
  )
  return newData;
}