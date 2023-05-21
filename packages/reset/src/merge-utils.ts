import { SystemStyleObject } from '@pandacss/types'

export const mergeObjectsByKey = (
  arr: {
    [x: string]: SystemStyleObject
  }[],
) => {
  const mergedObj: Record<string, SystemStyleObject> = {}

  arr.forEach((obj) => {
    const key = Object.keys(obj)[0]
    const value = obj[key]

    if (mergedObj.hasOwnProperty(key)) {
      mergedObj[key] = { ...mergedObj[key], ...value } as SystemStyleObject
    } else {
      mergedObj[key] = value
    }
  })

  const mergedArray = Object.entries(mergedObj).map(([key, value]) => ({
    [key]: value,
  }))

  return mergedArray
}

export const mergeObjectsByExtension = (
  arr: {
    [x: string]: SystemStyleObject
  }[],
) => {
  const mergedObj: Record<string, SystemStyleObject> = {}

  arr.forEach((obj) => {
    const keys = Object.keys(obj)
    keys.forEach((key) => {
      const existingKeys = Object.keys(mergedObj)
      const matchingKey = existingKeys.find((existingKey) => key.startsWith(existingKey))

      if (matchingKey) {
        const newKey = key.replace(matchingKey, '&')
        mergedObj[matchingKey] = {
          ...mergedObj[matchingKey],
          [newKey]: obj[key],
        } as SystemStyleObject
      } else {
        mergedObj[key] = obj[key]
      }
    })
  })

  return mergedObj
}
